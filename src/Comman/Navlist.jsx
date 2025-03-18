import React from 'react'
import { FiArrowUpRight } from "react-icons/fi";
function Navlist({name}) {
  return (
        <p className='w-fit relative h-auto flex items-center gap-1 group hover: '>
            {name} <FiArrowUpRight className='text-[14px] opacity-0 transition-all duration-300 group-hover:opacity-100pa  group-hover:translate-x-1 group-hover:-translate-y-1 '/>
        </p>
  )
}

export default Navlist