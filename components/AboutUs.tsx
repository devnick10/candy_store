'use client';

import { useState } from 'react';

export default function AboutUs() {
  const [modelIsOpen, setModelIsOpen] = useState(false);

  return (
    <>
      <section id="about" className="bg-amber-50 py-10 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-amber-600 md:text-4xl">About</h2>
            <div className="mx-auto mb-4 h-1 w-24 rounded-full bg-amber-500"></div>
            <p className="mx-auto max-w-3xl text-lg text-neutral-700">
              Discover the sweet legacy of Ashoka candies, crafted with care by Rani Agrofood.
            </p>
          </div>
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <div className="order-2 md:order-1">
              <h3 className="mb-4 text-2xl font-bold text-pink-500">Our Sweet Journey</h3>
              <p className="mb-4 text-neutral-700">
                Since our founding, Ashoka has dedicated itself to creating delightful fruity
                candies that bring joy to candy lovers everywhere. Our commitment to quality and
                authentic flavors sets us apart.
              </p>
              <p className="mb-6 text-neutral-700">
                At Rani Agrofood, we source only the finest ingredients and use traditional recipes
                enhanced by modern techniques to deliver perfect taste in every piece.
              </p>
              <div className="mb-8 grid w-full grid-cols-2 gap-4">
                <div className="rounded-lg bg-white p-4 text-center shadow-sm">
                  <span className="mb-2 block text-3xl text-amber-500">25+</span>
                  <p className="font-medium text-neutral-600">Fruit Flavors</p>
                </div>
                <div className="rounded-lg bg-white p-4 text-center shadow-sm">
                  <span className="mb-2 block text-3xl text-amber-500">30+</span>
                  <p className="font-medium text-neutral-600">Years Experience</p>
                </div>
                <div className="rounded-lg bg-white p-4 text-center shadow-sm">
                  <span className="mb-2 block text-3xl text-amber-500">100%</span>
                  <p className="font-medium text-neutral-600">Natural Flavors</p>
                </div>
                <div className="rounded-lg bg-white p-4 text-center shadow-sm">
                  <span className="mb-2 block text-3xl text-amber-500">50+</span>
                  <p className="font-medium text-neutral-600">Countries Reached</p>
                </div>
              </div>
              <button
                onClick={() => setModelIsOpen(true)}
                id="read-more-btn"
                className="flex items-center gap-2 rounded-full bg-amber-500 px-6 py-3 text-white transition duration-300 hover:bg-amber-600"
              >
                <span>Read Our Story</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="relative order-1 md:order-2">
              <div className="relative mx-auto max-w-md">
                {/* Main image with decorative elements  */}
                <div className="transform overflow-hidden rounded-lg shadow-lg transition-transform duration-500 hover:scale-105">
                  {/* Replace with actual image if available  */}
                  <div className="flex h-96 w-full items-center justify-center rounded-lg bg-gradient-to-br from-amber-200 via-pink-200 to-red-200">
                    <div className="p-8 text-center">
                      <span className="mb-4 block text-6xl">🏭</span>
                      <h3 className="text-2xl font-bold text-amber-700">Rani Agrofood</h3>
                      <p className="mt-2 text-amber-800">Our candy manufacturing facility</p>
                    </div>
                  </div>
                </div>

                {/*  Decorative element 1  */}
                <div className="absolute -right-6 -top-6 z-10 flex h-24 w-24 animate-pulse items-center justify-center rounded-full bg-yellow-200 shadow-md">
                  <span className="text-2xl">🍭</span>
                </div>

                {/* Decorative element 2 */}
                <div
                  className="absolute -bottom-6 -left-6 z-10 flex h-20 w-20 animate-pulse items-center justify-center rounded-full bg-pink-200 shadow-md"
                  style={{ animationDelay: '0.5' }}
                >
                  <span className="text-2xl">🍬</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* About Model */}
        {modelIsOpen && (
          <div
            id="about-modal"
            className={`fixed inset-0 z-50 flex items-center justify-center`}
            aria-modal="true"
            aria-hidden={!modelIsOpen}
          >
            {/* Modal backdrop */}
            <div
              onClick={() => setModelIsOpen(false)}
              id="modal-backdrop"
              className="absolute inset-0 bg-black bg-opacity-50 transition-opacity"
            ></div>

            {/*  Modal content  */}
            <div className="relative mx-4 max-h-[90vh] max-w-3xl transform overflow-auto rounded-xl bg-white p-8 shadow-2xl transition-all">
              <button
                onClick={() => setModelIsOpen(false)}
                id="close-modal"
                className="absolute right-4 top-4 text-neutral-500 hover:text-neutral-800 focus:outline-none"
                aria-label="Close modal"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>

              <h3 className="mb-4 text-2xl font-bold text-amber-600">The Ashoka Story</h3>

              <div className="prose text-neutral-700">
                <p className="mb-4">
                  Founded in 1990, Ashoka began as a small family business with a passion for
                  creating authentic fruit candies. The founder, Mr. Raj Sharma, named the brand
                  after Emperor Ashoka, symbolizing nobility and quality in every product.
                </p>

                <p className="mb-4">
                  Rani Agrofood, our parent company, expanded operations in 2005 to reach
                  international markets while maintaining the traditional recipes and quality
                  standards that made Ashoka candies famous.
                </p>

                <h4 className="mb-3 mt-6 text-xl font-semibold text-pink-500">
                  Our Commitment to Quality
                </h4>
                <p className="mb-4">
                  Every Ashoka candy is made with carefully selected fruits sourced from trusted
                  farmers. Our manufacturing process preserves the natural flavors and nutritional
                  benefits while creating the perfect sweet treat.
                </p>

                <h4 className="mb-3 mt-6 text-xl font-semibold text-pink-500">
                  Innovation Meets Tradition
                </h4>
                <p className="mb-4">
                  While we honor traditional candy-making techniques, we constantly innovate to
                  create new flavors and improve our production processes. This balance of old and
                  new ensures that Ashoka candies remain timeless favorites.
                </p>

                <h4 className="mb-3 mt-6 text-xl font-semibold text-pink-500">Our Vision</h4>
                <p>
                  We aim to bring the joy of authentic fruit flavors to candy lovers worldwide while
                  maintaining our commitment to quality, sustainability, and delightful taste
                  experiences.
                </p>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
