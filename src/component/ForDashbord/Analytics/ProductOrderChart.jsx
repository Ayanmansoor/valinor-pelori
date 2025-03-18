import React from 'react'
import { SlCalender } from "react-icons/sl";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-secondary px-2 py-1 rounded-sm">
        <div className="">
          <p className="">Date: {payload[0].payload.date}</p>
          {payload[0].payload.temp ? (
            <p>Temp {payload[0].payload.temp}&#8457;</p>
          ) : (
            <p>Voltage {payload[0].payload.voltage}V</p>
          )}
        </div>
      </div>
    );
  }

  return null;
};


function ProductOrderReport() {
  const data = [
    {
      name: 'M-1',
      uv: 4000,
      pv: 2400,
      amt: 2400,
      an: 2400,
    },
    {
      name: 'M-2',
      uv: 3000,
      pv: 1398,
      amt: 2210,
      an: 2400,

    },
    {
      name: 'M-3',
      uv: 2000,
      pv: 9800,
      amt: 2290,
      an: 2400,

    },
    {
      name: 'M-4',
      uv: 2780,
      pv: 3908,
      amt: 2000,
      an: 4400,

    },
    {
      name: 'M-5',
      uv: 1890,
      pv: 4800,
      amt: 2181,
      an: 2300,

    },
    {
      name: 'M-6',
      uv: 2390,
      pv: 3800,
      amt: 2500,
      an: 6600,

    },
    {
      name: 'M-7',
      uv: 3490,
      pv: 4300,
      amt: 2100,
      an: 4400,

    },
    
  ];

  return (
    <section className='w-full h-auto relative rounded-sm  p-2 flex items-center flex-col gap-1 bg-slate-100 shadow-md '>
      <div className='flex items-center justify-between w-full  px-3 h-[25px]'>
        <h2 className='text-[16px] font-medium text-[#000000b0]'>Products Ordered
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
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 0,
            bottom: 0,
          }}
          barSize={20}
        >
          <XAxis dataKey="name" scale="point" className='text-[13px] m-0 '  padding={{ left: 10, right: 10 }} />
          <YAxis className='text-[13px] m-0 ' />
          <Tooltip />
          <Bar dataKey="pv" fill="#8884d8" background={{ fill: '#eee' }} padding={{ left:10, right:10 }} />
        </BarChart>
      </ResponsiveContainer>
      </div>

    </section>
  )
}

export default ProductOrderReport