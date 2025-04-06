import React from 'react'
import { Link } from 'react-router-dom'
function CollectionCard({ value }) {

  const images = value.data.image_urls?.map((image, index) => JSON.parse(image))



  return (
    <Link to={`/${value.url}/${value?.data.slug}`} className='w-full  cursor-pointer relative group  max-h-[300px] flex flex-col items-start justify-start p-1 md:p-3 h-[220px]  '>
      {
        images?.map((item, index) => (
          <img src={`${item.image_url}`} alt={item.name || ""} className='w-full border  relative h-full  object-cover ' key={index} />
        ))
      }
      <h2 className='text-base font-medium absolute bottom-3 line-clamp-1 capitalize text-start left-2  group-hover:left-4 transition-all duration-500   bg-black  z-10   text-white px-3 '>
        {value?.data?.name}
      </h2>
    </Link>
  )
}

export default CollectionCard