import React from 'react'
import RecentOrder from '../common/RecentOrder'
import Salesbycity from '../common/Salesbycity'
function SideReview() {
  return (
        <section className='w-full relative h-full bg-secondary gap-2 lg:gap-0 flex flex-col sm:flex-row lg:flex-col border-l border '>
            <div className=' h-full lg:h-[50%] relative px-2 w-full overflow-auto product-card-wrappar '>
                <RecentOrder/>
            </div>
            <div className='h-full lg:h-[50%] relative w-full overflow-auto product-card-wrappar '>
                <Salesbycity/>
            </div>
        </section>
  )
}

export default SideReview