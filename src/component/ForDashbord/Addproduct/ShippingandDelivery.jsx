import React from 'react'

function ShippingandDelivery() {
  return (
    <section className='flex flex-col gap-2 '>
    <h2 className='text-p18 font-semibold text-third '>Shipping and Delivery</h2>
    <div className='border border-[#d1d1d1] w-full p-3 rounded-md'>

        <p className='text-[15px] font-medium text-third '>Product Category</p>
        <span className='grid grid-cols-[1fr_0.2fr] border-[#d1d1d1] border rounded-md   w-full relative text-third overflow-hidden mt-1  '>
                  <input type="text" className='w-full relative h-full placeholder:text-[13px]  py-1 px-2  '  placeholder='items weight'/>
                  <select name="" id="" className='w-full relative h-full py-1 bg-secondary'>
                    <option value="" selected hidden >Unit</option>
                  </select>
        </span>

        <span className='flex flex-col gap-1 w-full relative text-third mt-3 overflow-hidden'>
            <p className='text-[15px] font-medium text-third '>Product Category</p>
            <p className='text-[14px] font-normal mt-1 mb-1 text-third'>Packages Size  </p>
            <div className='w-full relative grid grid-cols-3 gap-3 '>
              <span className='flex flex-col gap-1  w-full relative'>
                <p className='text-[13px] font-normal '>
                  Length
                </p>
                <input type="text" className='w-full relative rounded-md px-2 py-1 placeholder:text-[13px] border-[#d1d1d1] border' placeholder='Length' />
              </span>
              <span className='flex flex-col gap-1  w-full relative'>
                <p className='text-[13px] font-normal '>
                  Breath
                </p>
                <input type="text" className='w-full relative rounded-md px-2 py-1 placeholder:text-[13px] border-[#d1d1d1] border' placeholder='Breath' />
              </span>
              <span className='flex flex-col gap-1  w-full relative'>
                <p className='text-[13px] font-normal '>
                  Width
                </p>
                <input type="text" className='w-full relative rounded-md px-2 py-1 placeholder:text-[13px] border-[#d1d1d1] border'  placeholder='Width' />
              </span>
            </div>
            
        </span>
        
    </div>
</section>
  )
}

export default ShippingandDelivery