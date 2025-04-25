import Image from 'next/image'
import React from 'react'

function Testimonials() {
    return (
        <section className="bg-rose-900 py-24 text-white">
            <div className="container mx-auto px-4">
                <div className="mx-auto max-w-3xl  text-center">
                    <span className="mb-2 inline-block rounded-full bg-white/10 px-4 py-1 text-xs font-semibold text-white">
                        SWEET REVIEWS
                    </span>
                    <h2 className="mb-12 font-serif text-3xl font-bold md:text-4xl">What Candy Lovers Say</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 sm:px-6 lg:px-8">
                        <div className=" relative rounded-2xl bg-rose-800 p-8 shadow-2xl">
                            <svg
                                className="absolute -left-4 -top-4 h-12 w-12 text-fuchsia-400"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                            </svg>
                            <p className="mb-6 text-lg italic text-white/90">
                                &ldquo;मैं पिछले कुछ समय से आपकी फ्रूटी कैंडीज़ अपनी दुकान पर बेच रहा हूँ और सच कहूँ तो कस्टमर्स का रिस्पॉन्स जबरदस्त है! लोग खास तौर पर आम फ्लेवर के लिए बार-बार लौटकर आते हैं क्योंकि इसका स्वाद बिलकुल असली फल जैसा है। बच्चों से लेकर बड़े तक सब इसे पसंद करते हैं। सबसे अच्छी बात ये है कि ये हेल्दी इंग्रीडिएंट्स से बनी होती हैं, जिससे पैरेंट्स भी बेझिझक खरीदते हैं। आपके प्रोडक्ट्स ने मेरी सेल्स बढ़ा दी है!&rdquo;
                            </p>
                            <div className="flex items-center justify-center">
                                <div className="mr-4 h-12 w-12 overflow-hidden rounded-full">
                                    <Image
                                        src="/customer.jpg"
                                        alt="Happy customer"
                                        width={48}
                                        height={48}
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                                <div className="text-left">
                                    <p className="font-medium">Ajay sharma</p>
                                    <p className="text-sm text-white/70">Ajay mart</p>
                                </div>
                            </div>
                        </div>
                        <div className=" relative rounded-2xl bg-rose-800 p-8 shadow-2xl">
                            <svg
                                className="absolute -left-4 -top-4 h-12 w-12 text-fuchsia-400"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                            </svg>
                            <p className="mb-6 text-lg italic text-white/90">
                                &ldquo;मैं राजत गुप्ता,अपनी जनरल स्टोर चलाता हूँ। पिछले कुछ महीनों से मैं आपकी फ्रूटी कैंडीज़ स्टोर पर बेच रहा हूँ और वाकई में कस्टमर्स का रेस्पॉन्स शानदार रहा है। खासकर आम और स्ट्रॉबेरी फ्लेवर लोगों को बहुत पसंद आ रहा है। बच्चों से लेकर बड़े तक सभी इसे खरीदते हैं। आपकी कैंडीज़ ने मेरी सेल्स और कस्टमर सैटिस्फैक्शन दोनों बढ़ा दिए हैं। ऐसे ही क्वालिटी बनाए रखिए!&rdquo;
                            </p>
                            <div className="flex items-center justify-center">
                                <div className="mr-4 h-12 w-12 overflow-hidden rounded-full">
                                    <Image
                                        src="/customer-2.jpg"
                                        alt="Happy customer"
                                        width={48}
                                        height={48}
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                                <div className="text-left">
                                    <p className="font-medium">rajat gupta</p>
                                    <p className="text-sm text-white/70">Rajat grocery store</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials