import { NextResponse } from "next/server";
import * as nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json();

    if (!name || !email) {
      return NextResponse.json(
        { success: false, message: "Name and email are required" },
        { status: 400 }
      );
    }

    // Create transporter using SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT) || 465,
      secure: process.env.EMAIL_SECURE === "true", // true for 465
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email content for Admin
    const adminMailOptions = {
      from: `"Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: `New contact form submission from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone || "-"}
Message:
${message || "-"}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "-"}</p>
        <p><strong>Message:</strong></p>
        <p>${message || "-"}</p>
      `,
    };

    // Email content for User
    const userMailOptions = {
      from: `"CodeIT Pvt. Ltd." <${process.env.EMAIL_USER}>`,
      to: email, // Send to the user who filled the form
      subject: `We've received your message!`,
      html: `
        <h2>Thank You, ${name}!</h2>
        <p>We have successfully received your message and will get back to you as soon as possible.</p>
        <p><strong>Here is a copy of your submission:</strong></p>
        <blockquote style="border-left: 2px solid #ccc; padding-left: 1em; margin-left: 1em;">
          <p><strong>Message:</strong></p>
          <p>${message || "-"}</p>
        </blockquote>
      `,
    };

    // Send both emails
    await transporter.sendMail(adminMailOptions); // Send to admin
    await transporter.sendMail(userMailOptions); // Send to user

    return NextResponse.json(
      { success: true, message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send email" },
      { status: 500 }
    );
  }
}
