import React from 'react';
import { ListItemProductDashboard } from '@/sections/dashboard-user/list-product-dashboard/components/list-item-product-dashboard';

interface IProps {
  dataWishList?: any;
}
function FavoriteProduct(props: IProps) {
  const { dataWishList } = props;

  return (
    <div className="mt-[1.5rem] max-md:mt-[8rem]">
      <h3 className="text-title-level-black text-[1.5rem] font-bold leading-[1.5rem] max-md:text-[5rem] max-md:pb-[3rem]">
        Sản phẩm yêu thích
      </h3>
      <ListItemProductDashboard
        listProduct={dataWishList ?? []}
        keyTab="favorite"
      />
    </div>
  );
}

export default FavoriteProduct;
