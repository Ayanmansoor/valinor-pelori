
import React, { useEffect, useState } from 'react'
import Hero from '@/component/ForHome/Hero'
import Filter from '@/component/ForHome/Filter'
import CarouselProduct from '@/component/ForHome/CarouselProduct'
// import ProductCard from '@/component/ForHome/ProductCard'
import GridRroduct from '@/component/ForHome/GridRroduct'
import SecondHero from '@/component/ForHome/SecondHero'
import Discount from '@/component/ForHome/Discount'
import Trending from '@/component/ForProduct/Trending'
// import SideBar from '@/component/ForMobile/SideBar'
// import { Link } from 'react-router-dom'
// import CarouselCategory from '@/component/ForHome/CarouselCategory'
// import ModernCarousel from '@/component/ForDeal/ModernCarousel'
import LeatestCollection from '@/component/ForProduct/LeatestCollection'
import CategoriesSection from '@/component/Category/CategoriesSection'
import CommonSeoFile from '@/Comman/CommonSeoFile'
import Collectionsection from '@/Comman/Collectionsection'
import ContentLoader from 'react-content-loader'
// imoprt Api route
import { getAllCollections, getAllBanner, getAllTrendingProducts, getAllProducts, getAllNewArrivalProducts, getAllNewCollections } from '@/Supabase/SupabaseApi'



const metadata = {
  title: "Tread & Trend | Elegant Ladies' Shoes, Bags & Sandals",
  description: "Discover timeless elegance with Tread & Trend. Explore our exquisite collection of ladies' shoes, bags, and sandals crafted with sophistication and style.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Tread & Trend | Elegant Ladies' Shoes, Bags & Sandals",
    description: "Shop luxurious ladies' footwear and accessories at Tread & Trend. Elevate your style with premium shoes, handbags, and sandals for every occasion.",
    url: "/",
    locale: "en_us",
    siteName: "Tread & Trend",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@TreadTrend", // Your brand's Twitter handle
    creator: "@TreadTrend", // The creator's Twitter handle (if different)
    title: "Tread & Trend | Elegant Ladies' Shoes, Bags & Sandals",
    description: "Shop luxurious ladies' footwear and accessories at Tread & Trend. Elevate your style with premium shoes, handbags, and sandals for every occasion.",
  },
  canonical: "/",
};


let products = [
  {
    id: 1,
    name: "nike shoes",
    brand: "valinor & peroli",
    discountprice: 1200,
    price: 999,
    sizes: [5, 6, 7, 8, 9, 10, 11],
    colores: ["red", "green", "yellow", "mustage"],
    description: ""
  },
  {
    id: 2,
    name: "nike shoes",
    brand: "valinor & peroli",
    discountprice: 1200,
    price: 999,
    sizes: [5, 6, 7, 8, 9, 10, 11],
    colores: ["red", "green", "yellow", "mustage"],
    description: ""

  },
  {
    id: 3,
    name: "nike shoes",
    brand: "valinor & peroli",
    discountprice: 1200,
    price: 999,
    sizes: [5, 6, 7, 8, 9, 10, 11],
    colores: ["red", "green", "yellow", "mustage"],
    description: ""

  },
  {
    id: 4,
    name: "nike shoes",
    brand: "valinor & peroli",
    discountprice: 1200,
    price: 999,
    sizes: [5, 6, 7, 8, 9, 10, 11],
    colores: ["red", "green", "yellow", "mustage"],
    description: ""

  },
  {
    id: 5,
    name: "nike shoes",
    brand: "valinor & peroli",
    discountprice: 1200,
    price: 999,
    sizes: [5, 6, 7, 8, 9, 10, 11],
    colores: ["red", "green", "yellow", "mustage"],
    description: ""

  }
]

