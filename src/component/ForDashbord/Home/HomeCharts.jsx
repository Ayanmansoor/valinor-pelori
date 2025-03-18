import React from 'react'
import SalesChart from '../charts/Sales.chart'
import IncomeChart from '../charts/Income.chart';
function HomeCharts() {
    const data = [
        {
          name: 'Page A',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Page D',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];
  return (
    <div className='grid  md:grid-cols-[2fr_1.3fr] relative w-full min-h-[300px] gap-3  py-2'>
      
      <div className='w-full relative h-full  p-1 rounded-sm  '>
        <IncomeChart data={data}/>
    </div>
    <div className='w-full relative h-full  p-2 rounded-sm'>
        <SalesChart data={data}/>
    </div>
  </div>
  )
}

export default HomeCharts