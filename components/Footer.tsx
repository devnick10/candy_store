import { Mail, MapPin, Phone } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function Footer() {
    return (
            <footer className="bg-rose-900 py-12 text-white">
                <div className="container mx-auto px-4">
                    <div className="grid gap-8 md:grid-cols-4">
                        <div>
                            <h3 className="mb-1 font-serif text-2xl font-bold">Ashoka</h3>
                            <h3 className="mb-4 font-serif text-xl font-bold">Rani Agro Food Industry</h3>
                            <p className="mb-4 text-white/70">Happiness in every bite!</p>
                            <p className="text-white/70">
                                Making the world sweeter one fruity candy at a time. Natural flavors, vibrant colors, pure joy.
                            </p>
                        </div>
                        <div>
                            <h4 className="mb-4 text-lg font-semibold">Quick Links</h4>
                            <ul className="space-y-2">
                                <li>
                                    <Link href="#products" className="text-white/70 hover:text-fuchsia-400">
                                        Our Flavors
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#about" className="text-white/70 hover:text-fuchsia-400">
                                        Our Story
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#features" className="text-white/70 hover:text-fuchsia-400">
                                        Why We&apos;re Special
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#contact" className="text-white/70 hover:text-fuchsia-400">
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="mb-4 text-lg font-semibold">Popular Flavors</h4>
                            <ul className="space-y-2">
                                <li>
                                    <Link href="#" className="text-white/70 hover:text-fuchsia-400">
                                        Strawberry Burst
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-white/70 hover:text-fuchsia-400">
                                        Tropical Mango
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-white/70 hover:text-fuchsia-400">
                                        Blueberry Bliss
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-white/70 hover:text-fuchsia-400">
                                        Citrus Splash
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="mb-4 text-lg font-semibold">Contact</h4>
                            <ul className="space-y-2 text-white/70">
                                <li className="flex items-center">
                                    <Mail className="mr-2 h-4 w-4 text-fuchsia-400" />
                                    {process.env.NEXT_PUBLIC_CONTACT_EMAIL}
                                </li>
                                <li className="flex items-center">
                                    <Phone className="mr-2 h-4 w-4 text-fuchsia-400" />
                                    +91 {process.env.NEXT_PUBLIC_CONTACT_NUMBER}
                                </li>
                                <li className="flex items-start">
                                    <MapPin className="mr-2 h-4 w-4 text-fuchsia-400" />
                                    <span>
                                        Dhanoli Road, Darbada
                                        <br />
                                        Taluka Salekasa District Gondia, 441916
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-12 border-t border-white/20 pt-6 text-center">
                        <p className="text-white/70">&copy; {new Date().getFullYear()} Juicy Candy Co. All rights reserved.</p>
                    </div>
                </div>
            </footer>
    )
}

export default Footer