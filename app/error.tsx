'use client'
import { Button } from '@/components/ui/button'
import React from 'react'

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {
  return (
    <div className='w-full h-screen flex justify-center items-center bg-slate-200'>
      <div className='flex flex-col gap-4 text-center'>
        <h1 className='text-2xl font-bold'>Something went wrong</h1>
        <p className='text-red-500'>{error.message}</p>
        <Button 
          onClick={() => reset()}
          className='bg-blue-600 hover:bg-blue-700 text-white'
        >
          Try Again
        </Button>
      </div>
    </div>
  )
}
