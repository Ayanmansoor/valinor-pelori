import React, { useEffect } from 'react'
import Greeting from '../component/ForDashbord/Home/Greeting'
import SideReview from '@/component/ForDashbord/SideReviewSection/sideReview'
import HomeReview from '@/component/ForDashbord/Home/HomeReview'
import HomeCharts from '@/component/ForDashbord/Home/HomeCharts'
import TopSelesection from '@/component/ForDashbord/products/TopSalesection'
import { authorize, adminAuthoeize } from '@/Hooks/authentication'
import { useNavigate } from 'react-router-dom';


function DashbordHomepage() {
  const navigate = useNavigate()

  
  return (
    <section className='relative h-full w-full  '>
      <Greeting />
      <div className=' h-full lg:h-[calc(100vh-80px)]  relative grid grid-cols-[2fr] lg:grid-cols-[2fr_.6fr]  items-start gap-1 w-full '>
        <div className='w-full relaive px-2 py-2 overflow-auto h-full product-card-wrappar'>
          <HomeReview />
          <HomeCharts />
          <TopSelesection />

          <div className=' block w-full realtive h-auto sm:hidden'>
            <SideReview />

          </div>


        </div>
        <div className=' hidden w-full realtive h-auto sm:block'>
          <SideReview />

        </div>
      </div>
    </section>
  )
}

export default DashbordHomepage