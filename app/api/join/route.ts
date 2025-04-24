import { MailingListSignUp } from "@/app/components/emails/mailing-list-sign-up";
import { isRateLimited } from "@/app/helpers/rate-limiter";
import { NextRequest } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const AUDIENCE_ID = "dedbf23e-41ce-4344-9f65-233a18c168a5";

export async function POST(req: NextRequest) {
  // Rate limit
  const forwardedFor = req.headers.get("x-forwarded-for");
  const ip = forwardedFor?.split(",")[0]?.trim() || "unknown";

  if (isRateLimited(ip)) {
    return new Response(JSON.stringify({ error: "Rate limit exceeded" }), {
      status: 429,
    });
  }

  const { email, firstName, lastName, token } = await req.json();

  // Verify CloudFlare Turnstile
  const turnstileRes = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret: process.env.TURNSTILE_SECRET_KEY!,
        response: token,
      }),
    }
  );

  const turnstileData = await turnstileRes.json();

  if (!turnstileData.success) {
    return new Response(
      JSON.stringify({ error: "Turnstile verification failed" }),
      {
        status: 403,
      }
    );
  }

  // Fetch audience
  const audienceRes = await resend.contacts.list({
    audienceId: AUDIENCE_ID,
  });

  const contactList = audienceRes?.data?.data;
  const existing = contactList?.find((c) => c.email === email);

  if (existing) {
    return new Response(JSON.stringify({ error: "You have already joined!" }), {
      status: 409,
    });
  }

  // Process new mailing list join
  try {
    const { data, error } = await resend.emails.send({
      from: "VETAssure <nathan@vetassure.com.au>",
      to: [email],
      subject: "Welcome to VETAssure - AI Powered RTO Compliance",
      react: MailingListSignUp({ firstName: firstName }),
    });

    await resend.contacts.create({
      email: email,
      firstName: firstName,
      lastName: lastName,
      unsubscribed: false,
      audienceId: "dedbf23e-41ce-4344-9f65-233a18c168a5",
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
