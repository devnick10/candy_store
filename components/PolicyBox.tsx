"use client"
import React from 'react'

export default function PolicyBox({ status, setStatus }: { status: boolean, setStatus: (value: boolean) => void }) {
    return (
        <>
            <div
                id="privacy-modal"
                className={`fixed inset-0 z-50 flex items-center justify-center ${status ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    } transition-opacity duration-300`}
                aria-modal="true"
                aria-hidden={!status} >
                {/* <!-- Modal backdrop --> */}
                <div id="privacy-modal-backdrop"
                    className={`absolute inset-0 bg-black bg-opacity-50 transition-opacity ${status ? 'pointer-events-auto' : 'pointer-events-none'
                        }`}></div>

                {/* <!-- Modal content --> */}
                <div className="relative bg-white rounded-xl max-w-3xl mx-4 p-6 md:p-8 shadow-2xl transform transition-all max-h-[80vh] overflow-auto scale-100 opacity-100" id="privacy-modal-content">
                    <button id="close-privacy-modal" onClick={() => setStatus(false)} className="absolute top-4 right-4 text-neutral-500 hover:text-neutral-800 focus:outline-none" aria-label="Close modal">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>

                    <h3 className="text-2xl font-bold text-amber-600 mb-4">Privacy Policy</h3>

                    <div className="text-neutral-700 space-y-4">
                        <p>This Privacy Policy describes how Ashoka Candies and Rani Agrofood (collectively, "we," "us," or "our") collect, use, and share your personal information when you contact us through our website, by phone, or by email.</p>

                        <h4 className="text-lg font-semibold text-neutral-800 mt-4">Information We Collect</h4>
                        <p>We may collect the following types of information:</p>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Contact information (name, email address, phone number, postal address)</li>
                            <li>Business information (company name, job title)</li>
                            <li>Communications and inquiries you send to us</li>
                            <li>Information about your interactions with our website</li>
                        </ul>

                        <h4 className="text-lg font-semibold text-neutral-800 mt-4">How We Use Your Information</h4>
                        <p>We may use your information for the following purposes:</p>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>To respond to your inquiries and provide customer service</li>
                            <li>To process and fulfill your orders</li>
                            <li>To send you information about our products, services, and promotions</li>
                            <li>To improve our products and services</li>
                            <li>To comply with legal obligations</li>
                        </ul>

                        <h4 className="text-lg font-semibold text-neutral-800 mt-4">Information Sharing</h4>
                        <p>We do not sell your personal information to third parties. We may share your information with:</p>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Service providers who help us operate our business</li>
                            <li>Business partners with your consent</li>
                            <li>Legal authorities when required by law</li>
                        </ul>

                        <h4 className="text-lg font-semibold text-neutral-800 mt-4">Your Choices</h4>
                        <p>You can opt out of marketing communications at any time. You may also request access to, correction of, or deletion of your personal information by contacting us.</p>

                        <h4 className="text-lg font-semibold text-neutral-800 mt-4">Security</h4>
                        <p>We implement reasonable security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure.</p>

                        <h4 className="text-lg font-semibold text-neutral-800 mt-4">Contact Us</h4>
                        <p>If you have any questions about this Privacy Policy, please contact us at privacy@ashokacandies.com.</p>
                    </div>
                </div>
            </div>
        </>
    )
}
