"use client"
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

export const Contactus = () => {
    return (
        <section id="contact" className="py-16 md:py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-amber-600 mb-4">Contact</h2>
                    <div className="w-24 h-1 bg-amber-500 mx-auto mb-8 rounded-full"></div>
                    <p className="text-lg text-neutral-700 max-w-3xl mx-auto">Get in touch with us for orders, inquiries, or to learn more about our sweet fruity candies.</p>
                </div>

                <div className="grid grid-cols-1  lg:grid-cols-2 gap-12 items-stretch ">
                    {/* Contact Information */}
                    <ContactInfo />

                    {/* Contact Form */}
                    <ContactForm />
                </div>

                {/* Map Section */}
                <div className="mt-16">
                    <div className="bg-white rounded-xl shadow-md overflow-hidden">
                        {/* Replace the placeholder div with your iframe */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2478.712518997923!2d80.43879419303751!3d21.31149595493655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a2bb9000be1efa3%3A0xbc20fc855a277941!2sRANI%20AGRO%20FOOD!5e0!3m2!1sen!2sin!4v1746518123804!5m2!1sen!2sin"
                            width="100%"
                            height="400"
                            className="border-0"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>

                        {/* Keep your existing location information below the map */}
                        <div className="p-6 text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-amber-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            </svg>
                            <h3 className="text-xl font-bold text-neutral-800 mb-2">Factory Location</h3>
                            <p className="text-neutral-600 mb-4">RANI AGRO FOOD, Dhanoli Road Darbada Th Salekasa , 441916 MH</p>
                            <a
                                href="https://www.google.com/maps?q=21.311496,80.440369"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2 bg-amber-500 text-white rounded-full hover:bg-amber-600 transition-colors duration-300 inline-flex items-center gap-2"
                            >
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
        </section>
    )
}
