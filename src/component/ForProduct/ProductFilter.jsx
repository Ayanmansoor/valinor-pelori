import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Link } from 'react-router-dom'


function ProductFilter({ collection }) {
    return (
        <section className='w-full sticky top-10   h-fit  bg-white   flex-col items-start gap-3 flex'>
            <div className='w-full relative flex flex-wrap h-auto'></div>
            <div className='w-full relative  flex h-fit bg-transparent flex-col items-start  lg:px-2'>
                <Accordion type="single" collapsible className='w-full relative h-auto bg-transparent'>
                    <AccordionItem value="item-1" className="w-full relative h-auto" >
                        <AccordionTrigger className="w-full relative h-auto py-2 text-base font-medium  px-4">
                            <p>
                                Collections
                            </p>
                        </AccordionTrigger>
                        <AccordionContent className="w-full relative h-auto py-2 text-base font-medium  px-4 flex flex-wrap gap-2 ">
                            {
                                collection?.map((item, index) => (
                                    <Link to={`/collection/${item.slug}`} className='text-base font-medium text-black border border-black px-3 py-1' key={index}>{item.name}</Link>
                                ))
                            }
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2" className="w-full relative h-auto">
                        <AccordionTrigger className="w-full relative h-auto py-2 text-base font-medium  px-4">
                            <p>
                                Sizes
                            </p>
                        </AccordionTrigger>
                        <AccordionContent className="w-full relative h-auto py-2 text-base font-medium flex flex-wrap gap-2 px-4 ">
                            <span className='text-base font-medium text-black border border-black px-3 py-1'>5</span>
                            <span className='text-base font-medium text-black border border-black px-3 py-1'>6</span>
                            <span className='text-base font-medium text-black border border-black px-3 py-1'>7</span>
                            <span className='text-base font-medium text-black border border-black px-3 py-1'>8</span>
                            <span className='text-base font-medium text-black border border-black px-3 py-1'>9</span>
                            <span className='text-base font-medium text-black border border-black px-3 py-1'>10</span>
                            <span className='text-base font-medium text-black border border-black px-3 py-1'>11</span>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3" className="w-full relative h-auto">
                        <AccordionTrigger className="w-full relative h-auto py-2 text-base font-medium  px-4">
                            <p>
                                Price
                            </p>
                        </AccordionTrigger>
                        <AccordionContent className="w-full relative h-auto py-2 text-base  flex flex-wrap gap-2 font-medium px-4 ">
                            <span className='text-base font-medium text-black border border-black px-3 py-1'>{"500"}</span>
                            <span className='text-base font-medium text-black border border-black px-3 py-1'>{"500 < 1000"}</span>
                            <span className='text-base font-medium text-black border border-black px-3 py-1'>{"1000 < 2000"}</span>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4" className="w-full relative h-auto">
                        <AccordionTrigger className="w-full relative h-auto py-2 text-base font-medium  px-4">
                            <p>
                                Genders
                            </p>
                        </AccordionTrigger>
                        <AccordionContent className="w-full relative h-auto py-2 text-base  flex flex-wrap gap-2 font-medium px-4 ">
                            <Link to={"MEN"} className='text-base font-medium text-black border border-black px-3 py-1' >MEN</Link>
                            <Link to={"WOMEN"} className='text-base font-medium text-black border border-black px-3 py-1' >WOMEN</Link>
                            <Link to={"KIDS"} className='text-base font-medium text-black border border-black px-3 py-1' >KIDS</Link>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>

            </div>
        </section>
    )
}

export default ProductFilter