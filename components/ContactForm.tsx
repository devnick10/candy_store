'use client';
import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { FormEvent } from 'react';
import Success from './Success';
import PolicyBox from './PolicyBox';
import sendMail from '@/actions/sendMail';
import { cn, IFormData } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

export default function ContactForm() {
  const toastPosstion = cn('top-0  flex fixed md:max-w-[420px] md:top-4 md:right-4');
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [submitStatus, setSubmitStatus] = useState<boolean>(false);
  const [agreedToPrivacy, setAgreedToPrivacy] = useState(false);
  const { toast } = useToast();

  const [formData, setFormData] = useState<IFormData>({
    fullname: '',
    email: '',
    subject: 'General Inquiry',
    phone: '',
    message: '',
  });

  const handleRecaptchaChange = (token: string | null) => {
    setRecaptchaToken(token);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!recaptchaToken) {
      toast({
        className: `${toastPosstion}}`,
        description: 'Please complete the reCAPTCHA!',
        variant: 'destructive',
      });
      return;
    }

    try {
      const { success, message } = await sendMail(formData, recaptchaToken);
      if (!success) {
        toast({
          className: `${toastPosstion}}`,
          description: message,
          variant: 'destructive',
        });
      }
      setSubmitStatus(true);
      setFormData({ phone: '', email: '', fullname: '', message: '', subject: 'General Inquiry' });
    } catch (error) {
      console.error(error);
      toast({
        description: 'Your message has been not sent internal server issue.',
      });
    }
  };

  if (!process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY) {
    return null;
  }
  return (
    <>
      <div className="order-1 lg:order-2">
        <div className="rounded-xl border border-amber-100 bg-white p-8 shadow-md">
          <h3 className="mb-6 text-2xl font-bold text-amber-600">Send Us a Message</h3>

          <form onSubmit={handleSubmit} id="contact-form" className="space-y-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="fullname" className="mb-2 block font-medium text-neutral-700">
                  Full Name
                </label>
                <input
                  value={formData.fullname}
                  onChange={handleChange}
                  type="text"
                  id="fullname"
                  name="fullname"
                  className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 transition-colors focus:border-amber-500 focus:ring-2 focus:ring-amber-500"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block font-medium text-neutral-700">
                  Email
                </label>
                <input
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  id="email"
                  name="email"
                  className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 transition-colors focus:border-amber-500 focus:ring-2 focus:ring-amber-500"
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="mb-2 block font-medium text-neutral-700">
                Phone Number
              </label>
              <input
                value={formData.phone}
                onChange={handleChange}
                type="tel"
                id="phone"
                name="phone"
                className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 transition-colors focus:border-amber-500 focus:ring-2 focus:ring-amber-500"
                placeholder="Your phone number"
              />
            </div>

            <div>
              <label htmlFor="subject" className="mb-2 block font-medium text-neutral-700">
                Subject
              </label>
              <select
                value={formData.subject}
                onChange={handleChange}
                id="subject"
                name="subject"
                className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 transition-colors focus:border-amber-500 focus:ring-2 focus:ring-amber-500"
                required
              >
                <option value="" disabled defaultValue={'General Inquiry'}>
                  Select a subject
                </option>
                <option value="General Inquiry">General Inquiry</option>
                <option value="Bulk Order">Bulk Order</option>
                <option value="Distributor Inquiry">Distributor Inquiry</option>
                <option value="Product Feedback">Product Feedback</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block font-medium text-neutral-700">
                Message
              </label>
              <textarea
                value={formData.message}
                onChange={handleChange}
                id="message"
                name="message"
                rows={4}
                className="w-full resize-y rounded-lg border border-neutral-300 bg-white px-4 py-3 transition-colors focus:border-amber-500 focus:ring-2 focus:ring-amber-500"
                placeholder="Your message here..."
                required
              ></textarea>
            </div>

            <div className="flex items-start">
              <div className="flex h-5 items-center">
                <input
                  id="privacy"
                  name="privacy"
                  type="checkbox"
                  className="focus:ring-3 h-4 w-4 rounded border border-neutral-300 bg-neutral-50 focus:ring-amber-500"
                  required
                />
              </div>
              <label htmlFor="privacy" className="ml-2 text-sm text-neutral-600">
                I agree to the{' '}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setAgreedToPrivacy(true);
                  }}
                  type="button"
                  id="privacy-policy-btn"
                  className="text-amber-500 hover:text-amber-600 focus:outline-none"
                >
                  privacy policy
                </button>{' '}
                and consent to the processing of my data.
              </label>
            </div>

            {/* CATPCHA */}
            <ReCAPTCHA
              className="relative w-full"
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
              onChange={handleRecaptchaChange}
            />

            <div>
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-amber-500 px-8 py-3 text-white transition-colors duration-300 hover:bg-amber-600 md:w-auto"
              >
                <span>Send Message</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
      <Success setSuccess={setSubmitStatus} success={submitStatus} />
      <PolicyBox setStatus={setAgreedToPrivacy} status={agreedToPrivacy} />
    </>
  );
}
