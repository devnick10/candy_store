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

export type Subject =
    | "General Inquiry"
    | "Distributor Inquiry"
    | "Bulk Order"
    | "Product Feedback"
    | "Customer Support"
    | "Other";


export interface IFormData {
    fullname: string;
    email: string;
    subject: Subject;
    phone: string;
    message: string;
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

export function emailTemplate({email,subject,phone,message,fullname}:IFormData){
return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Contact Submission</title>
      <style>
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
        }
        .header {
          background-color: #f59e0b;
          color: white;
          padding: 20px;
          text-align: center;
          border-radius: 8px 8px 0 0;
        }
        .content {
          padding: 25px;
          background-color: #f8fafc;
          border: 1px solid #e2e8f0;
          border-top: none;
          border-radius: 0 0 8px 8px;
        }
        .detail-row {
          margin-bottom: 15px;
          padding-bottom: 15px;
          border-bottom: 1px solid #e2e8f0;
        }
        .detail-row:last-child {
          border-bottom: none;
          margin-bottom: 0;
          padding-bottom: 0;
        }
        .label {
          font-weight: 600;
          color: #64748b;
          display: inline-block;
          width: 80px;
        }
        .message-box {
          background-color: white;
          border: 1px solid #e2e8f0;
          border-radius: 6px;
          padding: 15px;
          margin-top: 10px;
        }
        .footer {
          margin-top: 30px;
          text-align: center;
          font-size: 12px;
          color: #64748b;
        }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>New Contact Form Submission</h1>
        <p>${subject}</p>
      </div>
      
      <div class="content">
        <div class="detail-row">
          <span class="label">Name:</span>
          <span>${fullname}</span>
        </div>
        
        <div class="detail-row">
          <span class="label">Email:</span>
          <a href="mailto:${email}">${email}</a>
        </div>
        
        <div class="detail-row">
          <span class="label">Phone:</span>
          <a href="tel:${phone}">${phone}</a>
        </div>
        
        <div class="detail-row">
          <div class="label">Message:</div>
          <div class="message-box">${message.replace(/\n/g, '<br>')}</div>
        </div>
      </div>
      
      <div class="footer">
        <p>This message was sent from your website contact form.</p>
        <p>© ${new Date().getFullYear()} ${process.env.SITE_NAME || 'Your Company'}. All rights reserved.</p>
      </div>
    </body>
    </html>
  `
}
