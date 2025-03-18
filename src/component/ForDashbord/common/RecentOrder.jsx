import React from 'react'
import RecentOrdercard from './RecentOrdercard'
function RecentOrder() {
    const data={
        name: 'Nike air jorden',
        category:"shoes",
        price:"400",
        imageurl:"",
        id:""
        
    }
    return (
        <div className='flex flex-col  '>
            <div className='flex items-center sticky top-0 bg-secondary z-10 justify-between py-2 border-b border-[#7c7c7c] ' >
                <h2 className='text-p18 font-medium text-third'>Recent Orders</h2>
                <p className='text-[16px] font-medium text-[#b4b4b4] cursor-pointer'>See all</p>
            </div>
            <div className='relative  w-full flex flex-col gap-2 overflow-auto product-card-wrappar'>
                <RecentOrdercard data={data}/>
               
            </div>


        </div>
    )
}

export default RecentOrder