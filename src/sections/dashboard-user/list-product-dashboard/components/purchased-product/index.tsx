import React from 'react';
import Link from 'next/link';
import ICView from '@/components/Icons/ICView';
import { formatCurrencyVND } from '@/ultils/format-price';
import './style.css';

interface IProps {
  dataGetListOrder?: any;
}
function PurchasedProduct(props: IProps) {
  const { dataGetListOrder } = props;

  const handleTimeStampToDate = (date: Date) => {
    const dateConvert = new Date(date);

    const resultDate = `${dateConvert.getDate()}/${
      dateConvert.getMonth() + 1
    }/${dateConvert.getFullYear()}
      `;
    return resultDate;
  };

  return (
    <div className="mt-[1.5rem] max-md:mt-[8rem]">
      <h3 className="text-title-level-black text-[1.5rem] font-bold leading-[1.5rem] max-md:text-[5rem] max-md:pb-[3rem]">
        Sản phẩm đã mua
      </h3>
      <div className="list-purchased-product-dashboard mt-[1rem] flex justify-between max-md:flex-col">
        <div className="list-product-cart">
          <div className="header-list-product">
            <div className="cell-header w-[10rem]">Mã đơn hàng</div>
            <div className="cell-header">Số lượng</div>
            <div className="cell-header">Trạng thái</div>
            <div className="cell-header">Ngày tạo</div>
            <div className="cell-header">Tổng</div>
            <div className="cell-header flex justify-center">Thao tác</div>
          </div>
          <hr />
          <div className="overflow-y-auto">
            {dataGetListOrder &&
              dataGetListOrder.map((item: any, index: number) => (
                <div key={index} className="body-list-product">
                  <div className="row-body-list-product">
                    <div className="cell-body w-[10rem]">{item?.order_id}</div>
                    <div className="cell-body">{item?.total_quantity}</div>
                    <div className="cell-body">
                      <p className="text-[1rem] leading-[1.5rem]">
                        {item?.order_status}
                      </p>
                    </div>
                    <div className="cell-body">
                      <p className="text-[1rem] leading-[1.5rem] w-[8rem] overflow-hidden">
                        {item?.date_created &&
                          handleTimeStampToDate(item.date_created)}
                      </p>
                    </div>
                    <div className="cell-body ">
                      <span className="text-[1rem] leading-[1.5rem]">
                        {formatCurrencyVND(item?.order_total)}
                      </span>
                    </div>
                    <div className="cell-body flex justify-center items-center">
                      <Link
                        href={`/detail-order/${item.order_id}`}
                        type="button"
                        className="flex justify-center items-center grow"
                      >
                        <ICView fill="#55D5D2" width="1.5rem" height="1.5rem" />
                      </Link>
                    </div>
                  </div>
                  <hr />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PurchasedProduct;
