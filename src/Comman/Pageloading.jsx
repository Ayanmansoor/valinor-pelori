import React, { useState } from 'react'

function Pageloading() {
    const [loading,setloding]=useState(0)
    let num=loading
    setInterval(() => {
        setloding(num+=1)     
    }, 1000);

  return (
    <section className='w-full relative h-[100vh] bg-secondary text-third'>
        <div className='reltive flex items-center justify-center w-full h-full bg-transparent flex-col gap-5 '>
            <img src="public/sneakers.png" alt="shoe icon" id="movinganimation" height={100} width={100} className='bg-transparent h-40 w-40 relative  ' />
            <progress id="progress" value={`${num}`} max="100" className='bg-third rounded-2xl  w-[200px] '>  </progress>
        </div>
        <span className='absolute bottom-5 right-5 text-[50px] z-20 font-medium'>{num}%</span>
    </section>
  )
}

export default Pageloading