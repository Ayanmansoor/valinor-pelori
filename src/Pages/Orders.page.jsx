import React from 'react'
import Ordercard from '@/component/ForOrder/Ordercard'
function Orderspage() {
        const data=[
            {
                image:'',
                name:'Ayan Device',
                price:"90",
                description:"flejf"
            },
            {
                image:'',
                name:'Ayan Device',
                price:"80",
                description:"dhlsdf"
            },
            {
                image:'',
                name:'Ayan Device',
                price:"90",
                description:"ddosfo"
            },

        ]
    return (
        <section className='w-full relative min-h-[80vh]  container py-5 grid lg:grid-cols-[2fr_.5fr] gap-5 '>
            <div className='border rounded-sm h-fit md:px-5 px-2 py-2  md:py-5 bg-white grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 items-start justify-start gap-1  md:gap-3  '>
                {
                    data.map((item,index)=>(
                        <Ordercard data={item}/>
                    ))
                }
            </div>
            <div className='border rounded-sm bg-white hidden lg:block '>
                    <span className='w-full relative h-auto grid grid-cols-[2fr_.5fr] order  '>
                        <input type="text" className='w-full relative h-auto ' />

                    </span>
                    <div className='w-full relative h-full flex flex-col'>
                        
                    </div>
            </div>
        </section>
    )
}

export default Orderspage