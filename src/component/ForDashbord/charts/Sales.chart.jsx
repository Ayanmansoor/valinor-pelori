import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
function SalesChart({data}) {
  return (
    <div className='w-full relative h-full '>
            <p className='text-h2 font-semibold text-third px-1'>Sales</p>

       <ResponsiveContainer width="100%" height="85%">
        <BarChart
     
          data={data}
          margin={{
            top: 5,
            right: 0,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" className='text-[12px] font-semibold'/>
          <Tooltip className="text-[15px] font-normal" />
          <Bar dataKey="pv" fill="#004A6F"  />
          <Bar dataKey="uv" fill="#82ca9d" />
          <Bar dataKey="amt" fill="#057D2D" />
          
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default SalesChart