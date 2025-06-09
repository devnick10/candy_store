import Link from "next/link";

export default function HeroSection() {
    return (
        <section id="hero" className="relative overflow-hidden pt-28 pb-24 ">

            <div className="absolute inset-0 overflow-hidden">
                <div className="candy-circle animate-float-slow bg-amber-100 rounded-full w-32 h-32 absolute top-1/4 left-1/4 opacity-30"></div>
                <div className="candy-circle animate-float bg-red-100 rounded-full w-48 h-48 absolute bottom-1/3 right-1/4 opacity-30"></div>
                <div className="candy-circle animate-float-slow-reverse bg-yellow-100 rounded-full w-40 h-40 absolute bottom-1/4 left-1/3 opacity-30"></div>
            </div>
            <div className="container  mx-auto px-4 py-1 relative z-10 ">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-8">
                    <div className="w-full md:w-1/2 pt-4 md:pt-10 transition-all duration-700 opacity-100 translate-y-0">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-amber-600 mb-4 tracking-tight leading-tight">Delightful <span className="text-pink-500">Fruity</span> Treats
                        </h1>
                        <p className="text-lg md:text-xl mb-6 text-neutral-700 max-w-xl">

                            Experience the burst of natural fruit flavors in every Ashoka candy. Handcrafted with care by Rani Agrofood.

                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link href={"#products"} className="inline-block px-8 py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-full transition-all transform hover:scale-105 shadow-md">
                                Explore Flavors
                            </Link>
                            <Link href={"#contact"} className="inline-block px-8 py-3 border-2 border-amber-500 text-amber-600 hover:bg-amber-50 font-semibold rounded-full transition-all">
                                Order Now
                            </Link>
                        </div>
                        <div className="flex flex-wrap gap-4 mt-8">
                            <div className="badge px-4 py-2 bg-white rounded-full shadow-md flex items-center gap-2 animate-float-slow">
                                <span className="text-green-500 text-xl">✓</span>
                                <span className="text-sm font-medium">100% Natural Flavors</span>
                            </div>
                            <div className="badge px-4 py-2 bg-white rounded-full shadow-md flex items-center gap-2 animate-float">
                                <span className="text-amber-500 text-xl">★</span>
                                <span className="text-sm font-medium">Premium Quality</span>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 relative transition-all duration-700 opacity-100 translate-y-0" data-aos="fade-left">
                        <div className="relative candy-animation">
                            {/* <!-- Main candy image --> */}
                            <div className="candy-main transform transition-transform hover:rotate-3 hover:scale-105 duration-500" style={{ transform: ` perspective(1000px) rotateX(0deg) rotateY(0deg)` }}>
                                <div className="w-full h-full max-w-lg mx-auto rounded-2xl overflow-hidden shadow-xl">
                                    {/* <!-- No actual image available, using colored div --> */}
                                    <div className="w-full h-96 bg-gradient-to-br from-amber-200 via-pink-200 to-yellow-200 rounded-2xl flex items-center justify-center">
                                        <div className="text-center p-8">
                                            <span className="text-6xl mb-4 block">🍬</span>
                                            <h3 className="text-3xl font-bold text-amber-600">Ashoka Candies</h3>
                                            <p className="text-amber-700 mt-2">Burst of fruity goodness</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Floating candy elements --> */}
                            <div className="absolute -right-4 top-20 animate-float-slow">
                                <div className="w-20 h-20 bg-pink-300 rounded-full flex items-center justify-center shadow-md transform rotate-12">
                                    <span className="text-2xl">🍓</span>
                                </div>
                            </div>
                            <div className="absolute -left-4 bottom-24 animate-float">
                                <div className="w-16 h-16 bg-yellow-300 rounded-full flex items-center justify-center shadow-md transform -rotate-12">
                                    <span className="text-2xl">🍋</span>
                                </div>
                            </div>
                            <div className="absolute right-20 bottom-8 animate-float-reverse">
                                <div className="w-14 h-14 bg-green-300 rounded-full flex items-center justify-center shadow-md">
                                    <span className="text-2xl">🍏</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}