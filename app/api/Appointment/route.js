import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { fullName,
      email,
      CompanyName,
      CompanyType,
      Designation,
      ddlcountry,
      txtwebsite,
      txtphone,
      Timezone,
      AppointmentDate,
      AppointmentTime,
      Message,
      Plan
  } = await req.json();
  

        //console.log("Hi : " + fullName + '/'  + email + '/' + CompanyName + '/' + CompanyType + '/'  + Designation + '/'  + txtphone + '/'  + ddlcountry + '/' + txtwebsite + '/' + AppointmentDate + '/' + AppointmentTime + '/' + Message + '/' + Timezone + '/')

    // Validation
    // if (!fullName || !email || !CompanyName || !CompanyType || !Designation || !txtphone || !ddlcountry || !txtwebsite || !AppointmentDate || !AppointmentTime || !Message || !Timezone) {
    //   return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
      
    // }

    

    // Setup transporter with Gmail + App Password
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "contact@eximtradedata.com",   // e.g. support@gtdservice.com
        pass:  "fmdn jlsa ifhi onuz",   // app password from Gmail
      },
    });

    // Email to your company
    const companyMailOptions = {
      from: "contact@eximtradedata.com",
      to: "enquiry@eximtradedata.com",
      subject: "New Appointment Scheduled",
      html: `
  <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; padding: 20px;">
    <h2 style="color: #004aad;">🚀 New Appointment Scheduled</h2>
    <p><strong>Name:</strong> ${fullName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Company Name:</strong> ${CompanyName}</p>
    <p><strong>Company Type:</strong> ${CompanyType}</p>
    <p><strong>Designation:</strong> ${Designation}</p>
    <p><strong>Country:</strong> ${ddlcountry}</p>
    <p><strong>Website:</strong> ${txtwebsite}</p>
    <p><strong>Phone:</strong> ${txtphone}</p>
    <p><strong>Timezone:</strong> ${Timezone}</p>
    <p><strong>Appointment Date:</strong> ${AppointmentDate}</p>
    <p><strong>Appointment Time:</strong> ${AppointmentTime}</p>
    <p><strong>Message:</strong> ${Message}</p>
    <p><strong>Plan:</strong> ${Plan}</p>
    <hr style="margin: 30px 0;"/>
    <p style="font-size: 12px; color: #888;">This enquiry was submitted from theExim Trade Data website.</p>
  </div>
  `,
    };

  

    // Email to the user
    const userMailOptions = {
      from: "contact@eximtradedata.com",
      to: email,
      subject:  `Your Exim Trade Data  Appointment Confirmation`,
      html: `
 <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; padding: 20px;">
  <h2 style="color: #004aad;">Hi ${fullName},</h2>
    <p>Thank you for scheduling an appointment with <strong>Exim Trade Data</strong>. Here are your appointment details:</p>
    <p><strong>📍 Location:</strong> Online - Meeting link will be shared before the session</p>
  </div>
  <p>We're looking forward to our meeting. If you need to reschedule or have any questions, please reply to this email.</p>
    <p>If you have any urgent questions, feel free to reply to this email.</p>

    <p style="margin-top: 30px;">Warm regards,<br><strong>The Exim Trade Data Team</strong></p>
    <img src="https://gtdservice.com/images/logo.svg" alt="Exim Trade Data Logo" style="margin-top: 10px; width: 120px; height: auto;" />
    
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
