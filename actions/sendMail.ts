'use server';
import { emailTemplate, IFormData } from '@/lib/utils';
import nodemailer from 'nodemailer';

function checkCredentials() {
  const ownerEmail = process.env.OWNER_EMAIL;
  const ownerEmailAppPass = process.env.OWNER_EMAIL_APP_PASSWORD;
  const recaptchaSecretKey = process.env.RECAPTCHA_SECRET_KEY;
  if (!ownerEmail || !ownerEmailAppPass || !recaptchaSecretKey) {
    throw new Error('Envoriment variable not accessible, plz configure it');
  }
}

export default async function sendMail(data: IFormData, token: string) {
  checkCredentials();
  if (!data || !token) {
    return {
      success: false,
      message: 'Invalid form data or token.',
    };
  }

  async function verifyCaptchaToken() {
    const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`;

    const recaptchaResponse = await fetch(verificationUrl, { method: 'POST' });
    const resdata = await recaptchaResponse.json();
    if (!resdata.success) {
      return false;
    }
    return true;
  }

  const verified = await verifyCaptchaToken();

  if (!verified) {
    return {
      success: false,
      message: 'Invalid token.',
    };
  }

  const { fullname, email, message, subject } = data;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.OWNER_EMAIL,
      pass: process.env.OWNER_EMAIL_APP_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: `"${fullname}" <${email}>`,
      to: process.env.OWNER_EMAIL,
      subject: `New Contact Form Submission from ${subject}`,
      text: message,
      html: emailTemplate(data),
    });

    return { success: true, message: 'Message sent successfully!' };
  } catch (error) {
    console.error(error);
    return { success: false, message: 'Failed to send email.' };
  }
}
