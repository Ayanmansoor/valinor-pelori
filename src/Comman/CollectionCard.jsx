import React from 'react'
import { Link } from 'react-router-dom'
function CollectionCard({value}) {
  return (
   <Link to={`/${value.url}/${value?.data.slug}`} className='w-full  cursor-pointer relative max-h-[300px] flex flex-col items-start justify-start p-3  '>
    <img src="/court-vision.png" alt="collection image" className='w-full border relative h-full object-cover ' />
    <div className='w-full relative flex flex-col gap-1 items-center justify-center px-5 py-2'>
        <h2 className='text-sm absolute bottom-7 line-clamp-1 capitalize text-start left-4 mix-blend-multiply font-medium  text-foreground'>
                {value?.data?.name}
        </h2>
    </div>
   </Link>
  )
}

export default CollectionCard