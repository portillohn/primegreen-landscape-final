import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY || 're_123456789'); // Fallback to avoid build crashing if missing
const contactEmail = process.env.CONTACT_EMAIL || 'contact@primegreenlandscape.com';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, address, city, zip, lotSize, service, source, notes } = body;

    // Validate essential fields
    if (!name || !email || !phone || !address || !city || !zip || !lotSize || !service) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const htmlContent = `
      <div style="font-family: sans-serif; max-w: 600px; padding: 20px; border: 1px solid #eee; border-radius: 8px;">
        <h2 style="color: #1A4D1E; margin-top: 0;">🌿 New Quote Request — Prime Green Landscape LLC</h2>
        <p style="color: #666; font-size: 14px;">A new quote request has been submitted through your website.</p>
        <hr style="border-top: 1px solid #eee; margin: 20px 0;" />
        
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 8px 0; border-bottom: 1px solid #f9f9f9;"><strong>Name:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #f9f9f9;">${name}</td></tr>
          <tr><td style="padding: 8px 0; border-bottom: 1px solid #f9f9f9;"><strong>Email:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #f9f9f9;">${email}</td></tr>
          <tr><td style="padding: 8px 0; border-bottom: 1px solid #f9f9f9;"><strong>Phone:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #f9f9f9;">${phone}</td></tr>
          <tr><td style="padding: 8px 0; border-bottom: 1px solid #f9f9f9;"><strong>Address:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #f9f9f9;">${address}, ${city} ${zip}</td></tr>
          <tr><td style="padding: 8px 0; border-bottom: 1px solid #f9f9f9;"><strong>Lot Size:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #f9f9f9;">${lotSize}</td></tr>
          <tr><td style="padding: 8px 0; border-bottom: 1px solid #f9f9f9;"><strong>Service Type:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #f9f9f9;">${service}</td></tr>
          <tr><td style="padding: 8px 0; border-bottom: 1px solid #f9f9f9;"><strong>Heard about us:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #f9f9f9;">${source || 'Not specified'}</td></tr>
        </table>
        
        <div style="background-color: #f9f9f9; padding: 15px; margin-top: 20px; border-radius: 5px;">
          <strong>Additional Notes:</strong>
          <p style="margin-bottom: 0; white-space: pre-wrap;">${notes || 'None'}</p>
        </div>

        <hr style="border-top: 1px solid #eee; margin: 20px 0;" />
        <p style="font-size: 12px; color: #999;">
          <em>Submitted: ${new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })} Eastern Time</em>
        </p>
        <p style="color: #ff3333; font-weight: bold; font-size: 14px;">⏱ Respond within 2 hours to maximize conversion!</p>
      </div>
    `;

    const data = await resend.emails.send({
      from: 'Prime Green Quotes <onboarding@resend.dev>',
      to: [contactEmail],
      subject: `🌿 New Quote Request — ${name} in ${city}`,
      html: htmlContent,
      replyTo: email,
    });

    if (data.error) {
      console.error("Resend API Error:", data.error);
      return NextResponse.json({ error: data.error.message || 'Failed to send' }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Contact API Server Error:", error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
