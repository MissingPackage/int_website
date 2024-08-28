import React from "react";
import {
  Navbar,
  Typography
} from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
 
export function NavbarSimple() { 
  return (
    <Navbar className="mx-auto fixed min-w-full max-w-screen-xl px-6 py-3 bg-opacity-70 z-50" fullWidth={true} shadow={true}>
      <div className="flex items-center justify-center">
        <Typography
          variant="h6"
          className="mr-4 cursor-pointer py-1.5"
        >
            <NavLink to="/" className="text-orange-600 hover:text-blue-gray-900">INTernational</NavLink>
        </Typography>
        <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-medium"
        >
            <NavLink to="/about" className="text-orange-600 hover:text-blue-gray-900">About</NavLink>
        </Typography>
        <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-medium"
        >
            <NavLink to="/contact" className="text-orange-600 hover:text-blue-gray-900">Contact</NavLink>
        </Typography>
      </div>
    </Navbar>
  );
}