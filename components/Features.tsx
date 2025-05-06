"use client"

import { IFeature } from "@/lib/utils";
import { useState } from "react";
import { featuresData } from "./FeatureData";

export default function Features() {
    const [activeTab, setActiveTab] = useState('ingredients');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentFeature, setCurrentFeature] = useState<IFeature>();


    const openFeatureModal = (featureId:string) => {
        setCurrentFeature(featuresData[featureId]);
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeFeatureModal = () => {
        setIsModalOpen(false);
        document.body.style.overflow = 'auto';
    };


    return (
        <section id="features" className="py-16 md:py-24 bg-amber-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-amber-600 mb-4">Features</h2>
                    <div className="w-24 h-1 bg-amber-500 mx-auto mb-8 rounded-full"></div>
                    <p className="text-lg text-neutral-700 max-w-3xl mx-auto">What makes Ashoka candies special? Discover the quality and care behind every delicious piece.</p>
                </div>

                {/* Features Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {/* Feature 1 */}
                    <div className="feature-card bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
                        <div className="h-24 flex items-center justify-center relative overflow-hidden bg-gradient-to-r from-amber-400 to-yellow-300">
                            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                            <div className="relative z-10 text-white text-4xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
                                🍎
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-amber-600 mb-3">100% Natural Ingredients</h3>
                            <p className="text-neutral-700">We source only the finest natural fruit extracts and ingredients, ensuring authentic flavors without artificial additives.</p>
                            <button onClick={()=>openFeatureModal("natural-ingredients")} className="feature-info-btn mt-4 text-amber-500 hover:text-amber-600 transition-colors duration-300 inline-flex items-center gap-1" data-feature="natural-ingredients">
                                <span>Learn more</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Feature 2 */}
                    <div className="feature-card bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
                        <div className="h-24 flex items-center justify-center relative overflow-hidden bg-gradient-to-r from-pink-400 to-red-300">
                            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                            <div className="relative z-10 text-white text-4xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
                                🌿
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-pink-600 mb-3">Sustainable Production</h3>
                            <p className="text-neutral-700">Our eco-friendly manufacturing process reduces waste and conserves energy, while supporting sustainable farming practices.</p>
                            <button onClick={()=>openFeatureModal("sustainable-production")} className="feature-info-btn mt-4 text-pink-500 hover:text-pink-600 transition-colors duration-300 inline-flex items-center gap-1" data-feature="sustainable-production">
                                <span>Learn more</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Feature 3 */}
                    <div className="feature-card bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
                        <div className="h-24 flex items-center justify-center relative overflow-hidden bg-gradient-to-r from-green-400 to-emerald-300">
                            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                            <div className="relative z-10 text-white text-4xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
                                🧪
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-green-600 mb-3">Quality Tested</h3>
                            <p className="text-neutral-700">Every batch undergoes rigorous quality testing to ensure consistency, flavor perfection, and highest safety standards.</p>
                            <button onClick={()=>openFeatureModal("quality-tested")} className="feature-info-btn mt-4 text-green-500 hover:text-green-600 transition-colors duration-300 inline-flex items-center gap-1" data-feature="quality-tested">
                                <span>Learn more</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Feature 4 */}
                    <div className="feature-card bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
                        <div className="h-24 flex items-center justify-center relative overflow-hidden bg-gradient-to-r from-blue-400 to-sky-300">
                            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                            <div className="relative z-10 text-white text-4xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
                                🌍
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-blue-600 mb-3">Global Flavors</h3>
                            <p className="text-neutral-700">We draw inspiration from fruit varieties around the world, creating unique flavor profiles that delight the senses.</p>
                            <button onClick={()=>openFeatureModal("global-flavors")} className="feature-info-btn mt-4 text-blue-500 hover:text-blue-600 transition-colors duration-300 inline-flex items-center gap-1" data-feature="global-flavors">
                                <span>Learn more</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Feature 5 */}
                    <div className="feature-card bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
                        <div className="h-24 flex items-center justify-center relative overflow-hidden bg-gradient-to-r from-purple-400 to-violet-300">
                            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                            <div className="relative z-10 text-white text-4xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
                                💖
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-purple-600 mb-3">Artisanal Crafting</h3>
                            <p className="text-neutral-700">Our candy artisans combine traditional methods with modern techniques to create perfect texture and flavor balance.</p>
                            <button onClick={()=>openFeatureModal("artisanal-crafting")} className="feature-info-btn mt-4 text-purple-500 hover:text-purple-600 transition-colors duration-300 inline-flex items-center gap-1" data-feature="artisanal-crafting">
                                <span>Learn more</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Feature 6 */}
                    <div className="feature-card bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
                        <div className="h-24 flex items-center justify-center relative overflow-hidden bg-gradient-to-r from-rose-400 to-pink-300">
                            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                            <div className="relative z-10 text-white text-4xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
                                🎁
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-rose-600 mb-3">Giftable Packaging</h3>
                            <p className="text-neutral-700">Our beautiful, eco-friendly packaging makes Ashoka candies the perfect gift for any occasion, ready to delight recipients.</p>
                            <button onClick={()=>openFeatureModal("giftable-packaging")} className="feature-info-btn mt-4 text-rose-500 hover:text-rose-600 transition-colors duration-300 inline-flex items-center gap-1" data-feature="giftable-packaging">
                                <span>Learn more</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Interactive Feature Showcase */}
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="p-8 md:p-12 flex flex-col justify-center">
                            <h3 className="text-2xl font-bold text-amber-600 mb-4">The Ashoka Difference</h3>
                            <p className="text-neutral-700 mb-6">What sets Ashoka apart is our commitment to quality at every stage. From sourcing the finest ingredients to our meticulous production process, we ensure every candy delivers the perfect fruity experience.</p>

                            {/* Feature Tabs */}
                            <div className="feature-tabs mb-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <button
                                        onClick={() => setActiveTab('ingredients')}
                                        className={`px-4 py-2 rounded-full ${activeTab === 'ingredients' ? 'bg-amber-500 text-white' : 'bg-neutral-200 text-neutral-700'}`}
                                    >
                                        Ingredients
                                    </button>
                                    <button
                                        onClick={() => setActiveTab('process')}
                                        className={`px-4 py-2 rounded-full ${activeTab === 'process' ? 'bg-amber-500 text-white' : 'bg-neutral-200 text-neutral-700'}`}
                                    >
                                        Process
                                    </button>
                                    <button
                                        onClick={() => setActiveTab('packaging')}
                                        className={`px-4 py-2 rounded-full ${activeTab === 'packaging' ? 'bg-amber-500 text-white' : 'bg-neutral-200 text-neutral-700'}`}
                                    >
                                        Packaging
                                    </button>
                                </div>

                                {/* Tab Content */}
                                <div className="tab-content">
                                    {/* Ingredients Tab */}
                                    <div className={`${activeTab === 'ingredients' ? 'block' : 'hidden'}`}>
                                        <p className="text-neutral-700 mb-4">We select only premium fruits at peak ripeness to extract the most vibrant flavors for our candies.</p>
                                        <ul className="space-y-2">
                                            <li className="flex items-start">
                                                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                </svg>
                                                <span>Authentic fruit extracts</span>
                                            </li>
                                            <li className="flex items-start">
                                                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                </svg>
                                                <span>No artificial colors or flavors</span>
                                            </li>
                                            <li className="flex items-start">
                                                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                </svg>
                                                <span>Responsibly sourced sweeteners</span>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Process Tab */}
                                    <div className={`${activeTab === 'process' ? 'block' : 'hidden'}`}>
                                        <p className="text-neutral-700 mb-4">Our time-honored production process ensures consistent quality and perfect flavor in every piece.</p>
                                        <ul className="space-y-2">
                                            <li className="flex items-start">
                                                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                </svg>
                                                <span>Small batch production</span>
                                            </li>
                                            <li className="flex items-start">
                                                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                </svg>
                                                <span>Traditional copper kettles</span>
                                            </li>
                                            <li className="flex items-start">
                                                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                </svg>
                                                <span>Precise temperature control</span>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Packaging Tab */}
                                    <div className={`${activeTab === 'packaging' ? 'block' : 'hidden'}`}>
                                        <p className="text-neutral-700 mb-4">Our packaging is designed to preserve freshness while minimizing environmental impact.</p>
                                        <ul className="space-y-2">
                                            <li className="flex items-start">
                                                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                </svg>
                                                <span>Biodegradable materials</span>
                                            </li>
                                            <li className="flex items-start">
                                                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                </svg>
                                                <span>Moisture-resistant sealing</span>
                                            </li>
                                            <li className="flex items-start">
                                                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                </svg>
                                                <span>Gift-ready presentation</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <a href="#contact" className="inline-block px-6 py-3 bg-amber-500 text-white rounded-full hover:bg-amber-600 transition-colors duration-300 self-start">
                                Contact for Details
                            </a>
                        </div>

                        <div className="bg-gradient-to-br from-amber-100 to-yellow-200 p-8 md:p-12 flex items-center justify-center">
                            <div className="interactive-candy-display relative w-full max-w-sm h-64 md:h-80">
                                {/* Animated candies */}
                                <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-pink-300 rounded-full flex items-center justify-center shadow-md transform hover:scale-110 transition-transform duration-300 animate-float-slow z-10">
                                    <span className="text-2xl">🍇</span>
                                </div>
                                <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-red-300 rounded-full flex items-center justify-center shadow-md transform hover:scale-110 transition-transform duration-300 animate-float z-20">
                                    <span className="text-2xl">🍒</span>
                                </div>
                                <div className="absolute bottom-1/4 left-1/3 w-18 h-18 bg-orange-300 rounded-full flex items-center justify-center shadow-md transform hover:scale-110 transition-transform duration-300 animate-float-reverse z-30">
                                    <span className="text-2xl">🍊</span>
                                </div>
                                <div className="absolute top-1/3 right-1/3 w-14 h-14 bg-green-300 rounded-full flex items-center justify-center shadow-md transform hover:scale-110 transition-transform duration-300 animate-float-slow-reverse z-40">
                                    <span className="text-2xl">🍏</span>
                                </div>

                                {/* Center showcase */}
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-amber-300 rounded-full flex items-center justify-center shadow-lg z-50 animate-pulse">
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
                        className={`relative bg-white rounded-xl max-w-md mx-4 p-6 md:p-8 shadow-2xl transform transition-all scale-100 opacity-100 ${currentFeature.color}`}
                        id="feature-modal-content"
                    >
                        <button
                            id="close-feature-modal"
                            className="absolute top-4 right-4 text-neutral-500 hover:text-neutral-800 focus:outline-none"
                            aria-label="Close modal"
                            onClick={closeFeatureModal}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>

                        <div className="text-center mb-6">
                            <div className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4 ${currentFeature.color}`}>
                                <span className="text-3xl">{currentFeature.icon}</span>
                            </div>
                            <h3 className="text-2xl font-bold mb-2">{currentFeature.title}</h3>
                        </div>

                        <div className="prose text-neutral-700">
                            {currentFeature.description}
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}
