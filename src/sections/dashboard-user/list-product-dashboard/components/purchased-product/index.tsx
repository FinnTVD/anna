import React from 'react';
import { ListItemProductDashboard } from '@/sections/dashboard-user/list-product-dashboard/components/list-item-product-dashboard';

function PurchasedProduct() {
  const listProduct = [{}, {}, {}, {}, {}];
  return (
    <div className="mt-[1.5rem] max-md:mt-[8rem]">
      <h3 className="text-title-level-black text-[1.5rem] font-bold leading-[1.5rem] max-md:text-[5rem] max-md:pb-[3rem]">
        Sản phẩm đã mua
      </h3>
      <ListItemProductDashboard listProduct={listProduct} keyTab="buy" />
    </div>
  );
}

export default PurchasedProduct;
