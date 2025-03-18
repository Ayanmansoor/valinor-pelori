import React, { useEffect, useState } from 'react'

function    Cartcard({ data }) {
    const [numofitem, setnumofitem] = useState(1)


    function increaceNumberOfProduct(e) {
        setnumofitem(numofitem + 1)
    }

    function decreaceNumberOfProduct(e) {
        if (numofitem > 1 && !numofitem < 1) {
            setnumofitem(numofitem - 1)
        }

    }

    return (
        <>
            <div className='flex items-center justify-start   rounded-md sm:bg-white w-full p-3 sm:shadow-sm'>
                <div className='flex items-center justify-between gap-1 px-2 py-2 flex-col  bg-white mx-auto  w-[300px] shadow-sm sm:shadow-none sm:flex-row relative sm:w-full'>
                    <span className='flex items-center gap-3 flex-col sm:w-fit w-full  sm:flex-row '>
                        <img src="src/assets/website-logo-removebg-preview.jpg" alt="Product image " className=' w-full h-40 sm:w-20 sm:h-20 object-cover rounded-sm ' />
                        <div className='flex items-start flex-col w-full justify-evenly '>
                            <span className='w-full '>
                                <small>{data?.product?.categoryName}</small>
                                <h2>{data.product?.name}</h2>
                            </span>
                        </div>
                    </span>
                    <span className=' flex items-center flex-row sm:w-fit w-full py-3 sm:py-3 px-3 justify-between '>

                        <p className='font-medium text-p18 '>$ {data.product?.price}</p>
                        <div className='flex sm:gap-2 text-p18 items-center font-normal gap-4'>
                            <button className='text-p18 font-normal shadow-sm px-2 ' onClick={increaceNumberOfProduct}>+</button>
                            <p>{numofitem}</p>
                            <button className='text-p18 font-normal shadow-sm px-2' onClick={decreaceNumberOfProduct}>-</button>
                        </div>
                        <p className='font-medium text-p18 '>$ {data.product?.price * numofitem}</p>

                    </span>

                </div>
            </div>
        </>
    )
}

export default Cartcard