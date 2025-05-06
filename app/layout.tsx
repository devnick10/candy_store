import type React from "react"
import "@/app/globals.css"
import {Nunito} from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import type { Metadata } from "next"
import { data } from "@/lib/metadata"
import { Toaster } from "@/components/ui/toaster"

const nunito = Nunito({subsets:['latin']})
export const metadata: Metadata = {
  ...data,
  robots: {
    ...data.robots,
    googleBot: {
      ...data.robots.googleBot,
      "max-image-preview": "large", 
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="256x256"/>
      <body className={nunito.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Toaster/>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
