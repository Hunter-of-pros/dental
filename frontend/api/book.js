/* global process */
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, phone, date, treatment, clinic } = req.body;
    console.log('Received booking request:', req.body);

    // Send emails BEFORE responding so Vercel doesn't kill the function early
    try {
      await resend.emails.send({
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

      if (email && email !== 'vikasm8660@gmail.com') {
        try {
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
        } catch (patientErr) {
          console.log("Could not send patient email (Resend Sandbox Restriction):", patientErr.message);
        }
      }
    } catch (emailError) {
      console.error("Resend Error:", emailError);
    }

    // Now respond after emails are sent
    res.status(200).json({ success: true, message: 'Appointment booked successfully!' });

  } catch (error) {
    console.error('Error processing booking:', error);
    if (!res.headersSent) {
      res.status(500).json({ success: false, error: error.message });
    }
  }
}
