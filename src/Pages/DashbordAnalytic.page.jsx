import React from 'react'
import { useParams ,useLocation, } from 'react-router-dom'
import AnalyticsPage from '@/component/ForDashbord/Analytics/AnalyticsPage'
function DashbordAnalyticpage() {
    const params=useParams()
    console.log(params)
  return (
    <AnalyticsPage/>
  )
}

export default DashbordAnalyticpage