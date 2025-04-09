import React, { useRef } from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Link } from 'react-router-dom'

function Specification({ product }) {

    return (
        <section className='w-full relative container  h-auto flex flex-col gap-8 bg-secondary px-5  md:px-10   xl:px-20   '>

            <div className='w-full relative h-auto flex flex-col'>
                <span className='w-fit relative px-5  py-1 border-t border-black text-primary bg-white text-base font-medium '>
                    Details
                </span>
                <div className='w-full py-5 px-5  border  relative h-auto flex flex-col '>
                    <h2 className=' text-base lg:text-base mb-1 font-meidum text-footerfont'>{product?.brands?.name}</h2>
                    <p className=' text-sm ms:text-base font-normal text-gray-500'>{product?.description}</p>
                </div>
            </div>


            <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger className='text-base font-medium px-2'>Return Policy</AccordionTrigger>
                    <AccordionContent className="w-full relative h-auto px-2 flex flex-col text-sm text-primary">
                        At MarkLine Fashions, we strive to ensure your complete satisfaction with every purchase. Items may be returned within 15 days of delivery, provided they are unused, in original condition and packaging, including all labels and tags. However, please note that SALE items, shoes, bags, and accessories (except belts) are non-returnable, non-refundable, and non-replaceable. To initiate a return, simply log into your account, go to “My Orders,” and raise a return request. Broken items may be eligible for repairs. Refunds will be processed to the original payment method once your return is approved. At this time, we do not offer exchanges — please place a new order if needed. For full details, please read our <Link to="/privacy-policy"> Return Policy</Link> .
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger className='text-base font-medium px-2'>Shiping Policy</AccordionTrigger>
                    <AccordionContent className="w-full relative h-auto px-2  text-sm text-primary">
                        At Markline Fashion, we process and dispatch orders within 1–2 business days (excluding holidays). Delivery typically takes 3–4 business days if conditions are smooth; in case of delays, we’ll notify you promptly. Shipping is free on all orders up to ₹5000, while charges may apply beyond that based on the delivery location and method. We provide tracking details once your order is shipped, so you can stay updated. Please ensure your address is accurate to avoid delivery issues. For damaged items or returns, refer to our <Link to={'/return-policy'} className='text-primary font-semibold cursor-pointer'>Return Policy</Link> Return Policy, or reach out to us at <Link className='text-primary font-semibold cursor-pointer' to={'melto:shipping@marklinefashion.com'}></Link> shipping@marklinefashion.com for assistance.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                    <AccordionTrigger className='text-base font-medium px-2'>Size Guide</AccordionTrigger>
                    <AccordionContent className="w-full relative h-auto px-2 flex items-center justify-center text-sm text-primary">
                        <img src="/size-guide.png" alt="sizes guide"  className=' max-w-[300px] md:max-w-[400px] relative h-auto' height={200} width={500}/>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>



            {/* <div className='w-full relative h-auto flex flex-col'>
            <span className='w-fit relative px-5  py-1 border-t border-black text-primary bg-white text-base font-medium '>
                Additional Information
            </span>
            <ul  className='w-full py-5 px-5  border relative h-auto flex flex-col gap-2 '>

                <span className='w-full relative  bg-white py-1 px-5 border  rounded-md  grid grid-cols-[.5fr_1fr] gap-1 items-center '>
                    <p className='text-base font-medium text-primary '>Size :-</p>
                    <p  className='text-sm font-normal text-primary '>6 (uk)</p>
                </span>
                <span className='w-full relative  bg-white py-1 px-5 border  rounded-md  grid grid-cols-[.5fr_1fr] gap-1 items-center '>
                    <p className='text-base font-medium text-primary '>Size :-</p>
                    <p  className='text-sm font-normal text-primary '>6 (uk)</p>
                </span>
            </ul>
        </div>
         */}


        </section>
    )
}

export default Specification