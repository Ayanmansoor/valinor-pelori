import React from 'react'

function RecentOrdercard({data}) {
    return (
        <span className=' flex items-center justify-between w-full gap-2 px-1 py-3 relative cursor-pointer transition-all duration-75 border border-transparent hover:border-[#d1d1d1] rounded-md h-auto'>
            <img src="/sneakers.png" alt="product name" className='h-[30px] w-[30px] relative rounded-full ' height={100} width={100} />
            <span className='flex flex-col w-fit'>
                <h2 className='text-[14px] font-semibold text-third'>{data.name}</h2>
                <p className='text-[12px] font-light text-[#a0a0a0]'>{data.category}</p>
            </span>
            <h2 className='text-[14px] font-semibold text-third'>$ {data.price}</h2>

        </span>

    )
}

export default RecentOrdercard