import { MailingListSignUp } from "@/app/components/emails/mailing-list-sign-up";
import { NextRequest } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { email, firstName, lastName } = await req.json();
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
