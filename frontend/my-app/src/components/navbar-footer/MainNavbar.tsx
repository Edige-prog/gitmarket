import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const MainNavbar = () => {
    let Links =[
        {name:"Farmers",link:"/farmers"},
        {name:"Products",link:"/products"},
        {name:"ABOUT",link:"/about"},
        {name:"CONTACT",link:"/contact"},
      ];
      let [open, setOpen] =useState(false);

    return (
        <div className='shadow-md w-full top-0 left-0 bg-red-600 relative z-[0]'>
           <div className='md:flex items-center justify-end bg-white py-4 md:px-10 px-7'>
            {/* logo section */}
            {/* Menu icon */}
            <div onClick={()=>setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
            </div>
            {/* linke items */}
            <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
                {
                    Links.map((link) => (
                    <li className='md:ml-8 md:my-0 my-7 font-semibold'>
                        <a href={link.link} className='text-gray-800 hover:text-blue-400 duration-500'>{link.name}</a>
                    </li>))
                }
                <button className='btn bg-blue-600 text-white md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static'>Get Started</button>
            </ul>
            {/* button */}
           </div>
        </div>
    );
};

export default MainNavbar;