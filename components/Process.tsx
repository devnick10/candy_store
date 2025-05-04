import React from 'react';

export default function Process() {
  return (
    <section id="process" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-600 mb-4">Our Process</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-neutral-700 max-w-3xl mx-auto">
            Discover how we create our delicious fruity candies from farm to package.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 h-full w-1 bg-amber-200 transform -translate-x-1/2"></div>

          {/* Process Steps */}
          <div className="space-y-12 md:space-y-0">
            {/* Step 1 */}
            <div className="md:grid md:grid-cols-2 md:gap-8 items-center relative">
              <div className="md:text-right md:pr-12 mb-8 md:mb-0" data-aos="fade-right">
                <div className="hidden md:flex absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-amber-500 text-white items-center justify-center z-10">1</div>
                <span className="inline-block md:hidden bg-amber-500 text-white text-sm font-bold px-3 py-1 rounded-full mb-2">Step 1</span>
                <h3 className="text-2xl font-bold text-amber-600 mb-3">Fruit Selection</h3>
                <p className="text-neutral-700">We carefully select the finest, ripest fruits from trusted farmers.</p>
              </div>
              <div className="rounded-xl overflow-hidden shadow-md" data-aos="fade-left">
                <div className="bg-gradient-to-r from-yellow-100 to-amber-200 h-64 flex items-center justify-center">
                  <div className="w-32 h-32 bg-yellow-300 rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform">
                    <span className="text-5xl">🍊</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="md:grid md:grid-cols-2 md:gap-8 items-center relative">
              <div className="order-2 md:order-1 rounded-xl overflow-hidden shadow-md" data-aos="fade-right">
                <div className="bg-gradient-to-r from-red-100 to-pink-200 h-64 flex items-center justify-center">
                  <div className="w-32 h-32 bg-pink-300 rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform">
                    <span className="text-5xl">🧪</span>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2 md:pl-12 mb-8 md:mb-0" data-aos="fade-left">
                <div className="hidden md:flex absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-amber-500 text-white items-center justify-center z-10">2</div>
                <span className="inline-block md:hidden bg-amber-500 text-white text-sm font-bold px-3 py-1 rounded-full mb-2">Step 2</span>
                <h3 className="text-2xl font-bold text-pink-600 mb-3">Juice Extraction</h3>
                <p className="text-neutral-700">Our gentle extraction process preserves essential flavors and nutrients.</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="md:grid md:grid-cols-2 md:gap-8 items-center relative">
              <div className="md:text-right md:pr-12 mb-8 md:mb-0" data-aos="fade-right">
                <div className="hidden md:flex absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-amber-500 text-white items-center justify-center z-10">3</div>
                <span className="inline-block md:hidden bg-amber-500 text-white text-sm font-bold px-3 py-1 rounded-full mb-2">Step 3</span>
                <h3 className="text-2xl font-bold text-amber-600 mb-3">Recipe Formulation</h3>
                <p className="text-neutral-700">Our master candy chefs blend fruit extracts with natural sweeteners.</p>
              </div>
              <div className="rounded-xl overflow-hidden shadow-md" data-aos="fade-left">
                <div className="bg-gradient-to-r from-amber-100 to-yellow-200 h-64 flex items-center justify-center">
                  <div className="w-32 h-32 bg-amber-300 rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform">
                    <span className="text-5xl">📝</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="md:grid md:grid-cols-2 md:gap-8 items-center relative">
              <div className="order-2 md:order-1 rounded-xl overflow-hidden shadow-md" data-aos="fade-right">
                <div className="bg-gradient-to-r from-orange-100 to-red-200 h-64 flex items-center justify-center">
                  <div className="w-32 h-32 bg-orange-300 rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform">
                    <span className="text-5xl">🔥</span>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2 md:pl-12 mb-8 md:mb-0" data-aos="fade-left">
                <div className="hidden md:flex absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-amber-500 text-white items-center justify-center z-10">4</div>
                <span className="inline-block md:hidden bg-amber-500 text-white text-sm font-bold px-3 py-1 rounded-full mb-2">Step 4</span>
                <h3 className="text-2xl font-bold text-orange-600 mb-3">Cooking Process</h3>
                <p className="text-neutral-700">Cooked at precise temperatures for perfect texture and flavor.</p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="md:grid md:grid-cols-2 md:gap-8 items-center relative">
              <div className="md:text-right md:pr-12 mb-8 md:mb-0" data-aos="fade-right">
                <div className="hidden md:flex absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-amber-500 text-white items-center justify-center z-10">5</div>
                <span className="inline-block md:hidden bg-amber-500 text-white text-sm font-bold px-3 py-1 rounded-full mb-2">Step 5</span>
                <h3 className="text-2xl font-bold text-green-600 mb-3">Forming & Cooling</h3>
                <p className="text-neutral-700">Shaped into signature forms and meticulously cooled.</p>
              </div>
              <div className="rounded-xl overflow-hidden shadow-md" data-aos="fade-left">
                <div className="bg-gradient-to-r from-green-100 to-emerald-200 h-64 flex items-center justify-center">
                  <div className="w-32 h-32 bg-green-300 rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform">
                    <span className="text-5xl">❄️</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 6 */}
            <div className="md:grid md:grid-cols-2 md:gap-8 items-center relative">
              <div className="order-2 md:order-1 rounded-xl overflow-hidden shadow-md" data-aos="fade-right">
                <div className="bg-gradient-to-r from-blue-100 to-sky-200 h-64 flex items-center justify-center">
                  <div className="w-32 h-32 bg-blue-300 rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform">
                    <span className="text-5xl">🔍</span>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2 md:pl-12 mb-8 md:mb-0" data-aos="fade-left">
                <div className="hidden md:flex absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-amber-500 text-white items-center justify-center z-10">6</div>
                <span className="inline-block md:hidden bg-amber-500 text-white text-sm font-bold px-3 py-1 rounded-full mb-2">Step 6</span>
                <h3 className="text-2xl font-bold text-blue-600 mb-3">Quality Control</h3>
                <p className="text-neutral-700">Each batch is tested for taste, texture, and safety.</p>
              </div>
            </div>

            {/* Step 7 */}
            <div className="md:grid md:grid-cols-2 md:gap-8 items-center relative">
              <div className="md:text-right md:pr-12 mb-8 md:mb-0" data-aos="fade-right">
                <div className="hidden md:flex absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-amber-500 text-white items-center justify-center z-10">7</div>
                <span className="inline-block md:hidden bg-amber-500 text-white text-sm font-bold px-3 py-1 rounded-full mb-2">Step 7</span>
                <h3 className="text-2xl font-bold text-purple-600 mb-3">Packaging & Shipping</h3>
                <p className="text-neutral-700">Carefully packaged in eco-friendly materials to preserve freshness.</p>
              </div>
              <div className="rounded-xl overflow-hidden shadow-md" data-aos="fade-left">
                <div className="bg-gradient-to-r from-purple-100 to-violet-200 h-64 flex items-center justify-center">
                  <div className="w-32 h-32 bg-purple-300 rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform">
                    <span className="text-5xl">📦</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Video CTA
        <div className="mt-16 text-center">
          <button className="inline-flex items-center px-6 py-3 bg-amber-500 text-white rounded-full hover:bg-amber-600 transition-colors">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
            Watch Our Process
          </button>
        </div> */}
      </div>
    </section>
  );
}