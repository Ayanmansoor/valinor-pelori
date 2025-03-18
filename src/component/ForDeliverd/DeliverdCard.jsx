import React from 'react'
import { CgCheck } from "react-icons/cg";
function DeliverdCard() {
    return (
        <div className='py-2 px-2 relative w-full h-fit flex items-start flex-col sm:flex-row md:flex-col gap-5 rounded-sm bg-white  '>
            <div className='w-full relative flex flex-row sm:flex-col md:flex-row justify-between items-center sm:items-start md:items-center gap-1 md:gap-3  rounded-sm'>
                <span className=' flex gap-2 flex-col md:flex-row items-start  md:items-center'>
                    <img src="https://images.unsplash.com/photo-1619851302789-ceaf8fa05f9a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Dileverd Product image." className='h-20 md-40 sm:w-full md:w-20 relative rounded-sm ' />
                    <span className='flex items-start flex-col '>
                        <h2 className='font-normal text-p18 text-third'>Hello world</h2>
                        <p className='text-[14px] font-light text-third'>QN:10</p>


                    </span>

                </span>
                <p className='text-p18 font-medium text-third'>$ 05869</p>
            </div>
           

        </div>

    )
}

export default DeliverdCard