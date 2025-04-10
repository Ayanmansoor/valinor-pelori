import React, { useState, useEffect } from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { BsPlus } from "react-icons/bs";
import { HiMiniMinusSmall } from "react-icons/hi2";
import { useCart } from '@/Contexts/Cart.context';
import CartSheetOderDailog from './CartSheetOderDailog';


function CartSheet({ children }) {
    // console.log(children)
    const { cart, updateQuantity } = useCart();
    const [totalProductprice, setProductprice] = useState(0)



    // useEffect(() => {
    //     const calculateTotals = () => {
    //         let totalPrice = 0;
    //         let discountAmount = 0;

    //         // Iterate over each item in the cart
    //         cart.forEach((item) => {
    //             if (item?.quentity > 0) { // Only calculate for items with quantity > 0
    //                 const itemTotalPrice = item.price * item.quentity;
    //                 totalPrice += itemTotalPrice;

    //                 if (item?.discount_key && item?.discounts) {
    //                     const discount = item?.discounts;
    //                     if (discount?.discount_id === item.discount_key) {
    //                         const discountPercentage = discount?.discount_persent || 0;
    //                         const itemDiscountAmount = itemTotalPrice * (discountPercentage / 100);
    //                         discountAmount += itemDiscountAmount;
    //                     }
    //                 }
    //             }
    //         });

    //         const totalPriceAfterDiscount = totalPrice - discountAmount;

    //         setProductprice({
    //             total: totalPrice,
    //             discountamount: discountAmount,
    //             finalTotal: totalPriceAfterDiscount
    //         });
    //     };

    //     calculateTotals();
    // }, [cart]);
    useEffect(() => {
        if (!cart || cart.length === 0) {
            setProductprice(0)
            return;
        };

        const totalPrice = cart.reduce((total, { price, quentity, discounts, discount_key }) => {
            let itemTotal = price * quentity;  // Calculate total price of the item before discount

            if (discounts?.discount_id === discount_key) {  // Apply discount if applicable
                const discountAmount = itemTotal * (discounts.discount_persent / 100);
                itemTotal -= discountAmount; // Subtract discount from the item total
            }

            return total + itemTotal; // Accumulate to the total price
        }, 0);

        setProductprice(Math.floor(totalPrice)); // Apply Math.floor only once here
    }, [cart.length, updateQuantity])


    function increaseQuentity(productId, quentity, currentProduct) {
        if (productId && quentity && currentProduct) {
            updateQuantity(productId, quentity + 1, currentProduct)
            // setProductprice((prev) => prev + finalPrice); // Add the
        }
    }

    function decreaseQuentity(productId, quentity, currentProduct,) {

        if (!quentity <= 1) {
            updateQuantity(productId, quentity - 1, currentProduct)
            // setProductprice((prev) => prev - finalPrice);
        }
    }

    // handle List of cart order features




    return (
        <Sheet>
            <SheetTrigger className='w-fit h-fit relative '>{children}</SheetTrigger>
            <SheetContent className="py-5  px-2 max-w-[400px] md:min-w-[400px] h-[100vh]  overflow-y-auto" id="style-3">
                <SheetHeader>
                    <SheetTitle className="font-medium text-2xl border-b pb-2">Carts</SheetTitle>


                    <section className='w-full relative h-auto gap-2 grid grid-cols-1 extrasmall:grid-cols-2 md:flex flex-col max-h-[50vh] overflow-y-auto py-2' id="style-3">
                        {
                            cart.map((item, index) => (
                                <div className='w-full border p-2 rounded-lg relative h-auto flex flex-col   md:grid  md:grid-cols-[auto_1fr_auto_auto]  items-start md:items-center justify-between gap-1' key={index}>

                                    {
                                        <img src={item.image_url?.map((image) => JSON.parse(image))[0]?.image_url} alt="" className=' w-full object-contain md:w-[70px] max-h-[100px] extrasmall:h-[100px] md:h-[70px] relative aspect-square rounded-md border ' />
                                    }


                                    <span className='flex flex-col items-start  '>
                                        <p className=' text-[10px]  font-normal text-gray-400 '>{item?.gender}</p>
                                        <h2 className=' text-sm text-start lg:text-sm font-medium text-foreground line-clamp-2 '>
                                            {item.name}
                                        </h2>
                                        <div className='w-full reltive h-auto flex items-center gap-1'>
                                            <p className='text-foreground text-xs font-medium  sm:flex-row flex-col items-start sm:items-center gap-1'>
                                                <strong className='text-foreground text-[10px]'>Size : </strong>
                                                {item?.sizes?.size} {item?.sizes?.unit}
                                            </p>
                                            <p className='text-foreground text-xs font-medium  sm:flex-row flex-col items-start sm:items-center gap-1 capitalize'>
                                                <strong className='text-foreground text-[10px]'>Color : </strong>
                                                {item?.colors?.name}
                                            </p>
                                        </div>
                                    </span>
                                    <div className='flex items-center  justify-between gap-1 rounded-full border border-gray-400 py-[2px] px-1 sm:w-fit w-full '>
                                        <button className='w-fit h-fit relative rounded-full p-[2px]  bg-gray-200' onClick={() => (
                                            increaseQuentity(item.id, item?.quentity, item,))
                                        }>
                                            <BsPlus className='text-[12x]' />
                                        </button>
                                        <p className='text-[12px] font-normal text-foreground px-[2px]'>{item?.quentity}</p>
                                        <button className='w-fit h-fit relative rounded-full p-[2px] bg-gray-200' onClick={() => decreaseQuentity(item.id, item?.quentity, item,)}>
                                            <HiMiniMinusSmall className='text-[15px] ' />
                                        </button>
                                    </div>
                                    <span className='w-full item-start relative h-auto flex flex-col  px-2' >
                                        <h2 className='text-lg text-start font-medium text-foreground'>₹{
                                            item?.price * item?.quentity
                                        }</h2>
                                        {
                                            item?.discounts?.discount_persent &&
                                            < p className='text-red-400 line-through text-sm flex items-center gap-1'>{item?.discounts?.discount_persent}%</p>
                                        }
                                    </span>
                                </div>
                            ))
                        }


                    </section>

                    <SheetFooter className='absolute bottom-3 w-full left-0 '>
                        {
                            totalProductprice > 0 &&
                            <section className='w-full relative z-30 p-3 h-fit  flex flex-col gap-2 border bg-white  '>
                                <h2 className='text-base font-medium text-primary text-start'>After Discount</h2>
                                <span className='w-full relative h-auto bg-gray-100 flex items-center  justify-center px-3 py-1'>
                                    <p className='text-base w-full font-medium text-foreground '>Total </p>
                                    <p className='text-lg font-medium text-primary w-full'>$ {totalProductprice}</p>
                                </span>
                                {/* <span className='w-full relative h-auto  flex items-center  justify-center px-3 py-1 '>
                                    <p className=' text-sm w-full font-medium text-foreground '>Discount</p>
                                    <p className='text-sm text-red-400 line-through font-medium text-primary w-full '>${Math.floor(totalProductprice?.discountamount)}</p>
                                </span>
                                <div className='w-fulll border-t pt-2  relative h-auto px-3 flex items-center justify-between'>
                                    <p className='text-sm sm:text-base md:text-lg font-medium w-full text-primary'>Price To Pay</p>
                                    <p className='text-lg font-medium text-primary w-full'>${Math.floor(totalProductprice?.finalTotal)}</p>
                                </div> */}
                                <CartSheetOderDailog>
                                    <button className='w-fit relative h-auto flex items-center border border-primary px-5 py-1 hover:bg-primary hover:text-white  font-medium text-primary'>Place Order</button>
                                </CartSheetOderDailog>

                            </section>
                        }
                    </SheetFooter>

                </SheetHeader>
            </SheetContent>
        </Sheet >
    )
}

export default CartSheet