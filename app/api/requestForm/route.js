import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const {
      name,
       company,
       phone,
      email,
      type,
      country,
      message,
  
      submissionReason
    } = await req.json();


    if (!name || !email || !company || !phone || !country||!message) {
      return NextResponse.json(
        { error: "Missing required fields" }, 
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "contact@eximtradedata.com",
        pass: "fmdn jlsa ifhi onuz"
      },
    });

    const companyMailOptions = {
      from: "contact@eximtradedata.com",
      to: "enquiry@eximtradedata.com",
      subject: "Enquiry Exim Trade Data ",
      html: `
        <h2> Sample Data Request</h2>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Country:</strong> ${country}</p>
    
        <p><strong>Request Type:</strong> ${type}</p>
       
        <p><strong>Message:</strong><br>${message || 'No additional message'}</p>
      `,
    };

    const userMailOptions = {
      from: "contact@eximtradedata.com",
      to: email,
      subject: "Thanks for your enquiry for customized data request!",
      html: `<p>Hi ${name},</p>
        <p>We've received your request from our database.</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Country:</strong> ${country}</p>
    
        <p><strong>Request Type:</strong> ${type}</p>
       
        <p><strong>Message:</strong><br>${message || 'No additional message'}</p>`
    };

    await transporter.sendMail(companyMailOptions);
    await transporter.sendMail(userMailOptions);

    return NextResponse.json({ message: "Request submitted successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Send Email Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

