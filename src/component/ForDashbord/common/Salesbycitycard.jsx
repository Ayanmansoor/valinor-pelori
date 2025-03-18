import React from 'react'
import { IoIosTrendingUp } from "react-icons/io";
import { IoIosTrendingDown } from "react-icons/io";
function Salesbycitycard({ data }) {
    return (
        <span className=' flex items-center justify-between w-full gap-2 px-1 py-3 relative cursor-pointer transition-all duration-75 border border-transparent hover:border-[#d1d1d1] rounded-md h-auto'>
            <div className=' flex items-center gap-4  relative w-fit'>
                <img src="/sneakers.png" alt="product name" className='h-[30px] w-[30px] relative rounded-full ' height={100} width={100} />
                <span className='flex flex-col w-fit'>
                    <h2 className='text-[14px] font-semibold text-third'>{data.city}</h2>
                </span>
            </div>
            <span className={`relative w-fit h-fit p-2 text-red-400 ${data.sellstatus && "text-green-700" } `}>{data.sellstatus ? <IoIosTrendingUp className='text-[20px]'/> : <IoIosTrendingDown className='text-[20px]' /> }</span>
            <h2 className='text-[14px] font-semibold text-third'>$ {data.income}</h2>

        </span>

    )
}

export default Salesbycitycard