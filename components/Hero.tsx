import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <div>
        <section className="relative mt-16 flex min-h-[90vh] items-center bg-gradient-to-b from-pink-50 to-rose-100 pt-8">
                <div className="absolute right-0 top-0 -z-10 h-full w-1/2 bg-[url('/fruit-pattern.png')] bg-cover bg-center opacity-15 md:block"></div>
                <div className="container mx-auto grid gap-8 px-4 md:grid-cols-2">
                    <div className="flex flex-col justify-center">
                        <div className="mb-2 inline-block rounded-full bg-rose-200 px-4 py-1 text-xs font-semibold text-rose-800">
                            NATURAL FRUIT FLAVORS
                        </div>
                        <h1 className="mb-6 font-serif text-5xl font-bold leading-tight text-rose-900 md:text-6xl lg:text-7xl">
                            <span className="text-fuchsia-600">Juicy</span>
                            <br />
                            Fruity Candy
                            <br />
                            Happiness!
                        </h1>
                        <p className="mb-8 max-w-md text-lg text-rose-900/80">
                            Bursting with real fruit flavors! Our candies are made with natural extracts for a taste that&apos;s pure, sweet joy.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Button className="bg-fuchsia-600 text-white hover:bg-rose-700">
                                Taste the Flavors <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                            <Button variant="outline" className="border-rose-700 text-rose-700 hover:bg-rose-700 hover:text-white">
                                How We Make Them
                            </Button>
                        </div>
                        <div className="mt-12 flex items-center">
                            <p className="text-sm text-rose-900/70">Contact us:</p>
                            <a
                                href="mailto:hello@juicycandy.com"
                                className="ml-4 text-sm font-medium text-rose-900 underline decoration-fuchsia-600 decoration-2 underline-offset-4 hover:text-fuchsia-600"
                            >
                                raniagrofood@gmail.com
                            </a>
                        </div>
                    </div>
                    <div className="  relative hidden md:block">
                        <div className="absolute -left-20 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-fuchsia-400/20"></div>
                        <div className="absolute -right-10 top-20 h-40 w-40 rounded-full bg-rose-400/10"></div>
                        <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-3xl border-8 border-white shadow-2xl">
                            <div className="relative flex justify-center items-center h-full w-full pt-8">
                                <Image
                                    src="/hero-image.png"
                                    alt="Colorful fruity candies"
                                    height={2000}
                                    width={2000}
                                    className="object-cover "
                                    priority
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </section>
    </div>
  )
}