import React from 'react'
import ProductCard from './ProductCard'
import { Link } from 'react-router-dom'

function GridRroduct({data,}) {
  let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,]

    

  return (


    <div className='    w-full   h-auto grid grid-cols-2 sm:grid-cols-[repeat(auto-fill,minmax(200px,auto))] gap-y-5 gap-x-2 md:gap-x-5  md:gap-y-5 bg-secondary   '>
      {data.products?.map((product, index) => (
        <ProductCard value={{  product:product, ind: `${index}`, url: data.url }} />
      ))}
    </div>
  )
}

export default GridRroduct