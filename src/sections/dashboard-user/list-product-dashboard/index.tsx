'use client';

import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ICBag2 from '@/components/Icons/ICBag2';
import ICCoupons from '@/components/Icons/ICCoupons';
import FavoriteProduct from '@/sections/dashboard-user/list-product-dashboard/components/favorite-product';
import PurchasedProduct from '@/sections/dashboard-user/list-product-dashboard/components/purchased-product';
import useSWR from 'swr';
import { fetchDataAuthen } from '@/lib/post-data';

function ListProductDashboard() {
  const bodyGetWishList: any = {
    url: `/wp-json/custom/v1/get-wishlist`,
    method: 'get',
    token:
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3dvby1hcGkub2todWIudGVjaCIsImlhdCI6MTcwMzk2MDQ1OSwibmJmIjoxNzAzOTYwNDU5LCJleHAiOjE3MDQ1NjUyNTksImRhdGEiOnsidXNlciI6eyJpZCI6NSwiZGV2aWNlIjoiIiwicGFzcyI6IjhlYzMyYjM0ZGViOGMxMmUyOGY1ZDBiNDQ2OTRmOTI2In19fQ.xyeVnJeXoZW6ZdtUH2xKOC2SzzDmp_49h7DvQ_R90-M',
  };

  const dataWishList = useSWR(bodyGetWishList.url, () =>
    fetchDataAuthen(bodyGetWishList)
  );

  return (
    <Tabs
      defaultValue="purchased-product"
      className="w-full h-full scroll-smooth"
    >
      <TabsList className="grid w-full h-fit grid-cols-2 p-[0.6rem] rounded-[1rem] max-md:grid-cols-1 max-md:p-[2rem]">
        <TabsTrigger
          value="purchased-product"
          className="flex py-[0.6rem] rounded-[0.8rem] max-md:py-[2rem] max-md:px-[4rem] max-md:justify-start"
        >
          <div className="rounded-full w-[3.3125rem] h-[3.3125rem] bg-[#95D1CD] flex justify-center items-center max-md:w-[9.533rem] max-md:h-[9.533rem]">
            <ICBag2 />
          </div>
          <div className="ml-[1rem] flex flex-col items-start max-md:flex-row-reverse">
            <h3 className="max-md:hidden text-[1.875rem] text-[#494949]  font-Nexa-Medium mb-[0.55rem]">
              50
            </h3>
            <h3 className="hidden max-md:block text-[3.733rem] text-[#494949]  font-Nexa-Medium mb-[0.55rem] ml-[1rem]">
              (50)
            </h3>
            <span className="font-bold text-[0.8rem] text-[#494949] max-md:text-[3.733rem] max-md:ml-[1rem]">
              Sản phẩm đã mua
            </span>
          </div>
        </TabsTrigger>
        <TabsTrigger
          value="favorite-product"
          className="flex py-[0.6rem] rounded-[1rem] max-md:py-[2rem] max-md:px-[4rem] max-md:justify-start"
        >
          <div className="rounded-full w-[3.3125rem] h-[3.3125rem] bg-[#95D1CD] flex justify-center items-center max-md:w-[9.533rem] max-md:h-[9.533rem]">
            <ICCoupons />
          </div>
          <div className="ml-[1rem] flex flex-col items-start max-md:flex-row-reverse">
            <h3 className="max-md:hidden text-[1.875rem] text-[#494949]  font-Nexa-Medium mb-[0.55rem]">
              50
            </h3>
            <h3 className="hidden max-md:block text-[3.733rem] text-[#494949]  font-Nexa-Medium mb-[0.55rem] ml-[1rem]">
              (50)
            </h3>
            <span className="font-bold text-[0.8rem] text-[#494949] max-md:text-[3.733rem] max-md:ml-[1rem]">
              Sản phẩm yêu thích
            </span>
          </div>
        </TabsTrigger>
      </TabsList>
      <TabsContent value="purchased-product">
        <PurchasedProduct />
      </TabsContent>
      <TabsContent value="favorite-product">
        <FavoriteProduct dataWishList={dataWishList.data} />
      </TabsContent>
    </Tabs>
  );
}

export default ListProductDashboard;
