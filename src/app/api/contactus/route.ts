import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json();

    if (!name || !email) {
      return NextResponse.json(
        { success: false, message: "Name and email are required" },
        { status: 400 }
      );
    }

    // Nodemailer Transporter (GoDaddy SMTP)
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST, // smtpout.secureserver.net
      port: Number(process.env.EMAIL_PORT), // 465
      secure: true, // SSL/TLS
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 🚀 Email to Admin (You/Company)
    const adminMail = {
      from: `"CODEIT Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: `📩 New Contact Form Submission - ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not Provided"}</p>
        <p><strong>Message:</strong></p>
        <p>${message || "No additional message"}</p>
        <br/>
        <hr/>
        <p style="font-size:12px;color:#777;">This email was sent from the CODEIT Infotech website.</p>
      `,
    };

    // 🎉 Email to User (Confirmation)
    const userMail = {
      from: `"CODEIT Pvt. Ltd." <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "We Received Your Message ✔️",
      html: `
        <h2>Thank You, ${name}! 👋</h2>
        <p>We have received your message and will get back to you shortly.</p>
        <p>Here’s a copy of your submission:</p>
        <blockquote style="border-left:3px solid #0F4F3F;padding-left:10px;margin-left:10px;">
          <p>${message || "No message provided"}</p>
        </blockquote>
        <p>📞 Our Team Will Contact You Soon.</p>
        <br/>
        <strong>Regards,<br/>CODEIT Pvt. Ltd.</strong>
      `,
    };

    await transporter.sendMail(adminMail);
    await transporter.sendMail(userMail);

    return NextResponse.json(
      { success: true, message: "Email sent successfully" },
      { status: 200 }
    );

  } catch (error) {
    console.error("❌ Email Error:", error);
    return NextResponse.json(
      { success: false, message: "Email sending failed. Check SMTP details." },
      { status: 500 }
    );
  }
}
