'use client';

import { cn } from '@/lib/utils';
import NavItems from './nav-items/nav-items';
import NavMobileDetail from './nav-mobile-detail';
import './nav-items/style.css';
import { useState } from 'react';
import { IListProductMenuHeader } from '@/types/types-general';
import { Input } from '@/components/ui/input';
import ICSearch from '@/components/Icons/ICSearch';

interface IProps {
  dataListProductHeader?: IListProductMenuHeader[];
}

function NavbarHome(props: IProps) {
  const { dataListProductHeader } = props;

  const [styleNavbar, setStyleNavbar] = useState(false);
  if (typeof window !== 'undefined') {
    window?.addEventListener('scroll', function scrolled() {
      if (window.scrollY >= 300) {
        setStyleNavbar(true);
      } else {
        setStyleNavbar(false);
      }
    });
  }

  return (
    <div>
      {/* <Logo /> */}
      <div
        className={cn(
          `flex justify-between w-full py-[6px] px-20 py-6 fixed top-[0px] z-50 max-md:hidden navbar-home ${
            styleNavbar ? 'bg-white' : ''
          }`
        )}
      >
        <NavItems
          styleNavbar={styleNavbar}
          dataProps={dataListProductHeader ?? []}
        />
        <div className="mt-5 max-md:mt-1" />
      </div>
      <div className="hidden max-sm:block fixed rounded-[13.33333rem] flex items-center w-[81rem] left-16 top-40 z-10">
        <div className="absolute top-[50%] -translate-y-1/2 left-[3.5rem]">
          <ICSearch fill="#fff" width="5.333rem" height="5.333rem" />
        </div>
        <Input
          className="text-[3.73333rem] px-[12rem] py-[5rem] rounded-[13.33333rem] placeholder:italic placeholder-[#fff] bg-[#7F7F7F4D] focus-visible:outline-0"
          type="text"
          placeholder="Tìm sản phẩm"
        />
      </div>
      <div className="hidden max-sm:block fixed top-[20px] right-[3.2rem] z-10">
        <NavMobileDetail />
      </div>
    </div>
  );
}

export default NavbarHome;
