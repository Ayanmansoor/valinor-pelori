import React, { useRef } from 'react'

function Specification({product}) {
   
    return (
    <section className='w-full relative container  h-auto flex flex-col gap-8 bg-secondary px-5  md:px-10   xl:px-20   '>

        <div className='w-full relative h-auto flex flex-col'>
            <span className='w-fit relative px-5  py-1 border-t border-black text-primary bg-white text-base font-medium '>
                Details
            </span>
            <div className='w-full py-5 px-5  border  relative h-auto flex flex-col '>
                <h2 className='text-xl mb-1 font-meidum text-footerfont'>{product?.brands?.name}</h2>
                <p className='text-base font-normal text-gray-500'>{product?.description}</p>
            </div>
        </div>

        {/* <div className='w-full relative h-auto flex flex-col'>
            <span className='w-fit relative px-5  py-1 border-t border-black text-primary bg-white text-base font-medium '>
                Additional Information
            </span>
            <ul  className='w-full py-5 px-5  border relative h-auto flex flex-col gap-2 '>

                <span className='w-full relative  bg-white py-1 px-5 border  rounded-md  grid grid-cols-[.5fr_1fr] gap-1 items-center '>
                    <p className='text-base font-medium text-primary '>Size :-</p>
                    <p  className='text-sm font-normal text-primary '>6 (uk)</p>
                </span>
                <span className='w-full relative  bg-white py-1 px-5 border  rounded-md  grid grid-cols-[.5fr_1fr] gap-1 items-center '>
                    <p className='text-base font-medium text-primary '>Size :-</p>
                    <p  className='text-sm font-normal text-primary '>6 (uk)</p>
                </span>
            </ul>
        </div>
         */}
       

    </section>
    )
}

export default Specification