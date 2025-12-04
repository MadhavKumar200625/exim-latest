import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
    try {
        const { nname, nemail, nmobile } = await req.json();

        // Validation
        if (!nname || !nemail || !nmobile) {
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
            subject: "Newsletter Exim Trade Data Service",
            html: `
  <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; padding: 20px;">
    <h2 style="color: #004aad;">🚀 New Newsletter Received</h2>
    <p><strong>Name:</strong> ${nname}</p>
    <p><strong>Email:</strong> ${nemail}</p>
    <p><strong>Mobile:</strong> ${nmobile}</p>
    <hr style="margin: 30px 0;"/>
    <p style="font-size: 12px; color: #888;">This enquiry was submitted from the Exim Trade Data Service website.</p>
  </div>
  `,
        };

        // Email to the user
        const userMailOptions = {
            from: "contact@eximtradedata.com",
            to: nemail,
            subject: "Thanks for your interest in Exim Trade Data Service Newsletters!",
            html: `
  <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6; max-width: 600px; margin: auto;">
    <h2 style="color: #1a73e8;">Welcome to <span style="color: #000;">Exim Trade Data</span> 🎉</h2>
    <p>Hi there,</p>
    <p>Thank you for subscribing to <strong>Exim Trade Data</strong>!</p>
    <p>We're excited to have you on board. Here's what you can expect:</p>
    <ul>
      <li>📬 Regular updates on our latest news and releases</li>
      <li>🎁 Exclusive offers and early previews</li>
      <li>💡 Insights, tips, and behind-the-scenes content</li>
    </ul>
    <p>We respect your inbox — no spam, ever. You can unsubscribe at any time.</p>
    <p>If you have any questions, just reply to this email — we’d love to hear from you.</p>
    <br />
    <p>Stay tuned and welcome aboard!</p>
    <p style="margin-top: 30px;">Warm regards,<br /><strong>Exim Trade Data</strong><br /><a href="https://eximtradedata.com" style="color: #1a73e8; text-decoration: none;">eximtradedata.com</a></p>
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
