import React from 'react'

const metadata = {
  title: "Welcome to Valinor & Pelóri | Timeless Elegance in Every Step",
  description: "Step into the world of sophistication with Valinor & Pelóri. Explore our curated collection of ladies' shoes, bags, and sandals for every occasion.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Welcome to Valinor & Pelóri | Timeless Elegance in Every Step",
    description: "Embrace elegance with Valinor & Pelóri’s collection of luxury shoes, bags, and sandals. Perfectly crafted for modern women.",
    url: "/landing-page",
    locale: "en_us",
    siteName: "Valinor & Pelóri",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@ValinorPelori",
    creator: "@ValinorPelori",
    title: "Welcome to Valinor & Pelóri | Timeless Elegance in Every Step",
    description: "Discover luxury footwear and accessories with Valinor & Pelóri. Shop sophistication now.",
  },
  canonical: "/landing-page",
};

function Lending() {
  return (
    <CommonSeoFile {...metadata} />
  )
}

export default Lending