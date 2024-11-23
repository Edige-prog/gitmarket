import React from 'react';
import { Outlet } from 'react-router';
import MainNavbar from '../navbar-footer/MainNavbar';
import MainFooter from '../navbar-footer/MainFooter';

const Main = () => {
  return (
    <div>
        <MainNavbar/>
        <Outlet/>
        <MainFooter/>
    </div>
  )
}

export default Main