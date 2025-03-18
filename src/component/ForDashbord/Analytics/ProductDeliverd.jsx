import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { SlCalender } from "react-icons/sl";

function ProductDeliverd() {
  
const data = [
  {
    name: 'M-A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'M-B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'M-C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'M-D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'M-E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'M-F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'M-G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
  return (
    <section className='w-full h-auto relative rounded-sm  p-2 flex items-center flex-col gap-1 bg-slate-100 shadow-md '>
      <div className='flex items-center justify-between w-full  px-3 h-[25px]'>
        <h2 className='text-[16px] font-medium text-[#000000b0]'>Deliverd Products  
        </h2>     
        <div className=' flex items-center gap-3'>
          <span className='flex items-center text-[#000000b0] text-[16px] font-normal px-2 gap-3 w-fit p-[1px] rounded-sm bg-slate-100 '>
            {84848}
            <SlCalender className='text-p18 cursor-pointer ' />
          </span>
          <select name="" id="" className=' text-[#000000b0] bg-secondary focus:border-none text-[15px] font-normal px-1'>
            <option value="State" selected >Countries</option>
            <option value="State" >States</option>
            <option value="State"  >Cities</option>
          </select>
        </div>

      </div>
      <div className='max-h-[calc(100%-25px)] w-full relative '>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart
     
          data={data}
          margin={{
            top: 5,
            right: 20,
            left: 0,
            bottom: 0,
          }}
          barSize={20}
        >
          <XAxis dataKey="name" scale="point" className='text-[13px] m-0 ' padding={{ left: 10, right: 10 }} />
          <YAxis className='text-[13px] m-0 ' />
          <Tooltip  />
          <Bar dataKey="pv" fill="#8884d8" background={{ fill: '#eee' }} />
        </BarChart>
      </ResponsiveContainer>
      </div>

    </section>
  )
}

export default ProductDeliverd