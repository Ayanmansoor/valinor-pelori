import React from 'react'

function BlogBanner() {
  return (
    <section className='w-full relative  h-auto min-h-[200px] flex items-center justify-center  lg:h-[400px] bg-primary'>
        <img src="/jj_ss25_web_03022025.webp" alt="" className='w-full relative h-full min-h-[200px] object-cover' />
        <h1 className=' text-3xl md:text-5xl font-medium text-white absolute  '>Blogs</h1>
    </section>

  )
}

export default BlogBanner