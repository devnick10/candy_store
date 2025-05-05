import { IProduct } from '@/lib/products';
import React from 'react'

interface ProductDetailsProps{
    isModalOpen:boolean;
    selectedProduct:IProduct;
    closeProductModal:()=>void
}

export default function ProductDetail({
    isModalOpen,
    selectedProduct,
    closeProductModal
}:ProductDetailsProps) {
    return (<>

      {isModalOpen && selectedProduct && (
        <div 
          id="product-modal" 
          className="fixed inset-0 z-50 flex items-center justify-center"
          aria-modal="true" 
          aria-hidden={!isModalOpen}
        >
          {/* Modal backdrop */}
          <div 
            id="product-modal-backdrop" 
            className="absolute inset-0 bg-black bg-opacity-50 transition-opacity"
            onClick={closeProductModal}
          ></div>

          {/* Modal content */}
          <div className="relative bg-white rounded-xl max-w-4xl mx-4 shadow-2xl transform transition-all max-h-[90vh] overflow-auto">
            <button 
              id="close-product-modal" 
              className="absolute top-4 right-4 text-neutral-500 hover:text-neutral-800 focus:outline-none z-10" 
              aria-label="Close modal"
              onClick={closeProductModal}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>

            <div className="flex flex-col md:flex-row">
              <div className={`w-full md:w-1/2 p-6 md:p-8 bg-gradient-to-br ${selectedProduct.colorClass}`}>
                <div className="w-full h-64 md:h-80 flex items-center justify-center">
                  <div className={`w-48 h-48 md:w-64 md:h-64 rounded-full flex items-center justify-center shadow-lg ${selectedProduct.bgColor}`}>
                    <span className="text-6xl">{selectedProduct.emoji}</span>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/2 p-6 md:p-8">
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${selectedProduct.badgeColor}`}>
                  {selectedProduct.category.charAt(0).toUpperCase() + selectedProduct.category.slice(1)}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{selectedProduct.name}</h3>

                <div className="mb-6">
                  <div className="flex items-center mb-2">
                    <div className="flex text-amber-400">
                      {/* Star ratings */}
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      ))}
                    </div>
                    <span className="ml-2 text-neutral-700">4.9 (120 reviews)</span>
                  </div>
                  <p className="text-2xl font-bold text-amber-500">{selectedProduct.price}</p>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-2">Description</h4>
                  <p className="text-neutral-700 mb-4">{selectedProduct.description}</p>

                  <div className="flex flex-col gap-2 mb-4">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-neutral-700">Natural fruit flavors</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-neutral-700">No artificial colors</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-neutral-700">Premium ingredients</span>
                    </div>
                  </div>
                </div>
                 {/* TEMP: commited */}
                {/* <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex border rounded-full overflow-hidden">
                    <button 
                      className="quantity-btn px-4 py-2 bg-neutral-100 text-neutral-700 hover:bg-neutral-200 transition-colors" 
                      onClick={() => handleQuantityChange('decrease')}
                    >
                      -
                    </button>
                    <input 
                      type="number" 
                      className="w-12 text-center border-none focus:ring-0" 
                      value={quantity} 
                      min="1" 
                      max="99" 
                      readOnly
                    />
                    <button 
                      className="quantity-btn px-4 py-2 bg-neutral-100 text-neutral-700 hover:bg-neutral-200 transition-colors" 
                      onClick={() => handleQuantityChange('increase')}
                    >
                      +
                    </button>
                  </div>
                  <button 
                    className="add-to-cart px-6 py-2 bg-amber-500 text-white rounded-full hover:bg-amber-600 transition-colors duration-300 flex-grow flex items-center justify-center gap-2"
                    onClick={handleAddToCart}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                    </svg>
                    <span>Add to Cart</span>
                  </button>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      )}


    </>)
}
