'use client'
import { NEXT_AUTH_OPTIONS } from '@/configs/auth-option';
import { cn } from '@/lib/utils';
import { getServerSession } from 'next-auth/next';
import NavItems from './nav-items/nav-items';
import NavMobileDetail from './nav-mobile-detail';
import './nav-items/style.css';
import { useState } from 'react';

const NavbarHome = () => {
  // const session = await getServerSession(NEXT_AUTH_OPTIONS);
  const [styleNavbar, setStyleNavbar] = useState(false);
  if (typeof window !== 'undefined') {
    window?.addEventListener('scroll', function scrolled() {
      if (window.scrollY >= 300) {
        setStyleNavbar(true)
      } else {
        setStyleNavbar(false)
      }
    })
  }
 
  return (
    <div>
      {/* <Logo /> */}
      <div
        className={cn(
          `flex justify-between w-full py-[6px] px-20 py-6 fixed top-[0px] z-50 max-md:hidden navbar-home ${styleNavbar ? 'bg-white' : ''}`
        )}
      >
        <NavItems styleNavbar={styleNavbar}/>
        <div className="mt-5 max-md:mt-1" />
      </div>
      <div className="hidden max-sm:block fixed top-[20px] right-[3.2rem] z-10">
        <NavMobileDetail />
      </div>
    </div>
  );
};

export default NavbarHome;
