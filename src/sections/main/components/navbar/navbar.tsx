'use client';

import { cn } from '@/lib/utils';
import NavItems from './nav-items/nav-items';
import NavMobileDetail from './nav-mobile-detail';
import { IListProductMenuHeader } from '@/types/types-general';
import { fetchDataAuthen } from '@/lib/post-data';
import useSWR from 'swr';
import { useEffect } from 'react';

interface IProps {
  dataListProductHeader?: IListProductMenuHeader[];
}
function Navbar(props: IProps) {
  const { dataListProductHeader } = props;

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

  useEffect(() => {
    if (dataListCart.data) {
      localStorage.setItem('listMyCart', JSON.stringify(dataListCart.data));
    }

    let totalPriceCart = 0;

    if (dataListCart.data) {
      dataListCart.data.map(
        // eslint-disable-next-line no-return-assign
        (item: any) => (totalPriceCart += parseInt(item.product_price, 10))
      );
    }

    localStorage.setItem('totalPriceCart', totalPriceCart.toString());
  }, [dataListCart.data]);

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
