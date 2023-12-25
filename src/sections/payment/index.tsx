'use client';

import FormPayment from '@/sections/payment/components/form-payment';
import ListProductInCart from '@/sections/payment/components/list-product-in-cart';

export default function Payment() {
  return (
    <div className="w-[87.5rem] mx-auto flex pt-[5rem] mb-[5rem] max-md:flex-col">
      <div className="w-[40rem] mr-[2rem] max-md:mr-[0rem] max-md:w-full">
        <span className="text-[2.1875rem] not-italic font-semibold leading-[3.28125rem] max-md:text-[8.333rem] max-md:leading-[10rem]">
          THANH TOÁN
        </span>
        <div className="mt-[1rem] max-md:mt-[3rem]">
          <FormPayment />
        </div>
      </div>
      <div className="grow max-md:hidden">
        <ListProductInCart />
      </div>
    </div>
  );
}
