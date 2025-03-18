import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function HomeReviewcard({ className, data }) {

    return (
        <div className={`w-full relative flex flex-col items-start justify-between rounded-md bg-red-100  p-4 h-auto ${className}`}>
            <span className='flex items-start  flex-col w-fit '>
                <h2 className='text-p40 font-semibold text-third '>90.90k</h2>
                <p className='text-[14px] font-normal text-third'>Total Customer</p>
            </span>
            <div className=' grid grid-cols-2 gap-1 w-full h-[50%] relative '>
                <span className='flex items-start justify-center h-full  flex-col w-full '>
                    <h2 className='text-p18 font-medium text-third '>40%</h2>
                    <p className='text-[14px] font-normal text-third'>Total Customer</p>
                </span>

                <span className='w-full relative h-full '>
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart width={300} height={100} data={data}>
                            <Line type="monotone" dataKey="pv" stroke={`${10>9 ? "#057D2D" : "#A13D00"}`} strokeWidth={2}  />
                        </LineChart>
                    </ResponsiveContainer>
                </span>



            </div>
        </div>
    )
}

export default HomeReviewcard