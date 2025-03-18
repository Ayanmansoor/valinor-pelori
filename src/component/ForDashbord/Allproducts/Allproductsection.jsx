import React from 'react'
import AllproductCarousel from '@/component/ForDashbord/Allproducts/AllproductCarousel'
import TopSalesection from '../products/TopSalesection'

function Allproductsection() {
  return (
    <section className='w-full h-full  relative overflow-auto product-card-wrappar px-5'>
        <AllproductCarousel/>
        <TopSalesection/>
    </section>
  )
}

export default Allproductsection