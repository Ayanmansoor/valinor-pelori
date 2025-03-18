import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { RxHamburgerMenu } from "react-icons/rx";

function SideBarNew() {
    return (
        <Sheet>
            <SheetTrigger>
                <li className='h-fit w-fit relative rounded-sm  p-[1px] block lg:hidden'>
                    <RxHamburgerMenu className='text-primary text-[30px]' />
                </li>
            </SheetTrigger>
            <SheetContent>
                {/* <SheetHeader>

                </SheetHeader> */}

                <ul className='w-full relative  flex flex-col gap-3 items-start py-10 justify-start px-5 h-[100vh]'>
                    <Link to="/" className="text-xl cursor-pointer text-primary font-medium">Home</Link>
                    <Link to="/collections" className="text-xl cursor-pointer text-primary font-medium">Collections</Link>
                    <Link to="/products" className="text-xl cursor-pointer text-primary font-medium">Products</Link>
                    <Link to="/new-arrivals" className="text-xl cursor-pointer text-primary font-medium">New Arrivals</Link>
                    <Link to="/trending" className="text-xl cursor-pointer text-primary font-medium">Trending</Link>
                    <Link to="/about-us" className="text-xl cursor-pointer text-primary font-medium">About us</Link>
                </ul>

            </SheetContent>
        </Sheet>

    )
}

export default SideBarNew