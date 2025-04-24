import Image from "next/image"
import { ArrowRight, Candy, Cherry, IceCream } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/Navbar"
import Hero from "./Hero"
import { Contactus } from "./Contactus"
import Testimonials from "./Testimonials"
import { products } from "@/lib/products"
import Footer from "./Footer"

export default function Home() {
    return (
        <div className="overflow-hidden flex min-h-screen flex-col bg-pink-50">
            {/* Navigation */}
            <Navbar />

            {/* Hero Section */}
            <Hero />
            <section className="block mt-4 mb-[-24] sm:hidden w-full ">
                    <div className="relative block  md:hidden">
                        <div className="absolute -left-20 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-fuchsia-400/20"></div>
                        <div className="absolute -right-10 top-20 h-40 w-40 rounded-full bg-rose-400/10"></div>
                        <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-3xl border-8 border-white shadow-2xl">
                            <div className="relative flex justify-center items-center h-full w-full pt-8">
                                <Image
                                    src="/hero-image.png"
                                    alt="Colorful fruity candies"
                                    height={2000}
                                    width={2000}
                                    className="object-cover "
                                    priority
                                />
                            </div>
                        </div>
                </div>
            </section>
            {/* Featured Products */}
            <section id="products" className="py-24 bg-white">
                <div className="w-full mx-auto px-4">
                    <div className="mb-16 text-center">
                        <span className="mb-2 inline-block rounded-full bg-rose-200 px-4 py-1 text-xs font-semibold text-rose-800">
                            OUR FLAVORS
                        </span>
                        <h2 className="font-serif text-3xl font-bold text-rose-900 md:text-4xl lg:text-5xl">
                            Taste the Rainbow of Flavors
                        </h2>
                        <div className="mx-auto mt-4 h-1 w-20 bg-fuchsia-600"></div>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {products.map((product, index) => (
                            <div
                                key={index}
                                className="group relative overflow-hidden rounded-2xl bg-gradient-to-b from-white to-rose-50 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                            >
                                <div className="relative h-64 w-full overflow-hidden">
                                    <Image
                                        src={product.image || "/candy-placeholder.png"}
                                        alt={product.name}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-rose-900/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
                                        <p className="text-sm">{product.description}</p>
                                        <Button className="mt-3 bg-white text-rose-900 hover:bg-fuchsia-600 hover:text-white">
                                            Learn More
                                        </Button>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center">
                                        <div className={`mr-3 h-3 w-3 rounded-full ${product.color}`}></div>
                                        <h3 className="font-serif text-xl font-semibold text-rose-900">{product.name}</h3>
                                    </div>
                                    <div className="mt-3 h-0.5 w-10 bg-fuchsia-600"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Us */}
            <section id="about" className="relative overflow-hidden bg-rose-100 py-24">
                <div className="absolute -left-32 -top-32 h-64 w-64 rounded-full bg-fuchsia-400/20"></div>
                <div className="absolute -bottom-32 -right-32 h-64 w-64 rounded-full bg-rose-400/10"></div>
                <div className="w-full relative mx-auto px-4">
                    <div className="grid gap-12 md:grid-cols-2">
                        <div className="relative">
                            <div className="absolute -left-4 -top-4 h-full w-full rounded-2xl border-2 border-fuchsia-600"></div>
                            <div className="relative aspect-square overflow-hidden rounded-2xl shadow-xl">
                                <Image
                                    src="/candy-shop.jpg"
                                    alt="Our candy kitchen"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col justify-center">
                            <span className="mb-2 inline-block rounded-full bg-white px-4 py-1 text-xs font-semibold text-rose-800">
                                OUR STORY
                            </span>
                            <h2 className="mb-6 font-serif text-3xl font-bold text-rose-900 md:text-4xl">
                                Sweet Beginnings
                            </h2>
                            <div className="mb-6 h-1 w-20 bg-fuchsia-600"></div>
                            <p className="mb-6 text-rose-900/80">
                                What started as a small candy shop in 2010 has blossomed into a beloved brand known for our
                                intensely fruity flavors. We still make our candies the old-fashioned way - small batches,
                                premium ingredients, and lots of love.
                            </p>
                            <p className="mb-8 text-rose-900/80">
                                Every piece is crafted to deliver an explosion of authentic fruit flavor. We use real fruit
                                extracts and natural colors to create candies that taste as vibrant as they look. Because
                                life should be sweet!
                            </p>
                            <Button className="self-start bg-fuchsia-600 text-white hover:bg-rose-700">
                                Our Candy Making Process <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </div>

            </section>

            {/* Features */}
            <section id="features" className="py-24 bg-white">
                <div className="w-full mx-auto px-4">
                    <div className="mb-16 text-center">
                        <span className="mb-2 inline-block rounded-full bg-rose-200 px-4 py-1 text-xs font-semibold text-rose-800">
                            WHY WE&apos;RE SPECIAL
                        </span>
                        <h2 className="font-serif text-3xl font-bold text-rose-900 md:text-4xl lg:text-5xl">
                            What Makes Our Candy Irresistible
                        </h2>
                        <div className="mx-auto mt-4 h-1 w-20 bg-fuchsia-600"></div>
                    </div>
                    <div className="grid gap-8 md:grid-cols-3">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="rounded-2xl bg-gradient-to-b from-white to-rose-50 p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                            >
                                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-rose-200 text-rose-800">
                                    {feature.icon}
                                </div>
                                <h3 className="mb-4 font-serif text-xl font-semibold text-rose-900">{feature.title}</h3>
                                <div className="mb-4 h-0.5 w-10 bg-fuchsia-600"></div>
                                <p className="text-rose-900/70">{feature.description}</p>
                            </div>
                        ))}

                    </div>
                </div>
            </section>

            {/* Testimonial */}
            <Testimonials />

            {/* Contact Section */}
            <Contactus />

            {/* Footer */}
            <Footer />
        </div>
    )
}



// Features data with JSX icons
const features = [
    {
        title: "Real Fruit Flavors",
        description: "We use natural fruit extracts for authentic taste that candy lovers can feel good about.",
        icon: <Cherry className="h-8 w-8" />,
    },
    {
        title: "Small Batch Crafted",
        description: "Every piece is made with care in small batches for consistent quality and flavor.",
        icon: <Candy className="h-8 w-8" />,
    },
    {
        title: "Vibrant Colors",
        description: "Our candies get their beautiful hues from natural sources, never artificial dyes.",
        icon: <IceCream className="h-8 w-8" />,
    },
]