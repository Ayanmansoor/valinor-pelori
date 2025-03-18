import React from 'react'
import { SlCalender } from "react-icons/sl";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function ProfitChart() {
  const data = [
    {
      name: 'M-1',
      pv: 2400,
    },
    {
      name: 'M-2',
      pv: 1398,
    },
    {
      name: 'M-3',
      pv: 9800,

    },
    {
      name: 'M-4',
      pv: 3908,

    },
    {
      name: 'M-5',
      pv: 4800,

    },
    {
      name: 'M-6',
      pv: 3800,
      an: 6600,

    },
    {
      name: 'M-7',
      pv: 4300,

    },
  ];
  
  return (
    <section className='w-full h-auto relative rounded-sm  p-2 flex items-center flex-col gap-1 bg-slate-100 shadow-md '>
    <div className='flex items-center justify-between w-full  px-3 h-[25px]'>
      <h2 className='text-[16px] font-medium text-[#000000b0]'>Profit Report</h2>
      <div className=' flex items-center gap-3'>
        <span className='flex items-center text-[#000000b0] text-[16px] font-normal px-2 gap-3 w-fit p-[1px] rounded-sm bg-slate-100 '>
          {84848}
          <SlCalender className='text-p18 cursor-pointer ' />
        </span>
        <select name="" id="" className=' text-[#000000b0] bg-secondary focus:border-none text-[15px] font-normal px-1'>
          <option value="State" selected >Total profit</option>
          <option value="State" >Categories profit</option>
        </select>
      </div>

    </div>
    <div className='max-h-[calc(100%-25px)] w-full relative '>
      <ResponsiveContainer width="100%" height={200}>
      <LineChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          bottom: 5,
        }}
      >
        <XAxis dataKey="name" className='text-[13px] m-0 '  />
        <YAxis className='text-[13px] m-0 ' />
        <Tooltip  />
        <Line type="monotone" dataKey="pv"  stroke="#8884d8" activeDot={{ r: 4 }} />
     
      </LineChart>
      </ResponsiveContainer>
    </div>

  </section>
  )
}

export default ProfitChart