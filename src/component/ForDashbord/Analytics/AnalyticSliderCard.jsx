import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from 'react-router-dom';
function AnalyticSliderCard({data}) {
    console.log(data)
    return (
        <div className={`flex flex-col items-center gap-2 h-full relative w-fit px-4 py-2 shadow-lg ${data.className} `}>

            <div className=' flex items-center gap-2 w-full relative h-auto py-2 '>
                {data?.icon}
                <span className='flex flex-col  w-fit '>
                    <p className='text-p18 font-medium m-0 leading-[20px]  p-0 text-third'>{data.data.ActiveUser}</p>
                    <p className='text-[14px] leading-[20px] line-clamp-1 font-normal '>{data.data.name}</p>
                </span>
            </div>
            <Link to={data.data.url} className='flex w-full items-center cursor-pointer justify-between gap-2 py-2 text-[14px]  border-t border-third border-dashed '>  
                ViewMore <IoIosArrowRoundForward className='text-[25px]  font-medium' />
            </Link>

        </div>
    )
}

export default AnalyticSliderCard