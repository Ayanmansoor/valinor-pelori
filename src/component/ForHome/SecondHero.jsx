import React from 'react'
import { Link } from 'react-router-dom'
function SecondHero({ categoryName, data }) {
    const firstdata = data[0]
    const firstsection = data[0]?.image_url?.map((image) => JSON.parse(image))

    const seconddata = data[1]
    const secondsection = data[1]?.image_url?.map((image) => JSON.parse(image))

    const thirddata = data[2]
    const thirdsection = data[2]?.image_url?.map((image) => JSON.parse(image))
    return (
        <section className='w-full h-auto bg-secondary relative'>
            <div className=' grid grid-cols-3 h-[300px] w-full  relative    sm:h-[350px] md:h-[500px]  '>
                {
                    firstdata && firstsection &&

                    <Link to={`product/${firstdata?.slug}`} className='col-start-1 col-end-3 row-start-1 border border-[#ebeeef] row-end-3 relative bg-red-200  overflow-hidden'>
                        <img src={` ${firstsection[0]?.image_url} `} alt={`${firstsection[0]?.name}`} className='h-full relative w-full object-cover ' />
                    </Link>

                }

                {
                    seconddata && secondsection &&
                    <Link to={`product/${seconddata?.slug}`} className='col-start-3 col-end-4 relative border  border-[#ebeeef] overflow-hidden bg-pink-200' >
                        <img src={` ${secondsection[0]?.image_url} `} alt={`${secondsection[0]?.name}`} className=' h-full relative w-full object-cover   overflow-hidden' />
                    </Link>
                }

                {
                    thirddata && thirddata &&
                    <Link to={`product/${thirddata?.slug}`} className='col-start-3 col-end-4 relative border  border-[#ebeeef] overflow-hidden bg-pink-200' >
                        <img src={` ${thirdsection[0]?.image_url} `} alt={`${secondsection[0]?.name}`} className=' h-full relative w-full object-cover   overflow-hidden' />
                    </Link >
                }


            </div>
        </section>
    )
}

export default SecondHero