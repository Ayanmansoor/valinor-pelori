import React from 'react'
import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
  } from 'recharts';
function TodayVisited() {
    
    const data = [
        {
          name: 'M-1',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'M-2',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'M-3',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'M-4',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'M-5',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'M-6',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'M-7',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
        {
            name: 'M-8',
            uv: 3490,
            pv: 4300,
            amt: 2100,
          },
          {
            name: 'M-9',
            uv: 3490,
            pv: 4300,
            amt: 2100,
          },
          {
            name: 'M-10',
            uv: 3490,
            pv: 4300,
            amt: 2100,
          },
          {
            name: 'M-11',
            uv: 3490,
            pv: 4300,
            amt: 2100,
          },
          {
            name: 'M-12',
            uv: 3490,
            pv: 4300,
            amt: 2100,
          },
          
          
      ];
    return (
        <div className='relative h-full w-full '>
          <ResponsiveContainer width="100%" height={"100%"}>
        <ComposedChart
         
          data={data}
          margin={{
            top: 20,
            right: 0,
            bottom: 20,
            left: 1,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" scale="band" className='text-[14px] font-medium' />
          <YAxis  className='text-[14px] font-medium'/>
          <Tooltip />
          <Bar dataKey="uv" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="uv" stroke="#ff7300" />
        </ComposedChart>
      </ResponsiveContainer>
        </div>
    )
}

export default TodayVisited