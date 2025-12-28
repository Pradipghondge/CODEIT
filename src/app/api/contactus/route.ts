import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json();

    // 1. Basic Validation
    if (!name || !email) {
      return NextResponse.json(
        { success: false, message: "Name and email are required" },
        { status: 400 }
      );
    }

    // 2. Nodemailer Transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: true, 
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 3. Admin Notification Template (Premium Dark Theme)
    const adminMail = {
      from: `"CODEIT System" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: `💎 New Project Inquiry: ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: auto; border: 1px solid #eee; padding: 20px;">
          <h2 style="color: #0F4F3F; border-bottom: 2px solid #0F4F3F; padding-bottom: 10px;">New Lead Generated</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
          <div style="background: #f9f9f9; padding: 15px; border-radius: 10px; margin-top: 20px;">
            <p style="font-weight: bold; color: #0F4F3F; margin-top: 0;">Message:</p>
            <p style="color: #444; line-height: 1.6;">${message || "No project overview provided."}</p>
          </div>
          <p style="font-size: 10px; color: #aaa; margin-top: 30px;">Sent via CODEIT Infotech Architectural Gateway</p>
        </div>
      `,
    };

    // 4. User Confirmation Template (Luxurious Emerald Design)
    const userMail = {
      from: `"CODEIT Infotech" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Your Inquiry with CODEIT Infotech",
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: auto; text-align: center; padding: 40px 20px; border: 1px solid #f0f0f0; border-radius: 30px;">
          <div style="color: #0F4F3F; font-size: 24px; font-weight: 900; margin-bottom: 20px;">CODEIT.</div>
          <h1 style="color: #111; font-size: 28px; letter-spacing: -1px;">Architecting the Future.</h1>
          <p style="color: #666; font-size: 16px; line-height: 1.6;">Hello ${name}, thank you for reaching out. Your project inquiry has been successfully encrypted and transmitted to our engineering team.</p>
          <div style="margin: 30px 0; padding: 20px; border-top: 1px solid #eee; border-bottom: 1px solid #eee; text-align: left;">
            <p style="font-size: 12px; color: #999; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 5px;">Your Submission</p>
            <p style="color: #444; font-style: italic;">"${message || "Consultation Request"}"</p>
          </div>
          <p style="color: #0F4F3F; font-weight: bold;">One of our solution architects will contact you shortly.</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 40px 0;" />
          <p style="font-size: 12px; color: #bbb;">© 2025 CODEIT Pvt. Ltd. | Elite Engineering & Design</p>
        </div>
      `,
    };

    // 5. PARALLEL EXECUTION (Fixes Timeout Issues)
    // We trigger both emails at once to reduce total wait time.
    await Promise.all([
      transporter.sendMail(adminMail),
      transporter.sendMail(userMail)
    ]);

    return NextResponse.json(
      { success: true, message: "Email sent successfully" },
      { status: 200 }
    );

  } catch (error) {
    console.error("❌ Email Error:", error);
    return NextResponse.json(
      { success: false, message: "Transmission failed. Check SMTP configuration." },
      { status: 500 }
    );
  }
}