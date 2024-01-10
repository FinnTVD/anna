'use client';

import { cn } from '@/lib/utils';
import NavItems from './nav-items/nav-items';
import NavMobileDetail from './nav-mobile-detail';
import { IListProductMenuHeader } from '@/types/types-general';
import { useEffect } from 'react';
import { keyProductsInCart } from '@/configs/config';

interface IProps {
  dataListProductHeader?: IListProductMenuHeader[];
  dataListCart?: any;
}
function Navbar(props: IProps) {
  const { dataListProductHeader, dataListCart } = props;

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
          'flex justify-between w-full fixed top-[0px] z-50 max-md:hidden'
        )}
      >
        <NavItems dataProps={dataListProductHeader ?? []} />
        <div className="mt-5 max-md:mt-1" />
      </div>
      <div className="hidden max-sm:block fixed top-[20px] right-[3.2rem] z-10">
        <NavMobileDetail dataListProductHeader={dataListProductHeader} />
      </div>
    </div>
  );
}

export default Navbar;
