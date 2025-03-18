import React from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { IoAnalytics } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import { PiShoppingCartThin } from "react-icons/pi";
import { IoAdd } from "react-icons/io5";
import { AiOutlineProduct } from "react-icons/ai";
import { VscFeedback } from "react-icons/vsc";
import { GoGear } from "react-icons/go";
import { LuUsers } from "react-icons/lu";
import { Link } from 'react-router-dom';
import { PiUsersThreeLight } from "react-icons/pi";

function Sidenavbar() {
  return (
    <div className='h-full hidden  md:flex relative w-full bg-[#dfdfdf] text-secondary   flex-col items-center px-2 justify-between border-r border '>
          
    <div className='flex flex-col gap-5 items-center w-full '>
      <div className='flex flex-col gap-5 items-center w-full'>
        <Link to={'/'}>
          <img src="/NewLogo.jpg" height={100} width={100} alt="Logo" className='h-[77px] w-full relative  object-contain p-2 border-b border-[#b1b1b1]' />        
        </Link>
      <ul className='w-full relative flex flex-col font-medium items-center gap-3 px-2'>
        <li className='flex items-center gap-2  text-[15px]   w-full py-1 text-third hover:text-secondary hover:bg-third px-1 rounded-md cursor-pointer'>  <Link to={"/Dashbord"} className='flex items-center gap-2'><IoHomeOutline  className='text-[20px]'/> Home</Link> </li>
        <li className='flex items-center gap-2  text-[15px]   w-full py-1 text-third hover:text-secondary hover:bg-third px-1 rounded-md cursor-pointer'><Link to={"orders"} className='flex items-center gap-2'><PiShoppingCartThin    className='text-[20px]'/> Orders</Link></li>
        <li className='flex items-center gap-2  text-[15px]   w-full py-1 text-third hover:text-secondary hover:bg-third px-1 rounded-md cursor-pointer'> <Link to={"analytic"} className='flex items-center gap-2'><IoAnalytics   className='text-[20px]'/> Analytics </Link> </li>
        <li className='flex items-center gap-2  text-[15px]   w-full py-1 text-third hover:text-secondary hover:bg-third px-1 rounded-md cursor-pointer'><Link to={"addproduct"} className='flex items-center gap-2'><IoAdd   className='text-[20px]'/> Add product </Link></li>
        <li className='flex items-center gap-2  text-[15px]   w-full py-1 text-third hover:text-secondary hover:bg-third px-1 rounded-md cursor-pointer'><Link to={"allproducts"} className='flex items-center gap-2'><AiOutlineProduct   className='text-[20px]'/> All product </Link></li>
        <li className='flex items-center gap-2  text-[15px]   w-full py-1 text-third hover:text-secondary hover:bg-third px-1 rounded-md cursor-pointer'><Link to={"customers"} className='flex items-center gap-2'><PiUsersThreeLight   className='text-[22px]'/> Customers  </Link></li>

       </ul>

      </div>
      <div className='flex flex-col gap-4 items-start w-full mt-5'>
        <h2 className='text-p20  font-semibold text-third px-1'>Tools</h2>
      <ul className='w-full relative flex flex-col font-medium items-center gap-3 px-2'>
        <li className='flex items-center gap-2 text-[15px]  w-full py-1 text-third hover:text-secondary hover:bg-third px-1 rounded-md cursor-pointer'><GoGear  className='text-[20px]'/> Setting</li>
        <li className='flex items-center gap-2   text-[15px]  w-full py-1 text-third hover:text-secondary hover:bg-third px-1 rounded-md cursor-pointer'><LuUsers   className='text-[20px]'/> Users</li>
        <li className='flex items-center gap-2  text-[15px]   w-full py-1 text-third hover:text-secondary hover:bg-third px-1 rounded-md cursor-pointer'><VscFeedback   className='text-[20px]'/>Feedback</li>

       </ul>

      </div>
    
    </div>
    
    <button className=' flex items-center font-semibold text-p18  gap-2 w-full bg-secondary text-third hover:bg-red-700 hover:text-secondary rounded-md py-2 px-3'><CiLogout className='text-[20px] '/> Logout</button>


  </div>
  )
}

export default Sidenavbar