"use client"
import React, { useState } from 'react'
import ReCAPTCHA from "react-google-recaptcha";
import { FormEvent } from "react"
import Success from './Success';
import PolicyBox from './PolicyBox';
import sendMail from '@/actions/sendMail';
import { cn, IFormData } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';


export default function ContactForm() {
    const toastPosstion = cn(
        'top-0  flex fixed md:max-w-[420px] md:top-4 md:right-4'
    )
    const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
    const [submitStatus, setSubmitStatus] = useState<boolean>(false)
    const [agreedToPrivacy, setAgreedToPrivacy] = useState(false);
    const { toast } = useToast()

    const [formData, setFormData] = useState<IFormData>({
        fullname: "",
        email: "",
        subject: "General Inquiry",
        phone: "",
        message: ""
    })

    const handleRecaptchaChange = (token: string | null) => {
        setRecaptchaToken(token);
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData(prev => ({
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
                variant: "destructive"
            })
            return;
        }

        try {
            const { success, message } = await sendMail(formData, recaptchaToken)
            if (!success) {
                toast({
                    className: `${toastPosstion}}`,
                    description: message,
                    variant: "destructive"
                })
            }
            setSubmitStatus(true)
            setFormData({ phone: "", email: "", fullname: "", message: "", subject: "General Inquiry" })
        } catch (error) {
            console.error(error)
            toast({
                description: "Your message has been not sent internal server issue.",
            })
        }
    };


    if (!process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY) {
        return null
    }
    return (<>
        <div className="order-1 lg:order-2">
            <div className="bg-white rounded-xl shadow-md p-8 border border-amber-100">
                <h3 className="text-2xl font-bold text-amber-600 mb-6">Send Us a Message</h3>

                <form onSubmit={handleSubmit} id="contact-form" className="space-y-6">
                    <div className="grid grid-cols-1  md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="fullname" className="block text-neutral-700 font-medium mb-2">Full Name</label>
                            <input
                                value={formData.fullname}
                                onChange={handleChange}
                                type="text"
                                id="fullname"
                                name="fullname"
                                className="bg-white w-full px-4 py-3 border  border-neutral-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors" placeholder="Your name" required />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-neutral-700 font-medium mb-2">Email</label>
                            <input
                                value={formData.email}
                                onChange={handleChange}
                                type="email"
                                id="email"
                                name="email"
                                className="bg-white w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors" placeholder="your@email.com" required />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="phone" className="block text-neutral-700 font-medium mb-2">Phone Number</label>
                        <input
                            value={formData.phone}
                            onChange={handleChange}
                            type="tel"
                            id="phone"
                            name="phone"
                            className="bg-white w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors" placeholder="Your phone number" />
                    </div>

                    <div>
                        <label htmlFor="subject" className="block text-neutral-700 font-medium mb-2">Subject</label>
                        <select
                            value={formData.subject}
                            onChange={handleChange}
                            id="subject"
                            name="subject"
                            className="bg-white w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors" required>
                            <option value="" disabled defaultValue={"General Inquiry"}>Select a subject</option>
                            <option value="General Inquiry">General Inquiry</option>
                            <option value="Bulk Order">Bulk Order</option>
                            <option value="Distributor Inquiry">Distributor Inquiry</option>
                            <option value="Product Feedback">Product Feedback</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-neutral-700 font-medium mb-2">Message</label>
                        <textarea
                            value={formData.message}
                            onChange={handleChange}
                            id="message"
                            name="message"
                            rows={4} className="bg-white w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors resize-y" placeholder="Your message here..." required></textarea>
                    </div>

                    <div className="flex items-start">
                        <div className="flex items-center h-5">
                            <input id="privacy" name="privacy" type="checkbox" className=" bg-neutral-50 w-4 h-4 border border-neutral-300 rounded  focus:ring-3 focus:ring-amber-500" required />
                        </div>
                        <label htmlFor="privacy" className="ml-2 text-sm text-neutral-600">
                            I agree to the <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    setAgreedToPrivacy(true);
                                }}
                                type="button"
                                id="privacy-policy-btn"
                                className="text-amber-500 hover:text-amber-600 focus:outline-none">privacy policy</button> and consent to the processing of my data.
                        </label>
                    </div>

                    {/* CATPCHA */}
                        <ReCAPTCHA className='w-full relative'
                            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                            onChange={handleRecaptchaChange}
                        />

                    <div>
                        <button type="submit" className="w-full md:w-auto px-8 py-3 bg-amber-500 text-white rounded-full hover:bg-amber-600 transition-colors duration-300 flex items-center justify-center gap-2">
                            <span>Send Message</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                            </svg>
                        </button>
                    </div>
                </form>
            </div>
        </div>
        <Success setSuccess={setSubmitStatus} success={submitStatus} />
        <PolicyBox setStatus={setAgreedToPrivacy} status={agreedToPrivacy} />
    </>
    )
}
