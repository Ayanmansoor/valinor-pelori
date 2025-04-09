import React, { useEffect, useState } from 'react'

import RatingStar from '../ForHome/RatingStar';
import { PiHeartThin } from "react-icons/pi";
import { CiDiscount1 } from "react-icons/ci";
import { BsCurrencyRupee } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";
import { CiDeliveryTruck } from "react-icons/ci";
import ColorView from './ColorView';
import BuyDailog from '@/Comman/BuyDailog';
import AddToCardPopver from '@/Comman/AddToCardPopver';
import { useCart } from '@/Contexts/Cart.context';

function ProductAbout({ product }) {
    const { getCartProduct, addToCart } = useCart()
    const [productcart, setProductcart] = useState({
        colors: {
            color:
                { name: '', hex: '' }
        },
        sizes: {
            size:
                { size: '', unit: '' }
        },
        quentitys: {
            quentity: 1
        }
    })
    function handleStateChange(e) {
        // const data = getCartProduct(String(currentProduct.id))

        addToCart({ ...product, sizes: productcart?.sizes?.size, colors: productcart?.colors?.color, quentity: productcart?.quentitys?.quentity })

        console.log("cart saved")
    }


    const [colors, setColors] = useState([])
    const [size, setSizes] = useState([])
    useEffect(() => {
        const parseColor = product?.colors?.map((item) => JSON.parse(item))
        const parseSize = product?.sizes?.map((size) => JSON.parse(size))
        setColors(parseColor)
        setSizes(parseSize)
        if (parseColor, parseSize) {
            setProductcart((prev) => (
                {
                    ...prev, colors: {
                        color: parseColor[0]
                    },
                    sizes: {
                        size: parseSize[0]
                    }
                }
            ))
        }

    }, [product])

    return (
        <>
            <div className='relative flex items-start h-auto  flex-col w-full md:w-[40%] py-5 md:pl-5  lg:pl-10 '>

                <div className='flex items-center justify-between   w-full relative '>

                    <p className='text-[16px] font-normal items-center gap-1 '>{product?.gender}</p>
                    <p className='text-[16px] font-medium text-primary ' aria-label='Product For Running'><RatingStar value={2} /></p>
                </div>
                <h1 className='text-p35 font-bold  ' aria-label='Addidas shoes L1' >{product?.name}</h1>

                <div className='flex justify-between items-start sm:items-center w-full relative flex-col  sm:flex-row py-3'>
                    <h2 className='text-p18 font-normal flex items-center gap-2 '>
                        {
                            product?.discounts?.discount_persent ?
                                <>
                                    <p className='text-lg md:text-xl font-normal text-red-400 line-through text-nowrap '>$ {product?.price}</p>
                                    <p className=' text-2xl lg:text-3xl  font-medium text-nowrap text-black'>${
                                        Math.floor(product?.price - (product?.price * (product?.discounts?.discount_persent / 100)))}</p>
                                </>
                                :
                                <p className='text-2xl lg:text-4xl  font-medium text-nowrap text-black'>$ {product?.price}</p>

                        }

                    </h2>
                    <p className='text-[13px] font-normal '>Includes all taxs</p>
                </div>

                <div className='flex items-center   relative flex-col gap-2 w-full '>
                    <p className='text-p18 font-semibold flex items-center justify-between w-full'>Colors

                        <ColorView colors={''} images={''} >
                            <span className='text-[16px]  font-normal  flex items-center gap-1 cursor-pointer '>More Colors  <MdKeyboardArrowDown className='text-[16px]' /></span>
                        </ColorView>

                    </p>

                    <div className=' flex flex-wrap  items-center relative  justify-start   w-full '>
                        {
                            colors?.map((color, index) => (
                                <span className={`p-4  rounded-full cursor-pointer  border  ${color.name === productcart?.colors?.color?.name ? "  border-primary p-1" : " border-transparent"} ${index >= 1 ? "-m-[4px]" : ""} `} style={{ background: color.hex }} key={index}
                                    onClick={(e) => {
                                        console.log(productcart)
                                        setProductcart((prev) => ({
                                            ...prev,
                                            colors: {
                                                color: color
                                            }
                                        }));
                                    }}></span>
                            ))
                        }
                    </div>
                </div>
                {/* Size section */}

                <div className='flex items-center  py-5 relative flex-col gap-3 w-full '>
                    {
                        size?.length > 0 &&
                        <>
                            <p className='text-p18 font-semibold flex items-center justify-between w-full'>Sizes</p>
                            <div className='w-full gap-2 relative h-auto  grid grid-cols-6 '>
                                {
                                    size?.map((item) => (
                                        <p className={`py-2 text-center border  font-normal cursor-pointer hover:text-white hover:bg-black hover:font-medium ${item.size === productcart?.sizes?.size?.size ? " bg-primary border-transparent text-white" : " text-primary border-primary bg-transparent"}  `} onClick={() => setProductcart((prev) => ({
                                            ...prev,
                                            sizes: {
                                                ...prev.sizes,
                                                size: item
                                            }
                                        }))}>{item?.size}</p>
                                    ))
                                }

                            </div>
                        </>
                    }
                    <p className='text-base text-medium text-start w-full text-green-700'>{size?.length > 0 ? "In Stock" : "Out of Stock"}</p>
                    <div className='flex items-center gap-1 w-full relative  h-auto '>
                        <h2 className='text-primary font-medium text-sm  '>Quentity </h2>

                        <select className='w-full relative  bg-transparent  text-base  border border-gray-400 rounded-md py-1 px-4 text-[12px]' value={productcart.quentitys.quentity} onChange={(e) => setProductcart((prev) => (
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
                </div>


                {/* Book btn  */}

                <div className='w-full fixed bottom-0 px-4 flex-wrap sm:px-0 bg-white sm:bg-transparent py-2 sm:py-0  z-30 grid-cols-[1fr_auto] md:grid-cols-1 lg:grid-cols-[1fr_auto] gap-5 right-0 grid   items-center sm:relative  '>
                    <div className='w-full relative flex items-center gap-2 md:gap-1 lg:gap-2 '>
                        <BuyDailog product={{ ...product, colors: productcart.colors.color, sizes: productcart.sizes.size, quentity: productcart.quentitys.quentity }}>
                            <button disabled={colors && size ? false : true} className=' w-full relative  xl:px-5 py-2 bg-black text-white hover:border-black border border-transparent hover:bg-slate-100 hover:text-black  ' >Quick Buy</button>
                        </BuyDailog>
                        {/* <AddToCardPopver currentProduct={product} colors={colors} sizes={size}> */}

                        <button disabled={colors?.length > 0 && size?.length > 0 ? false : true} className=' w-full relative xl:px-5 py-2 bg-black text-white hover:border-black border border-transparent hover:bg-slate-100 hover:text-black  ' onClick={handleStateChange} >Add to Cart</button>

                        {/* </AddToCardPopver>       */}
                    </div>
                    <span className='border py-1     flex items-center justify-center px-3 cursor-pointer hover:bg-red-200 h-full '>
                        <PiHeartThin className='text-[20px] w-fit z-30 cursor-pointer  group-hover:text-white   ' />
                    </span>
                </div>

                {/* BENIFITS */}
                <ul className='w-full relative h-auto flex items-start gap-2 flex-col py-4 '>
                    <li className='flex items-center w-full relative gap-1 text-xs sm:text-sm'><CiDiscount1 className='text-[20px]' />
                        Save 5% on all Online Payments under ₹10,000/-
                    </li>
                    <li className='flex items-start w-full relative gap-1 text-xs sm:text-sm'><CiDeliveryTruck className='text-[30px]' />
                        Delivery: Orders are typically delivered within 3-7 business days across India.
                    </li>
                </ul>



            </div>
        </>
    )
}

export default ProductAbout 