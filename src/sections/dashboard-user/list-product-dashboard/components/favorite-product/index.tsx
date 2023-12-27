import React from 'react';
import { ListItemProductDashboard } from '@/sections/dashboard-user/list-product-dashboard/components/list-item-product-dashboard';

function FavoriteProduct() {
  const listProduct = [{}, {}, {}, {}, {}];
  return (
    <div className="mt-[1.5rem] max-md:mt-[8rem]">
      <h3 className="text-[1.5rem] font-semibold leading-[1.5rem] max-md:text-[5rem] max-md:pb-[3rem]">
        Sản phẩm yêu thích
      </h3>
      <ListItemProductDashboard listProduct={listProduct} keyTab="favorite" />
    </div>
  );
}

export default FavoriteProduct;
