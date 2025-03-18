import React from 'react'

function AddproductCategory() {
  return (
    <section className='flex flex-col gap-3 '>
        <h2 className='text-p18 font-semibold text-third '>Select Category</h2>
        <div className='border border-[#d1d1d1] w-full p-3 rounded-md'>

            <span className='flex flex-col gap-1 w-full relative text-third overflow-hidden'>
                <p className='text-[15px] font-medium text-third '>Product Category</p>
                <select name=""className='w-full relative py-1 px-2 rounded-md border border-[#d1d1d1] bg-secondary  ' id="">
                    <option value="" selected hidden >Select</option>
                </select>
            </span>

            <span className='flex flex-col gap-1 w-full relative text-third mt-3 overflow-hidden'>
                <p className='text-[15px] font-medium text-third '>Product Category</p>
                <select name=""className='w-full relative py-1 px-2 rounded-md border border-[#d1d1d1] bg-secondary  ' id="">
                    <option value="" selected hidden >Select</option>
                </select>
            </span>
            
        </div>
    </section>
  )
}

export default AddproductCategory