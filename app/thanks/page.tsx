"use client"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function ThanksPage() {
    const router = useRouter()
    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        },3*1000)
    })
    return (
        <div className="min-h-screen flex items-center justify-center px-4 text-center">
            <div>
                <h1 className="text-3xl font-bold mb-4">Thank You!</h1>
                <p className="text-gray-600">
                    Your message has been successfully sent. We&apos;ll get back to you soon.
                </p>
            </div>
        </div>
    )
}