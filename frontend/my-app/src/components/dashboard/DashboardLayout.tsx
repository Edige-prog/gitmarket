import React from 'react'
import { Outlet } from 'react-router'
import DashboardSidebar from './DashboardSidebar'
const DashboardLayout = () => {
  return (
    <div className='flex'>
        <DashboardSidebar/>
        <Outlet/>
    </div>
  )
}

export default DashboardLayout