'use client';

import { cn } from '@/lib/utils';
import NavItems from './nav-items/nav-items';
import NavMobileDetail from './nav-mobile-detail';
import './nav-items/style.css';
import { useState } from 'react';
import { IListProductMenuHeader } from '@/types/types-general';
import { Input } from '@/components/ui/input';
import ICSearch from '@/components/Icons/ICSearch';
import './style.css';
import useSWR from 'swr';
import { fetchDataAuthen } from '@/lib/post-data';

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

  // GET API cart
  const bodyGetCart: any = {
    url: `/wp-json/woocart/v1/cart`,
    method: 'get',
    token:
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FubmEub2todWItdGVjaC5jb20iLCJpYXQiOjE3MDQ1OTExMTMsIm5iZiI6MTcwNDU5MTExMywiZXhwIjoxNzA1MTk1OTEzLCJkYXRhIjp7InVzZXIiOnsiaWQiOjUsImRldmljZSI6IiIsInBhc3MiOiI4ZWMzMmIzNGRlYjhjMTJlMjhmNWQwYjQ0Njk0ZjkyNiJ9fX0.Do7zY3gSwLqfTGDwS4QrCHnATlNzai1-UxvdHICnOL4',
  };

  const dataListCart = useSWR(bodyGetCart.url, () =>
    fetchDataAuthen(bodyGetCart)
  );

  if (dataListCart.data) {
    localStorage.setItem('listMyCart', JSON.stringify(dataListCart.data));
  }

  return (
    <div>
      {/* <Logo /> */}
      <div
        className={cn(
          `flex justify-between w-full py-[6px] py-6 fixed top-[0px] z-50 max-md:hidden navbar-home ${
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
      <div className="hidden max-sm:block fixed rounded-[13.33333rem] bg-navbar-mobile flex items-center w-[81rem] left-16 top-20 z-10">
        <div className="absolute top-[50%] -translate-y-1/2 left-[3.5rem] z-10">
          <ICSearch fill="#fff" width="5.333rem" height="5.333rem" />
        </div>
        <Input
          className="text-[3.73333rem] px-[12rem] py-[5rem] rounded-[13.33333rem] border-[0.2px] border-[#C5C5C5] placeholder-[#fff] bg-[#7F7F7F4D] focus-visible:outline-0"
          type="text"
          placeholder="Tìm sản phẩm"
        />
      </div>
      <div className="hidden max-sm:block fixed top-[20px] right-[3.2rem] z-10">
        <NavMobileDetail dataListProductHeader={dataListProductHeader} />
      </div>
    </div>
  );
}

export default NavbarHome;
