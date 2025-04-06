import { Link } from 'react-router-dom'
import React from 'react'

function BlogCard(data) {
    return (
        <Link to={`/blog/${data.data.slug}`} className='w-full relative h-auto flex flex-col group gap-1 p-3 bg-gray-200 rounded-md'>
            <img src={data.data.image||""} alt="" className='w-full h-[150px] sm:h-[200px] object-cover ' />
            <div className='w-full relative h-auto flex flex-col gap-1'>
                <h2 className=' text-base md:text-lg  font-semibold text-primary group-hover:underline'>{data.data.title}</h2>
                <p className=' text-xs md:text-sm text-primary font-medium group-hover:underline line-clamp-3'>{data.data.discription}</p>
                <p className='text-sm font-medium text-primary group-hover:underline'>Learn More</p>
            </div>
        </Link>
    )
}

export default BlogCard