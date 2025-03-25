import React, { useEffect, useState } from 'react'
import CarouselProduct from '@/component/ForHome/CarouselProduct'
// import ProductCard from '@/component/ForHome/ProductCard'
import { json, Link } from 'react-router-dom'
import SecondHero from '@/component/ForHome/SecondHero'
import Discount from '@/component/ForHome/Discount'
import GridRroduct from '@/component/ForHome/GridRroduct'
import Hero from '@/component/ForHome/Hero'
import { Navdiscount } from '@/Comman/Navdiscount'
import CategoriesSection from '@/component/Category/CategoriesSection'
import Collectionsection from '@/Comman/Collectionsection'
import CommonSeoFile from '@/Comman/CommonSeoFile'
import {

  CarouselItem,

} from "@/components/ui/carousel"
import ContentLoader from 'react-content-loader'
import { useQuery } from 'react-query'

const metadata = {
  title: "Collection - Valinor & Pelóri | Luxury Ladies' Footwear & Accessories",
  description: "Discover the full collection of ladies' shoes, bags, and sandals at Valinor & Pelóri. Timeless elegance, sophisticated craftsmanship.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Collection - Valinor & Pelóri | Luxury Ladies' Footwear & Accessories",
    description: "Explore Valinor & Pelóri’s collection of premium shoes, bags, and sandals. Find luxury pieces that define your style.",
    url: "/collection",
    locale: "en_us",
    siteName: "Valinor & Pelóri",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@ValinorPelori",
    creator: "@ValinorPelori",
    title: "Collection - Valinor & Pelóri | Luxury Ladies' Footwear & Accessories",
    description: "Shop the full collection at Valinor & Pelóri. Elegant shoes, handbags, and sandals for sophisticated women.",
  },
  canonical: "/collection",
};

import { getAllCollections, getCollectionBanner, getAllProducts } from '@/Supabase/SupabaseApi'
function Category() {
  const [bannerImages, setBannerImages] = useState()
  let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,]
  // const { data: collectionBanner, isLoading, isError } = useQuery({
  //   queryKey: ["collectionBanner"],
  //   queryFn: getCollectionBanner,
  //   staleTime: 10 * 60 * 1000, // 10 minutes (600,000 ms)
  //   cacheTime: 15 * 60 * 1000, // 15 minutes (900,000 ms)
  // });
  const { data: products, isLoading: productloading, isError: producterror } = useQuery({
    queryKey: ["products"],
    queryFn: getAllProducts,
    staleTime: 5 * 60 * 1000, // Data remains fresh for 10 minutes
    cacheTime: 10 * 60 * 1000, // Data stays in cache for 15 minutes
  });

  const { data: collections, isLoading: collectionloading, isError: collectionerror } = useQuery({
    queryKey: ["collections"],
    queryFn: getAllCollections,
    staleTime: 10 * 60 * 1000, // Data remains fresh for 10 minutes
    cacheTime: 15 * 60 * 1000, // Data stays in cache for 15 minutes
  });





  return (
    <>
      <CommonSeoFile {...metadata} />

      {/* <Hero categoryName={"category"} bannerImages={bannerImages} /> */}
      {/* <Navdiscount /> */}

      {/* <SecondHero categoryName={"category"} /> */}


      {collections?.length ? <CategoriesSection title={"Our Collection of Elegents"} >
        <Collectionsection data={{ categoryName: "all", url: "collection", collections: collections }} />
      </CategoriesSection> : <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 container px-20">
        {Array.from({ length: 6 }).map((_, index) => (
          <ContentLoader
            key={index}
            speed={2}
            width={200}
            height={320}
            viewBox="0 0 200 320"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
            className="w-full"
          >
            <rect x="10" y="10" rx="10" ry="10" width="180" height="180" />

            <rect x="10" y="10" rx="4" ry="4" width="40" height="20" />

            <rect x="10" y="200" rx="4" ry="4" width="160" height="15" />
            <rect x="10" y="220" rx="4" ry="4" width="100" height="15" />

            <rect x="10" y="250" rx="4" ry="4" width="70" height="15" />
            <rect x="90" y="250" rx="4" ry="4" width="50" height="15" />

            <rect x="10" y="280" rx="4" ry="4" width="120" height="12" />
          </ContentLoader>
        ))}
      </div>}



      {
        products?.length > 0 && (

          <CategoriesSection title={"Collections Products "} >

            <CarouselProduct data={{ categoryName: "all", name: "You may also like", url: 'product' }} product={products} />

          </CategoriesSection >
        )
      }

      <section className='container bg-white sm:h-[350px] relative flex flex-col-reverse sm:grid py-5 grid-cols-1 sm:grid-cols-[1fr_1fr]  gap-3 px-3 sm:gap-1 md:px-10   xl:px-20'>
        <div className='w-full relative flex flex-col justify-center items-start gap-1'>
          <p className='text-[16px] font-medium text-primary'>Running</p>
          <h2 className='text-p20 font-medium '>Lorem ipsum dolor sit amet .</h2>
          <p className='text-[16px] font-normal '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum incidunt ipsa laborum voluptatum tempora. Ipsam ad excepturi obcaecati culpa sed!</p>
          <Link href="" className=' w-fti transition-all duration-300 relative h-auto px-4 py-1 text-white hover:bg-white border border-transparent  hover:border-primary hover:text-primary  rounded-full bg-primary mt-2 sm:mt-5'>Buy Now</Link>
        </div>
        <div className='w-full relative h-full ' >
          <img src="https://images.unsplash.com/photo-1734942416345-ed84ae363c5e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='w-full relative sm:absolute  h-full object-cover ' />
        </div>

      </section>


      {/* {

        products?.length > 0 ? <CategoriesSection title={"Best Deals On All Products"} >
          <GridRroduct data={{ categoryName: "", url: "product", products: products }} />
        </CategoriesSection> : <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 container px-20">
          {Array.from({ length: 6 }).map((_, index) => (
            <ContentLoader
              key={index}
              speed={2}
              width={200}
              height={320}
              viewBox="0 0 200 320"
              backgroundColor="#f3f3f3"
              foregroundColor="#ecebeb"
              className="w-full"
            >
              <rect x="10" y="10" rx="10" ry="10" width="180" height="180" />

              <rect x="10" y="10" rx="4" ry="4" width="40" height="20" />

              <rect x="10" y="200" rx="4" ry="4" width="160" height="15" />
              <rect x="10" y="220" rx="4" ry="4" width="100" height="15" />

              <rect x="10" y="250" rx="4" ry="4" width="70" height="15" />
              <rect x="90" y="250" rx="4" ry="4" width="50" height="15" />

              <rect x="10" y="280" rx="4" ry="4" width="120" height="12" />
            </ContentLoader>
          ))}
        </div>
      }
 */}



      {/* <CategoriesSection title={"Products"} >
        <CarouselProduct data={{ categoryName: "all" }} />
      </CategoriesSection> */}

      <Discount categoryName={"shoes"} />

    </>
  )
}

export default Category