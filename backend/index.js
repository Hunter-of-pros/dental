import express from 'express';
import cors from 'cors';
import { Resend } from 'resend';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Initialize Resend
// In a real app, you would pass your actual API key here or in .env
// For demonstration, we use a placeholder or check if it exists
const resendApiKey = process.env.RESEND_API_KEY || 're_placeholder_secret';
const resend = new Resend(resendApiKey);

app.use(cors());
app.use(express.json());

app.post('/api/book', async (req, res) => {
  try {
    const { name, email, phone, date, treatment, clinic } = req.body;

    console.log('Received booking request:', req.body);

    const data = await resend.emails.send({
      from: 'Clove Dental <noreply@clovedental.example.com>',
      to: [email, 'clinic@clovedental.example.com'], // In reality, this would be the clinic owner's email
      subject: `New Appointment Request - ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>New Appointment Confirmed</h2>
          <p><strong>Patient Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Date & Time:</strong> ${date}</p>
          <p><strong>Treatment Requested:</strong> ${treatment}</p>
          <p><strong>Preferred Clinic:</strong> ${clinic}</p>
          <hr />
          <p>Our team will contact you shortly to confirm the exact time.</p>
        </div>
      `
    });

    res.status(200).json({ success: true, message: 'Appointment booked successfully!', data });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Backend server running on http://localhost:${port}`);
});
