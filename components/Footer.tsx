import Link from 'next/link';
const navLinks = [
  {
    title: 'Home',
    hrf: '#home',
  },
  {
    title: 'About',
    hrf: '#about',
  },
  {
    title: 'Products',
    hrf: '#products',
  },
  {
    title: 'Features',
    hrf: '#features',
  },
  {
    title: 'Process',
    hrf: '#process',
  },
  {
    title: 'Testimonials',
    hrf: '#testimonials',
  },
  {
    title: 'Contact',
    hrf: '#contact',
  },
];
function Footer() {
  return (
    <section id="footer" className="bg-neutral-800 py-16 text-white">
      <div className="container mx-auto px-4">
        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <h3 className="mb-4 text-xl font-bold text-amber-500">Ashoka</h3>
            <p className="mb-4 text-neutral-300">
              Bringing you the finest fruity candies made with natural ingredients since 1990. A
              proud product of Rani Agrofood.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-neutral-400 transition-colors duration-300 hover:text-amber-500"
                aria-label="Facebook"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                </svg>
              </a>
              <a
                href="#"
                className="text-neutral-400 transition-colors duration-300 hover:text-amber-500"
                aria-label="Twitter"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
              <a
                href="#"
                className="text-neutral-400 transition-colors duration-300 hover:text-amber-500"
                aria-label="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"></path>
                </svg>
              </a>
              <a
                href="#"
                className="text-neutral-400 transition-colors duration-300 hover:text-amber-500"
                aria-label="LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.27 20.1H3.65V9.24h3.62V20.1zM5.47 7.76h-.03c-1.22 0-2-.83-2-1.87 0-1.06.8-1.87 2.05-1.87 1.24 0 2 .8 2.02 1.87 0 1.04-.78 1.87-2.05 1.87zM20.34 20.1h-3.63v-5.8c0-1.45-.52-2.45-1.83-2.45-1 0-1.6.67-1.87 1.32-.1.23-.11.55-.11.88v6.05H9.28s.05-9.82 0-10.84h3.63v1.54a3.6 3.6 0 013.26-1.8c2.39 0 4.18 1.56 4.18 4.89v6.21z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-xl font-bold text-amber-500">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#hero"
                  className="text-neutral-300 transition-colors duration-300 hover:text-amber-500"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-neutral-300 transition-colors duration-300 hover:text-amber-500"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="text-neutral-300 transition-colors duration-300 hover:text-amber-500"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="text-neutral-300 transition-colors duration-300 hover:text-amber-500"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#process"
                  className="text-neutral-300 transition-colors duration-300 hover:text-amber-500"
                >
                  Process
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="text-neutral-300 transition-colors duration-300 hover:text-amber-500"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-neutral-300 transition-colors duration-300 hover:text-amber-500"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="mb-4 text-xl font-bold text-amber-500">Products</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#products"
                  className="text-neutral-300 transition-colors duration-300 hover:text-amber-500"
                >
                  Citrus Delights
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="text-neutral-300 transition-colors duration-300 hover:text-amber-500"
                >
                  Berry Collection
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="text-neutral-300 transition-colors duration-300 hover:text-amber-500"
                >
                  Tropical Flavors
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="text-neutral-300 transition-colors duration-300 hover:text-amber-500"
                >
                  Assorted Mix
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="text-neutral-300 transition-colors duration-300 hover:text-amber-500"
                >
                  Gift Packs
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="text-neutral-300 transition-colors duration-300 hover:text-amber-500"
                >
                  Seasonal Specials
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-4 text-xl font-bold text-amber-500">Newsletter</h3>
            <p className="mb-4 text-neutral-300">
              Subscribe to our newsletter for the latest product updates, promotions, and candy
              news.
            </p>
            <form id="newsletter-form" className="space-y-3">
              <div>
                <input
                  type="email"
                  id="newsletter-email"
                  placeholder="Your email address"
                  className="w-full rounded-lg border border-neutral-600 bg-neutral-700 px-4 py-2 text-white placeholder-neutral-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-amber-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="flex items-center gap-2 rounded-lg bg-amber-500 px-6 py-2 text-white transition-colors duration-300 hover:bg-amber-600"
              >
                <span>Subscribe</span>
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
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-8 border-t border-neutral-700 pt-8">
          <div className="flex flex-col items-center justify-between md:flex-row">
            {/* Company Information */}
            <div className="mb-4 md:mb-0">
              <div className="mb-2 flex items-center gap-2">
                <span className="font-bold text-amber-500">Rani Agrofood</span>
                <span className="text-neutral-400">|</span>
                <span className="text-neutral-400">Manufacturers of Ashoka Candies</span>
              </div>
              <p className="text-sm text-neutral-400">
                © 2023 Rani Agrofood. All rights reserved.
              </p>
            </div>

            {/* Footer Links */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {navLinks.map((item, i) => (
                <Link
                  key={i}
                  href={item.hrf}
                  className="text-sm text-neutral-400 transition-colors duration-300 hover:text-amber-500"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        <div className="mt-8 flex justify-center">
          <Link href={'#home'} className="cursor-pointer">
            <button
              id="back-to-top"
              className="flex items-center gap-2 rounded-full bg-neutral-700 px-4 py-2 text-amber-500 transition-colors duration-300 hover:bg-neutral-600"
            >
              <span>Back to Top</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </Link>
        </div>
      </div>

      {/* Newsletter Success Modal */}
      {/* TODO:Onsuccess subscribe flex default hidden */}
      <div
        id="newsletter-success-modal"
        className="fixed inset-0 z-50 hidden items-center justify-center bg-neutral-800 opacity-0 transition-opacity duration-300"
        aria-modal="true"
        aria-hidden="true"
      >
        {/* Modal backdrop */}
        <div
          id="newsletter-modal-backdrop"
          className="absolute inset-0 bg-black bg-opacity-50 transition-opacity"
        ></div>

        {/* Modal content */}
        <div
          className="relative mx-4 max-w-md scale-95 transform rounded-xl border border-neutral-700 bg-neutral-800 p-6 opacity-0 shadow-2xl transition-all"
          id="newsletter-modal-content"
        >
          <button
            id="close-newsletter-modal"
            className="absolute right-4 top-4 text-neutral-400 hover:text-white focus:outline-none"
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

          <div className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-amber-500 bg-opacity-20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-amber-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </div>

            <h3 className="mb-2 text-xl font-bold text-white">Thank You for Subscribing!</h3>
            <p className="mb-6 text-neutral-300">
              You&apos;re now on our list and will be among the first to hear about new products,
              offers, and candy news.
            </p>

            <button
              id="newsletter-done-btn"
              className="rounded-lg bg-amber-500 px-6 py-2 text-white transition-colors duration-300 hover:bg-amber-600"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
