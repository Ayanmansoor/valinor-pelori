import React from 'react'

function NotFound() {
  return (
   <section className='w-full relative gap-1  from-primary from-[5%] items-center justify-center to-white h-[70vh]  xl:h-[100vh] flex flex-col container px-3 md:px-10 lg:px-20  '>
                <h1 className=' text-center text-3xl lg:text-4xl xl:text-6xl mb-3 font-semibold text-primary'>Page Not-Found</h1>
                <p className=' text-xs md:text-sm text-center lg:text-base  leading-[1.2] font-semibold text-primary'>Oops! The page you're looking for doesn’t exist.</p>
                <p className=' text-xs md:text-sm text-center lg:text-base leading-[1.2] font-medium text-primary'>Let’s get you back on track to explore timeless style and elegance.</p>
   </section>
  )
}

export default NotFound