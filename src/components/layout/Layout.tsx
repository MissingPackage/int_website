import React from 'react';
import { Outlet } from "react-router-dom";
import Background from "../../assets/winter_wallpaper.jpeg"
import { NavbarSimple } from '../navbar/Navbar';

const Layout = () => {
  return (
    <div className="bg-cover bg-center bg-fixed min-h-full text-orange-500 m-0 p-0"
    style={{backgroundImage: `url(${Background})`}}>
        <NavbarSimple />
        <div className="text-center p-8 box-border min-h-screen">
            <Outlet />
        </div>
    </div>
  );
};

export default Layout;