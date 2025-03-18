import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
function IncomeChart({ data }) {
    return (
        <div className='w-full relative h-full '>
            <p className='text-h2 font-semibold text-third px-1'>Earnig</p>
            <ResponsiveContainer width="100%" height="85%">
                <LineChart  data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" className="text-[12px] font-semibold" padding={{ left: 30, right: 30 }} />
                    <Tooltip className="text-[12px] font-normal" />
                    <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 5 }} />
                    <Line type="monotone" dataKey="uv" stroke="#057D2D" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default IncomeChart