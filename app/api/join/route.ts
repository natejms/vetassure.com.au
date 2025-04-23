import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  // TODO: Save to Mailerlite
  console.log("New signup:", email);

  return NextResponse.json({ success: true });
}
