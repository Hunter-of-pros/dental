import express from 'express';
import cors from 'cors';
import { Resend } from 'resend';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 5001;

// Initialize Resend
// In a real app, you would pass your actual API key here or in .env
// For demonstration, we use a placeholder or check if it exists
const resendApiKey = process.env.RESEND_API_KEY || 're_placeholder_secret';
const resend = new Resend(resendApiKey);

app.use(cors());
app.use(express.json());

import fs from 'fs/promises';
import path from 'path';

app.post('/api/book', async (req, res) => {
  try {
    const { name, email, phone, date, treatment, clinic } = req.body;
    console.log('Received booking request:', req.body);

    // Save locally
    const file = path.join(process.cwd(), 'appointments.json');
    let appointments = [];
    try {
      const existing = await fs.readFile(file, 'utf-8');
      appointments = JSON.parse(existing);
    } catch (e) {
      // file doesn't exist yet
    }
    
    const newAppointment = { ...req.body, timestamp: new Date().toISOString() };
    appointments.push(newAppointment);
    await fs.writeFile(file, JSON.stringify(appointments, null, 2));

    // 1. Respond immediately to avoid client delay!
    res.status(200).json({ success: true, message: 'Appointment booked successfully!' });

    // 2. Send emails in the background
    (async () => {
      try {
        const data = await resend.emails.send({
          from: 'dental <onboarding@resend.dev>',
          to: ['vikasm8660@gmail.com'], 
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
        console.log('Clinic Owner Email Response:', data);

        try {
          // Attempt to email the patient as well.
          if (email && email !== 'vikasm8660@gmail.com') {
            await resend.emails.send({
              from: 'dental <onboarding@resend.dev>',
              to: [email],
              subject: `We received your booking request, ${name}!`,
              html: `<div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
                      <h2>Thanks for choosing us, ${name}!</h2>
                      <p>We have successfully received your request for an appointment on <strong>${date}</strong>.</p>
                      <p>Our scheduling team will call you at <strong>${phone}</strong> shortly to confirm the exact time of your visit.</p>
                      <br/>
                      <p>Best Regards,</p>
                      <p>Dental Clinic Team</p>
                    </div>`
            });
          }
        } catch (patientErr) {
          console.log("Could not send patient email (Resend Sandbox Restriction):", patientErr.message);
        }

      } catch (emailError) {
        console.error("Resend Error:", emailError);
      }
    })();

  } catch (error) {
    console.error('Error processing booking:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Backend server running on http://localhost:${port}`);
});
