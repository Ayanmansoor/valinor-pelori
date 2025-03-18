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

function OrderproductCard({ data }) {
    return (
        <div  className='grid   grid-cols-[.2fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_.3fr]  gap-5 w-full items-center  py-2 px-1 border-b border-[#d3d3d3]  '>
            <input id='paymentsuccess' type="checkbox" className='border-none '/>
            <p className=' text-[16px] font-medium text-third '>{data.date}</p>
            <p className=' text-[16px] font-medium text-third line-clamp-1 '>{data.customername}</p>
            <p className={` bg-green-50 border-green-400 text-[15px] px-2 py-[2px] border rounded-md font-noraml w-fit    `}>{data.payment}</p>
            <p className=' text-[16px] font-medium text-third '>{data.price}</p>
            <p className=' text-[16px] font-medium text-third '>{data.delivery}</p>
            <p className=' text-[16px] font-medium text-third '>{data.items} { data.items >= 2  ? "items" : "item" } </p>
            <p className={` bg-green-50 border-green-400 text-[15px] px-2 py-[2px] border rounded-md font-noraml w-fit    `}>{data.fulfilment}</p>
            <p className=' text-[16px] font-medium text-third '>

                <DropdownMenu >
                    <DropdownMenuTrigger>
                        <MdFilterList className='text-[25px] ' />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>Details</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="cursor-pointer "><Link to={`/Dashbord/analytic/${data.id}`}>Analytics</Link></DropdownMenuItem>
                        <DropdownMenuItem className="cursor-pointer ">Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </p>
        </div>
    )
}

export default OrderproductCard