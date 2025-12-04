import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { to, subject, message } = req.body;

    // Validate inputs
    if (!to || !subject || !message) {
      return res.status(400).json({ error: 'Missing fields' });
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // true for 465, false for 587
      auth: {
        user: "contact@eximtradedata.com",
        pass: "!AmTrade@123",
      },
    });

    await transporter.sendMail({
      from: `"Sanjeev's App" <${"contact@eximtradedata.com"}>`,
      to,
      subject,
      text: message,
    });

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Email send error:', error);
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
}
