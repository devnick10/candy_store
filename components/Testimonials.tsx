import Image from 'next/image'
import React from 'react'

function Testimonials() {
  return (
    <div>
                    <section className="bg-rose-900 py-24 text-white">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-3xl text-center">
                        <span className="mb-2 inline-block rounded-full bg-white/10 px-4 py-1 text-xs font-semibold text-white">
                            SWEET REVIEWS
                        </span>
                        <h2 className="mb-12 font-serif text-3xl font-bold md:text-4xl">What Candy Lovers Say</h2>
                        <div className="relative rounded-2xl bg-rose-800 p-8 shadow-2xl">
                            <svg
                                className="absolute -left-4 -top-4 h-12 w-12 text-fuchsia-400"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                            </svg>
                            <p className="mb-6 text-lg italic text-white/90">
                            &ldquo;These are hands down the best fruity candies I&apos;ve ever had! The flavors are so intense and natural -
                                the mango tastes like biting into a ripe fruit. My kids beg for them, and I love that they&apos;re made with
                                better ingredients than most candies.&rdquo;
                            </p>
                            <div className="flex items-center justify-center">
                                <div className="mr-4 h-12 w-12 overflow-hidden rounded-full">
                                    <Image
                                        src="/customer.jpg"
                                        alt="Happy customer"
                                        width={48}
                                        height={48}
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                                <div className="text-left">
                                    <p className="font-medium">Jessica Martinez</p>
                                    <p className="text-sm text-white/70">Mom & Candy Connoisseur</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </div>
  )
}

export default Testimonials