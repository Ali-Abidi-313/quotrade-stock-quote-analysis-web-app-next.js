'use client';
import React from 'react';
import { useState } from 'react';
import { Roboto } from 'next/font/google';
import Image from 'next/image';
import "../app/globals.css"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const roboto = Roboto({
  weight: [ '300','400','700',],
  subsets: ['latin'],
})

function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleOpenSidebar = () => setIsSidebarOpen(true);
  const handleCloseSidebar = () => setIsSidebarOpen(false);
  return (
    <div>
      <button onClick={handleOpenSidebar} className='relative top-6 left-4'><FontAwesomeIcon icon={faBars} className='h-20 w-20 text-[#1b2e4b] text-4xl open-sider-button'/></button>
      <nav className={`${isSidebarOpen? 'show' : ''} h-[4.5rem] fixed top-0 right-0 w-full bg-[#f5f6fa] shadow-md z-50`}>
        <div className='relative'>
          <ul className='flex px-8 py-6 w-full'>
            <li><button onClick={handleCloseSidebar}><FontAwesomeIcon icon={faTimes} className='text-[#1b2e4b] text-4xl close-sider-button'/></button></li>
            <li className='mr-auto relative left-14 bottom-3'><Image src='/logo-name.png' alt='logo-quotrade' width={175} height={75} quality={100} priority/></li>
            <li className=' flex relative w-max under-line hover:bg-[#5CDB9530] transition-colors duration-300 delay-100 py-6 bottom-6'><a href="/signup" className={`${roboto.className} block font-normal text-xl mx-8 opacity-75 hover:opacity-100 `}>Signup</a></li>
            <li className=' flex relative w-max under-line hover:bg-[#5CDB9530] transition-colors duration-300 delay-100 py-6 bottom-6'><a href="/about" className={`${roboto.className}  block font-normal text-xl mx-8  opacity-75 hover:opacity-100`}>About</a></li>
            <li className=' flex relative w-max under-line hover:bg-[#5CDB9530] transition-colors duration-300 delay-100 py-6 bottom-6'><a href="/products" className={`${roboto.className} block font-normal text-xl mx-8  opacity-75 hover:opacity-100`}>Products</a></li>
            <li className=' flex relative w-max under-line hover:bg-[#5CDB9530] transition-colors duration-300 delay-100 py-6 bottom-6'><a href="/pricing" className={`${roboto.className} block font-normal text-xl mx-8  opacity-75 hover:opacity-100`}>Pricing</a></li>
            <li className=' flex relative w-max under-line hover:bg-[#5CDB9530] transition-colors duration-300 delay-100 py-6 bottom-6'><a href="/support" className={`${roboto.className} block font-normal text-xl mx-8  opacity-75 hover:opacity-100`}>Support</a></li>
          </ul>
        </div>
      </nav>
      {isSidebarOpen && <div className="overlay" onClick={handleCloseSidebar} aria-hidden="true"></div>}

    </div>
  );
}

export default Navbar;