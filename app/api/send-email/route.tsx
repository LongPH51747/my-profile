import { log } from "console";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    console.log("vao be api email");
    const body = await request.json();

    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, msg: "Missing required fields." },
        { status: 400 }
      );
    }

    // Transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASS,
      },
    });

    // Mail options
    const mailOptions = {
      from: `"${name}" <${process.env.GMAIL_USER}>`, // Gmail bắt buộc dùng email thật
      replyTo: email,                                 // Đây là email người gửi thật
      to: process.env.MY_GMAIL,
      subject: `Có yêu cầu liên hệ từ trang cá nhân`,
      text: message,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, msg: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error: unknown) {
    const errMsg =
      error instanceof Error ? error.message : "Unknown server error.";

    return NextResponse.json(
      { success: false, msg: errMsg },
      { status: 500 }
    );
  }
}
