import React from 'react'
import { Link } from 'react-router-dom'
function MegamanuCard({ collecitonData }) {
  const productImage = collecitonData?.image_url?.map((image) => JSON.parse(image))

  return (
    <Link to={`product/${collecitonData?.slug}`} className=' max-w-fit relative h-auto flex flex-col  items-center gap-1 p-2 bg-gray-50 rounded-md '>
      {
        <img src={productImage[1]?.image_url} alt='nike Shoe' height={400} width={500} className='h-[100px] w-[100px] rounded-md border' />

      }

      <p className='text-sm text-start font-medium text-primary'>Nike Shoes</p>
      <div className='w-full relative h-auto flex items-center justify-between gap-1'>
        <p className='text-sm font-medium text-primary'>
          ₹
          {
            collecitonData?.price
          }
        </p>
        {
          collecitonData?.discounts?.discount_persent
          &&
          <p className='text-sm  text-red-400 font-medium line-through '>{collecitonData?.discounts?.discount_persent}%</p>
        }
      </div>
    </Link>
  )
}

export default MegamanuCard