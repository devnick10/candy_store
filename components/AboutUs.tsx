
export default function AboutUs() {
    return (<>
        <section id="about" className="py-16 md:py-24 bg-amber-50">
            <div className='container mx-auto px-4'>
                <div className='text-center mb-12'>
                    <h2 className='text-3xl md:text-4xl font-bold text-amber-600 mb-4'>About</h2>
                <div className='w-24 h-1 bg-amber-500 mx-auto mb-4 rounded-full'></div>
                    <p className='text-lg text-neutral-700 max-w-3xl mx-auto'>Discover the sweet legacy of Ashoka candies, crafted with care by Rani Agrofood.</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
                    <div className='order-2 md:order-1'>
                        <h3 className="text-2xl font-bold text-pink-500 mb-4">Our Sweet Journey</h3>
                        <p className="text-neutral-700 mb-4">
                            Since our founding, Ashoka has dedicated itself to creating delightful fruity candies that bring joy to candy lovers everywhere. Our commitment to quality and authentic flavors sets us apart.
                        </p>
                        <p className="text-neutral-700 mb-6">
                            At Rani Agrofood, we source only the finest ingredients and use traditional recipes enhanced by modern techniques to deliver perfect taste in every piece.
                        </p>
                        <div className="grid grid-cols-2 w-full gap-4 mb-8">
                            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                                <span className="text-3xl text-amber-500 block mb-2">25+</span>
                                <p className="text-neutral-600 font-medium">Fruit Flavors</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                                <span className="text-3xl text-amber-500 block mb-2">30+</span>
                                <p className="text-neutral-600 font-medium">Years Experience</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                                <span className="text-3xl text-amber-500 block mb-2">100%</span>
                                <p className="text-neutral-600 font-medium">Natural Flavors</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                                <span className="text-3xl text-amber-500 block mb-2">50+</span>
                                <p className="text-neutral-600 font-medium">Countries Reached</p>
                            </div>
                        </div>
                        <button id="read-more-btn" className="px-6 py-3 bg-amber-500 text-white rounded-full hover:bg-amber-600 transition duration-300 flex items-center gap-2">
                            <span>Read Our Story</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                            </svg>
                        </button>
                    </div>
                    <div className="order-1 md:order-2 relative">
                        <div className="relative mx-auto max-w-md">
                             {/* Main image with decorative elements  */}
                            <div className="rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105 duration-500">
                                 {/* Replace with actual image if available  */}
                                <div className="w-full h-96 bg-gradient-to-br from-amber-200 via-pink-200 to-red-200 rounded-lg flex items-center justify-center">
                                    <div className="text-center p-8">
                                        <span className="text-6xl mb-4 block">🏭</span>
                                        <h3 className="text-2xl font-bold text-amber-700">Rani Agrofood</h3>
                                        <p className="text-amber-800 mt-2">Our candy manufacturing facility</p>
                                    </div>
                                </div>
                            </div>

                            {/*  Decorative element 1  */}
                            <div className="absolute -top-6 -right-6 w-24 h-24 bg-yellow-200 rounded-full flex items-center justify-center shadow-md z-10 animate-pulse">
                                <span className="text-2xl">🍭</span>
                            </div>

                             {/* Decorative element 2 */}
                            <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-pink-200 rounded-full flex items-center justify-center shadow-md z-10 animate-pulse" style={{animationDelay:"0.5"}}>
                                <span className="text-2xl">🍬</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
    )
}
