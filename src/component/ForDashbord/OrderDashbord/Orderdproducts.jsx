import React from 'react'
import { CiSearch } from "react-icons/ci";
import { LuListFilter } from "react-icons/lu";
import { BsArrowDownUp } from "react-icons/bs";
import OrderDevilerdsection from './OrderDevilerdsection';
function Orderdproducts() {
  return (
    <section className='min-h-[60vh] relative w-full '>
        {/* filter */}
        <div className='flex items-center justify-between w-full relative py-3'>
            <div className='w-fit flex items-center px-[6px] py-[6px] rounded-sm gap-1 bg-[#e9e9e9] '>
                    <span className='text-[16px] font-medium px-3 text-third rounded-sm bg-transparent cursor-pointer  hover:bg-white'>All</span>
                    <span className='text-[16px] font-medium px-3 text-third rounded-sm bg-transparent cursor-pointer  hover:bg-white'>Unfulfiled</span>
                    <span className='text-[16px] font-medium px-3 text-third rounded-sm bg-transparent cursor-pointer  hover:bg-white'>Process</span>
                    <span className='text-[16px] font-medium px-3 text-third rounded-sm bg-transparent cursor-pointer  hover:bg-white'>Fulfiled</span>
                    <span className='text-[16px] font-medium px-3 text-third rounded-sm bg-transparent cursor-pointer  hover:bg-white'>Deliverd </span>
            </div>
            <div className='w-fit flex items-center  rounded-sm gap-2  '>
            <span className='text-[16px] font-medium px-[6px] py-[6px] text-third rounded-md  cursor-pointer bg-white'><CiSearch  className='text-[20px] '/> </span>
            <span className='text-[16px] font-medium px-[6px] py-[6px] text-third rounded-md  cursor-pointer bg-white'><LuListFilter className='text-[20px] '/></span>
            <span className='text-[16px] font-medium px-[6px] py-[6px] text-third rounded-md  cursor-pointer bg-white'><BsArrowDownUp   className='text-[20px] '/></span>

            </div>
        </div>
        <div className='w-full h-auto relative  p-1 '>
            <OrderDevilerdsection/>
        </div>
    </section>
  )
}

export default Orderdproducts