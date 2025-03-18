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

import {
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom"
import Specification from '@/component/ForProduct/Specification';
import { getProductData, getAllProducts, getRelatedProducts } from '@/Supabase/SupabaseApi';




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




  if (isLoading) {
    return <div className='w-full relative container px-5  md:px-10   xl:px-20   '>
      <ContentLoader
        speed={2}
        width="100%"
        height="100%"
        viewBox="0 0 1280 900"
        backgroundColor="#d9d9d9"
        foregroundColor="#ecebeb"
      // {...props}
      >
        {/* Large Rectangle */}
        <rect x="10%" y="5%" rx="5" ry="5" width="40%" height="40%" />
        {/* Sidebar Thumbnails */}
        <rect x="5%" y="5%" rx="5" ry="5" width="10%" height="12%" />
        <rect x="5%" y="20%" rx="5" ry="5" width="10%" height="12%" />
        <rect x="5%" y="35%" rx="5" ry="5" width="10%" height="12%" />
        <rect x="5%" y="50%" rx="5" ry="5" width="10%" height="12%" />

        {/* Header */}
        <rect x="55%" y="5%" rx="5" ry="5" width="30%" height="5%" />
        <rect x="55%" y="12%" rx="5" ry="5" width="40%" height="7%" />

        {/* Buttons */}
        <rect x="55%" y="22%" rx="10" ry="10" width="8%" height="5%" />
        <rect x="65%" y="22%" rx="10" ry="10" width="8%" height="5%" />
        <rect x="75%" y="22%" rx="10" ry="10" width="12%" height="5%" />
        <rect x="90%" y="22%" rx="10" ry="10" width="5%" height="5%" />

        {/* Small Boxes */}
        <rect x="55%" y="35%" rx="5" ry="5" width="5%" height="3%" />
        <rect x="55%" y="42%" rx="5" ry="5" width="10%" height="10%" />
        <rect x="67%" y="42%" rx="5" ry="5" width="10%" height="10%" />
        <rect x="79%" y="42%" rx="5" ry="5" width="10%" height="10%" />

        {/* Large Text Blocks */}
        <rect x="55%" y="60%" rx="5" ry="5" width="35%" height="3%" />
        <rect x="55%" y="70%" rx="5" ry="5" width="50%" height="4%" />

        {/* Footer */}
        <rect x="5%" y="85%" rx="5" ry="5" width="50%" height="2%" />
        <rect x="5%" y="90%" rx="5" ry="5" width="50%" height="2%" />
        <rect x="5%" y="95%" rx="5" ry="5" width="50%" height="2%" />
      </ContentLoader>
    </div>;
  }

  if (isError) {
    return <div>Error: {error?.message}</div>;
  }






  return (
    <>
      <section className=' relative bg-secondary h-auto  pb-4 mt-1 '>
        <div className='w-full mx-auto h-full container px-3 relative  flex flex-col justify-between gap-2 bg-secondary md:flex-row  md:px-10   xl:px-20  '>

          <div className='  md:max-h-auto  w-full relative p-1 md:h-full md:w-[60%] '>
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

        allproducts?.length > 0 ? <CategoriesSection title={"Best Deals On All Products"} url="products" >
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