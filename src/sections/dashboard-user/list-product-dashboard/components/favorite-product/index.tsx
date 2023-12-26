import React from 'react';
import { ListItemProductDashboard } from '@/sections/dashboard-user/list-product-dashboard/components/list-item-product-dashboard';

function FavoriteProduct() {
  const listProduct = [{}, {}, {}, {}, {}];
  return (
    <div className="mt-[1.5rem]">
      <h3 className="text-[1.5rem] font-semibold leading-[1.5rem]">
        Sản phẩm yêu thích
      </h3>
      <ListItemProductDashboard listProduct={listProduct} />
    </div>
  );
}

export default FavoriteProduct;
