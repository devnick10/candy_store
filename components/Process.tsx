import React from 'react';

export default function Process() {
  return (
    <section id="process" className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-amber-600 md:text-4xl">Our Process</h2>
          <div className="mx-auto mb-8 h-1 w-24 rounded-full bg-amber-500"></div>
          <p className="mx-auto max-w-3xl text-lg text-neutral-700">
            Discover how we create our delicious fruity candies from farm to package.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 hidden h-full w-1 -translate-x-1/2 transform bg-amber-200 md:block"></div>

          {/* Process Steps */}
          <div className="space-y-12 md:space-y-0">
            {/* Step 1 */}
            <div className="relative items-center md:grid md:grid-cols-2 md:gap-8">
              <div className="mb-8 md:mb-0 md:pr-12 md:text-right" data-aos="fade-right">
                <div className="absolute right-0 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 translate-x-1/2 transform items-center justify-center rounded-full bg-amber-500 text-white md:flex">
                  1
                </div>
                <span className="mb-2 inline-block rounded-full bg-amber-500 px-3 py-1 text-sm font-bold text-white md:hidden">
                  Step 1
                </span>
                <h3 className="mb-3 text-2xl font-bold text-amber-600">Fruit Selection</h3>
                <p className="text-neutral-700">
                  We carefully select the finest, ripest fruits from trusted farmers.
                </p>
              </div>
              <div className="overflow-hidden rounded-xl shadow-md" data-aos="fade-left">
                <div className="flex h-64 items-center justify-center bg-gradient-to-r from-yellow-100 to-amber-200">
                  <div className="flex h-32 w-32 items-center justify-center rounded-full bg-yellow-300 shadow-md transition-transform hover:scale-110">
                    <span className="text-5xl">🍊</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative items-center md:grid md:grid-cols-2 md:gap-8">
              <div
                className="order-2 overflow-hidden rounded-xl shadow-md md:order-1"
                data-aos="fade-right"
              >
                <div className="flex h-64 items-center justify-center bg-gradient-to-r from-red-100 to-pink-200">
                  <div className="flex h-32 w-32 items-center justify-center rounded-full bg-pink-300 shadow-md transition-transform hover:scale-110">
                    <span className="text-5xl">🧪</span>
                  </div>
                </div>
              </div>
              <div className="order-1 mb-8 md:order-2 md:mb-0 md:pl-12" data-aos="fade-left">
                <div className="absolute left-0 top-1/2 z-10 hidden h-10 w-10 -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full bg-amber-500 text-white md:flex">
                  2
                </div>
                <span className="mb-2 inline-block rounded-full bg-amber-500 px-3 py-1 text-sm font-bold text-white md:hidden">
                  Step 2
                </span>
                <h3 className="mb-3 text-2xl font-bold text-pink-600">Juice Extraction</h3>
                <p className="text-neutral-700">
                  Our gentle extraction process preserves essential flavors and nutrients.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative items-center md:grid md:grid-cols-2 md:gap-8">
              <div className="mb-8 md:mb-0 md:pr-12 md:text-right" data-aos="fade-right">
                <div className="absolute right-0 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 translate-x-1/2 transform items-center justify-center rounded-full bg-amber-500 text-white md:flex">
                  3
                </div>
                <span className="mb-2 inline-block rounded-full bg-amber-500 px-3 py-1 text-sm font-bold text-white md:hidden">
                  Step 3
                </span>
                <h3 className="mb-3 text-2xl font-bold text-amber-600">Recipe Formulation</h3>
                <p className="text-neutral-700">
                  Our master candy chefs blend fruit extracts with natural sweeteners.
                </p>
              </div>
              <div className="overflow-hidden rounded-xl shadow-md" data-aos="fade-left">
                <div className="flex h-64 items-center justify-center bg-gradient-to-r from-amber-100 to-yellow-200">
                  <div className="flex h-32 w-32 items-center justify-center rounded-full bg-amber-300 shadow-md transition-transform hover:scale-110">
                    <span className="text-5xl">📝</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative items-center md:grid md:grid-cols-2 md:gap-8">
              <div
                className="order-2 overflow-hidden rounded-xl shadow-md md:order-1"
                data-aos="fade-right"
              >
                <div className="flex h-64 items-center justify-center bg-gradient-to-r from-orange-100 to-red-200">
                  <div className="flex h-32 w-32 items-center justify-center rounded-full bg-orange-300 shadow-md transition-transform hover:scale-110">
                    <span className="text-5xl">🔥</span>
                  </div>
                </div>
              </div>
              <div className="order-1 mb-8 md:order-2 md:mb-0 md:pl-12" data-aos="fade-left">
                <div className="absolute left-0 top-1/2 z-10 hidden h-10 w-10 -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full bg-amber-500 text-white md:flex">
                  4
                </div>
                <span className="mb-2 inline-block rounded-full bg-amber-500 px-3 py-1 text-sm font-bold text-white md:hidden">
                  Step 4
                </span>
                <h3 className="mb-3 text-2xl font-bold text-orange-600">Cooking Process</h3>
                <p className="text-neutral-700">
                  Cooked at precise temperatures for perfect texture and flavor.
                </p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="relative items-center md:grid md:grid-cols-2 md:gap-8">
              <div className="mb-8 md:mb-0 md:pr-12 md:text-right" data-aos="fade-right">
                <div className="absolute right-0 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 translate-x-1/2 transform items-center justify-center rounded-full bg-amber-500 text-white md:flex">
                  5
                </div>
                <span className="mb-2 inline-block rounded-full bg-amber-500 px-3 py-1 text-sm font-bold text-white md:hidden">
                  Step 5
                </span>
                <h3 className="mb-3 text-2xl font-bold text-green-600">Forming & Cooling</h3>
                <p className="text-neutral-700">
                  Shaped into signature forms and meticulously cooled.
                </p>
              </div>
              <div className="overflow-hidden rounded-xl shadow-md" data-aos="fade-left">
                <div className="flex h-64 items-center justify-center bg-gradient-to-r from-green-100 to-emerald-200">
                  <div className="flex h-32 w-32 items-center justify-center rounded-full bg-green-300 shadow-md transition-transform hover:scale-110">
                    <span className="text-5xl">❄️</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 6 */}
            <div className="relative items-center md:grid md:grid-cols-2 md:gap-8">
              <div
                className="order-2 overflow-hidden rounded-xl shadow-md md:order-1"
                data-aos="fade-right"
              >
                <div className="flex h-64 items-center justify-center bg-gradient-to-r from-blue-100 to-sky-200">
                  <div className="flex h-32 w-32 items-center justify-center rounded-full bg-blue-300 shadow-md transition-transform hover:scale-110">
                    <span className="text-5xl">🔍</span>
                  </div>
                </div>
              </div>
              <div className="order-1 mb-8 md:order-2 md:mb-0 md:pl-12" data-aos="fade-left">
                <div className="absolute left-0 top-1/2 z-10 hidden h-10 w-10 -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full bg-amber-500 text-white md:flex">
                  6
                </div>
                <span className="mb-2 inline-block rounded-full bg-amber-500 px-3 py-1 text-sm font-bold text-white md:hidden">
                  Step 6
                </span>
                <h3 className="mb-3 text-2xl font-bold text-blue-600">Quality Control</h3>
                <p className="text-neutral-700">
                  Each batch is tested for taste, texture, and safety.
                </p>
              </div>
            </div>

            {/* Step 7 */}
            <div className="relative items-center md:grid md:grid-cols-2 md:gap-8">
              <div className="mb-8 md:mb-0 md:pr-12 md:text-right" data-aos="fade-right">
                <div className="absolute right-0 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 translate-x-1/2 transform items-center justify-center rounded-full bg-amber-500 text-white md:flex">
                  7
                </div>
                <span className="mb-2 inline-block rounded-full bg-amber-500 px-3 py-1 text-sm font-bold text-white md:hidden">
                  Step 7
                </span>
                <h3 className="mb-3 text-2xl font-bold text-purple-600">Packaging & Shipping</h3>
                <p className="text-neutral-700">
                  Carefully packaged in eco-friendly materials to preserve freshness.
                </p>
              </div>
              <div className="overflow-hidden rounded-xl shadow-md" data-aos="fade-left">
                <div className="flex h-64 items-center justify-center bg-gradient-to-r from-purple-100 to-violet-200">
                  <div className="flex h-32 w-32 items-center justify-center rounded-full bg-purple-300 shadow-md transition-transform hover:scale-110">
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
