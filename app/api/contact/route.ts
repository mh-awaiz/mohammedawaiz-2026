import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email and message are required." },
        { status: 400 }
      );
    }

    const resendKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL || "awaizshamshad@gmail.com";

    // If a Resend API key is configured, send the email for real.
    // Get a key at https://resend.com and add RESEND_API_KEY to your
    // environment (.env.local) to activate this.
    if (resendKey) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Portfolio Contact <onboarding@resend.dev>",
          to: [toEmail],
          reply_to: email,
          subject: subject ? `[Portfolio] ${subject}` : `[Portfolio] New message from ${name}`,
          text: `From: ${name} <${email}>\n\n${message}`,
        }),
      });

      if (!res.ok) {
        const detail = await res.text();
        console.error("Resend error:", detail);
        return NextResponse.json(
          { error: "Message could not be sent. Please try again shortly." },
          { status: 502 }
        );
      }
    } else {
      // No email provider configured yet — log so it's visible during development.
      console.log("Contact form submission (no RESEND_API_KEY set):", {
        name,
        email,
        subject,
        message,
      });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
