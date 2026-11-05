// Serverless Function handler for Vercel / Netlify
// Reads RESEND_API_KEY from environment variables securely without exposing to client

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { recruiterName, companyName, workEmail, opportunityType, subject, message, recipientEmail } = req.body;
  const resendKey = process.env.RESEND_API_KEY || process.env.VITE_RESEND_API_KEY;

  if (!resendKey) {
    return res.status(500).json({ error: 'Server email provider not configured' });
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${resendKey}`,
      },
      body: JSON.stringify({
        from: 'Portfolio Recruiter <onboarding@resend.dev>',
        to: [recipientEmail || 'shaikumarbasha19@gmail.com'],
        reply_to: workEmail,
        subject: `[Portfolio Recruiter Inquiry] ${opportunityType}: ${subject} (${companyName})`,
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color: #111; line-height: 1.6; max-width: 600px;">
            <h2 style="color: #0d0f14; border-bottom: 2px solid #b8f34a; padding-bottom: 8px;">New Recruiter Inquiry</h2>
            <p><strong>Recruiter:</strong> ${recruiterName}</p>
            <p><strong>Company / Organization:</strong> ${companyName}</p>
            <p><strong>Work Email:</strong> <a href="mailto:${workEmail}">${workEmail}</a></p>
            <p><strong>Opportunity Type:</strong> ${opportunityType}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <div style="background: #f4f6fa; padding: 16px; border-radius: 8px; margin-top: 16px; border-left: 4px solid #0d0f14;">
              <h4 style="margin-top: 0;">Message:</h4>
              <p style="white-space: pre-wrap; margin-bottom: 0;">${message}</p>
            </div>
            <p style="margin-top: 24px; font-size: 12px; color: #666;">Delivered via Shaik Umar Basha Portfolio Gateway</p>
          </div>
        `,
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      return res.status(502).json({ error: 'Failed to send email via provider', details: err });
    }

    const data = await response.json();
    return res.status(200).json({ success: true, id: data.id });
  } catch (err: any) {
    return res.status(500).json({ error: 'Internal server error', details: err.message });
  }
}
