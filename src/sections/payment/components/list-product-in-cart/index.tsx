'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useContext, useEffect, useState } from 'react';
import { IItemCart } from '@/types/types-general';
import { formatCurrencyVND } from '@/ultils/format-price';
// eslint-disable-next-line import/no-cycle
import { FormPaymentContext } from '@/sections/payment';

export default function ListProductInCart() {
  const [dataInit, setDataInit] = useState<IItemCart[]>([]);
  const [totalPriceInCart, setTotalPriceInCart] = useState<number>(0);

  const { handleUpdate } = useContext<any>(FormPaymentContext);
  // if (
  //   typeof window !== 'undefined' &&
  //   localStorage.getItem('totalPriceCart') !== null
  // ) {
  //   const getTotalPriceCart = localStorage.getItem('totalPriceCart');
  //   const totalPriceCart = parseInt(getTotalPriceCart ?? '0', 10);
  //
  //   setTotalPriceInCart(totalPriceCart);
  //   // console.log("getTotalPriceCart", getTotalPriceCart);
  // }

  // const getTotalPriceCart = localStorage.getItem('totalPriceCart');
  // console.log('asdasdsad', getTotalPriceCart);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (localStorage.getItem('listMyCart') !== null) {
        const storedData = localStorage.getItem('listMyCart') as string;
        const listDataLocalStorage = JSON.parse(storedData);

        setDataInit(listDataLocalStorage);
      }

      if (localStorage.getItem('totalPriceCart') !== null) {
        const getTotalPriceCart = localStorage.getItem('totalPriceCart');
        const listDataLocalStorage = parseInt(getTotalPriceCart ?? '0', 10);
        setTotalPriceInCart(listDataLocalStorage);
      }
    }
  }, []);
  return (
    <div className="p-[2rem] bg-[#F3F3F3] max-md:p-[4rem]">
      <h3 className="text-[1.5rem] font-bold max-md:text-[6.4rem]">
        Nhập mã giảm giá
      </h3>
      <div className="flex justify-between items-center mb-[1rem] mt-[1rem]">
        <input
          type="text"
          name="input"
          onChange={(val: any) => handleUpdate(val.target.value)}
          placeholder="Nhập mã giảm giá"
          className="px-[1rem] border-2 border-[#EAEAEA] outline-[#EAEAEA] focus:outline-[#55D5D2] focus:border-[#55D5D2] rounded-[0.8rem] h-[3.43rem]  w-[80%] text-[1rem] transition-all duration-100 ease-linear max-md:h-[10rem] max-md:text-[3.733rem] max-md:w-[70%]"
        />
        <Button
          type="submit"
          className="grow ml-[0.5rem] rounded-[0.8rem] h-[3.43rem] bg-[#55D5D2] text-[1rem] not-italic font-bold leading-[1.5rem] max-md:ml-[2rem] max-md:h-[10rem] max-md:text-[3rem]"
        >
          Áp dụng
        </Button>
      </div>
      <div className="flex justify-between mb-[1rem] max-md:mt-[4rem]">
        <p className="text-[#3A3A3A] font-bold max-md:text-[4.267rem]">
          Sản phẩm
        </p>
        <p className="text-[#3A3A3A] font-bold max-md:text-[4.267rem]">
          Thành tiền
        </p>
      </div>
      {dataInit &&
        dataInit?.map((item: IItemCart, index: number) => (
          <div key={index}>
            <hr />
            <div className="flex justify-between items-center my-[1.5rem] max-md:my-[4rem]">
              <div className="flex items-center max-md:flex-col max-md:items-start">
                <Image
                  height={60}
                  width={60}
                  className="w-[4.75rem] h-[4.75rem] max-md:w-[16rem] max-md:h-[16rem]"
                  src="https://kinhmatanna.com/wp-content/uploads/2023/09/TU-1636-600x600.png"
                  alt=""
                />
                <div className="flex items-center ml-[1rem] max-md:mt-[2rem]">
                  <span className="leading-[1.375rem] font-medium max-md:text-[4rem] max-md:leading-[5rem]">
                    {item.product_name}
                  </span>
                  <span className="ml-[0.4rem] text-[1.3rem] font-bold leading-[1.375rem] text-[#3A3A3A] max-md:text-[4rem] max-md:leading-[5rem] max-md:ml-[2rem]">
                    x{item.quantity}
                  </span>
                </div>
              </div>
              <span className="text-[#101010] font-semibold max-md:text-[3.733rem]">
                {formatCurrencyVND(
                  item?.product_price ? item?.product_price?.toString() : '0'
                )}
              </span>
            </div>
            <hr />
          </div>
        ))}

      <div className="flex justify-between my-[1.5rem] max-md:my-[4rem]">
        <p className="text-[1rem] font-bold max-md:text-[4.267rem]">Tạm tính</p>
        <p className="text-[1rem] text-[#55D5D2] font-bold max-md:text-[4.267rem]">
          {formatCurrencyVND(totalPriceInCart.toString())}
        </p>
      </div>
      <hr />
      <div className="flex justify-between my-[1.5rem] max-md:my-[4rem]">
        <p className="text-[1rem] font-bold max-md:text-[4.267rem]">
          Tổng cộng
        </p>
        <p className="text-[1rem] text-[#55D5D2] font-bold max-md:text-[4.267rem]">
          {formatCurrencyVND(totalPriceInCart.toString())}
        </p>
      </div>
    </div>
  );
}
