import { clsx, type ClassValue } from "clsx"
import { Candy, Cherry, IceCream } from "lucide-react";
import React from "react";
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

interface Features {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>
}

export const features: Features[] = [
  {
    title: "Real Fruit Flavors",
    description: "We use natural fruit extracts for authentic taste that candy lovers can feel good about.",
    icon: Cherry,
  },
  {
    title: "Small Batch Crafted",
    description: "Every piece is made with care in small batches for consistent quality and flavor.",
    icon: Candy,
  },
  {
    title: "Vibrant Colors",
    description: "Our candies get their beautiful hues from natural sources, never artificial dyes.",
    icon: IceCream,
  },
]

interface NavItems {
  title: string;
  hrf: string;
}
export const navItems:NavItems[] = [
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
  },
]

// <div className="flex flex-wrap justify-center gap-6 md:gap-10">
// <div className="flex items-center gap-2">
//     <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"></path>
//         </svg>
//     </div>
//     <div>
//         <p className="font-semibold text-neutral-800">4.9/5</p>
//         <p className="text-sm text-neutral-600">2,500+ Reviews</p>
//     </div>
// </div>

// <div className="flex items-center gap-2">
//     <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
//         </svg>
//     </div>
//     <div>
//         <p className="font-semibold text-neutral-800">Quality Certified</p>
//         <p className="text-sm text-neutral-600">ISO 22000:2018</p>
//     </div>
// </div>

// <div className="flex items-center gap-2">
//     <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
//         </svg>
//     </div>
//     <div>
//         <p className="font-semibold text-neutral-800">Global Brand</p>
//         <p className="text-sm text-neutral-600">50+ Countries</p>
//     </div>
// </div>
// </div>