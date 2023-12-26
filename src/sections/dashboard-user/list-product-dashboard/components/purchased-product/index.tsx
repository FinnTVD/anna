import React from 'react';
import { ListItemProductDashboard } from '@/sections/dashboard-user/list-product-dashboard/components/list-item-product-dashboard';

function PurchasedProduct() {
  const listProduct = [{}, {}, {}, {}, {}];
  return (
    <div className="mt-[1.5rem]">
      <h3 className="text-[1.5rem] font-Nexa-Semibold leading-[1.5rem]">
        Sản phẩm đã mua
      </h3>
      <ListItemProductDashboard listProduct={listProduct} />
    </div>
  );
}

export default PurchasedProduct;
