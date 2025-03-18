import React from 'react'
import { CiSearch } from "react-icons/ci";
import { GoBell } from "react-icons/go";
import {
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom"

function Greeting() {
  const urlname = useLocation()
  const urlParams= useParams()
  console.log(urlname,urlParams)

  return (
    <section className={` items-center justify-between hidden md:flex ${urlname.pathname.includes("analytic")  && "hidden" } w-full sticky top-0 z-20 bg-secondary py-[10px] border-b border-[#cacaca] px-10`}>
        <span className='flex flex-col items-start '>
            <h1 className='text-h2 font-semibold text-third '>Welcome Ayan 👋</h1>
            <p className='text-[16px] font-normal text-third '>Here What happening with your store today ! </p>
        </span>
        <div className='flex items-center gap-5 w-fit '>
        <CiSearch className='text-[30px] p-1 rounded-3xl bg-slate-100 border cursor-pointer border-[#cacaca] ' />
        <GoBell  className='text-[30px] p-[5px] rounded-3xl bg-slate-100 border cursor-pointer border-[#cacaca]'/>

        <p className='px-[.1px] h-[40px] border border-[#cacaca]'></p>

        <img src="/vite.svg" alt="userImage" height={100} width={100} className='h-[30px] w-[30px] rounded-full cursor-pointer' />

        </div>
    </section>
  )
}

export default Greeting