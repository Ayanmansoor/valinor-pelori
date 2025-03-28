import React, { useEffect } from 'react'

import ProductMain from '@/component/ForProduct/ProductMain';
import CarouselProduct from '@/component/ForHome/CarouselProduct';
import ProductCard from '@/component/ForHome/ProductCard';
import GridRroduct from '@/component/ForHome/GridRroduct';
import ProductAbout from '@/component/ForProduct/ProductAbout';
import CategoriesSection from '@/component/Category/CategoriesSection';
import LeatestCollection from '@/component/ForProduct/LeatestCollection';
import { useQuery } from 'react-query';
import ContentLoader from "react-content-loader";
import CommonSeoFile from '@/Comman/CommonSeoFile';

import {
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom"
import Specification from '@/component/ForProduct/Specification';
import { getProductData, getAllProducts, getRelatedProducts } from '@/Supabase/SupabaseApi';


const getProductMetadata = (name, slug) => ({
  title: `${name || "Elegant Footwear"} - Tread & Trend | Ladies' Shoes & Bags`,
  description: "Shop the latest elegant ladies' footwear and accessories at Tread & Trend. Discover new collections today.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: `${name || "Elegant Footwear"} - Tread & Trend | Ladies' Shoes & Bags`,
    description: "Stay ahead of the trends with Tread & Trend’s latest collection. Shop new arrivals in elegant shoes, bags, and sandals.",
    url: "/new-arrivals",
    locale: "en_us",
    siteName: "Tread & Trend",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@TreadTrend",
    creator: "@TreadTrend",
    title: `${name || "Elegant Footwear"} - Tread & Trend | Ladies' Shoes & Bags`,
    description: "Shop the latest elegant ladies' footwear and accessories at Tread & Trend. Discover new collections today.",
  },
  canonical: `/product/${slug}`,
});




import SecondHero from '@/component/ForHome/SecondHero';
function Product() {
  const { slug } = useParams()
  const { data: product, isLoading, isError, error } = useQuery({
    queryKey: ["product", slug],
    queryFn: () => getProductData(slug),
    enabled: !!slug, // Only run the query if slug is not null or undefined
    staleTime: 1000 * 60 * 10, // Cache data for 10 minutes
    retry: 3, // Retry 3 times if it fails
    refetchOnWindowFocus: true, // Refetch if the window gains focus
  });
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
  const {
    data: relatedProducts = [],
    isLoading: newloading,
    isError: newError,
    error: err,
  } = useQuery({
    queryKey: ["relatedProducts", product, slug],
    queryFn: () => getRelatedProducts(product, slug),
    enabled: !!product && !!slug, // Only run if product and slug exist
    staleTime: 1000 * 60 * 2, // Keep fresh for 2 minutes
    retry: 2, // Retry twice on failure
  });

  const metadata = getProductMetadata(product?.name, product?.slug)



  if (isLoading) {
    return <div className='w-full relative container px-5  md:px-10   xl:px-20   '>
      <ContentLoader
        viewBox="0 0 700 350"  // Define a proper numeric viewBox
        backgroundColor="#f4f4f4"
        foregroundColor="#ebebeb"
        className='w-full h-auto lg:block hidden' // Ensures full width on larger screens
        height={600}
        width="100%"
      >
        <circle cx="472" cy="159" r="7" />
        <rect x="487" y="154" rx="5" ry="5" width="220" height="10" />
        <circle cx="472" cy="190" r="7" />
        <rect x="487" y="184" rx="5" ry="5" width="220" height="10" />
        <circle cx="472" cy="219" r="7" />
        <rect x="487" y="214" rx="5" ry="5" width="220" height="10" />
        <circle cx="472" cy="249" r="7" />
        <rect x="487" y="244" rx="5" ry="5" width="220" height="10" />
        <rect x="64" y="18" rx="0" ry="0" width="346" height="300" />
        <rect x="229" y="300" rx="0" ry="0" width="0" height="0" />
        <rect x="111" y="340" rx="0" ry="0" width="0" height="0" />
        <rect x="121" y="342" rx="0" ry="0" width="0" height="0" />
        <rect x="10" y="20" rx="0" ry="0" width="40" height="44" />
        <rect x="10" y="80" rx="0" ry="0" width="40" height="44" />
        <rect x="10" y="140" rx="0" ry="0" width="40" height="44" />
        <rect x="194" y="329" rx="0" ry="0" width="0" height="0" />
        <rect x="192" y="323" rx="0" ry="0" width="0" height="0" />
        <rect x="185" y="323" rx="0" ry="0" width="0" height="0" />
        <rect x="10" y="200" rx="0" ry="0" width="40" height="44" />
        <rect x="470" y="18" rx="0" ry="0" width="300" height="25" />
        <rect x="470" y="58" rx="0" ry="0" width="300" height="6" />
        <rect x="470" y="68" rx="0" ry="0" width="300" height="6" />
        <rect x="470" y="78" rx="0" ry="0" width="300" height="6" />
        <rect x="798" y="135" rx="0" ry="0" width="0" height="0" />
        <rect x="731" y="132" rx="0" ry="0" width="0" height="0" />
        <rect x="470" y="99" rx="0" ry="0" width="70" height="30" />
        <rect x="560" y="99" rx="0" ry="0" width="70" height="30" />
      </ContentLoader>
      <ContentLoader
        speed={2}
        width={1920}
        height={501}
        viewBox="0 0 1920 501"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        className='w-full relative lg:hidden block'
      >
        <rect x="9" y="12" rx="0" ry="0" width="567" height="387" />
        <rect x="7" y="404" rx="0" ry="0" width="168" height="82" />
        <rect x="181" y="406" rx="0" ry="0" width="192" height="82" />
        <rect x="379" y="407" rx="0" ry="0" width="195" height="82" />
      </ContentLoader>
    </div>;
  }

  if (isError) {
    return <div>Error: {error?.message}</div>;
  }






  return (
    <>
      <CommonSeoFile {...metadata} />
      <section className=' relative bg-secondary h-auto  pb-4 mt-1 '>
        <div className='w-full mx-auto h-full container px-3 relative  flex flex-col justify-between gap-2 bg-secondary md:flex-row  md:px-10   xl:px-20  '>

          <div className='  md:max-h-auto  w-full relative p-1 md:h-full md:w-[50%] '>
            <ProductMain product={product} />
          </div>
            <ProductAbout product={product} />

        </div>
      </section>

      <Specification product={product} />

      {
        relatedProducts?.length > 0 && (

          <CategoriesSection title={"You may also like  "} >

            <CarouselProduct data={{ categoryName: "all", name: "You may also like", url: 'product' }} product={relatedProducts} />

          </CategoriesSection >
        )
      }


      {/* <CarouselProduct>
        {content.map((elem, index) => (
          <CarouselItem className="basis-[250px]">
            <ProductCard value={{ imege: "url", Name: "Sony Head phone", price: "9047", descrip: "Brand new Sony head phone", rating: "", ProductID: "", Isproduct: true, ind: index }} />
          </CarouselItem>
        ))}
      </CarouselProduct> */}

      {/* <CategoriesSection title={"Best Deals On All Products"} >
        <GridRroduct data={{ categoryName: "category", name: "Others also bought", url: 'product' }} />
      </CategoriesSection > */}

      {

        allproducts?.length > 0 ?
          <CategoriesSection title={"Best Deals On All Products"} url="products" >
            <GridRroduct data={{ categoryName: "", url: "product", products: allproducts }} />
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




    </>
  )
}

export default Product