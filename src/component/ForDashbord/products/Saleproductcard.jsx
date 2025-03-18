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
function Saleproductcard({ data }) {
    return (
        <div className='grid grid-cols-[.5fr_1fr_1fr_1fr_.3fr]  md:grid-cols-[.5fr_1fr_1fr_1fr_1fr_.3fr]  lg:grid-cols-[.5fr_1fr_1fr_1fr_1fr_1fr_.3fr]  gap-5 w-full items-center  py-2 px-1 border-b border-[#d3d3d3]  '>
            <img src={`${data.productimage}`} alt="product image" height={100} width={100} className='h-[50px] w-[50px] rounded-full object-cover relative ' />
            <p className=' text-[16px] font-medium text-third line-clamp-1 '>{data.productname}</p>
            <p className=' text-[16px] font-medium text-third hidden lg:block '>{data.categoryname}</p>
            <p className={` text-[16px] font-medium text-third text-green-800   `}>{data.stock}</p>
            <p className=' text-[16px] font-medium text-third hidden md:block  '>{data.totalSale}</p>
            <p className=' text-[16px] font-medium text-third '>{data.Sales}</p>
            <p className=' text-[16px] font-medium text-third '>

                <DropdownMenu >
                    <DropdownMenuTrigger>
                        <MdFilterList className='text-[25px] ' />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>Details</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="cursor-pointer "><Link to={`/Dashbord/analytic/${data.id }`}>Analytics</Link></DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </p>
        </div>
    )
}

export default Saleproductcard