import React from 'react'

function Ordercard({data}) {
  return (
    <div className='w-full relative   grid border px-4 py-3 grid-cols-[auto_2fr] gap-3 '>
        <img src={"/user_male.png"} alt="" className='  h-full w-[60px] relative rounded-md' />
        <span className='w-full flex-col relative h-full flex items-start justify-center'>
            <h2 className='text-p18 font-medium'>{data.name}</h2>
            <p className='text-[16px] font-normal leading-[1.1]'>Lorem, ipsum.</p>
            <p className='text-[16px] font-normal leading-[1.1] mt-2'>$90</p>
        </span>
    </div>
  )
}

export default Ordercard