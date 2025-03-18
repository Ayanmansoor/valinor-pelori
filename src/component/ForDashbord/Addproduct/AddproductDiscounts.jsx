import React from 'react'
import { SlCalender } from "react-icons/sl";
function AddproductDiscounts() {
    return (
        <section className='flex flex-col gap-2 '>
            <h2 className='text-p18 font-semibold text-third '>Product Discounts</h2>
            <div className='border border-[#d1d1d1] grid grid-cols-[2fr_.2fr] items-center gap-4 w-full p-3 rounded-md'>

                <span className='flex flex-col gap-1 w-full relative text-third overflow-hidden'>

                    <p className='text-[15px] font-medium text-third '>Discount {"(in Parcent %)"}</p>
                    <span className='grid grid-cols-[0.1fr_1fr] rounded-md border border-[#d1d1d1]  overflow-hidden'>
                        <p className='w-full relative bg-slate-200 text-[15px] flex items-center justify-center  '>$</p>
                        <input type="text" className='w-full relative py-1 px-2  bg-secondary placeholder:text-[13px] ' placeholder='Product Name' />
                    </span>

                </span>

                <span className='flex flex-col gap-1 w-full relative text-third  overflow-hidden'>
                    <p className='text-[15px] font-medium text-third flex items-center gap-2 '>Date </p>
                    <SlCalender className='text-p18 font-normal h-[25px] w-[30px] cursor-pointer' />
                   
                </span>

            </div>
        </section>
    )
}

export default AddproductDiscounts