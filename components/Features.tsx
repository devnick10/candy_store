'use client';

import { IFeature } from '@/lib/utils';
import { useState } from 'react';
import { featuresData } from './FeatureData';

export default function Features() {
  const [activeTab, setActiveTab] = useState('ingredients');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentFeature, setCurrentFeature] = useState<IFeature>();

  const openFeatureModal = (featureId: string) => {
    setCurrentFeature(featuresData[featureId]);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeFeatureModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="features" className="bg-amber-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-amber-600 md:text-4xl">Features</h2>
          <div className="mx-auto mb-8 h-1 w-24 rounded-full bg-amber-500"></div>
          <p className="mx-auto max-w-3xl text-lg text-neutral-700">
            What makes Ashoka candies special? Discover the quality and care behind every delicious
            piece.
          </p>
        </div>

        {/* Features Cards */}
        <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Feature 1 */}
          <div className="feature-card group overflow-hidden rounded-xl bg-white shadow-md transition-shadow duration-300 hover:shadow-lg">
            <div className="relative flex h-24 items-center justify-center overflow-hidden bg-gradient-to-r from-amber-400 to-yellow-300">
              <div className="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 group-hover:opacity-10"></div>
              <div className="relative z-10 text-4xl text-white transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
                🍎
              </div>
            </div>
            <div className="p-6">
              <h3 className="mb-3 text-xl font-bold text-amber-600">100% Natural Ingredients</h3>
              <p className="text-neutral-700">
                We source only the finest natural fruit extracts and ingredients, ensuring authentic
                flavors without artificial additives.
              </p>
              <button
                onClick={() => openFeatureModal('natural-ingredients')}
                className="feature-info-btn mt-4 inline-flex items-center gap-1 text-amber-500 transition-colors duration-300 hover:text-amber-600"
                data-feature="natural-ingredients"
              >
                <span>Learn more</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="feature-card group overflow-hidden rounded-xl bg-white shadow-md transition-shadow duration-300 hover:shadow-lg">
            <div className="relative flex h-24 items-center justify-center overflow-hidden bg-gradient-to-r from-pink-400 to-red-300">
              <div className="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 group-hover:opacity-10"></div>
              <div className="relative z-10 text-4xl text-white transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
                🌿
              </div>
            </div>
            <div className="p-6">
              <h3 className="mb-3 text-xl font-bold text-pink-600">Sustainable Production</h3>
              <p className="text-neutral-700">
                Our eco-friendly manufacturing process reduces waste and conserves energy, while
                supporting sustainable farming practices.
              </p>
              <button
                onClick={() => openFeatureModal('sustainable-production')}
                className="feature-info-btn mt-4 inline-flex items-center gap-1 text-pink-500 transition-colors duration-300 hover:text-pink-600"
                data-feature="sustainable-production"
              >
                <span>Learn more</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="feature-card group overflow-hidden rounded-xl bg-white shadow-md transition-shadow duration-300 hover:shadow-lg">
            <div className="relative flex h-24 items-center justify-center overflow-hidden bg-gradient-to-r from-green-400 to-emerald-300">
              <div className="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 group-hover:opacity-10"></div>
              <div className="relative z-10 text-4xl text-white transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
                🧪
              </div>
            </div>
            <div className="p-6">
              <h3 className="mb-3 text-xl font-bold text-green-600">Quality Tested</h3>
              <p className="text-neutral-700">
                Every batch undergoes rigorous quality testing to ensure consistency, flavor
                perfection, and highest safety standards.
              </p>
              <button
                onClick={() => openFeatureModal('quality-tested')}
                className="feature-info-btn mt-4 inline-flex items-center gap-1 text-green-500 transition-colors duration-300 hover:text-green-600"
                data-feature="quality-tested"
              >
                <span>Learn more</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="feature-card group overflow-hidden rounded-xl bg-white shadow-md transition-shadow duration-300 hover:shadow-lg">
            <div className="relative flex h-24 items-center justify-center overflow-hidden bg-gradient-to-r from-blue-400 to-sky-300">
              <div className="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 group-hover:opacity-10"></div>
              <div className="relative z-10 text-4xl text-white transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
                🌍
              </div>
            </div>
            <div className="p-6">
              <h3 className="mb-3 text-xl font-bold text-blue-600">Global Flavors</h3>
              <p className="text-neutral-700">
                We draw inspiration from fruit varieties around the world, creating unique flavor
                profiles that delight the senses.
              </p>
              <button
                onClick={() => openFeatureModal('global-flavors')}
                className="feature-info-btn mt-4 inline-flex items-center gap-1 text-blue-500 transition-colors duration-300 hover:text-blue-600"
                data-feature="global-flavors"
              >
                <span>Learn more</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          {/* Feature 5 */}
          <div className="feature-card group overflow-hidden rounded-xl bg-white shadow-md transition-shadow duration-300 hover:shadow-lg">
            <div className="relative flex h-24 items-center justify-center overflow-hidden bg-gradient-to-r from-purple-400 to-violet-300">
              <div className="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 group-hover:opacity-10"></div>
              <div className="relative z-10 text-4xl text-white transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
                💖
              </div>
            </div>
            <div className="p-6">
              <h3 className="mb-3 text-xl font-bold text-purple-600">Artisanal Crafting</h3>
              <p className="text-neutral-700">
                Our candy artisans combine traditional methods with modern techniques to create
                perfect texture and flavor balance.
              </p>
              <button
                onClick={() => openFeatureModal('artisanal-crafting')}
                className="feature-info-btn mt-4 inline-flex items-center gap-1 text-purple-500 transition-colors duration-300 hover:text-purple-600"
                data-feature="artisanal-crafting"
              >
                <span>Learn more</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          {/* Feature 6 */}
          <div className="feature-card group overflow-hidden rounded-xl bg-white shadow-md transition-shadow duration-300 hover:shadow-lg">
            <div className="relative flex h-24 items-center justify-center overflow-hidden bg-gradient-to-r from-rose-400 to-pink-300">
              <div className="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 group-hover:opacity-10"></div>
              <div className="relative z-10 text-4xl text-white transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
                🎁
              </div>
            </div>
            <div className="p-6">
              <h3 className="mb-3 text-xl font-bold text-rose-600">Giftable Packaging</h3>
              <p className="text-neutral-700">
                Our beautiful, eco-friendly packaging makes Ashoka candies the perfect gift for any
                occasion, ready to delight recipients.
              </p>
              <button
                onClick={() => openFeatureModal('giftable-packaging')}
                className="feature-info-btn mt-4 inline-flex items-center gap-1 text-rose-500 transition-colors duration-300 hover:text-rose-600"
                data-feature="giftable-packaging"
              >
                <span>Learn more</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Interactive Feature Showcase */}
        <div className="overflow-hidden rounded-xl bg-white shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="flex flex-col justify-center p-8 md:p-12">
              <h3 className="mb-4 text-2xl font-bold text-amber-600">The Ashoka Difference</h3>
              <p className="mb-6 text-neutral-700">
                What sets Ashoka apart is our commitment to quality at every stage. From sourcing
                the finest ingredients to our meticulous production process, we ensure every candy
                delivers the perfect fruity experience.
              </p>

              {/* Feature Tabs */}
              <div className="feature-tabs mb-6">
                <div className="mb-4 flex flex-wrap gap-2">
                  <button
                    onClick={() => setActiveTab('ingredients')}
                    className={`rounded-full px-4 py-2 ${activeTab === 'ingredients' ? 'bg-amber-500 text-white' : 'bg-neutral-200 text-neutral-700'}`}
                  >
                    Ingredients
                  </button>
                  <button
                    onClick={() => setActiveTab('process')}
                    className={`rounded-full px-4 py-2 ${activeTab === 'process' ? 'bg-amber-500 text-white' : 'bg-neutral-200 text-neutral-700'}`}
                  >
                    Process
                  </button>
                  <button
                    onClick={() => setActiveTab('packaging')}
                    className={`rounded-full px-4 py-2 ${activeTab === 'packaging' ? 'bg-amber-500 text-white' : 'bg-neutral-200 text-neutral-700'}`}
                  >
                    Packaging
                  </button>
                </div>

                {/* Tab Content */}
                <div className="tab-content">
                  {/* Ingredients Tab */}
                  <div className={`${activeTab === 'ingredients' ? 'block' : 'hidden'}`}>
                    <p className="mb-4 text-neutral-700">
                      We select only premium fruits at peak ripeness to extract the most vibrant
                      flavors for our candies.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <svg
                          className="mr-2 mt-0.5 h-5 w-5 text-green-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Authentic fruit extracts</span>
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="mr-2 mt-0.5 h-5 w-5 text-green-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>No artificial colors or flavors</span>
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="mr-2 mt-0.5 h-5 w-5 text-green-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Responsibly sourced sweeteners</span>
                      </li>
                    </ul>
                  </div>

                  {/* Process Tab */}
                  <div className={`${activeTab === 'process' ? 'block' : 'hidden'}`}>
                    <p className="mb-4 text-neutral-700">
                      Our time-honored production process ensures consistent quality and perfect
                      flavor in every piece.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <svg
                          className="mr-2 mt-0.5 h-5 w-5 text-green-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Small batch production</span>
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="mr-2 mt-0.5 h-5 w-5 text-green-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Traditional copper kettles</span>
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="mr-2 mt-0.5 h-5 w-5 text-green-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Precise temperature control</span>
                      </li>
                    </ul>
                  </div>

                  {/* Packaging Tab */}
                  <div className={`${activeTab === 'packaging' ? 'block' : 'hidden'}`}>
                    <p className="mb-4 text-neutral-700">
                      Our packaging is designed to preserve freshness while minimizing environmental
                      impact.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <svg
                          className="mr-2 mt-0.5 h-5 w-5 text-green-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Biodegradable materials</span>
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="mr-2 mt-0.5 h-5 w-5 text-green-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Moisture-resistant sealing</span>
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="mr-2 mt-0.5 h-5 w-5 text-green-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Gift-ready presentation</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <a
                href="#contact"
                className="inline-block self-start rounded-full bg-amber-500 px-6 py-3 text-white transition-colors duration-300 hover:bg-amber-600"
              >
                Contact for Details
              </a>
            </div>

            <div className="flex items-center justify-center bg-gradient-to-br from-amber-100 to-yellow-200 p-8 md:p-12">
              <div className="interactive-candy-display relative h-64 w-full max-w-sm md:h-80">
                {/* Animated candies */}
                <div className="animate-float-slow absolute left-1/4 top-1/4 z-10 flex h-16 w-16 transform items-center justify-center rounded-full bg-pink-300 shadow-md transition-transform duration-300 hover:scale-110">
                  <span className="text-2xl">🍇</span>
                </div>
                <div className="animate-float absolute right-1/4 top-1/2 z-20 flex h-20 w-20 transform items-center justify-center rounded-full bg-red-300 shadow-md transition-transform duration-300 hover:scale-110">
                  <span className="text-2xl">🍒</span>
                </div>
                <div className="w-18 h-18 animate-float-reverse absolute bottom-1/4 left-1/3 z-30 flex transform items-center justify-center rounded-full bg-orange-300 shadow-md transition-transform duration-300 hover:scale-110">
                  <span className="text-2xl">🍊</span>
                </div>
                <div className="animate-float-slow-reverse absolute right-1/3 top-1/3 z-40 flex h-14 w-14 transform items-center justify-center rounded-full bg-green-300 shadow-md transition-transform duration-300 hover:scale-110">
                  <span className="text-2xl">🍏</span>
                </div>

                {/* Center showcase */}
                <div className="absolute left-1/2 top-1/2 z-50 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 transform animate-pulse items-center justify-center rounded-full bg-amber-300 shadow-lg">
                  <span className="text-4xl">🍬</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Info Modal */}
      {isModalOpen && currentFeature && (
        <div
          id="feature-modal"
          className="fixed inset-0 z-50 flex items-center justify-center opacity-100 transition-opacity duration-300"
          aria-modal="true"
          aria-hidden={!isModalOpen}
        >
          {/* Modal backdrop */}
          <div
            id="feature-modal-backdrop"
            className="absolute inset-0 bg-black bg-opacity-50 transition-opacity"
            onClick={closeFeatureModal}
          ></div>

          {/* Modal content */}
          <div
            className={`relative mx-4 max-w-md scale-100 transform rounded-xl bg-white p-6 opacity-100 shadow-2xl transition-all md:p-8 ${currentFeature.color}`}
            id="feature-modal-content"
          >
            <button
              id="close-feature-modal"
              className="absolute right-4 top-4 text-neutral-500 hover:text-neutral-800 focus:outline-none"
              aria-label="Close modal"
              onClick={closeFeatureModal}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>

            <div className="mb-6 text-center">
              <div
                className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full ${currentFeature.color}`}
              >
                <span className="text-3xl">{currentFeature.icon}</span>
              </div>
              <h3 className="mb-2 text-2xl font-bold">{currentFeature.title}</h3>
            </div>

            <div className="prose text-neutral-700">{currentFeature.description}</div>
          </div>
        </div>
      )}
    </section>
  );
}
