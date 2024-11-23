import React from 'react';
import { Outlet } from 'react-router';
import MainNavbar from '../navbar-footer/MainNavbar';
import MainFooter from '../navbar-footer/MainFooter';
import Sidebar from '../sidebar/Sidebar';

const MainLayout = () => {
  return (
      <div className='w-full h-full absolute'>
        <Sidebar />
        <div className='ml-[50px]'>
          <Outlet/>
        </div>
      </div>
  )
}

export default MainLayout