"use client"
import React, { useState } from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { X } from 'lucide-react'
import Image from 'next/image'

export const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <nav className="fixed top-0 z-50 w-full bg-pink-50/90 backdrop-blur-sm border-b border-rose-200">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <div className="flex items-center">
                    <span className="font-serif text-2xl font-bold text-rose-900 flex items-center">
                        <Image
                            src={"/Ashoka-logo.jpg"}
                            width={50}
                            height={50}
                            alt='logo'
                        />
                        ASHOKA
                    </span>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden space-x-8 md:flex">
                    <Link
                        href="#products"
                        className="text-sm font-medium text-rose-900 hover:text-fuchsia-600 transition-colors"
                    >
                        Flavors
                    </Link>
                    <Link
                        href="#about"
                        className="text-sm font-medium text-rose-900 hover:text-fuchsia-600 transition-colors"
                    >
                        Our Story
                    </Link>
                    <Link
                        href="#features"
                        className="text-sm font-medium text-rose-900 hover:text-fuchsia-600 transition-colors"
                    >
                        Why Us
                    </Link>
                    <Link
                        href="#contact"
                        className="text-sm font-medium text-rose-900 hover:text-fuchsia-600 transition-colors"
                    >
                        Contact
                    </Link>
                </div>
                  <Link href={"#contact"}>
                <Button  className="hidden bg-fuchsia-600 text-white hover:bg-rose-700 md:inline-flex">
                    Contact Us
                </Button>
                  </Link>

                {/* Mobile Menu Button */}
                <button
                    className="text-rose-900 md:hidden"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? (
                        <X className="h-6 w-6" />
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-white shadow-lg">
                    <div className="container mx-auto px-4 py-3 space-y-4">
                        <Link
                            href="#products"
                            className="block py-2 text-sm font-medium text-rose-900 hover:text-fuchsia-600"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Flavors
                        </Link>
                        <Link
                            href="#about"
                            className="block py-2 text-sm font-medium text-rose-900 hover:text-fuchsia-600"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Our Story
                        </Link>
                        <Link
                            href="#features"
                            className="block py-2 text-sm font-medium text-rose-900 hover:text-fuchsia-600"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Why Us
                        </Link>
                        <Link
                            href="#contact"
                            className="block py-2 text-sm font-medium text-rose-900 hover:text-fuchsia-600"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Contact
                        </Link>
                        <Button className="w-full bg-fuchsia-600 text-white hover:bg-rose-700 mt-2">
                            Order Now
                        </Button>
                    </div>
                </div>
            )}
        </nav>
    )
}