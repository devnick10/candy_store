import Link from 'next/link';

export default function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden pb-24 pt-28">
      <div className="absolute inset-0 overflow-hidden">
        <div className="candy-circle animate-float-slow absolute left-1/4 top-1/4 h-32 w-32 rounded-full bg-amber-100 opacity-30"></div>
        <div className="candy-circle animate-float absolute bottom-1/3 right-1/4 h-48 w-48 rounded-full bg-red-100 opacity-30"></div>
        <div className="candy-circle animate-float-slow-reverse absolute bottom-1/4 left-1/3 h-40 w-40 rounded-full bg-yellow-100 opacity-30"></div>
      </div>
      <div className="container relative z-10 mx-auto px-4 py-1">
        <div className="flex flex-col items-center justify-between gap-12 md:flex-row md:gap-8">
          <div className="w-full translate-y-0 pt-4 opacity-100 transition-all duration-700 md:w-1/2 md:pt-10">
            <h1 className="mb-4 text-4xl font-bold leading-tight tracking-tight text-amber-600 md:text-5xl lg:text-6xl">
              Delightful <span className="text-pink-500">Fruity</span> Treats
            </h1>
            <p className="mb-6 max-w-xl text-lg text-neutral-700 md:text-xl">
              Experience the burst of natural fruit flavors in every Ashoka candy. Handcrafted with
              care by Rani Agrofood.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href={'#products'}
                className="inline-block transform rounded-full bg-amber-500 px-8 py-3 font-semibold text-white shadow-md transition-all hover:scale-105 hover:bg-amber-600"
              >
                Explore Flavors
              </Link>
              <Link
                href={'#contact'}
                className="inline-block rounded-full border-2 border-amber-500 px-8 py-3 font-semibold text-amber-600 transition-all hover:bg-amber-50"
              >
                Order Now
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="badge animate-float-slow flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-md">
                <span className="text-xl text-green-500">✓</span>
                <span className="text-sm font-medium">100% Natural Flavors</span>
              </div>
              <div className="badge animate-float flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-md">
                <span className="text-xl text-amber-500">★</span>
                <span className="text-sm font-medium">Premium Quality</span>
              </div>
            </div>
          </div>
          <div
            className="relative w-full translate-y-0 opacity-100 transition-all duration-700 md:w-1/2"
            data-aos="fade-left"
          >
            <div className="candy-animation relative">
              {/* <!-- Main candy image --> */}
              <div
                className="candy-main transform transition-transform duration-500 hover:rotate-3 hover:scale-105"
                style={{ transform: ` perspective(1000px) rotateX(0deg) rotateY(0deg)` }}
              >
                <div className="mx-auto h-full w-full max-w-lg overflow-hidden rounded-2xl shadow-xl">
                  {/* <!-- No actual image available, using colored div --> */}
                  <div className="flex h-96 w-full items-center justify-center rounded-2xl bg-gradient-to-br from-amber-200 via-pink-200 to-yellow-200">
                    <div className="p-8 text-center">
                      <span className="mb-4 block text-6xl">🍬</span>
                      <h3 className="text-3xl font-bold text-amber-600">Ashoka Candies</h3>
                      <p className="mt-2 text-amber-700">Burst of fruity goodness</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- Floating candy elements --> */}
              <div className="animate-float-slow absolute -right-4 top-20">
                <div className="flex h-20 w-20 rotate-12 transform items-center justify-center rounded-full bg-pink-300 shadow-md">
                  <span className="text-2xl">🍓</span>
                </div>
              </div>
              <div className="animate-float absolute -left-4 bottom-24">
                <div className="flex h-16 w-16 -rotate-12 transform items-center justify-center rounded-full bg-yellow-300 shadow-md">
                  <span className="text-2xl">🍋</span>
                </div>
              </div>
              <div className="animate-float-reverse absolute bottom-8 right-20">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-300 shadow-md">
                  <span className="text-2xl">🍏</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
