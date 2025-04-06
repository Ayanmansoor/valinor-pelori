import React, { useState } from 'react'
import Nav from '@/Comman/Nav';
import Footer from '@/Comman/Footer';
import { Outlet } from 'react-router-dom';
import SideBar from '@/component/ForMobile/SideBar';
import SubscribeUs from '@/Comman/SubscribeUs';

function Baselayout() {
  const [SlideOpen, setSlideOpen] = useState(false)
  return (
    <>

      <Nav toOpen={{ setSlideOpen, SlideOpen }} />
      {/* <Outlet/> */}
      <div className='overflow-hidden w-full h-auto relative'>
        <SideBar isOpen={SlideOpen} />

        <Outlet />
      </div>
      <SubscribeUs />

      <Footer />
    </>
  )
}

export default Baselayout