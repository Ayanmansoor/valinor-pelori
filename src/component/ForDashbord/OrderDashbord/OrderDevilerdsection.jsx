import React from 'react'
import OrderproductCard from './OrderproductCard'
function OrderDevilerdsection() {
    const data=[
        {
            date:new Date().toJSON().slice(0,10).replace(/-/g,'/'),
            customername:"ayan",
            payment:"inStock",
            price:'90K unit ',
            delivery:"$ 9809k",
            fulfilment:'Pending',
            items:10,
            id:"ptupeu"
        },
        {
            date:new Date().toJSON().slice(0,10).replace(/-/g,'/'),
            customername:"ayan",
            payment:"inStock",
            price:'90K unit ',
            delivery:"$ 9809k",
            fulfilment:'Pending',
            items:10,
            id:"ptupeu"
    
    
        },
        {
            date:new Date().toJSON().slice(0,10).replace(/-/g,'/'),

            customername:"ayan mansoor ahmed",
            payment:"inStock",
            price:'90K unit ',
            delivery:"$ 9809k",
            fulfilment:'Pending',
            items:10,
            id:"ptupeu"
    
        },
        {
            date:new Date().toJSON().slice(0,10).replace(/-/g,'/'),

            customername:"Ayan",
            payment:"inStock",
            price:'90K unit ',
            delivery:"$ 9809k",
            fulfilment:'Pending',
            items:10,
            id:"ptupeu"
    
    
        },
        {
            date:new Date().toJSON().slice(0,10).replace(/-/g,'/'),

            customername:"Ayan",
            payment:"inStock",
            price:'90K unit ',
            delivery:"$ 9809k",
            fulfilment:'Pending',
            items:10,
            id:"ptupeu"
    
    
        },
        {
            date:new Date().toJSON().slice(0,10).replace(/-/g,'/'),

            customername:"Ayan",
            payment:"inStock",
            price:'90K unit ',
            delivery:"$ 9809k",
            fulfilment:'Pending',
            items:2,
            id:"ptupeu"
    
    
        },
        {
            date:new Date().toJSON().slice(0,10).replace(/-/g,'/'),

            customername:"Ayan",
            payment:"inStock",
            price:'90K unit ',
            delivery:"$ 9809k",
            fulfilment:'Pending',
            items:1,
            id:"ptupeu"
    
    
        },
    
      ]
  return (
    <section className='w-full relative h-[300px]  overflow-auto product-card-wrappar '>
    <div className='grid  grid-cols-[.2fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_.3fr] gap-5 w-full sticky  top-0 z-10 bg-secondary  py-2 px-2  border-t border-b border-[#d3d3d3] items-start '>
        <p className=' text-[16px] font-medium text-third '><input type="checkbox" name="" id="" /></p>
        <p className=' text-[16px] font-medium text-third '>Date</p>
        <p className=' text-[16px] font-medium text-third '>Customer</p>
        <p className=' text-[16px] font-medium text-third '>Payment</p>
        <p className=' text-[16px] font-medium text-third '>Price</p>
        <p className=' text-[16px] font-medium text-third '>Delivery</p>
        <p className=' text-[16px] font-medium text-third '>Items</p>
        <p className=' text-[16px] font-medium text-third '>Fulfilment</p>
        <p className=' text-[16px] font-medium text-third '>Actions</p>
    </div>
            {
              data.map((data,index)=>(
                <OrderproductCard data={data}/>
              ))
            }
    </section>
  )
}

export default OrderDevilerdsection