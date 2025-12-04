import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email,mobile, message, country } = await req.json();

    // Validation
    if (!name || !email || !mobile||  !message || !country) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Setup transporter with Gmail + App Password
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "contact@eximtradedata.com",   // e.g. support@gtdservice.com
        pass: "fmdn jlsa ifhi onuz",   // app password from Gmail
      },
    });

  

    // Email to your company
    const companyMailOptions = {
      from: "contact@eximtradedata.com",
      to: "enquiry@eximtradedata.com",
      subject: "Enquiry Exim Trade Data",
      html: `
  <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; padding: 20px;">
    <h2 style="color: #004aad;">🚀 New Enquiry Received</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>

    <p><strong>Country:</strong> ${country}</p>
    <p><strong>Message:</strong><br>${message}</p>
    <hr style="margin: 30px 0;"/>
    <p style="font-size: 12px; color: #888;">This enquiry was submitted from the Exim Trade Data</p>
  </div>
  `,
    };

    // Email to the user
    const userMailOptions = {
      from: "contact@eximtradedata.com",
      to: email,
      subject: "Thanks for your interest in Exim Trade Data!",
      html: `
  <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; padding: 20px;">
    <h2 style="color: #004aad;">Hi ${name}, 👋</h2>
    <p>Thank you for reaching out to <strong>Exim Trade Data</strong>. We’ve received your enquiry and will get back to you shortly.</p>
    
    <p>If you have any urgent questions, feel free to reply to this email.</p>

    <p style="margin-top: 30px;">Warm regards,<br><strong>The Exim Trade Data Team</strong></p>
    
    <hr style="margin: 30px 0;" />
    <p style="font-size: 12px; color: #888;">This is an automated response. Please don’t reply directly unless needed.</p>
  </div>
  `,
    };

    // Send both emails
    await transporter.sendMail(companyMailOptions);
    await transporter.sendMail(userMailOptions);

    return NextResponse.json({ message: "Emails sent successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Send Email Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
