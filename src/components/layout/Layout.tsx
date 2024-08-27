import React from 'react';
import { Link, Outlet } from "react-router-dom";
import Background from "../../assets/winter_wallpaper.jpeg"
import { NavbarSimple } from '../navbar/Navbar';

const Layout = () => {
  return (
    <div className="bg-cover bg-center min-h-full h-screen w-screen text-orange-500 m-0 p-0"
    style={{backgroundImage: `url(${Background})`}}>
        <NavbarSimple />
        <div className="text-center p-8 box-border">
            <Outlet />
        </div>
    </div>
  );
};

export default Layout;