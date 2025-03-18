import React from 'react'
import { Outlet } from 'react-router-dom';
import Sidenavbar from '@/component/ForDashbord/common/Sidenavbar';
function DashbordLayout() {
  return (
    <section className='w-full realtive h-screen bg-secondary grid md:grid-cols-[.3fr_2fr] items-start '>
        <Sidenavbar/>
        <div className='w-full relative h-full overflow-auto product-card-wrappar '>
        <Outlet  />
        </div>
    </section>
  ) 
}

export default DashbordLayout