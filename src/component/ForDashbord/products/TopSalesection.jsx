import React from 'react'
import { MdFilterList } from "react-icons/md";
// import Saleproductcard from './saleproductcard';
import Saleproductcard from './Saleproductcard';
function TopSalesection() {
 const data=[
    {
        productname:"Nike Air jorden",
        categoryname:"Shoes",
        stock:"inStock",
        totalSale:'90K unit ',
        Sales:"$ 9809k",
        productimage:"https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNob2VzfGVufDB8fDB8fHww",
        id:"ptupeu"
    },
    {
      productname:"Nike Air jorden",
      categoryname:"Shoes",
      stock:"inStock",
      Sales:"$ 9809k",
      totalSale:'90K unit ',
      productimage:"https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNob2VzfGVufDB8fDB8fHww",
      id:"ptupeu"


    },
    {
      productname:"Nike Air jorden",
      categoryname:"Shoes",
      stock:"inStock",
      Sales:"$ 9809k", 
      totalSale:'90K unit ',
      productimage:"https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNob2VzfGVufDB8fDB8fHww",
      id:"ptupeu"


    },
    {
      productname:"Nike Air jorden",
      categoryname:"Shoes",
      stock:"inStock",
      Sales:"$ 9809k", 
      totalSale:'90K unit ',
      productimage:"https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNob2VzfGVufDB8fDB8fHww",
        id:"ptupeu"


    },
    {
      productname:"Nike Air jorden",
      categoryname:"Shoes",
      Sales:"$ 9809k", 
      stock:"inStock",
      totalSale:'90K unit ',
      productimage:"https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNob2VzfGVufDB8fDB8fHww",
      id:"ptupeu"


    },

  ]
  return (
    <section className='w-full relative h-[300px] overflow-auto product-card-wrappar '>
            <p className='text-h2 font-semibold text-third px-1 bg-secondary  sticky  top-0 z-20'>Top Sale Product</p>
            <div className='grid  grid-cols-[.5fr_1fr_1fr_1fr_.3fr]  md:grid-cols-[.5fr_1fr_1fr_1fr_1fr_.3fr] lg:grid-cols-[.5fr_1fr_1fr_1fr_1fr_1fr_.3fr]  gap-5 w-full sticky  top-0 z-10 bg-secondary  py-2 px-1  border-t border-b border-[#d3d3d3] items-start '>
                <p className=' text-[16px] font-medium text-third '>S/No:</p>
                <p className=' text-[16px] font-medium text-third line-clamp-1 '>Product Name</p>
                <p className=' text-[16px] font-medium text-third hidden lg:block'>Category Name</p>
                <p className=' text-[16px] font-medium text-third '>Stock </p>
                <p className=' text-[16px] font-medium text-third line-clamp-1 hidden md:block '>Total Sales</p>
                <p className=' text-[16px] font-medium text-third '>Earnings</p>
            </div>
            {/* product Sales card */}
            {
              data.map((data,index)=>(
                <Saleproductcard data={data}/>
              ))
            }
    </section>
  )
}

export default TopSalesection