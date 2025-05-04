
export function Products() {
    return (

        <section id="products" className="py-16 md:py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-amber-600 mb-4">Products</h2>
                    <div className="w-24 h-1 bg-amber-500 mx-auto mb-8 rounded-full"></div>
                    <p className="text-lg text-neutral-700 max-w-3xl mx-auto">Explore our delicious range of fruity candies made with natural ingredients and bursting with flavor.</p>
                </div>

                {/* {/* Product Filtering */}                <div className="mb-10">
                    <div className="flex flex-wrap justify-center gap-3 mb-8">
                        <button className="filter-btn active px-5 py-2 rounded-full bg-amber-500 text-white hover:bg-amber-600 transition-all duration-300" data-filter="all">All Flavors</button>
                        <button className="filter-btn px-5 py-2 rounded-full bg-neutral-200 text-neutral-700 hover:bg-amber-500 hover:text-white transition-all duration-300" data-filter="citrus">Citrus</button>
                        <button className="filter-btn px-5 py-2 rounded-full bg-neutral-200 text-neutral-700 hover:bg-amber-500 hover:text-white transition-all duration-300" data-filter="berry">Berry</button>
                        <button className="filter-btn px-5 py-2 rounded-full bg-neutral-200 text-neutral-700 hover:bg-amber-500 hover:text-white transition-all duration-300" data-filter="tropical">Tropical</button>
                        <button className="filter-btn px-5 py-2 rounded-full bg-neutral-200 text-neutral-700 hover:bg-amber-500 hover:text-white transition-all duration-300" data-filter="assorted">Assorted</button>
                    </div>
                </div>

                {/* {/* Products Grid */}                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {/* {/* Product 1 */}                    <div className="product-card group" data-category="citrus">
                        <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="h-64 bg-gradient-to-br from-yellow-100 to-amber-200 flex items-center justify-center p-6 relative overflow-hidden">
                                {/* {/* Product Image Placeholder */}                                <div className="relative z-10 w-full h-full flex items-center justify-center">
                                    <div className="w-40 h-40 rounded-full bg-yellow-300 flex items-center justify-center shadow-inner transform transition-transform group-hover:scale-110 duration-500">
                                        <span className="text-4xl">🍋</span>
                                    </div>
                                </div>
                                {/* {/* Background elements */}                                <div className="absolute top-0 left-0 w-20 h-20 bg-yellow-200 rounded-full opacity-40 -translate-x-6 -translate-y-6"></div>
                                <div className="absolute bottom-0 right-0 w-32 h-32 bg-amber-200 rounded-full opacity-60 translate-x-10 translate-y-10"></div>
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-xl font-bold text-amber-700">Lemon Drops</h3>
                                    <span className="bg-amber-100 text-amber-700 px-2 py-1 rounded text-sm">Citrus</span>
                                </div>
                                <p className="text-neutral-600 mb-4">Tangy lemon candies that burst with refreshing citrus flavor. Made with real lemon extract.</p>
                                <div className="flex justify-between items-center">
                                    <span className="text-amber-500 font-bold">$4.99</span>
                                    <button className="view-product px-4 py-2 bg-amber-500 text-white rounded-full hover:bg-amber-600 transition-colors duration-300" data-product="lemon-drops">View Details</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* {/* Product 2 */}                    <div className="product-card group" data-category="berry">
                        <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="h-64 bg-gradient-to-br from-red-100 to-pink-200 flex items-center justify-center p-6 relative overflow-hidden">
                                {/* Product Image Placeholder */}
                                <div className="relative z-10 w-full h-full flex items-center justify-center">
                                    <div className="w-40 h-40 rounded-full bg-red-300 flex items-center justify-center shadow-inner transform transition-transform group-hover:scale-110 duration-500">
                                        <span className="text-4xl">🍓</span>
                                    </div>
                                </div>
                                {/* Background elements */}
                                <div className="absolute top-0 left-0 w-20 h-20 bg-red-200 rounded-full opacity-40 -translate-x-6 -translate-y-6"></div>
                                <div className="absolute bottom-0 right-0 w-32 h-32 bg-pink-200 rounded-full opacity-60 translate-x-10 translate-y-10"></div>
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-xl font-bold text-pink-700">Strawberry Delights</h3>
                                    <span className="bg-pink-100 text-pink-700 px-2 py-1 rounded text-sm">Berry</span>
                                </div>
                                <p className="text-neutral-600 mb-4">Sweet strawberry candies with a juicy center. Each piece captures the essence of fresh berries.</p>
                                <div className="flex justify-between items-center">
                                    <span className="text-amber-500 font-bold">$4.99</span>
                                    <button className="view-product px-4 py-2 bg-amber-500 text-white rounded-full hover:bg-amber-600 transition-colors duration-300" data-product="strawberry-delights">View Details</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* {/* Product 3 */}                    <div className="product-card group" data-category="tropical">
                        <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="h-64 bg-gradient-to-br from-green-100 to-yellow-200 flex items-center justify-center p-6 relative overflow-hidden">
                                {/* Product Image Placeholder */}
                                <div className="relative z-10 w-full h-full flex items-center justify-center">
                                    <div className="w-40 h-40 rounded-full bg-green-300 flex items-center justify-center shadow-inner transform transition-transform group-hover:scale-110 duration-500">
                                        <span className="text-4xl">🥭</span>
                                    </div>
                                </div>
                                {/* Background elements */}
                                <div className="absolute top-0 left-0 w-20 h-20 bg-green-200 rounded-full opacity-40 -translate-x-6 -translate-y-6"></div>
                                <div className="absolute bottom-0 right-0 w-32 h-32 bg-yellow-200 rounded-full opacity-60 translate-x-10 translate-y-10"></div>
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-xl font-bold text-green-700">Mango Tango</h3>
                                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm">Tropical</span>
                                </div>
                                <p className="text-neutral-600 mb-4">Tropical mango-flavored candies that transport you to paradise with each bite.</p>
                                <div className="flex justify-between items-center">
                                    <span className="text-amber-500 font-bold">$5.49</span>
                                    <button className="view-product px-4 py-2 bg-amber-500 text-white rounded-full hover:bg-amber-600 transition-colors duration-300" data-product="mango-tango">View Details</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* {/* Product 4 */}                    <div className="product-card group" data-category="assorted">
                        <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="h-64 bg-gradient-to-br from-purple-100 to-pink-200 flex items-center justify-center p-6 relative overflow-hidden">
                                {/* Product Image Placeholder */}
                                <div className="relative z-10 w-full h-full flex items-center justify-center">
                                    <div className="w-40 h-40 rounded-full bg-purple-300 flex items-center justify-center shadow-inner transform transition-transform group-hover:scale-110 duration-500">
                                        <span className="text-4xl">🍬</span>
                                    </div>
                                </div>
                                {/* Background elements */}
                                <div className="absolute top-0 left-0 w-20 h-20 bg-purple-200 rounded-full opacity-40 -translate-x-6 -translate-y-6"></div>
                                <div className="absolute bottom-0 right-0 w-32 h-32 bg-pink-200 rounded-full opacity-60 translate-x-10 translate-y-10"></div>
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-xl font-bold text-purple-700">Fruit Medley</h3>
                                    <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-sm">Assorted</span>
                                </div>
                                <p className="text-neutral-600 mb-4">An assortment of our most popular fruit flavors. Perfect for those who love variety.</p>
                                <div className="flex justify-between items-center">
                                    <span className="text-amber-500 font-bold">$6.99</span>
                                    <button className="view-product px-4 py-2 bg-amber-500 text-white rounded-full hover:bg-amber-600 transition-colors duration-300" data-product="fruit-medley">View Details</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* {/* Product 5 */}                    <div className="product-card group" data-category="citrus">
                        <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="h-64 bg-gradient-to-br from-orange-100 to-amber-200 flex items-center justify-center p-6 relative overflow-hidden">
                                {/* Product Image Placeholder */}
                                <div className="relative z-10 w-full h-full flex items-center justify-center">
                                    <div className="w-40 h-40 rounded-full bg-orange-300 flex items-center justify-center shadow-inner transform transition-transform group-hover:scale-110 duration-500">
                                        <span className="text-4xl">🍊</span>
                                    </div>
                                </div>
                                {/* {/* Background elements */}                                <div className="absolute top-0 left-0 w-20 h-20 bg-orange-200 rounded-full opacity-40 -translate-x-6 -translate-y-6"></div>
                                <div className="absolute bottom-0 right-0 w-32 h-32 bg-amber-200 rounded-full opacity-60 translate-x-10 translate-y-10"></div>
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-xl font-bold text-orange-700">Orange Zest</h3>
                                    <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded text-sm">Citrus</span>
                                </div>
                                <p className="text-neutral-600 mb-4">Bright orange candies with a refreshing citrus zing. Made with real orange oil.</p>
                                <div className="flex justify-between items-center">
                                    <span className="text-amber-500 font-bold">$4.99</span>
                                    <button className="view-product px-4 py-2 bg-amber-500 text-white rounded-full hover:bg-amber-600 transition-colors duration-300" data-product="orange-zest">View Details</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* {/* Product 6 */}                    <div className="product-card group" data-category="berry">
                        <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="h-64 bg-gradient-to-br from-blue-100 to-purple-200 flex items-center justify-center p-6 relative overflow-hidden">
                                {/* {/* Product Image Placeholder */}                                <div className="relative z-10 w-full h-full flex items-center justify-center">
                                    <div className="w-40 h-40 rounded-full bg-blue-300 flex items-center justify-center shadow-inner transform transition-transform group-hover:scale-110 duration-500">
                                        <span className="text-4xl">🫐</span>
                                    </div>
                                </div>
                                {/* {/* Background elements */}                                <div className="absolute top-0 left-0 w-20 h-20 bg-blue-200 rounded-full opacity-40 -translate-x-6 -translate-y-6"></div>
                                <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-200 rounded-full opacity-60 translate-x-10 translate-y-10"></div>
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-xl font-bold text-blue-700">Blueberry Burst</h3>
                                    <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-sm">Berry</span>
                                </div>
                                <p className="text-neutral-600 mb-4">Sweet blueberry candies with a juicy center that bursts with authentic berry flavor.</p>
                                <div className="flex justify-between items-center">
                                    <span className="text-amber-500 font-bold">$5.49</span>
                                    <button className="view-product px-4 py-2 bg-amber-500 text-white rounded-full hover:bg-amber-600 transition-colors duration-300" data-product="blueberry-burst">View Details</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* {/* Product 7 */}                    <div className="product-card group" data-category="tropical">
                        <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="h-64 bg-gradient-to-br from-pink-100 to-red-200 flex items-center justify-center p-6 relative overflow-hidden">
                                {/* {/* Product Image Placeholder */}                                <div className="relative z-10 w-full h-full flex items-center justify-center">
                                    <div className="w-40 h-40 rounded-full bg-pink-300 flex items-center justify-center shadow-inner transform transition-transform group-hover:scale-110 duration-500">
                                        <span className="text-4xl">🍉</span>
                                    </div>
                                </div>
                                {/* {/* Background elements */}                                <div className="absolute top-0 left-0 w-20 h-20 bg-pink-200 rounded-full opacity-40 -translate-x-6 -translate-y-6"></div>
                                <div className="absolute bottom-0 right-0 w-32 h-32 bg-red-200 rounded-full opacity-60 translate-x-10 translate-y-10"></div>
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-xl font-bold text-pink-700">Watermelon Wonder</h3>
                                    <span className="bg-pink-100 text-pink-700 px-2 py-1 rounded text-sm">Tropical</span>
                                </div>
                                <p className="text-neutral-600 mb-4">Refreshing watermelon candies that capture summer&apos;s sweetness in every piece.</p>
                                <div className="flex justify-between items-center">
                                    <span className="text-amber-500 font-bold">$4.99</span>
                                    <button className="view-product px-4 py-2 bg-amber-500 text-white rounded-full hover:bg-amber-600 transition-colors duration-300" data-product="watermelon-wonder">View Details</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* {/* Product 8 */}                    <div className="product-card group" data-category="assorted">
                        <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="h-64 bg-gradient-to-br from-amber-100 to-red-200 flex items-center justify-center p-6 relative overflow-hidden">
                                {/* {/* Product Image Placeholder  */}
                                <div className="relative z-10 w-full h-full flex items-center justify-center">
                                    <div className="w-40 h-40 rounded-full bg-amber-300 flex items-center justify-center shadow-inner transform transition-transform group-hover:scale-110 duration-500">
                                        <span className="text-4xl">🍭</span>
                                    </div>
                                </div>
                                {/* Background elements */}
                                <div className="absolute top-0 left-0 w-20 h-20 bg-amber-200 rounded-full opacity-40 -translate-x-6 -translate-y-6"></div>
                                <div className="absolute bottom-0 right-0 w-32 h-32 bg-red-200 rounded-full opacity-60 translate-x-10 translate-y-10"></div>
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-xl font-bold text-amber-700">Berry Bonanza</h3>
                                    <span className="bg-amber-100 text-amber-700 px-2 py-1 rounded text-sm">Assorted</span>
                                </div>
                                <p className="text-neutral-600 mb-4">A mix of our premium berry flavors including strawberry, blueberry, and raspberry.</p>
                                <div className="flex justify-between items-center">
                                    <span className="text-amber-500 font-bold">$6.49</span>
                                    <button className="view-product px-4 py-2 bg-amber-500 text-white rounded-full hover:bg-amber-600 transition-colors duration-300" data-product="berry-bonanza">View Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* See All Products Button */}
                <div className="text-center mt-12">
                    <button id="see-all-btn" className="px-8 py-3 bg-amber-500 text-white rounded-full hover:bg-amber-600 transition-colors duration-300 inline-flex items-center gap-2">
                        <span>Browse All Products</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                        </svg>
                    </button>
                </div>
            </div>

            {/* Product Detail Modal */}
            {/* TODO: add Onclick flex default is hidden */}
            <div id="product-modal" className="fixed inset-0 z-50 hidden items-center justify-center " aria-modal="true" aria-hidden="true">
                {/* Modal backdrop */}
                <div id="product-modal-backdrop" className="absolute inset-0 bg-black bg-opacity-50 transition-opacity"></div>

                {/* Modal content */}
                <div className="relative bg-white rounded-xl max-w-4xl mx-4 shadow-2xl transform transition-all max-h-[90vh] overflow-auto">
                    <button id="close-product-modal" className="absolute top-4 right-4 text-neutral-500 hover:text-neutral-800 focus:outline-none z-10" aria-label="Close modal">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinejoin="round"  strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>

                    <div className="flex flex-col md:flex-row">
                        <div className="w-full md:w-1/2 p-6 md:p-8 bg-gradient-to-br from-amber-100 to-yellow-200">
                            <div className="w-full h-64 md:h-80 flex items-center justify-center">
                                <div id="product-image" className="w-48 h-48 md:w-64 md:h-64 rounded-full flex items-center justify-center shadow-lg bg-amber-300">
                                    <span className="text-6xl" id="product-emoji">🍬</span>
                                </div>
                            </div>
                        </div>

                        <div className="w-full md:w-1/2 p-6 md:p-8">
                            <span id="product-category" className="inline-block px-3 py-1 rounded-full text-sm font-medium mb-4">Category</span>
                            <h3 id="product-title" className="text-2xl md:text-3xl font-bold mb-4">Product Name</h3>

                            <div className="mb-6">
                                <div className="flex items-center mb-2">
                                    <div className="flex text-amber-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>
                                    </div>
                                    <span className="ml-2 text-neutral-700">4.9 (120 reviews)</span>
                                </div>
                                <p id="product-price" className="text-2xl font-bold text-amber-500">$4.99</p>
                            </div>

                            <div className="mb-6">
                                <h4 className="text-lg font-semibold mb-2">Description</h4>
                                <p id="product-description" className="text-neutral-700 mb-4">Product description goes here.</p>

                                <div className="flex flex-col gap-2 mb-4">
                                    <div className="flex items-center">
                                        <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinejoin="round"  strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                        <span className="text-neutral-700">Natural fruit flavors</span>
                                    </div>
                                    <div className="flex items-center">
                                        <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinejoin="round"  strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                        <span className="text-neutral-700">No artificial colors</span>
                                    </div>
                                    <div className="flex items-center">
                                        <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinejoin="round"  strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                        <span className="text-neutral-700">Premium ingredients</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <div className="flex border rounded-full overflow-hidden">
                                    <button className="quantity-btn px-4 py-2 bg-neutral-100 text-neutral-700 hover:bg-neutral-200 transition-colors" data-action="decrease">-</button>
                                    <input type="number" id="quantity-input" className="w-12 text-center border-none focus:ring-0" defaultValue="1" min="1" max="99" readOnly/>
                                    <button className="quantity-btn px-4 py-2 bg-neutral-100 text-neutral-700 hover:bg-neutral-200 transition-colors" data-action="increase">+</button>
                                </div>
                                <button className="add-to-cart px-6 py-2 bg-amber-500 text-white rounded-full hover:bg-amber-600 transition-colors duration-300 flex-grow flex items-center justify-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                                    </svg>
                                    <span>Add to Cart</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
