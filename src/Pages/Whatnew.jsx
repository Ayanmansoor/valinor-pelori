import React from 'react'
import Discount from '@/component/ForHome/Discount'
import { Link } from 'react-router-dom'
import CarouselProduct from '@/component/ForHome/CarouselProduct'
import CategoriesSection from '@/component/Category/CategoriesSection'
import CommonSeoFile from '@/Comman/CommonSeoFile'
import { useQuery } from 'react-query'
import { getAllNewArrivalProducts } from '@/Supabase/SupabaseApi'


const metadata = {
  title: "New Arrivals - Markline | Latest Shoes, Sandals & Bags",
  description: "Step into style with Markline’s newest arrivals. Discover the latest shoes, bags, and sandals designed for everyday fashion and comfort.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "New Arrivals - Markline | Latest Shoes, Sandals & Bags",
    description: "Explore Markline’s fresh arrivals. From smart casuals to everyday staples, find your next favorite pair in our latest collection.",
    url: "/new-arrivals",
    locale: "en_us",
    siteName: "Markline",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@MarklineFashion", // Replace with your actual handle
    creator: "@MarklineFashion",
    title: "New Arrivals - Markline | Latest Shoes, Sandals & Bags",
    description: "Shop the latest trends in affordable, stylish footwear and accessories at Markline. Fresh picks for every occasion.",
  },
  canonical: "/new-arrivals",
};


function Whatnew() {

  const { data: products=[] , isLoading, isError } = useQuery({
    queryKey: ["newArrivalProduct"], // Cache per collection
    queryFn: getAllNewArrivalProducts,
    staleTime: 2 * 60 * 1000, // 2 minutes caching
  });

  return (
    <>
      <CommonSeoFile {...metadata} />

      <section className='w-full relative h-auto flex items-start bg-black p-6 container md:px-10   xl:px-20 '>
        <video src="/" className='w-full relative h-[250px] md:h-[350px] lg:h-[500px] '></video>
      </section>

      <section className='container sm:h-[350px] relative flex flex-col-reverse sm:grid py-5 grid-cols-1 sm:grid-cols-[1fr_1fr]  gap-3 sm:gap-1 px-3 md:px-10   xl:px-20'>
        <div className='w-full relative h-full '>
          <img src="https://images.unsplash.com/photo-1734942416345-ed84ae363c5e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='w-full relative sm:absolute  h-full object-cover ' />
        </div>
        <div className='w-full relative flex flex-col justify-center items-start gap-1 px-2 md:px-5 lg:px-10'>
          {/* <p className='text-[16px] font-medium text-primary'>Running</p> */}
          <h2 className='text-p20 font-medium '>Experience True Craftsmanship</h2>
          <p className='text-[16px] font-normal '>Discover Markline’s exceptional collection where every piece is a testament to precision and elegance. Meticulously crafted to elevate your personal style, our designs are made for those who value artistry, detail, and distinction in every step.</p>
        </div>

      </section>
      {
        products.length > 0 &&
        <CategoriesSection title={"New In – Fresh Picks for You"} >
          <CarouselProduct data={{ categoryName: "all", name: "You may also like", url: 'product' }} product={products} />
        </CategoriesSection>
      }


      <section className='container sm:h-[350px] relative flex flex-col-reverse sm:grid py-5 grid-cols-1 sm:grid-cols-[1fr_1fr]  gap-3 sm:gap-1 md:px-10 px-3    xl:px-20'>
        <div className='w-full relative flex flex-col justify-center items-start gap-1'>
          {/* <p className='text-[16px] font-medium text-primary'>Running</p> */}
          <h2 className='text-p20 font-semibold '>New Arrivals – Crafted for the Moment</h2>
          <p className='text-[16px] font-normal '>Step into the season with Markline’s latest arrivals—where modern sophistication meets timeless craftsmanship. Each new piece is designed to keep you effortlessly stylish while reflecting the unmatched quality and detail we’re known for .</p>
        </div>
        <div className='w-full relative h-full '>
          <img src="https://images.unsplash.com/photo-1734942416345-ed84ae363c5e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='w-full relative sm:absolute  h-full object-cover ' />
        </div>
      </section>

      <Discount />
    </>
  )
}

export default Whatnew