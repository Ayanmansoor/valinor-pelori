import React, { useState } from 'react';
import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { RxHamburgerMenu } from "react-icons/rx";

function SideBarNew() {
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <li className='h-fit w-fit relative rounded-sm p-[1px] block lg:hidden' onClick={() => setOpen(true)}>
                    <RxHamburgerMenu className='text-primary text-[30px]' />
                </li>
            </SheetTrigger>
            <SheetContent>
                <ul className='w-full relative flex flex-col gap-3 items-start py-10 justify-start px-5 h-[100vh]'>
                    <Link to="/" onClick={handleClose} className="text-xl cursor-pointer text-primary font-medium">Home</Link>
                    <Link to="/collections" onClick={handleClose} className="text-xl cursor-pointer text-primary font-medium">Collections</Link>
                    <Link to="/products" onClick={handleClose} className="text-xl cursor-pointer text-primary font-medium">Products</Link>
                    <Link to="/new-arrivals" onClick={handleClose} className="text-xl cursor-pointer text-primary font-medium">New Arrivals</Link>
                    <Link to="/trending" onClick={handleClose} className="text-xl cursor-pointer text-primary font-medium">Trending</Link>
                    <Link to="/about-us" onClick={handleClose} className="text-xl cursor-pointer text-primary font-medium">About us</Link>
                </ul>
            </SheetContent>
        </Sheet>
    );
}

export default SideBarNew;
