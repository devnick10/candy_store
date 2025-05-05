"use client"
import React, { useEffect, useState } from 'react'

interface SuccessProps {
    success: boolean;
    setSuccess: (value: boolean) => void;
}

export default function Success({ success, setSuccess }: SuccessProps) {
    const [isVisible, setIsVisible] = useState(false);
    const [shouldRender, setShouldRender] = useState(false);

    useEffect(() => {
        if (success) {
            setShouldRender(true);
            setTimeout(() => setIsVisible(true), 10);
            document.body.style.overflow = 'hidden';
        } else {
            setIsVisible(false);
            setTimeout(() => setShouldRender(false), 300); // Match transition duration
            document.body.style.overflow = '';
        }
    }, [success]);

    const handleClose = () => {
        setSuccess(false);
    };
    
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') handleClose();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);


    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            handleClose();
        }
    };

    if (!shouldRender) return null;

    return (
        <div
            id="success-modal"
            className={`fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'
                }`}
            onClick={handleBackdropClick}
            aria-modal="true"
        >
            <div
                className={`relative w-full max-w-md mx-4 bg-white rounded-xl shadow-2xl transition-all duration-300 ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
                    }`}
            >
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 p-1 text-neutral-500 hover:text-neutral-800 transition-colors"
                    aria-label="Close modal"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <div className="p-6 text-center">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>

                    <h3 className="mb-2 text-xl font-bold text-neutral-800">Message Sent Successfully!</h3>
                    <p className="mb-6 text-neutral-600">Thank you for reaching out. We'll get back to you soon.</p>

                    <button
                        onClick={handleClose}
                        className="rounded-full bg-amber-500 px-6 py-2 text-white transition-colors duration-300 hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
                    >
                        Done
                    </button>
                </div>
            </div>
        </div>
    );
}