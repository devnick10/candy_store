'use client';
import { Button } from '@/components/ui/button';
import React, { startTransition } from 'react';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-slate-200">
      <div className="flex flex-col gap-4 text-center">
        <h1 className="text-2xl font-bold">Something went wrong</h1>
        <p className="text-red-500">{error.message}</p>
        <Button
          onClick={() =>
            startTransition(() => {
              reset();
            })
          }
          className="bg-blue-600 text-white hover:bg-blue-700"
        >
          Try Again
        </Button>
      </div>
    </div>
  );
}