function Home() {
  const [currentproducts, setCurrentProducts] = useState()
  const [collections, setCollections] = useState()
  const [trendingProducts, setTrendingProducts] = useState()
  const [HomeBanner, sethomeBanner] = useState()
  const [newArrivals, setNewarrival] = useState()
  const [newCollection, setNewCollection] = useState()


  async function fetchData() {
    try {
      const results = await Promise.allSettled([
        getAllBanner(),
        getAllCollections(),
        getAllProducts(),
        getAllTrendingProducts(),
        getAllNewArrivalProducts(),
        getAllNewCollections()
      ]).catch((error) => {
        console.log(error)
      });

      // Extract results safely
      const homebannervalue = results[0].status === "fulfilled" ? results[0].value : [];
      const collectionsvalue = results[1].status === "fulfilled" ? results[1].value : [];
      const productsvalue = results[2].status === "fulfilled" ? results[2].value : [];
      const trendingsvalue = results[3].status === "fulfilled" ? results[3].value : [];
      const newArrivalvalue = results[4].status === "fulfilled" ? results[4].value : [];
      const newCollectionvalue = results[5].status === "fulfilled" ? results[5].value : [];
      // Set state safely without breaking the app if one fails
      setCurrentProducts([...productsvalue]);
      setCollections([...collectionsvalue]);
      setTrendingProducts([...trendingsvalue]);
      sethomeBanner([...homebannervalue]);
      setNewarrival([...newArrivalvalue])
      setNewCollection([...newCollectionvalue])


    } catch (error) {
      console.error("Unexpected error fetching data:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);



  return (
    <>
      <CommonSeoFile {...metadata} />
      <Hero bannerImages={HomeBanner} />
      <section className='w-full relative bg-secondary '>
        <h2 className='text-h1 font-medium    px-2  md:px-10   xl:px-20  mx-auto pt-10 bg-secondary'>EXPLORE </h2>
      </section>
      <Filter />


      {/* <CarouselCategory /> */}
      {/* <CarouselProduct /> */}
      {/* <CategoriesSection title={"Best Deals On All Products"} >
        <CarouselProduct />
      </CategoriesSection> */}

      {

        currentproducts?.length > 0 ? <CategoriesSection title={"Best Deals On All Products"} url="products" >
          <GridRroduct data={{ categoryName: "", url: "product", products: currentproducts }} />
        </CategoriesSection> : <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 container px-0 md:px-10 lg:px-20">
          {Array.from({ length: 6 }).map((_, index) => (
            <ContentLoader
              key={index}
              speed={2}
              width={200}
              height={320}
              viewBox="0 0 250 320"
              backgroundColor="#f3f3f3"
              foregroundColor="#ecebeb"
              className="w-full"
            >
              {/* Product Image */}
              <rect x="10" y="10" rx="10" ry="10" width="180" height="180" />

              {/* Discount Badge */}
              <rect x="10" y="10" rx="4" ry="4" width="40" height="20" />

              {/* Product Name */}
              <rect x="10" y="200" rx="4" ry="4" width="160" height="15" />
              <rect x="10" y="220" rx="4" ry="4" width="100" height="15" />

              {/* Pricing */}
              <rect x="10" y="250" rx="4" ry="4" width="70" height="15" />
              <rect x="90" y="250" rx="4" ry="4" width="50" height="15" />

              {/* Brand */}
              <rect x="10" y="280" rx="4" ry="4" width="120" height="12" />
            </ContentLoader>
          ))}
        </div>
      }


      {
        trendingProducts?.length ? <Trending data={{ categoryName: "all", rating: 3, trendingProducts: trendingProducts }} /> : ""
      }


      {collections?.length ?
        <CategoriesSection title={"Our Collections"} url="collections" >
          <Collectionsection data={{ categoryName: "all", url: "collection", collections: collections }} />
        </CategoriesSection> : ""}



      {
        newArrivals?.length > 0 &&
        <CategoriesSection title={"new Arrivals "} url="newarrivals" >
          <SecondHero categoryName={"Shoes"} data={newArrivals} />
        </CategoriesSection>

      }



      <Discount categoryName={"shoes"} />


      {
        newCollection?.length > 0 &&
        <LeatestCollection url={"collection"} />
      }

    </>

  )
}

export default Home