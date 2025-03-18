import React from 'react'
import Salesbycitycard from './Salesbycitycard'
function Salesbycity() {
    const data={
        city: 'Maharashtra',
        income:"400K",
        imageurl:"",
        sellstatus:true,
        id:""
        
    }
  return (
    <div className='flex flex-col  '>
            <div className='flex items-center sticky top-0 bg-secondary z-10 justify-between py-2 border-b border-[#7c7c7c] px-2 ' >
                <h2 className='text-p18 font-medium text-third'>Top City by Sells</h2>
            </div>
            <div className='relative  w-full flex flex-col gap-2 overflow-auto product-card-wrappar'>

            <div className='flex items-center  top-0 bg-secondary justify-between py-2 px-2' >
                <h2 className='text-p18 font-semibold text-third'>34.90k</h2>
                <p className='text-[14px] font-medium text-[#b4b4b4] '>Since then Now</p>
            </div>
                <Salesbycitycard data={data}/>
            
          
               
            </div>


        </div>
  )
}

export default Salesbycity