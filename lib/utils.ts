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
