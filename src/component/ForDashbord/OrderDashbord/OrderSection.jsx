import React from 'react'
import OrderreviewsSlider from './OrderreviewsSlider'
import { CiCalendar } from "react-icons/ci";
import Orderdproducts from './Orderdproducts';
function OrderSection() {


  return (
    <section className='w-full h-full relative  '>
      <div className='flex flex-col gap-1 h-auto w-full bg-secondary pb-4'>
        <h1 className='text-third font-semibold text-p40 '>
          Orders
        </h1>
        <div className='flex items-center gap-1 w-fit py-0 px-1 cursor-pointer  rounded-sm bg-stone-200 border border-[#cccccc] '>
        <CiCalendar className='text-p18 font-medium' />
        <span className='  relative m-0 p-0'>irti</span>
        </div>
      </div>
        <OrderreviewsSlider/>
        <Orderdproducts/>
    </section>
  )
}

export default OrderSection