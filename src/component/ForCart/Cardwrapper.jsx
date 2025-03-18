import React from 'react'
import Cartcard from '@/component/ForCart/Cartcard'


function Cardwrapper({ products }) {
    return (
        <>
            <div className=' product-card-wrappar col-start-1 col-end-3 relative h-full w-full p-1 md:p-3  overflow-auto'>
                <div className=' w-full sticky top-0 z-10 bg-secondary border-b-2 py-3 h-auto flex items-center gap-2 md:gap-5 px-1 md:px-5 lg:px-10 '>
                    <input type="text" className='rounded-2xl w-full py-1 px-3' placeholder='Search item' />
                    <button className=' py-1 px-3 md:px-5 w-fit rounded-2xl bg-white text-base'>Search</button>
                </div>
                <div className='flex items-center flex-col gap-2 overflow-auto  py-3 px-0 md:px-5 lg:px-10 '>
                    {
                        products.map((product, index) => (
                            <Cartcard data={{ product:product }} key={index}/>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Cardwrapper