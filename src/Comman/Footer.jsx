import React from 'react'
import { CiInstagram } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { RxTwitterLogo } from "react-icons/rx";
import { RiTelegramLine } from "react-icons/ri";
import { PiFacebookLogo } from "react-icons/pi";
import { PiInstagramLogoThin } from "react-icons/pi";
import { RiTwitterXLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion"

function Footer() {
  return (
    <footer className='  w-full relative  h-auto text-primary-foreground bg-primary   overflow-hidden'>


      <section className='w-full relative h-[70vh] md:flex hidden  flex-col gap-1 container text-white py-10 pb-56 px-5 md:px-10   xl:px-20'>
        <div className=' w-full h-full grid   z-20 grid-cols-4 gap-5  '>

          <div className='relative h-auto  '>
            <h2 className='text-p20 font-medium mb-4 border-b pr-5  w-fit '>
              Pages
            </h2>
            <ul className='flex items-start flex-col text-base justify-start gap-2'>
              <Link to={'/'} href="">Home</Link>
              <Link to={'/new-arrivals'} href="">New Arrived</Link>
              <Link to={'/products'} href="">Proudcts</Link>
              <Link to={'/trending'} href="">Trending</Link>
              <Link to={'/about-us'} href="">About us</Link>
              <Link to={'/faqs'} href="">Privacy and Policy</Link>
              <Link to={'/faqs'} href="">Shiping Policy</Link>
              <Link to={'/about-us'} href="">FAQ</Link>

            </ul>
          </div>


          <div className='relative h-auto  '>
            <h2 className='text-p20 font-medium mb-4 border-b w-fit pr-5 '>
              Products

            </h2>
            <ul className='flex items-start flex-col  text-base justify-start gap-2'>
              <Link to={'collection/mens'} href="">Men</Link>
              <Link to={'collection/womens'} href="">Women</Link>
              <Link to={'collection/kids'} href="">Kids</Link>
              <Link to={'/trending'} href="">Gen z's</Link>
              <Link to={'/discount-deals'} href="">Discount Deals</Link>
            </ul>
          </div>


          <div className='relative h-auto  justify-self-start '>
            <h2 className='text-p20 font-medium mb-4 border-b w-fit pr-5'>
              Follow Us

            </h2>
            <ul className='flex items-start flex-col text-base  justify-start gap-3'>
              <li><a href="" className='flex items-center gap-1'><CiInstagram className='text-[20px] hover:text-red-300' /> Instagram</a></li>
              <li><a href="" className='flex items-center gap-1'><CiFacebook className='text-[20px] hover:text-red-300' /> Facebook</a></li>
              <li><a href="" className='flex items-center gap-1'><RxTwitterLogo className='text-[20px] hover:text-red-300' /> Twitter</a></li>
              <li><a href="" className='flex items-center gap-1'><RiTelegramLine className='text-[20px] hover:text-red-300' /> Telegram</a></li>
            </ul>
          </div>


          <div className='relative h-auto  justify-self-start '>
            <h2 className='text-p20 font-medium mb-4 border-b w-fit pr-5'>
              Subscrib Us
            </h2>
            <form action='' className='flex items-start flex-col text-p18  justify-start gap-3'>
              <input type="text" className='w-full relative h-atuo py-2 cursor-pointer px-2 border-b border-white bg-transparent placeholder:text-white placeholder:text-sm text-base' placeholder='Enter Your Email' />
            </form>
            <h2 className='text-p20 font-medium mb-4  mt-3 w-fit pr-5'>
              Aaddress
            </h2>
            <p className='text-base font-normal  text-white '>Lorem ipsum dolor sit amet.</p>
          </div>

        </div>
      </section>
      <div className='w-full relative z-0 -bottom-[40px] z- h-auto  hidden  md:flex leading-[1.1] items-center op opacity-30  uppercase font-semibold text-footerfont justify-center -mt-28 bg-gradient-to-r from-transparent  to-white bg-clip-text  '>Valinor & Pelóri
      </div>



      <div className='container px-5   mx-auto h-auto relative  md:px-10  py-10 bg-secondary block sm:hidden   xl:px-20 '>
        <Accordion type="single" collapsible className=' text-third hover:no-underline'>
          <AccordionItem value="item-1" className="hover:no-underline">
            <AccordionTrigger className='hover:no-underline'>Pages</AccordionTrigger>
            <AccordionContent >
              <div className='relative h-auto  '>

                <hr className='mt-1' />

                <ul className='flex items-start mt-2 flex-col text-base justify-start gap-2'>
                  <Link to={'/'} href="">Home</Link>
                  <Link to={'/new-arrivals'} href="">New Arrived</Link>
                  <Link to={'/products'} href="">Proudcts</Link>
                  <Link to={'/tranding'} href="">Trnding</Link>
                  <Link to={'/about-us'} href="">About us</Link>
                  <Link to={'/privacy-policy'} href="">Privacy and Policy</Link>
                  <Link to={'/shiping-policy'} href="">Shiping Policy</Link>
                  <Link to={'/about-us'} href="">FAQ</Link>
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible className=' text-third hover:no-underline'>
          <AccordionItem value="item-1">
            <AccordionTrigger className=' hover:no-underline'>Products</AccordionTrigger>
            <AccordionContent >
              <div className='relative h-auto  '>
                <hr className='mt-1' />

                <ul className='flex items-start flex-col mt-2  text-base justify-start gap-2'>
                  <Link to="collection/mens">Man</Link>
                  <Link to="collection/womens">Women</Link>
                  <Link to='collection/kids'>kids</Link>
                  <Link to="trending">Trending</Link>
                  <Link to="new-arrivals">Trending</Link>

                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className='w-full h-auto relative bg-secondary block  sm:hidden pt-5 '>
        <p className='text-p20 font-light text-third text-center  '>Follow Us</p>
        <hr className='w-full absolute top-8 ' />
        <div className=' container mx-auto h-auto px-20 py-3 flex justify-center items-center gap-5'>
          <PiFacebookLogo className='text-[35px] rounded-2xl text-secondary p-1 bg-third' />
          <PiInstagramLogoThin className='text-[35px] rounded-2xl text-secondary p-1 bg-third' />
          <RiTwitterXLine className='text-[35px] rounded-2xl text-secondary p-1 bg-third' />


        </div>
      </div>



    </footer>
  )
}

export default Footer