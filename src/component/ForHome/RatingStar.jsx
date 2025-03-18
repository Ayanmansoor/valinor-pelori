import React from 'react'

function RatingStar({value}) {
  return (
    <div className='flex items-center gap-1'>
        {[1,1,2,3,4].map((star)=>{
            return(
                <span className={` cursor-pointer h-fit m-0 text-[${value?.starheight}px] ${ value.Numberrating >= star ? "text-orange-300" : "text-gray-500"  } `}  onMouseMove={(e)=>(value.setNumberrating(star))}>
                      ★
                  </span>
            )
        })}
    </div>
  
  )
}

export default RatingStar