import React from 'react'

function CalulateShipping() {
    return (
        <>
            <div className='w-full h-auto relative '>
                <h2 className='font-noraml text-p20 '>Calculate Shipping Price</h2>
                <form action="" className='w-full h-auto relative py-4  gap-2 flex flex-wrap'>

                    <select className='w-full py-2 rounded-md bg-secondary shadow-sm'>
                        <option value="" selected disabled hidden>Choose Country</option>
                        <option value="1">One</option>
                    </select>
                    
                    <div className='w-full relative flex gap-2 h-auto flex-col  md:flex-row '>
                        <select className='w-full py-1 rounded-md bg-secondary shadow-sm'>
                            <option value="" selected disabled hidden>State / City </option>
                            <option value="1">One</option>
                        </select>
                        <input type="text" className=' w-full py-1 rounded-md px-2 bg-secondary shadow-sm' placeholder='ZIP Code' />
                    </div>

                    <button className='bg-third py-1 text-secondary px-5 relative w-full rounded-md'>Update</button>
                </form>
            </div>
        </>
    )
}

export default CalulateShipping