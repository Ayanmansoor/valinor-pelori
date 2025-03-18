import React from 'react'
import LeftSide from './LeftSide'
import { IoArrowBack } from "react-icons/io5";
import RigthSide from './RigthSide'
function Addproductsection() {
  return (
    <section className='w-full relative h-auto  bg-secondary overflow-auto product-card-wrappar'>
        <div className='flex items-center w-fit  ml-4 gap-5 z-20 sticky top-0 py-5 '>
            <IoArrowBack className=' border h-[30px] p-1 w-[30px] cursor-pointer rounded-md bg-secondary  '  />
            <h2 className='text-p20 font-semibold text-third'>Add New Product</h2>
        </div>
        <section className=' grid grid-cols-2 gap-5 h-full w-full relative px-5'>
                <LeftSide/>
                <RigthSide/>
        </section>
    </section>    
)
}

export default Addproductsection