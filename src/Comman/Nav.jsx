import React, { useRef, useState } from 'react'
import { HiChevronDown } from "react-icons/hi";
import { IoPersonOutline } from "react-icons/io5";
import { PiShoppingCartLight } from "react-icons/pi";
import { Link } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
import Megamanu from './Megamanu';
import { useCart } from '@/Contexts/Cart.context';
import CartSheet from './CartSheet';
import SideBarNew from './SideBarNew';
import SearchSide from './SearchSide';

function Nav(props) {
  const DropDown = useRef(null)
  const { cart, addToCart, deleteFromCart, clearCart } = useCart();

  const [isOpen, setisOpen] = useState(false);
  function openDropDown() {
    if (isOpen) {
      DropDown.current.style.display = 'none'
      console.log(isOpen)
      setisOpen(false);
    }
    else {
      DropDown.current.style.display = 'grid'
      console.log(isOpen)
      setisOpen(true);
    }

  }
  return (

    <nav className='  container px-5 py-2 flex items-center justify-between gap-1 text-third md:px-10 sticky bg-white top-0 z-50  xl:px-20  '>
      <Link to={'/'} className='text-h1 font-normal  italic text-primary '>MARKLINE</Link>

      <ul className='hidden items-center gap-3 relative md:gap-5  xl:gap-5 lg:flex '>

        <Link to={"/products"} className="bg-transparent font-normal text-black p-0 text-lg">Products</Link>

        <Megamanu>
          <Link to={"/collections"} className="">Collections</Link>
        </Megamanu>

        <Link to={"/about-us"} className="bg-transparent font-normal p-0 text-black text-lg">About us</Link>
        <Link to={"/new-arrivals"} className="bg-transparent font-normal p-0 text-black text-lg">New Arrivals</Link>
      </ul>

      <ul className='flex items-center gap-2 sm:gap-4'>

        <SearchSide />
        {/* <li className=' gap-1 items-center flex  text-p18 font-medium cursor-pointer'><Link to={'/account'} ><IoPersonOutline className='text-[23px]' /></Link></li> */}
        <li className='flex gap-1 items-center text-p18 font-medium cursor-pointer  '>
          <CartSheet>
            <section className='relative h-auto w-auto '>
              <PiShoppingCartLight className='text-[23px]' />
              <p className='p-1 h-fit rounded-full text-[12px] leading-[0.6] absolute -top-2 -right-1 flex items-center justify-center  w-fit  font-normal bg-black text-white'>{cart.length}</p>
            </section>
          </CartSheet>

        </li>

        <SideBarNew />

      </ul>


    </nav>


  )
}

export default Nav