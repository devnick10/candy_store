'use client';

import { IProduct, products } from '@/lib/products';
import { useCallback, useState } from 'react';
import ProductDetail from './ProductDetail';
import Image from 'next/image';

export function Products() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<IProduct>(products[0]);
  const filteredProducts =
    activeFilter === 'all'
      ? products
      : products.filter((product) => product.category === activeFilter);

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
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-amber-600 md:text-4xl">Products</h2>
          <div className="mx-auto mb-8 h-1 w-24 rounded-full bg-amber-500"></div>
          <p className="mx-auto max-w-3xl text-lg text-neutral-700">
            Explore our delicious range of fruity candies made with natural ingredients and bursting
            with flavor.
          </p>
        </div>

        {/* {/* Product Filtering */}
        <div className="mb-10">
          <div className="mb-8 flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setActiveFilter('all')}
              className="filter-btn active rounded-full bg-amber-500 px-5 py-2 text-white transition-all duration-300 hover:bg-amber-600"
              data-filter="all"
            >
              All Flavors
            </button>
            <button
              onClick={() => setActiveFilter('citrus')}
              className="filter-btn rounded-full bg-neutral-200 px-5 py-2 text-neutral-700 transition-all duration-300 hover:bg-amber-500 hover:text-white"
              data-filter="citrus"
            >
              Citrus
            </button>
            <button
              onClick={() => setActiveFilter('berry')}
              className="filter-btn rounded-full bg-neutral-200 px-5 py-2 text-neutral-700 transition-all duration-300 hover:bg-amber-500 hover:text-white"
              data-filter="berry"
            >
              Berry
            </button>
            <button
              onClick={() => setActiveFilter('tropical')}
              className="filter-btn rounded-full bg-neutral-200 px-5 py-2 text-neutral-700 transition-all duration-300 hover:bg-amber-500 hover:text-white"
              data-filter="tropical"
            >
              Tropical
            </button>
            <button
              onClick={() => setActiveFilter('assorted')}
              className="filter-btn rounded-full bg-neutral-200 px-5 py-2 text-neutral-700 transition-all duration-300 hover:bg-amber-500 hover:text-white"
              data-filter="assorted"
            >
              Assorted
            </button>
          </div>
        </div>

        {/* {/* Products Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {/* {/* Products */}
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card group">
              <div className="overflow-hidden rounded-xl bg-white shadow-md transition-shadow duration-300 hover:shadow-lg">
                <div
                  className={`h-64 bg-gradient-to-br ${product.colorClass} relative flex items-center justify-center overflow-hidden p-6`}
                >
                  {/* <div className="relative z-10 flex h-full w-full items-center justify-center"> */}
                    {/* <div
                      className={`h-60 w-60 rounded-full ${product.bgColor} flex transform items-center justify-center shadow-inner transition-transform duration-500 group-hover:scale-110`}
                    > */}
                      <Image alt="productimage" src={product.image} fill className="" />
                    {/* </div> */}
                  {/* </div> */}
                  {/* Background elements */}
                  {/* <div className="absolute left-0 top-0 h-20 w-20 -translate-x-6 -translate-y-6 rounded-full bg-yellow-200 opacity-40"></div>
                  <div className="absolute bottom-0 right-0 h-32 w-32 translate-x-10 translate-y-10 rounded-full bg-amber-200 opacity-60"></div> */}
                </div>
                <div className="p-6">
                  <div className="mb-2 flex items-start justify-between">
                    <h3 className={`text-xl font-bold ${product.textColor}`}>{product.name}</h3>
                    <span className={`${product.badgeColor} rounded px-2 py-1 text-sm`}>
                      {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                    </span>
                  </div>
                  <p className="mb-4 text-neutral-600">{product.description}</p>
                  <div className="flex items-center justify-between">
                    {/* <span className="text-amber-500 font-bold">
                      {product.price}
                    </span> */}
                    <button
                      onClick={() => openProductModal(product)}
                      className="view-product rounded-full bg-amber-500 px-4 py-2 text-white transition-colors duration-300 hover:bg-amber-600"
                      data-product={product.name.toLowerCase().replace(/\s+/g, '-')}
                    >
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

      <ProductDetail
        closeProductModal={closeProductModal}
        isModalOpen={isModalOpen}
        selectedProduct={selectedProduct}
      />
    </section>
  );
}
