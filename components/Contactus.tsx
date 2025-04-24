import React from 'react'
import { Button } from './ui/button'
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react'

export const Contactus = () => {
  return (
                    <section id="contact" className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="mb-16 text-center">
                        <span className="mb-2 inline-block rounded-full bg-rose-200 px-4 py-1 text-xs font-semibold text-rose-800">
                            GET IN TOUCH
                        </span>
                        <h2 className="font-serif text-3xl font-bold text-rose-900 md:text-4xl lg:text-5xl">Contact Us</h2>
                        <div className="mx-auto mt-4 h-1 w-20 bg-fuchsia-600"></div>
                    </div>

                    <div className="grid gap-8 rounded-2xl bg-gradient-to-br from-white to-rose-50 p-8 shadow-xl md:grid-cols-2">
                        <div>
                            <h3 className="mb-6 font-serif text-2xl font-semibold text-rose-900">Sweet Conversations</h3>
                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-rose-200 text-rose-800">
                                        <Mail className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-rose-900">Email</p>
                                        <a href="mailto:raniagrofood@gmail.com" className="text-fuchsia-600 hover:underline">
                                            {process.env.NEXT_PUBLIC_CONTACT_EMAIL}
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-rose-200 text-rose-800">
                                        <Phone className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-rose-900">Phone</p>
                                    <p className="text-rose-900/70">+91 {process.env.NEXT_PUBLIC_CONTACT_NUMBER}</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-rose-200 text-rose-800">
                                        <MapPin className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-rose-900">Address</p>
                                        <p className="text-rose-900/70">
                                            Dhanoli Road, Darbada
                                            <br />
                                            Taluka Salekasa District Gondia, 441916
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 rounded-lg bg-rose-200/30 p-6">
                                <h4 className="mb-4 font-serif text-lg font-semibold text-rose-900">Sweet Hours</h4>
                                <ul className="space-y-2 text-rose-900/70">
                                    <li className="flex justify-between">
                                        <span>Monday - Friday:</span>
                                        <span>9:00 AM - 6:00 PM</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span>Saturday:</span>
                                        <span>10:00 AM - 4:00 PM</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span>Sunday:</span>
                                        <span>Eating candy (closed)</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div>
                            <h3 className="mb-6 font-serif text-2xl font-semibold text-rose-900">Send Us a Sweet Note</h3>
                            <form className="space-y-4" method="POST" action={`https://formsubmit.co/${process.env.NEXT_PUBLIC_FORM_RECEIVED_EMAIL}`}>
                                <div>
                                    <label htmlFor="name" className="mb-1 block text-sm font-medium text-rose-900">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full rounded-lg border border-rose-300 bg-white/50 p-3 focus:border-fuchsia-600 focus:outline-none focus:ring-1 focus:ring-fuchsia-600"
                                        placeholder="Sweet tooth name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="mb-1 block text-sm font-medium text-rose-900">
                                        Email Address
                                    </label>
                                    <input
                                        name='email'
                                        type="email"
                                        id="email"
                                        className="w-full rounded-lg border border-rose-300 bg-white/50 p-3 focus:border-fuchsia-600 focus:outline-none focus:ring-1 focus:ring-fuchsia-600"
                                        placeholder="your@email.com"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="subject" className="mb-1 block text-sm font-medium text-rose-900">
                                        Subject
                                    </label>
                                    <input
                                        name='subject'
                                        type="text"
                                        id="subject"
                                        className="w-full rounded-lg border border-rose-300 bg-white/50 p-3 focus:border-fuchsia-600 focus:outline-none focus:ring-1 focus:ring-fuchsia-600"
                                        placeholder="Sweet question or comment"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="mb-1 block text-sm font-medium text-rose-900">
                                        Message
                                    </label>
                                    <textarea
                                        name='message'
                                        id="message"
                                        rows={4}
                                        className="w-full rounded-lg border border-rose-300 bg-white/50 p-3 focus:border-fuchsia-600 focus:outline-none focus:ring-1 focus:ring-fuchsia-600"
                                        placeholder="Your sweet message..."
                                    ></textarea>
                                </div>
                                <input type="hidden" name="_next" value={`${process.env.NEXT_PUBLIC_FORM_REDIRECT_URL}/thanks`} />
                                <Button type='submit' className="w-full bg-fuchsia-600 text-white hover:bg-rose-700">
                                    Send Message <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
  )
}
