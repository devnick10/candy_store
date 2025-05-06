"use client"

import { IProduct, products } from "@/lib/products";
import { useCallback, useState } from "react";
import ProductDetail from "./ProductDetail";

export function Products() {
    const [activeFilter, setActiveFilter] = useState('all');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<IProduct>(products[0]);
    const filteredProducts = activeFilter === 'all'
        ? products
        : products.filter(product => product.category === activeFilter);

    const openProductModal = (product: IProduct) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    };

    const closeProductModal = useCallback(() => {
        setIsModalOpen(false);
        document.body.style.overflow = 'auto';
    }, []);

    return (
        <section id="products" className="py-16 md:py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-amber-600 mb-4">Products</h2>
                    <div className="w-24 h-1 bg-amber-500 mx-auto mb-8 rounded-full"></div>
                    <p className="text-lg text-neutral-700 max-w-3xl mx-auto">Explore our delicious range of fruity candies made with natural ingredients and bursting with flavor.</p>
                </div>

                {/* {/* Product Filtering */}
                <div className="mb-10">
                    <div className="flex flex-wrap justify-center gap-3 mb-8">
                        <button onClick={() => setActiveFilter('all')} className="filter-btn active px-5 py-2 rounded-full bg-amber-500 text-white hover:bg-amber-600 transition-all duration-300" data-filter="all">All Flavors</button>
                        <button onClick={() => setActiveFilter('citrus')} className="filter-btn px-5 py-2 rounded-full bg-neutral-200 text-neutral-700 hover:bg-amber-500 hover:text-white transition-all duration-300" data-filter="citrus">Citrus</button>
                        <button onClick={() => setActiveFilter('berry')} className="filter-btn px-5 py-2 rounded-full bg-neutral-200 text-neutral-700 hover:bg-amber-500 hover:text-white transition-all duration-300" data-filter="berry">Berry</button>
                        <button onClick={() => setActiveFilter('tropical')} className="filter-btn px-5 py-2 rounded-full bg-neutral-200 text-neutral-700 hover:bg-amber-500 hover:text-white transition-all duration-300" data-filter="tropical">Tropical</button>
                        <button onClick={() => setActiveFilter('assorted')} className="filter-btn px-5 py-2 rounded-full bg-neutral-200 text-neutral-700 hover:bg-amber-500 hover:text-white transition-all duration-300" data-filter="assorted">Assorted</button>
                    </div>
                </div>

                {/* {/* Products Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {/* {/* Products */}
                    {filteredProducts.map((product) => (
                        <div key={product.id} className="product-card group">
                            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                                <div className={`h-64 bg-gradient-to-br ${product.colorClass} flex items-center justify-center p-6 relative overflow-hidden`}>
                                    <div className="relative z-10 w-full h-full flex items-center justify-center">
                                        <div className={`w-40 h-40 rounded-full ${product.bgColor} flex items-center justify-center shadow-inner transform transition-transform group-hover:scale-110 duration-500`}>
                                            <span className="text-4xl">{product.emoji}</span>
                                        </div>
                                    </div>
                                    {/* Background elements */}
                                    <div className="absolute top-0 left-0 w-20 h-20 bg-yellow-200 rounded-full opacity-40 -translate-x-6 -translate-y-6"></div>
                                    <div className="absolute bottom-0 right-0 w-32 h-32 bg-amber-200 rounded-full opacity-60 translate-x-10 translate-y-10"></div>
                                </div>
                                <div className="p-6">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className={`text-xl font-bold ${product.textColor}`}>{product.name}</h3>
                                        <span className={`${product.badgeColor} px-2 py-1 rounded text-sm`}>
                                            {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                                        </span>
                                    </div>
                                    <p className="text-neutral-600 mb-4">{product.description}</p>
                                    <div className="flex justify-between items-center">
                                        <span className="text-amber-500 font-bold">{product.price}</span>
                                        <button onClick={() => openProductModal(product)} className="view-product px-4 py-2 bg-amber-500 text-white rounded-full hover:bg-amber-600 transition-colors duration-300"
                                            data-product={product.name.toLowerCase().replace(/\s+/g, '-')}>
                                            View Details
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* See All Products Button , Temprary commited  */}
                {/* <div className="text-center mt-12">
                <button id="see-all-btn" className="px-8 py-3 bg-amber-500 text-white rounded-full hover:bg-amber-600 transition-colors duration-300 inline-flex items-center gap-2">
                    <span>Browse All Products</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                    </svg>
                </button>
            </div> */}
            </div>

            <ProductDetail closeProductModal={closeProductModal} isModalOpen={isModalOpen} selectedProduct={selectedProduct} />
        </section >
    )
}
