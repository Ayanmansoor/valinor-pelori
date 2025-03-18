import React from 'react'

function AddproductPricing() {
  return (
    <section className='flex flex-col gap-2 '>
    <h2 className='text-p18 font-semibold text-third '>Select Category</h2>
    <div className='border border-[#d1d1d1] flex items-center gap-4 w-full p-3 rounded-md'>

        <span className='flex flex-col gap-1 w-full relative text-third overflow-hidden'>
            <p className='text-[15px] font-medium text-third '>Price</p>
            <span className='grid grid-cols-[0.1fr_1fr] rounded-md border border-[#d1d1d1]  overflow-hidden'>
            <p className='w-full relative bg-slate-200 text-[15px] flex items-center justify-center  '>$</p>
            <input type="text" className='w-full relative py-1 px-2  bg-secondary placeholder:text-[13px] ' placeholder='Product Name'  />
            </span>

        </span>

        <span className='flex flex-col gap-1 w-full relative text-third  overflow-hidden'>
            <p className='text-[15px] font-medium text-third '>Compair Price</p>
            <span className='grid grid-cols-[0.1fr_1fr] rounded-md border border-[#d1d1d1]  overflow-hidden'>
            <p className='w-full relative bg-slate-200 text-[15px] flex items-center justify-center  '>$</p>
                 <input type="text" className='w-full relative py-1 px-2  bg-secondary placeholder:text-[13px] ' placeholder='Product Name'  />
            </span>

        </span>
        
    </div>
</section>
  )
}

export default AddproductPricing