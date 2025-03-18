import React from 'react'
import { IoCloudUploadOutline } from "react-icons/io5";
function Description() {
  return (
    <div className='flex flex-col gap-3 '>
        <h2 className='text-p18 font-semibold text-third '>Description</h2>
        <div className='border border-[#d1d1d1] w-full p-3 rounded-md'>

            <span className='flex flex-col gap-1 w-full relative text-third'>
                <p className='text-[15px] font-medium text-third '>Product Name</p>
                <input type="text" className='w-full relative py-1 px-2 rounded-md border border-[#d1d1d1] bg-secondary  ' placeholder='Product Name'  />
            </span>

            <span className='flex items-center w-full relative mt-1 justify-between py-1  '>
                <p className='text-[15px] font-medium text-third '>Business Description</p>
                <label htmlFor='fileupload' className='text-p[13px] cursor-pointer font-medium text-primary flex items-center gap-2'><IoCloudUploadOutline className='text-[18px]' /> Upload.txt</label>
                <input type="file" id='fileupload' name='fileupload'  className='hidden'/>
            </span>
            <div className='relative h-1 w-full bg-slate-300 p-1'>

            </div>
        </div>
    </div>
  )
}

export default Description