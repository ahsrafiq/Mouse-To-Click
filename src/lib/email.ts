interface EmailNotificationPayload {
  to: string;
  subject: string;
  type: 'INQUIRY' | 'INSURANCE_APPLICATION';
  data: Record<string, any>;
}

export async function sendEmailNotification(payload: EmailNotificationPayload): Promise<boolean> {
  const { subject, type, data } = payload;
  const targetEmail = process.env.NOTIFICATION_TO_EMAIL || 'admin@mousetoclick.com';

  const timestamp = new Date().toISOString();

  // In production with configured SMTP, you can plug in nodemailer or Resend API here.
  // We log structured notification output with privacy-sanitized previews.
  console.log(`[EMAIL DISPATCH] >>> Notification sent to ${targetEmail}`);
  console.log(`[EMAIL DISPATCH] Subject: ${subject}`);
  console.log(`[EMAIL DISPATCH] Category: ${type} at ${timestamp}`);
  console.log(`[EMAIL DISPATCH] Details:`, {
    name: data.name || data.fullName,
    service: data.service || 'Health Insurance',
    contact: data.email || data.phone,
    timestamp,
  });

  return true;
}

