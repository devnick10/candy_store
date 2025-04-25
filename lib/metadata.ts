export const data = {
    title: {
      default: "Rani Agro Food Industry | Premium Fruit Products",
      template: "%s | Rani Agro Food"
    },
    description: "Manufacturers of natural fruit products including Tutti-Fruity, Karonda Cherry, Mahua Concentrate & fruit pulps. ISO-certified quality since 1995.",
    keywords: [
      "tutti-fruity manufacturer",
      "karonda cherry supplier",
      "mahua concentrate",
      "fruit pulp exporter",
      "Imali Chutney",
      "natural fruit products",
      "fruit jelly manufacturer",
      "Agro food industry",
      "Rani Agro Food",
      "B2B fruit products"
    ],
    authors: [{ name: "Rani Agro Food Industry", url: "https://www.raniagrofood.com" }],
    openGraph: {
      title: "Rani Agro Food Industry | Trusted Fruit Product Manufacturers",
      description: "ISO-certified manufacturers of Tutti-Fruity, Karonda Cherry, Mahua Concentrate & premium fruit products since 1995.",
      url: "https://www.raniagrofood.com",
      siteName: "Rani Agro Food Industry",
      images: [
        {
          url: "https://www.raniagrofood.com/ashoka.jpg",
          width: 1200,
          height: 630,
          alt: "Rani Agro Food product showcase",
        },
      ],
      locale: "en_IN",
      type: "website",
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    icons: {
      icon: "/icon.ico",
    },
    manifest: "/site.webmanifest",
    metadataBase: new URL("https://www.raniagrofood.com"),
    alternates: {
      canonical: "/",
    },
    verification: {
      google: "your-google-verification-code", 
    },
  }