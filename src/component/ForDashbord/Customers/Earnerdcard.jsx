import React from 'react'
import { MdFilterList } from "react-icons/md";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Link } from 'react-router-dom';

function Earnerdcard({data}) {
    console.log(data)
  return (
    <div className=' grid   grid-cols-[.5fr_1fr_1fr_1fr_.3fr]  gap-5 w-full items-center  py-1   px-1 border-b border-[#d3d3d3]  '>
                <img src="/user_male.png" alt="" height={100} width={100} className='h-[40px] w-[60px] rounded-full object-conatin p-1 ' />
                <p className='text-[14px] font-normal text-third line-clamp-1'>Ayan Mansoor</p>
                <p className='text-[14px]  font-normal text-third line-clamp-1'>50</p>
                <p className='text-[14px]  font-normal text-third  line-clamp-1 '>$733</p>
                <DropdownMenu >
                    <DropdownMenuTrigger>
                        <MdFilterList className='text-[25px] ' />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>View Profile</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="cursor-pointer "><Link to={``}>View</Link></DropdownMenuItem>
                        <DropdownMenuItem className="cursor-pointer ">Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
  )
}

export default Earnerdcard