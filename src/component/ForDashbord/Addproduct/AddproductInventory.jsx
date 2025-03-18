import React from 'react'

function AddproductInventory() {
  return (
    <section className='flex flex-col gap-3 '>
        <h2 className='text-p18 font-semibold text-third '>Select Category</h2>
        <div className='border border-[#d1d1d1] w-full p-3 rounded-md'>

            <div className='grid grid-cols-[.5fr_1fr] gap-4 relative w-full '>
                        <span className=' flex flex-col gap-1 w-full '>
                            <label htmlFor="" className='text-[15px] font-medium text-third '>Quantity</label>
                            <input type="text" className='w-full relative py-1 px-2 rounded-md border border-[#d1d1d1] bg-secondary  ' placeholder='Quentity '  />
                        </span>   
                        <span className=' flex flex-col gap-1 w-full '>
                            <label htmlFor="" className='text-[15px] font-medium text-third '>SKU {"(optional)"}</label>
                            <input type="text" className='w-full relative py-1 px-2 rounded-md border border-[#d1d1d1] bg-secondary  ' placeholder='Quentity '  />
                        </span>
            </div>
            
        </div>
    </section>
  )
}

export default AddproductInventory