import React, { useEffect, useState } from 'react'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { useCart } from '@/Contexts/Cart.context';

function AddToCardPopver({ children, currentProduct, colors, sizes }) {
    const [productcart, setProductcart] = useState({
        colors: {
            color:
                { name: 'Ivory', hex: '#FFFFF0' }
        },
        sizes: {
            size:
                { size: '38', unit: 'EU' }
        },
        quentitys: {
            quentity: 1
        }
    })
    const { addToCart, getCartProduct, clearCart, cart } = useCart();

    useEffect(() => {
        // clearCart()

        const data = getCartProduct(String(currentProduct.id))

        setProductcart(
            (prev) => ({
                ...prev,
                colors: {
                    ...prev?.colors,
                    color: data?.colors
                },
                sizes: {
                    ...prev?.sizes,
                    size: data?.sizes
                }
            })
        )
    }, [currentProduct.id])



    function handleStateChange(e) {
        // const data = getCartProduct(String(currentProduct.id))


        addToCart({ ...currentProduct, sizes: productcart?.sizes?.size, colors: productcart?.colors?.color, quentity: productcart?.quentitys?.quentity })




        console.log("cart saved")
    }

    return (
        <Popover className="h-auto w-full relative border">
            <PopoverTrigger className='w-full relative h-auto'>{children}</PopoverTrigger>
            <PopoverContent className="flex flex-col gap-2 w-full max-w-[300px] relative h-auto">
                <section className='w-full h-auto flex flex-col gap-1'>
                    <div className='flex flex-col gap-1 w-full relative'>
                        <h2 className='text-primary font-medium text-sm '>Colors</h2>
                        <div className="w-full flex flex-wrap  gap-1">
                            {
                                colors?.map((item, index) => (
                                    <span className={` text-center cursor-pointer border text-sm px-2 py-1  ${item.name === productcart?.colors?.color?.name ? "bg-primary text-white" : " text-primary bg-transparent"}  `} key={index} onClick={(e) => {
                                        console.log(productcart)
                                        setProductcart((prev) => ({
                                            ...prev,
                                            colors: {
                                                color: item
                                            }
                                        }));
                                    }}>
                                        {item.name}
                                    </span>
                                ))
                            }
                        </div>
                    </div>
                    <div className='flex flex-wrap gap-1 w-full relative'>
                        <h2 className='text-primary font-medium text-sm '>Sizes</h2>
                        <div className="w-full grid grid-cols-5  gap-1">
                            {
                                sizes?.map((item, index) => (
                                    <span className={` text-center cursor-pointer    border text-sm p-1  ${item.size === productcart?.sizes?.size?.size ? "bg-primary text-white" : " text-primary bg-transparent"}  `} key={index}
                                        onClick={() => setProductcart((prev) => ({
                                            ...prev,
                                            sizes: {
                                                ...prev.sizes,
                                                size: item
                                            }
                                        }))}
                                    >
                                        {item.size}
                                    </span>
                                ))
                            }
                        </div>
                    </div>
                    <div className='flex items-center gap-1 w-full relative'>
                        <h2 className='text-primary font-medium text-[12px] '>Quentity </h2>

                        <select className='w-full relative  border py-0 h-[25px] text-[12px]' value={productcart.quentitys.quentity} onChange={(e) => setProductcart((prev) => (
                            {
                                ...prev,
                                quentitys: {
                                    ...prev.quentitys,
                                    quentity: e.target.value
                                }
                            }
                        ))}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                    <button className='py-2 text-sm bg-primary text-white flex items-center justify-center text-primary'
                        onClick={handleStateChange}

                    >Add To Cart</button>

                </section>
            </PopoverContent>
        </Popover>

    )
}

export default AddToCardPopver