
export const Contactus = () => {
    return (
        <section id="contact" className="py-16 md:py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-amber-600 mb-4">Contact</h2>
                    <div className="w-24 h-1 bg-amber-500 mx-auto mb-8 rounded-full"></div>
                    <p className="text-lg text-neutral-700 max-w-3xl mx-auto">Get in touch with us for orders, inquiries, or to learn more about our sweet fruity candies.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Contact Information */}
                    <div className="order-2 lg:order-1">
                        <div className="bg-white rounded-xl shadow-md p-8 border border-amber-100">
                            <h3 className="text-2xl font-bold text-amber-600 mb-6">Reach Out to Us</h3>

                            <div className="space-y-6">
                                {/* Address */}
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center shrink-0 text-amber-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-neutral-800 mb-1">Factory &amp; Office</h4>
                                        <p className="text-neutral-600">Industrial Area, Phase 2</p>
                                        <p className="text-neutral-600">Rani Agrofood Campus</p>
                                        <p className="text-neutral-600">Hyderabad, Telangana 500072, India</p>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center shrink-0 text-amber-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round"  strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-neutral-800 mb-1">Phone</h4>
                                        <p className="text-neutral-600">Customer Service: +91 40 2345 6789</p>
                                        <p className="text-neutral-600">Bulk Orders: +91 40 2345 6780</p>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center shrink-0 text-amber-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-neutral-800 mb-1">Email</h4>
                                        <p className="text-neutral-600">General Inquiries: info@ashokacandies.com</p>
                                        <p className="text-neutral-600">Wholesale: business@raniagrofood.com</p>
                                    </div>
                                </div>

                                {/* Business Hours */}
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center shrink-0 text-amber-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-neutral-800 mb-1">Business Hours</h4>
                                        <p className="text-neutral-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                                        <p className="text-neutral-600">Saturday: 10:00 AM - 4:00 PM</p>
                                        <p className="text-neutral-600">Sunday: Closed</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8">
                                <h4 className="text-lg font-semibold text-neutral-800 mb-4">Connect With Us</h4>
                                <div className="flex gap-4">
                                    <a href="#" className="w-10 h-10 bg-amber-500 text-white rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors duration-300" aria-label="Facebook">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                                        </svg>
                                    </a>
                                    <a href="#" className="w-10 h-10 bg-amber-500 text-white rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors duration-300" aria-label="Twitter">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                                        </svg>
                                    </a>
                                    <a href="#" className="w-10 h-10 bg-amber-500 text-white rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors duration-300" aria-label="Instagram">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"></path>
                                        </svg>
                                    </a>
                                    <a href="#" className="w-10 h-10 bg-amber-500 text-white rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors duration-300" aria-label="LinkedIn">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.27 20.1H3.65V9.24h3.62V20.1zM5.47 7.76h-.03c-1.22 0-2-.83-2-1.87 0-1.06.8-1.87 2.05-1.87 1.24 0 2 .8 2.02 1.87 0 1.04-.78 1.87-2.05 1.87zM20.34 20.1h-3.63v-5.8c0-1.45-.52-2.45-1.83-2.45-1 0-1.6.67-1.87 1.32-.1.23-.11.55-.11.88v6.05H9.28s.05-9.82 0-10.84h3.63v1.54a3.6 3.6 0 013.26-1.8c2.39 0 4.18 1.56 4.18 4.89v6.21z"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="order-1 lg:order-2">
                        <div className="bg-white rounded-xl shadow-md p-8 border border-amber-100">
                            <h3 className="text-2xl font-bold text-amber-600 mb-6">Send Us a Message</h3>

                            <form id="contact-form" className="space-y-6">
                                <div className="grid grid-cols-1  md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="fullname" className="block text-neutral-700 font-medium mb-2">Full Name</label>
                                        <input type="text" id="fullname" name="fullname" className="bg-white w-full px-4 py-3 border  border-neutral-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors" placeholder="Your name" required />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-neutral-700 font-medium mb-2">Email</label>
                                        <input type="email" id="email" name="email" className="bg-white w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors" placeholder="your@email.com" required />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-neutral-700 font-medium mb-2">Phone Number</label>
                                    <input type="tel" id="phone" name="phone" className="bg-white w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors" placeholder="Your phone number" />
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-neutral-700 font-medium mb-2">Subject</label>
                                    <select id="subject" name="subject" className="bg-white w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors" required>
                                        <option value="" disabled defaultValue={"General Inquiry"}>Select a subject</option>
                                        <option value="General Inquiry">General Inquiry</option>
                                        <option value="Bulk Order">Bulk Order</option>
                                        <option value="Distributor Inquiry">Distributor Inquiry</option>
                                        <option value="Product Feedback">Product Feedback</option>
                                        <option value="Career Inquiry">Career Inquiry</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-neutral-700 font-medium mb-2">Message</label>
                                    <textarea id="message" name="message" rows={4} className="bg-white w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors resize-y" placeholder="Your message here..." required></textarea>
                                </div>

                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="privacy" name="privacy" type="checkbox" className=" bg-neutral-50 w-4 h-4 border border-neutral-300 rounded  focus:ring-3 focus:ring-amber-500" required />
                                    </div>
                                    <label htmlFor="privacy" className="ml-2 text-sm text-neutral-600">
                                        I agree to the <button type="button" id="privacy-policy-btn" className="text-amber-500 hover:text-amber-600 focus:outline-none">privacy policy</button> and consent to the processing of my data.
                                    </label>
                                </div>

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
                </div>

                {/* Map Section */}
                <div className="mt-16">
                    <div className="bg-white rounded-xl shadow-md overflow-hidden">
                        <div className="h-[400px] bg-neutral-100 flex items-center justify-center">
                            <div className="text-center p-6">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-amber-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                </svg>
                                <h3 className="text-xl font-bold text-neutral-800 mb-2">Factory Location</h3>
                                <p className="text-neutral-600 mb-4">Interactive map would load here. For privacy and security reasons, we&apos;re showing this placeholder.</p>
                                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-amber-500 text-white rounded-full hover:bg-amber-600 transition-colors duration-300 inline-flex items-center gap-2">
                                    <span>Open in Google Maps</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
                                        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Privacy Policy Modal */}
            {/* TODO:Onlick flex default hidden */}
            <div id="privacy-modal" className="fixed inset-0 z-50  items-center justify-center hidden opacity-0 transition-opacity duration-300" aria-modal="true" aria-hidden="true">
                {/* Modal backdrop */}
                <div id="privacy-modal-backdrop" className="absolute inset-0 bg-black bg-opacity-50 transition-opacity"></div>

                {/* Modal content */}
                <div className="relative bg-white rounded-xl max-w-3xl mx-4 p-6 md:p-8 shadow-2xl transform transition-all scale-95 opacity-0 max-h-[80vh] overflow-auto" id="privacy-modal-content">
                    <button id="close-privacy-modal" className="absolute top-4 right-4 text-neutral-500 hover:text-neutral-800 focus:outline-none" aria-label="Close modal">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>

                    <h3 className="text-2xl font-bold text-amber-600 mb-4">Privacy Policy</h3>

                    <div className="text-neutral-700 space-y-4">
                        <p>This Privacy Policy describes how Ashoka Candies and Rani Agrofood (collectively, &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collect, use, and share your personal information when you contact us through our website, by phone, or by email.</p>

                        <h4 className="text-lg font-semibold text-neutral-800 mt-4">Information We Collect</h4>
                        <p>We may collect the following types of information:</p>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Contact information (name, email address, phone number, postal address)</li>
                            <li>Business information (company name, job title)</li>
                            <li>Communications and inquiries you send to us</li>
                            <li>Information about your interactions with our website</li>
                        </ul>

                        <h4 className="text-lg font-semibold text-neutral-800 mt-4">How We Use Your Information</h4>
                        <p>We may use your information for the following purposes:</p>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>To respond to your inquiries and provide customer service</li>
                            <li>To process and fulfill your orders</li>
                            <li>To send you information about our products, services, and promotions</li>
                            <li>To improve our products and services</li>
                            <li>To comply with legal obligations</li>
                        </ul>

                        <h4 className="text-lg font-semibold text-neutral-800 mt-4">Information Sharing</h4>
                        <p>We do not sell your personal information to third parties. We may share your information with:</p>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Service providers who help us operate our business</li>
                            <li>Business partners with your consent</li>
                            <li>Legal authorities when required by law</li>
                        </ul>

                        <h4 className="text-lg font-semibold text-neutral-800 mt-4">Your Choices</h4>
                        <p>You can opt out of marketing communications at any time. You may also request access to, correction of, or deletion of your personal information by contacting us.</p>

                        <h4 className="text-lg font-semibold text-neutral-800 mt-4">Security</h4>
                        <p>We implement reasonable security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure.</p>

                        <h4 className="text-lg font-semibold text-neutral-800 mt-4">Contact Us</h4>
                        <p>If you have any questions about this Privacy Policy, please contact us at privacy@ashokacandies.com.</p>
                    </div>
                </div>
            </div>

            {/* Success Modal */}
            {/* TODO:onclick flex defalut hidden */}
            <div id="success-modal" className="fixed inset-0 z-50  items-center justify-center hidden opacity-0 transition-opacity duration-300" aria-modal="true" aria-hidden="true">
                {/* Modal backdrop */}
                <div id="success-modal-backdrop" className="absolute inset-0 bg-black bg-opacity-50 transition-opacity"></div>

                {/* Modal content */}
                <div className="relative bg-white rounded-xl max-w-md mx-4 p-6 shadow-2xl transform transition-all scale-95 opacity-0" id="success-modal-content">
                    <button id="close-success-modal" className="absolute top-4 right-4 text-neutral-500 hover:text-neutral-800 focus:outline-none" aria-label="Close modal">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path  strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>

                    <div className="text-center">
                        <div className="w-16 h-16 bg-green-100 rounded-full mx-auto flex items-center justify-center mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path  strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                        </div>

                        <h3 className="text-xl font-bold text-neutral-800 mb-2">Message Sent Successfully!</h3>
                        <p className="text-neutral-600 mb-6">Thank you for reaching out. We will get back to you as soon as possible.</p>

                        <button id="success-done-btn" className="px-6 py-2 bg-amber-500 text-white rounded-full hover:bg-amber-600 transition-colors duration-300">
                            Done
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
