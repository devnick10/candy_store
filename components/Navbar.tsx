'use client';
import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Button } from './ui/button';
import Link from 'next/link';
import Image from 'next/image';
interface NavItems {
  title: string;
  hrf: string;
}
const navItems: NavItems[] = [
  {
    title: 'Home',
    hrf: '#home',
  },
  {
    title: 'About',
    hrf: '#about',
  },
  {
    title: 'Products',
    hrf: '#products',
  },
  {
    title: 'Features',
    hrf: '#features',
  },
  {
    title: 'Process',
    hrf: '#process',
  },
  {
    title: 'Testimonials',
    hrf: '#testimonials',
  },
  {
    title: 'Contact',
    hrf: '#contact',
  },
];
export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <nav className="fixed top-0 z-50 w-full border-b backdrop-blur-sm">
      <div className="mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center">
          <Image alt="logo" height={60} width={60} src={'/Ashoka-logo.jpg'} />
          <span className="flex items-center font-nunito text-2xl font-bold text-amber-500">
            Ashoka
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden space-x-8 md:flex">
          {navItems.map((items, index) => (
            <Link
              key={index}
              href={items.hrf}
              className="font-Quicksand text-neutral-700 transition-colors duration-300 hover:text-amber-500"
            >
              {items.title}
            </Link>
          ))}
        </div>
        <Link
          href={'#contact'}
          className="hidden cursor-pointer rounded-full bg-amber-500 px-8 py-2 text-white transition-colors duration-300 hover:bg-amber-600 md:flex"
        >
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
        <div className="bg-white shadow-lg md:hidden">
          <div className="container mx-auto space-y-4 px-4 py-3">
            {navItems.map((items, index) => (
              <Link
                key={index}
                href={items.hrf}
                className="block py-2 text-sm font-medium text-rose-900 hover:text-fuchsia-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                {items.title}
              </Link>
            ))}
            <Button className="mt-2 w-full bg-amber-500 text-white">Order Now</Button>
          </div>
        </div>
      )}
    </nav>
  );
}
