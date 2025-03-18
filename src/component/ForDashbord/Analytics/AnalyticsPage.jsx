import React from 'react'

import AnalyticsSlider from './AnalyticsSlider';
import GrowthChart from './GrowthChart';
import ProfitChart from './ProfitChart';
import ProductOrderReport from './ProductOrderChart';
import ProductDeliverd from './ProductDeliverd';
import AnalyticActiveuser from './AnalyticActiveuser';

function AnalyticsPage() {
  return (
    <section className='w-full relative h-full bg-secondary overflow-auto product-card-wrappar py-1
     px-3 '>
           <AnalyticsSlider/>
        <div className='w-full relative h-[78%] gap-2  grid grid-cols-3  '>


            <div className='w-full relative '>
                <ProductOrderReport/>
            </div>

            <div className='w-full relative   bg-yellow-100'>
                <ProductDeliverd/>
            </div>
            <div className='w-full relative     bg-[#007a9999]'>
                    <AnalyticActiveuser/>
            </div>
            
            <div className='w-full relative col-start-1 col-end-3 bg-orange-100'>
            <ProfitChart/>

            </div>
            <div className='w-full relative  '>
                <GrowthChart/>
            </div>

            
            
        </div>

    </section>
  )
}

export default AnalyticsPage