'use client';

import * as React from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import Image from 'next/image';
import './style.css';
import { InputChangeAmount } from "@/sections/cart/CartComponent/components/input-change-amount";
import { BottomTabCart } from "@/sections/cart/CartComponent/components/bottom-tab-cart";

export function CartComponent() {
  return (
    <div className="cart-component mt-[2rem] flex justify-between max-md:flex-col">
      <BottomTabCart />
      <div className="w-3/4 max-md:w-full">
        <div className="rounded-md border-b ">
          <div className="list-product-cart">
            <div className="header-list-product ">
              <div className="checkbox-header">
                <Checkbox
                  className="border-2 border-[#C4C4C4]"
                  aria-label="Select row"
                />
              </div>
              <div className="info-product-title">
                <div className="text-black text-[1rem] not-italic font-bold leading-[1.5rem]">
                  Thông tin sản phẩm
                </div>
              </div>
              <div className="price-product-title">
                <div className="text-black text-[1rem] not-italic font-bold leading-[1.5rem]">
                  Giá
                </div>
              </div>
              <div className="amount-product-title">
                <div className="text-black text-[1rem] not-italic font-bold leading-[1.5rem]">
                  Số lượng
                </div>
              </div>
              <div className="total-product-title">
                <div className="text-black text-[1rem] not-italic font-bold leading-[1.5rem]">
                  Tổng cộng
                </div>
              </div>
            </div>
            <hr />
            <div className="body-list-product">
              <div className="row-body-list-product">
                <div className="checkbox-body">
                  <Checkbox
                    className="border-2 border-[#C4C4C4] max-md:w-[5rem] max-md:h-[5rem]"
                    aria-label="Select row"
                  />
                </div>
                <div className="info-product">
                  <div className="h-[7.5rem] max-md:h-fit flex ">
                    <Image
                      width={70}
                      height={70}
                      className="h-full w-[7.5rem] max-md:w-[32rem] max-md:h-[32rem]"
                      src="https://dl.memuplay.com/new_market/img/com.outfit7.mytalkingtom2.icon.2023-08-29-23-30-20.png"
                      alt="img product"
                    />
                    <div className="h-full ml-[1rem] flex flex-col justify-center max-md:ml-[3.25rem] max-md:justify-between">
                      <h4 className="text-[0.875rem] not-italic font-bold  max-md:text-[4.267rem] max-md:mb-[1rem]">
                        Gọng kính thời trang KL060
                      </h4>
                      <div className="hidden max-md:flex mb-[1.2rem]">
                        <div className="not-italic font-normal  text-[3.5rem] w-1/3">
                          Price:
                        </div>
                        <div className="not-italic font-bold  text-[3.5rem]">
                          200.000đ
                        </div>
                      </div>
                      <div className="hidden max-md:flex">
                        <div className="not-italic font-normal  text-[3.5rem] w-1/3">
                          Subtotal:
                        </div>
                        <div className="not-italic font-bold text-[3.5rem]">
                          200.000đ
                        </div>
                      </div>
                      <div className="mt-[3rem] hidden max-md:block ">
                        <InputChangeAmount />
                      </div>

                      {/* <u className="text-[1.125rem] not-italic font-normal leading-[1.6875rem] max-md:hidden"> */}
                      {/*  Xóa */}
                      {/* </u> */}
                    </div>
                  </div>
                </div>
                <div className="price-product">
                  <div className="text-black text-[1rem] font-medium not-italic leading-[1.6875rem]">
                    200.000đ
                  </div>
                </div>
                <div className="amount-product">
                  <InputChangeAmount />
                </div>
                <div className="total-product ">
                  <div className="text-[1.125rem] not-italic font-bold leading-[1.6875rem]">
                    200.000đ
                  </div>
                </div>
              </div>
              <hr />
            </div>
          </div>
        </div>
        <div className="flex justify-between max-md:mt-[2rem]">
          <button
            type="button"
            className={`${true ? 'cursor-not-allowed' : undefined}  ${
              true ? "bg-[#D9D9D9]" : "bg-white"
            } ${
              true ? "text-[#00000040]" : "text-black"
            } transition-all duration-300 mt-[1.25rem] rounded-[0.5rem] px-[2rem] py-[0.75rem] border-2 border-[#D4D4D4]  text-[0.875rem] not-italic font-bold leading-[1.5rem] max-md:text-[2.5rem] max-md:leading-[6.4rem] `}
          >
            Xóa tất cả các sản phẩm
          </button>
          <div className="flex justify-between">
            <button
              type="button"
              className="flex items-center rounded-[0.5rem] mt-[1.25rem] px-[2rem] py-[0.75rem] bg-[#55D5D2] text-white text-[0.875rem] not-italic font-bold leading-[1.5rem] max-md:text-[2.8rem] max-md:leading-[6.4rem]"
            >
              {/* <LoadingGlobal /> */}
              <span>Cập nhật giỏ hàng</span>
            </button>
            <button
              type="button"
              className="ml-[1rem] mt-[1.25rem] rounded-[0.5rem] px-[2rem] py-[0.75rem] bg-[#55D5D2] text-white text-[0.875rem] not-italic font-bold leading-[1.5rem] max-md:text-[2.8rem] max-md:leading-[6.4rem]"
            >
              Tiếp tục mua hàng
            </button>
          </div>
        </div>
      </div>

      <div className="grow ml-[1rem] max-md:mt-[7.5rem] ">
        <div className=" bg-[#F3F3F3] h-[21rem] flex flex-col items-center justify-center max-md:h-[69.86667rem]">
          <h3 className="w-full text-center text-[1.125rem] not-italic font-bold leading-[1.6875rem] text-black pb-[1.25rem] border-b-2 border-[#DADADA] border-dotted max-md:text-[4.73333rem] max-md:leading-[6.4rem] max-md:pb-[6rem]">
            Tóm tắt đơn hàng
          </h3>
          <hr />
          <div className="w-full px-[1.5rem] flex justify-between my-[0.9rem] max-md:px-[4.27rem] max-md:mt-[3rem]">
            <div className="text-black text-[1rem] not-italic font-semibold leading-[1.5rem] max-md:text-[3.5rem] max-md:leading-[4.8rem]">
              Tạm tính
            </div>
            <div className="text-black text-[1rem] font-bold not-italic leading-[1.5rem] max-md:text-[3.5rem] max-md:leading-[6.4rem]">
              400.000đ
            </div>
          </div>
          <div className="w-full px-[1.5rem] flex justify-between my-[0.9rem] max-md:px-[4.27rem] max-md:mb-[3rem]">
            <div className="text-black text-[1rem] not-italic font-semibold leading-[1.5rem] max-md:text-[3.5rem] max-md:leading-[4.8rem]">
              Phí vận chuyển
            </div>
            <div className="text-black text-[1rem] font-bold not-italic leading-[1.5rem] max-md:text-[3.5rem] max-md:leading-[6.4rem]">
              40.000đ
            </div>
          </div>
          <hr />
          <div className="w-full border-t-2 border-[#DADADA] border-dotted flex justify-center">
            <button
              type="button"
              className="mt-[1.25rem] px-[2rem] py-[0.75rem] bg-[#55D5D2] rounded-[2.125rem] text-white text-[0.875rem] not-italic font-bold leading-[1.5rem] max-md:text-[3.2rem] max-md:leading-[5.6rem] max-md:px-[6.4rem] max-md:py-[2.93rem] max-md:mt-[6.5rem]"
            >
              Thanh toán ngay
            </button>
          </div>
        </div>
        <div className="w-full flex justify-center mt-[3rem] max-md:mt-[5rem]">
          <div className="w-[16.75remrem] max-md:w-full flex flex-col items-center">
            <span className="text-[1rem] not-italic font-semibold max-md:text-[3.73333rem]">
              Chúng tôi chấp nhận thanh toán
            </span>
            <div className="flex justify-between mt-[1.3rem] max-md:w-full max-md:mt-[5rem]">
              <Image
                src="/img/cart/visa.png"
                alt=""
                width={200}
                height={150}
                className="w-[2.9375rem] h-[1.5625rem] object-cover max-md:w-[15.73333rem] max-md:h-[8.53333rem]"
              />
              <Image
                src="/img/cart/amex.png"
                alt=""
                width={200}
                height={150}
                className="w-[2.9375rem] h-[1.5625rem] object-cover max-md:w-[15.73333rem] max-md:h-[8.53333rem]"
              />
              <Image
                src="/img/cart/discover.png"
                alt=""
                width={200}
                height={150}
                className="w-[2.9375rem] h-[1.5625rem] object-cover max-md:w-[15.73333rem] max-md:h-[8.53333rem]"
              />
              <Image
                src="/img/cart/mastercard.png"
                alt=""
                quality={80}
                width={1920}
                height={1080}
                className="w-[2.9375rem] h-[1.5625rem] object-cover max-md:w-[15.73333rem] max-md:h-[8.53333rem]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
