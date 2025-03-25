import React from 'react'
import Discount from '@/component/ForHome/Discount'
import { Link } from 'react-router-dom'
import CarouselProduct from '@/component/ForHome/CarouselProduct'
import CategoriesSection from '@/component/Category/CategoriesSection'
import CommonSeoFile from '@/Comman/CommonSeoFile'
import { useQuery } from 'react-query'
import { getAllNewArrivalProducts } from '@/Supabase/SupabaseApi'
const metadata = {
  title: "New Arrivals - Valinor & Pelóri | Latest Ladies' Shoes & Bags",
  description: "Be the first to explore Valinor & Pelóri’s latest arrivals in ladies' shoes, bags, and sandals. Discover new trends and timeless elegance.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "New Arrivals - Valinor & Pelóri | Latest Ladies' Shoes & Bags",
    description: "Stay ahead of the trends with Valinor & Pelóri’s latest collection. Shop new arrivals in elegant shoes, bags, and sandals.",
    url: "/new-arrivals",
    locale: "en_us",
    siteName: "Valinor & Pelóri",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@ValinorPelori",
    creator: "@ValinorPelori",
    title: "New Arrivals - Valinor & Pelóri | Latest Ladies' Shoes & Bags",
    description: "Shop the latest elegant ladies' footwear and accessories at Valinor & Pelóri. Discover new collections today.",
  },
  canonical: "/new-arrivals",
};

function Whatnew() {

  const { data: products, isLoading, isError } = useQuery({
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
          <p className='text-[16px] font-normal '>Discover our exceptional collection where every piece is a testament to precision and elegance. Crafted to elevate your style, our designs are made for those who appreciate the finest details.</p>
          <Link href="" className=' w-fti transition-all duration-300 relative h-auto px-4 py-1 text-white hover:bg-white border border-transparent  hover:border-primary hover:text-primary  rounded-full bg-primary mt-2 sm:mt-5'>Buy Now</Link>
        </div>

      </section>
      {
        products &&
        <CategoriesSection title={"Products"} >
          <CarouselProduct data={{ categoryName: "all", name: "You may also like", url: 'product' }} product={products} />
        </CategoriesSection>
      }


      <section className='container sm:h-[350px] relative flex flex-col-reverse sm:grid py-5 grid-cols-1 sm:grid-cols-[1fr_1fr]  gap-3 sm:gap-1 md:px-10 px-3    xl:px-20'>
        <div className='w-full relative flex flex-col justify-center items-start gap-1'>
          {/* <p className='text-[16px] font-medium text-primary'>Running</p> */}
          <h2 className='text-p20 font-medium '>Effortless Comfort</h2>
          <p className='text-[16px] font-normal '>Experience Unparalleled Style & Comfort. Step Up Your Game with Our Premium Collection.</p>
          <Link href="" className=' w-fti transition-all duration-300 relative h-auto px-4 py-1 text-white hover:bg-white border border-transparent  hover:border-primary hover:text-primary  rounded-full bg-primary mt-2 sm:mt-5'>Buy Now</Link>
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