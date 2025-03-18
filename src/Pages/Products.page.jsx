import React, { useState, useEffect } from 'react'
import { useQuery } from 'react-query'
import { useParams, useLocation } from 'react-router-dom'
import CarouselProduct from '@/component/ForHome/CarouselProduct'
// import ProductCard from '@/component/ForHome/ProductCard'
import { Link } from 'react-router-dom'
import CommonSeoFile from '@/Comman/CommonSeoFile'
import SecondHero from '@/component/ForHome/SecondHero'
import Discount from '@/component/ForHome/Discount'
import GridRroduct from '@/component/ForHome/GridRroduct'
import Hero from '@/component/ForHome/Hero'
// import {
//     CarouselItem,
// } from "@/components/ui/carousel"
import ProductFilter from '@/component/ForProduct/ProductFilter'
import { IoFilterOutline } from "react-icons/io5";
import MobFilterSheet from '@/Comman/MobFilterSheet'
import { getAllProducts, getAllCollections } from '@/Supabase/SupabaseApi'
import ContentLoader from 'react-content-loader'

const metadata = {
    title: "Products - Valinor & Pelóri | Elegant Ladies' Shoes, Bags & Sandals",
    description: "Explore our full range of elegant ladies' shoes, bags, and sandals at Valinor & Pelóri. Find the perfect match for your style and sophistication.",
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: "Products - Valinor & Pelóri | Elegant Ladies' Shoes, Bags & Sandals",
        description: "Browse Valinor & Pelóri’s extensive collection of premium footwear and accessories. Elevate your wardrobe with luxury shoes and handbags.",
        url: "/products",
        locale: "en_us",
        siteName: "Valinor & Pelóri",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        site: "@ValinorPelori",
        creator: "@ValinorPelori",
        title: "Products - Valinor & Pelóri | Elegant Ladies' Shoes, Bags & Sandals",
        description: "Discover luxurious ladies' footwear and accessories at Valinor & Pelóri. Shop timeless elegance today.",
    },
    canonical: "/products",
};

function Productspage() {
    // const [allproducts, setAllProducts] = useState()
    // const [allcollection, setAllCollection] = useState()
    const {
        data: allproducts = [],
        isLoading: isLoadingProducts,
        isError: isErrorProducts,
    } = useQuery({
        queryKey: ["products"],
        queryFn: getAllProducts,
        staleTime: 1000 * 60 * 2, // Keep fresh for 2 minutes
        retry: 2,
    });

    // Fetch Collections
    const {
        data: allcollection = [],
        isLoading: isLoadingCollections,
        isError: isErrorCollections,
    } = useQuery({
        queryKey: ["collections"],
        queryFn: getAllCollections,
        staleTime: 1000 * 60 * 2,
        retry: 2,
    });

    if (isLoadingProducts || isLoadingCollections) return <div className='w-full relative h-[60vh] container  py-10  px-5  md:px-10   xl:px-20'>

        <ContentLoader viewBox="0 0 100% 100%" height={'100%'} width={'100%'} backgroundColor="#d9d9d9" >
            <rect x="30" y="20" rx="8" ry="8" width="200" height="200" />
            <rect x="30" y="250" rx="0" ry="0" width="200" height="18" />
            <rect x="30" y="275" rx="0" ry="0" width="120" height="20" />
            <rect x="250" y="20" rx="8" ry="8" width="200" height="200" />
            <rect x="250" y="250" rx="0" ry="0" width="200" height="18" />
            <rect x="250" y="275" rx="0" ry="0" width="120" height="20" />
            <rect x="470" y="20" rx="8" ry="8" width="200" height="200" />
            <rect x="470" y="250" rx="0" ry="0" width="200" height="18" />
            <rect x="470" y="275" rx="0" ry="0" width="120" height="20" />
            <rect x="690" y="20" rx="8" ry="8" width="200" height="200" />
            <rect x="690" y="250" rx="0" ry="0" width="200" height="18" />
            <rect x="690" y="275" rx="0" ry="0" width="120" height="20" />
            <rect x="910" y="20" rx="8" ry="8" width="200" height="200" />
            <rect x="910" y="250" rx="0" ry="0" width="200" height="18" />
            <rect x="910" y="275" rx="0" ry="0" width="120" height="20" />
            <rect x="1130" y="20" rx="8" ry="8" width="200" height="200" />
            <rect x="1130" y="250" rx="0" ry="0" width="200" height="18" />
            <rect x="1130" y="275" rx="0" ry="0" width="120" height="20" />
            <rect x="30" y="340" rx="8" ry="8" width="200" height="200" />
            <rect x="30" y="570" rx="0" ry="0" width="200" height="18" />
            <rect x="30" y="595" rx="0" ry="0" width="120" height="20" />
            <rect x="250" y="340" rx="8" ry="8" width="200" height="200" />
            <rect x="250" y="570" rx="0" ry="0" width="200" height="18" />
            <rect x="250" y="595" rx="0" ry="0" width="120" height="20" />
            <rect x="470" y="340" rx="8" ry="8" width="200" height="200" />
            <rect x="470" y="570" rx="0" ry="0" width="200" height="18" />
            <rect x="470" y="595" rx="0" ry="0" width="120" height="20" />
            <rect x="690" y="340" rx="8" ry="8" width="200" height="200" />
            <rect x="690" y="570" rx="0" ry="0" width="200" height="18" />
            <rect x="690" y="595" rx="0" ry="0" width="120" height="20" />
            <rect x="910" y="340" rx="8" ry="8" width="200" height="200" />
            <rect x="910" y="570" rx="0" ry="0" width="200" height="18" />
            <rect x="910" y="595" rx="0" ry="0" width="120" height="20" />
            <rect x="1130" y="340" rx="8" ry="8" width="200" height="200" />
            <rect x="1130" y="570" rx="0" ry="0" width="200" height="18" />
            <rect x="1130" y="595" rx="0" ry="0" width="120" height="20" />
        </ContentLoader>


    </div>;


    if (isErrorProducts || isErrorCollections) return <p>Error fetching data</p>;





    return (
        <>
            <CommonSeoFile {...metadata} />
            {/* <Hero categoryName={"category"} /> */}
            {/* <SecondHero categoryName={"category"} /> */}

            {/* <CarouselProduct data={{ categoryName: "all" }} />


            <GridRroduct data={{ categoryName: "category", name: "Top Deal On Fasion " }} />

            <CarouselProduct data={{ categoryName: "all" }} /> */}


            {/* <Discount categoryName={"shoes"} /> */}
            <section className="w-full min-h-[300px] relative grid grid-cols-1 container lg:grid-cols-[1fr_3fr] 2xl:grid-cols-[0.6fr_auto] px-2  md:px-10   xl:px-20 ">
                <ProductFilter collection={allcollection} />

                <div className="w-full gap-5 pb-10 relative flex flex-col px-0 md:px-10 xl:px-10">
                    <div className="w-full h-auto flex items-center bg-secondary border-b border-gray-300 py-2 justify-between ">
                        <h1 className="text-lg font-medium text-primary">Total Products ( 300 )</h1>
                        <span className=' block  md:hidden'>
                            <MobFilterSheet>
                                <IoFilterOutline className='text-[20px] text-foreground cursor-pointer ' />
                            </MobFilterSheet>
                        </span>
                     
                    </div>
                    <GridRroduct data={{ categoryName: "", url: "product", products: allproducts }} />
                </div>
            </section>
            <Discount categoryName={"shoes"} />


        </>
    )
}

export default Productspage