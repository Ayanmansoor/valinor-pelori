import React, { useEffect, useState } from 'react'

import MegamanuCard from './MegamanuCard';
import { MdKeyboardArrowDown } from "react-icons/md";
import { useQuery } from 'react-query';
import { getAllCollections, getProductBaseOnCollection } from '@/Supabase/SupabaseApi';
import { Link } from 'react-router-dom';

function Megamanu({ children }) {
    const [slug, setslug] = useState('')
    const { data: collections, isLoading: collectionloading, isError: collectionerror } = useQuery({
        queryKey: ["megamanucollections"],
        queryFn: getAllCollections,
        staleTime: 10 * 60 * 1000, // Data remains fresh for 10 minutes
        cacheTime: 15 * 60 * 1000, // Data stays in cache for 15 minutes
    });
    const { data: products, isLoading, isError } = useQuery({
        queryKey: ["megamanuslugdata", slug], // Cache per collection
        enabled: !!slug,
        queryFn: () => getProductBaseOnCollection(slug),
        staleTime: 2 * 60 * 1000, // 2 minutes caching
    });


    return (

        <>

            <li class="relative group  py-2">
                <button
                    class=" bg-transparent font-normal text-black p-0 text-lg flex items-center  "
                    aria-haspopup="true"
                >
                    {children}
                    <MdKeyboardArrowDown className='text-[20px] ' />
                </button>
                <div
                    class="absolute lg:-left-[400px]  top-3 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[960px] transform"
                >
                    <div
                        class="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full"
                    >
                        <div
                            class="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[25rem] duration-500 ease-in-out rounded-sm"
                        ></div>
                        <div class="relative z-10">
                            <div class="grid grid-cols-[.7fr_2fr]  gap-6 w-fulll ">
                                <div>
                                    <p
                                        class="uppercase tracking-wider text-primary font-medium border-b pb-2 text-[13px]"
                                    >
                                        Our Collection
                                    </p>
                                    <ul class="mt-3 w-full realtive h-[300px] flex flex-col gap-1  overflow-hidden overflow-y-auto ">
                                        {
                                            collections && collections?.map((item, index) => (
                                                <Link to={`collection/${item?.slug}`} className={`text-sm  capitalize font-medium hover:bg-gray-100  cursor-pointer  py-1 px-2 flex items-center gap-1 ${item.slug == slug ? "bg-gray-200" : "bg-transparent"} `} onMouseEnter={() => setslug(item?.slug)} key={index} >
                                                    {item.name}
                                                </Link>
                                            ))
                                        }
                                    </ul>
                                </div>
                                <div>
                                    <p
                                        class="uppercase tracking-wider text-primary font-medium border-b pb-2 text-[13px]"
                                    >
                                        Products
                                    </p>


                                    <ul class="mt-4 text-[15px] grid grid-cols-5 h-[300px] gap-4  items-start justify-start overflow-hidden overflow-y-auto">
                                        {
                                            products && products?.map((item, index) => (
                                                <MegamanuCard collecitonData={item} key={index} />
                                            ))
                                        }

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>




        </>
    )
}

export default Megamanu