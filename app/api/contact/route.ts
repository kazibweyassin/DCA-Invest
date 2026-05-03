import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, email, organisation, message } = await req.json();
    const resendApiKey = process.env.RESEND_API_KEY?.trim();
    const fromEmail = process.env.RESEND_FROM_EMAIL?.trim() || "DCA Invest <onboarding@resend.dev>";

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    if (!resendApiKey) {
      console.error("Contact route config error: RESEND_API_KEY is missing");
      return NextResponse.json(
        { error: "Email service is not configured. Please try again later." },
        { status: 503 }
      );
    }

    // Resend API keys start with "re_" (e.g. re_xxx...).
    // Catch common misconfiguration where DNS/DKIM text is used instead.
    if (!resendApiKey.startsWith("re_")) {
      console.error("Contact route config error: RESEND_API_KEY format appears invalid");
      return NextResponse.json(
        { error: "Email service API key format is invalid." },
        { status: 503 }
      );
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: ["info@diamondcapitalafrica.com"],
        reply_to: email,
        subject: `Investor enquiry from ${name}${organisation ? ` — ${organisation}` : ""}`,
        html: `
          <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#1c1917;">
            <div style="background:#0c0a09;padding:24px 32px;">
              <p style="color:#f59e0b;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;margin:0;">
                Diamond Capital Africa — Investor Advisory
              </p>
            </div>
            <div style="padding:32px;">
              <h2 style="margin:0 0 24px;font-size:20px;color:#1c1917;">New enquiry via invest.diamondcapitalafrica.com</h2>

              <table style="width:100%;border-collapse:collapse;">
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #e7e5e4;color:#78716c;font-size:13px;width:140px;">Name</td>
                  <td style="padding:10px 0;border-bottom:1px solid #e7e5e4;font-size:14px;">${name}</td>
                </tr>
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #e7e5e4;color:#78716c;font-size:13px;">Email</td>
                  <td style="padding:10px 0;border-bottom:1px solid #e7e5e4;font-size:14px;">
                    <a href="mailto:${email}" style="color:#b45309;">${email}</a>
                  </td>
                </tr>
                ${organisation ? `
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #e7e5e4;color:#78716c;font-size:13px;">Organisation</td>
                  <td style="padding:10px 0;border-bottom:1px solid #e7e5e4;font-size:14px;">${organisation}</td>
                </tr>` : ""}
              </table>

              <div style="margin-top:24px;">
                <p style="color:#78716c;font-size:13px;margin:0 0 8px;">Message</p>
                <p style="font-size:14px;line-height:1.7;background:#fafaf9;border-left:3px solid #f59e0b;padding:16px;margin:0;">${message.replace(/\n/g, "<br/>")}</p>
              </div>

              <p style="margin-top:32px;font-size:12px;color:#a8a29e;">
                Reply directly to this email to respond to ${name}.
              </p>
            </div>
          </div>
        `,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error("Resend error:", err);

      if (res.status === 400 || res.status === 401 || res.status === 403) {
        return NextResponse.json(
          { error: "Email service authentication failed." },
          { status: 502 }
        );
      }

      return NextResponse.json({ error: "Failed to send." }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json({ error: "Server error." }, { status: 500 });
  }
}
