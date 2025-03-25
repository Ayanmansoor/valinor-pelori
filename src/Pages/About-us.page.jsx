import React from 'react'
import { useQuery } from 'react-query';
import { getAllProducts } from '@/Supabase/SupabaseApi';
import CategoriesSection from '@/component/Category/CategoriesSection';
import CarouselProduct from '@/component/ForHome/CarouselProduct';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

function AboutUsPage() {

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



  return (
    <>

      <section className='w-full flex flex-col items-start gap-4 container py-10 lg:py-20 px-3 md:px-10 lg:px-20'>

        <h1 className=' text-2xl md:text-3xl lg:text-5xl text-center w-full h-auto py-3 font-medium text-primary uppercase'>Tread & Trend</h1>
        <p className='w-full relative  text-lg  h-auto py-2 font-medium text-gray-600'>
          <strong className='text-primary text-base md:text-lg'>About Tread & Trend </strong>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni alias, quis nihil eligendi eum modi dolores minima in voluptate dolorum deserunt illum atque architecto perspiciatis odit tenetur hic nemo amet?
        </p>


      </section>
      <section className='w-full relative h-auto flex-col  flex items-start gap-2 '>
        <video width="320" className='w-full relative min-h-[250px] max-h-[500px] pb-10 ' height="240" controls>
          <source src="movie.mp4" type="video/mp4" />
        </video>
        <p className='w-full relative  text-base md:text-lg container px-3 md:px-10 lg:px-20 h-auto py-2 font-medium text-gray-600'>
          <strong className='text-primary text-base md:text-lg'>History of Tread & Trend </strong>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni alias, quis nihil eligendi eum modi dolores minima in voluptate dolorum deserunt illum atque architecto perspiciatis odit tenetur hic nemo amet?
        </p>
      </section>

      {
        allproducts?.length > 0 && (

          <CategoriesSection title={"Our Products "} >

            <CarouselProduct data={{ categoryName: "all", name: "Our Prodcuts", url: 'product' }} product={allproducts} />

          </CategoriesSection >
        )
      }

      <section className='w-full flex flex-col items-start gap-4 container py-10 lg:py-20  px-3 md:px-10 lg:px-20'>
        <p className='w-full relative  text-lg  h-auto py-2 font-medium text-gray-600'>
          <strong className='text-primary text-lg'>Vision And Mision of Tread & Trend </strong>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni alias, quis nihil eligendi eum modi dolores minima in voluptate dolorum deserunt illum atque architecto perspiciatis odit tenetur hic nemo amet?
        </p>
      </section>

      <section className='w-full flex flex-col items-start gap-4 container pb-5 lg:pb-10   px-3 md:px-10 lg:px-20'>

        <h1 className='text-5xl text-center w-full h-auto py-3 font-medium text-primary uppercase'>FAQS</h1>
        <p className='w-full relative  text-lg  h-auto py-2 font-medium text-gray-600'>
          <strong className='text-primary text-base md:text-lg'>FAQS for Tread & Trend </strong>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni alias, quis nihil eligendi eum modi dolores minima in voluptate dolorum deserunt illum atque architecto perspiciatis odit tenetur hic nemo amet?
        </p>

        <Accordion type="single" collapsible className='w-full relative h-auto '>
          <AccordionItem value="item-1" className="w-full relative">
            <AccordionTrigger className="text-lg px-5 font-medium relative text-primary border-b border-primary ">Is it accessible?</AccordionTrigger>
            <AccordionContent className="text-base font-medium py-5 px-5 relative text-gray-500">
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

      </section>

    </>

  )
}

export default AboutUsPage