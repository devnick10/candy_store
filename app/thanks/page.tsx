'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function ThanksPage() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3 * 1000);
  });
  return (
    <div className="flex min-h-screen items-center justify-center px-4 text-center">
      <div>
        <h1 className="mb-4 text-3xl font-bold">Thank You!</h1>
        <p className="text-gray-600">
          Your message has been successfully sent. We&apos;ll get back to you soon.
        </p>
      </div>
    </div>
  );
}
