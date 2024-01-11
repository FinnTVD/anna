'use client';

import { cn } from '@/lib/utils';
import NavItems from './nav-items/nav-items';
import NavMobileDetail from './nav-mobile-detail';
import { IListProductMenuHeader } from '@/types/types-general';
import { useEffect, useState } from 'react';
import { keyProductsInCart } from '@/configs/config';

interface IProps {
  dataListProductHeader?: IListProductMenuHeader[];
  dataListCart?: any;
  avatarUser?: string;
}
function Navbar(props: IProps) {
  const { dataListProductHeader, dataListCart, avatarUser } = props;
  const [currentPositionScrollY, setCurrentPositionScrollY] =
    useState<number>(0);

  const [styleNavbar, setStyleNavbar] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      const { scrollY } = window;
      setCurrentPositionScrollY(scrollY);
      if (scrollY > currentPositionScrollY && window.scrollY >= 300) {
        setStyleNavbar(true);
      } else {
        setStyleNavbar(false);
      }
    });
  }, [currentPositionScrollY]);
  console.log('dataListCart', dataListCart);
  useEffect(() => {
    if (dataListCart) {
      localStorage.setItem(keyProductsInCart, JSON.stringify(dataListCart));
    }
  }, [dataListCart]);
  return (
    <div>
      {/* <Logo /> */}
      <div
        className={cn(
          'flex justify-between w-full fixed top-[0px] z-50 transition-all duration-500 max-md:hidden ',
          styleNavbar ? '-translate-y-[110%]' : ''
        )}
      >
        <NavItems
          avatarUser={avatarUser}
          dataProps={dataListProductHeader ?? []}
        />
        <div className="mt-5 max-md:mt-1" />
      </div>
      <div className="hidden max-sm:block fixed top-[20px] right-[3.2rem] z-10">
        <NavMobileDetail dataListProductHeader={dataListProductHeader} />
      </div>
    </div>
  );
}

export default Navbar;
