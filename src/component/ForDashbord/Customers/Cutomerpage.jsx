import React from 'react'
import OrderreviewsSlider from '../OrderDashbord/OrderreviewsSlider'
import TodayVisited from './TodayVisited'
import EarnedFromCustomer from './EarnedFromCustomer'
function Cutomerpage() {
  return (
    <section className='h-full relative w-full bg-secondary flex flex-col gap-1   px-3'>
        <div className='relative w-full h-auto '>
            <OrderreviewsSlider/>
        </div>
        <section className='w-full relative h-[calc(100vh-170px)] gap-2 grid grid-cols-3'>
        
        <div className='w-full h-full relative rounded-lg border  shadow-lg p-3 overflow-hidden col-start-1 col-end-3'>
          <p className='text-[16px] font-medium text-third '>Comming Users </p>
          <TodayVisited/>
        </div>

          <div className='w-full h-full relative rounded-lg border  shadow-lg p-3 overflow-hidden '>
            <p className='text-[16px] font-medium text-third '>Earned From User</p>
            <EarnedFromCustomer/>

          </div>
          <div className='w-full h-full relative rounded-lg border  shadow-lg p-3 overflow-hidden '>
            <p className='text-[16px] font-medium text-third '>Earned From User</p>
            <EarnedFromCustomer/>

          </div>
          <div className='w-full h-full relative rounded-lg border  shadow-lg p-3 overflow-hidden '>
            <p className='text-[16px] font-medium text-third '>Earned From User</p>
            <EarnedFromCustomer/>

          </div>
          <div className='w-full h-full relative rounded-lg border  shadow-lg p-3 overflow-hidden '>
            <p className='text-[16px] font-medium text-third '>Earned From User</p>

            <TodayVisited/>
            </div>

        </section>
    </section>
  )
}

export default Cutomerpage