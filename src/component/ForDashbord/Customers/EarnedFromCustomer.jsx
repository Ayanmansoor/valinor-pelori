import React from 'react'
import Earnerdcard from './Earnerdcard'
function EarnedFromCustomer() {
    const data = [
        {
            image: "",
            name: "Ayan mansoor",
            totalorder: 90,
            spent: 90974945,
            id: '0r0'
        }
        , {
            image: "",
            name: "Ayan mansoor",
            totalorder: 90,
            spent: 90974945,
            id: '0r0'
        }
    ]
    return (
        <div className='relative h-full w-full bg-secondary overflow-auto  product-card-wrappar  '>
            <div className=' grid sticky z-20 top-0 bg-secondary  grid-cols-[.5fr_1fr_1fr_1fr_.3fr]  gap-5 w-full items-center  py-2 px-1 border-b border-[#d3d3d3]  '>
                <p className='text-[16px]  font-normal text-third  line-clamp-1 '></p>
                <p className='text-[16px] font-normal text-third line-clamp-1'>Name</p>
                <p className='text-[16px]  font-normal text-third line-clamp-1'>Orderd</p>
                <p className='text-[16px]  font-normal text-third  line-clamp-1 '>Spent</p>
                <p className='text-[16px]  font-normal text-third '>Action</p>
            </div>
            <div className='w-full relative h-auto  overflow-auto  product-card-wrappar'>
                

                {
                    data.map((item, index) => (
                        <Earnerdcard data={item} />
                    ))
                }
            </div>


        </div>
    )
}

export default EarnedFromCustomer