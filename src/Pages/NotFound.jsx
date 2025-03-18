import React from 'react'

function NotFound() {
  return (
   <section className='w-full relative gap-1 bg-gradient-to-t from-primary from-[5%] items-center justify-center to-white h-[70vh]  xl:h-[100vh] flex flex-col container px-3 md:px-10 lg:px-20  '>
                <h1 className=' text-center text-3xl lg:text-4xl xl:text-6xl mb-3 font-semibold text-white'>Page Not-Found</h1>
                <p className=' text-xs md:text-sm text-center lg:text-base  leading-[1.2] font-medium text-gray-100'>adipisicing elit. Hic laudantium sunt inventore quam odit rem esse deleniti necessitatibus iure sint.</p>
                <p className=' text-xs md:text-sm text-center lg:text-base leading-[1.2] font-medium text-gray-100'>Lorem ipsum, dolor sit amet consectetur </p>
   </section>
  )
}

export default NotFound