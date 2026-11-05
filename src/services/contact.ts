import { ContactFormData } from '../types/portfolio';
import { PERSONAL_INFO } from '../data/portfolioData';

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

export function validateContactForm(data: ContactFormData): ValidationResult {
  const errors: Record<string, string> = {};

  if (!data.recruiterName || data.recruiterName.trim().length < 2) {
    errors.recruiterName = "Please enter your full name (minimum 2 characters).";
  }

  if (!data.companyName || data.companyName.trim().length < 2) {
    errors.companyName = "Please enter your organization or company name.";
  }

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!data.workEmail || !emailRegex.test(data.workEmail.trim())) {
    errors.workEmail = "Please provide a valid work or corporate email address.";
  }

  if (!data.subject || data.subject.trim().length < 4) {
    errors.subject = "Please provide a concise subject or role title.";
  }

  if (!data.message || data.message.trim().length < 15) {
    errors.message = "Please include a message detailing the opportunity or query (minimum 15 characters).";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

export interface SendMessageResponse {
  success: boolean;
  message: string;
  usedFallback?: boolean;
  mailtoUrl?: string;
}

export async function submitContactInquiry(data: ContactFormData): Promise<SendMessageResponse> {
  // 1. Anti-spam honeypot check
  if (data.honeypot && data.honeypot.trim() !== '') {
    // Silent fail for bots
    return {
      success: true,
      message: "Inquiry received. Thank you for reaching out.",
    };
  }

  // 2. Client-side rate limiting (prevent repeated clicks within 30 seconds)
  const lastSubmitKey = 'last_contact_submission_ts';
  const lastSubmit = localStorage.getItem(lastSubmitKey);
  const now = Date.now();
  if (lastSubmit && now - parseInt(lastSubmit, 10) < 30 * 1000) {
    return {
      success: false,
      message: "Please wait 30 seconds before sending another inquiry.",
    };
  }

  const recipientEmail = import.meta.env.VITE_CONTACT_EMAIL || PERSONAL_INFO.email;
  const resendApiKey = import.meta.env.VITE_RESEND_API_KEY;

  // 3. If a backend API endpoint exists (e.g. /api/contact serverless function) or Resend API key is configured
  if (resendApiKey) {
    try {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${resendApiKey}`,
        },
        body: JSON.stringify({
          from: 'Portfolio Recruiter <onboarding@resend.dev>',
          to: [recipientEmail],
          reply_to: data.workEmail,
          subject: `[Portfolio Inquiry] ${data.opportunityType}: ${data.subject} (${data.companyName})`,
          html: `
            <h2>New Hiring / Contact Inquiry</h2>
            <p><strong>Recruiter:</strong> ${data.recruiterName}</p>
            <p><strong>Company:</strong> ${data.companyName}</p>
            <p><strong>Work Email:</strong> <a href="mailto:${data.workEmail}">${data.workEmail}</a></p>
            <p><strong>Opportunity Type:</strong> ${data.opportunityType}</p>
            <p><strong>Subject:</strong> ${data.subject}</p>
            <hr />
            <h3>Message</h3>
            <p style="white-space: pre-wrap;">${data.message}</p>
          `,
        }),
      });

      if (response.ok) {
        localStorage.setItem(lastSubmitKey, now.toString());
        return {
          success: true,
          message: "Your inquiry has been successfully sent. Umar Basha will review it and reply promptly.",
        };
      }
    } catch (e) {
      console.warn("Direct Resend dispatch encountered error, falling back to secure mailto channel:", e);
    }
  }

  // Check if a local serverless proxy route `/api/contact` responds
  try {
    const apiRes = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...data, recipientEmail }),
    });

    if (apiRes.ok) {
      localStorage.setItem(lastSubmitKey, now.toString());
      return {
        success: true,
        message: "Your message has been securely delivered. Thank you!",
      };
    }
  } catch {
    // Backend serverless endpoint not running in local static preview mode
  }

  // 4. Guaranteed mailto fallback
  const mailtoSubject = encodeURIComponent(`[Hiring Inquiry - ${data.companyName}] ${data.subject}`);
  const mailtoBody = encodeURIComponent(
    `Hello Umar,\n\nI am contacting you regarding an opportunity at ${data.companyName}.\n\n` +
    `Recruiter Name: ${data.recruiterName}\n` +
    `Company: ${data.companyName}\n` +
    `Email: ${data.workEmail}\n` +
    `Role / Opportunity: ${data.opportunityType}\n\n` +
    `Message:\n${data.message}\n\n` +
    `Best regards,\n${data.recruiterName}`
  );
  const mailtoUrl = `mailto:${recipientEmail}?subject=${mailtoSubject}&body=${mailtoBody}`;

  localStorage.setItem(lastSubmitKey, now.toString());
  return {
    success: true,
    usedFallback: true,
    mailtoUrl,
    message: "Inquiry generated. Click below or open your mail client to dispatch directly to Umar Basha's inbox.",
  };
}
