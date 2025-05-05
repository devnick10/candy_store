"use client"
import React, { useState } from 'react'
import { X } from 'lucide-react'
import { Button } from './ui/button'
import Link from 'next/link';
interface NavItems {
    title: string;
    hrf: string;
}
const navItems: NavItems[] = [
    {
        title: "Home",
        hrf: "#home"
    },
    {
        title: "About",
        hrf: "#about"
    },
    {
        title: "Products",
        hrf: "#products"
    },
    {
        title: "Features",
        hrf: "#features"
    },
    {
        title: "Process",
        hrf: "#process"
    },
    {
        title: "Testimonials",
        hrf: "#testimonials"
    },
    {
        title: "Contact",
        hrf: "#contact"
    }
]
export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    return (
        <nav className="fixed top-0 z-50 w-full  backdrop-blur-sm border-b ">
            <div className="px-4 mx-auto flex h-16 items-center justify-between  ">
                <div className="flex items-center">
                    <span className="font-nunito text-2xl font-bold text-amber-500 flex items-center">
                        Ashoka
                    </span>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden space-x-8 md:flex">
                    {
                        navItems.map((items, index) => (
                            <Link
                                key={index}
                                href={items.hrf}
                                className="font-Quicksand text-neutral-700 hover:text-amber-500 transition-colors duration-300"
                            >
                                {items.title}
                            </Link>
                        ))
                    }
                </div>
                <Link href={"#contact"} className='px-8 py-2 bg-amber-500 text-white cursor-pointer rounded-full hover:bg-amber-600 transition-colors duration-300'>
                    Order Now
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
                            <path strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-white shadow-lg">
                    <div className="container mx-auto px-4 py-3 space-y-4">
                        {
                            navItems.map((items, index) => (
                                <Link
                                    key={index}
                                    href={items.hrf}
                                    className="block py-2 text-sm font-medium text-rose-900 hover:text-fuchsia-600"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {items.title}
                                </Link>
                            ))
                        }
                        <Button className="w-full bg-amber-500 text-white  mt-2">
                            Order Now
                        </Button>
                    </div>
                </div>
            )}
        </nav>
    )
}