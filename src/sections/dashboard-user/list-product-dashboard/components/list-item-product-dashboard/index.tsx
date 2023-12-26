'use client';

import * as React from 'react';
import Image from 'next/image';
import './style.css';
import { BottomTabCart } from '@/sections/cart/CartComponent/components/bottom-tab-cart';
import ICTrash from '@/components/Icons/ICTrash';

interface IProps {
  listProduct: any;
}
export function ListItemProductDashboard(props: IProps) {
  const { listProduct } = props;
  return (
    <div className="list-item-product-dashboard mt-[1rem] flex justify-between max-md:flex-col">
      <BottomTabCart />
      <div className="list-product-cart">
        <div className="header-list-product ">
          <div className="info-product-title">
            <div className="font-Nexa-Bold text-[#414141] text-[1rem] not-italic leading-[1.5rem]">
              Thông tin sản phẩm
            </div>
          </div>
          <div className="price-product-title">
            <div className="font-Nexa-Bold text-[#414141] text-[1rem] not-italic leading-[1.5rem]">
              Đơn giá
            </div>
          </div>
          <div className="amount-product-title">
            <div className="font-Nexa-Bold text-[#414141] text-[1rem] not-italic leading-[1.5rem]">
              Phân loại
            </div>
          </div>
          <div className="total-product-title">
            <div className="font-Nexa-Bold text-[#414141] text-[1rem] not-italic  leading-[1.5rem]">
              Số luợng
            </div>
          </div>
          <div className="total-product-title">
            <div className="font-Nexa-Bold text-[#414141] text-[1rem] not-italic leading-[1.5rem]">
              Thao tác
            </div>
          </div>
        </div>
        <hr />
        <div className="h-[calc(100%-16rem)] overflow-y-auto">
          {listProduct.map((item: any, index: number) => (
            <div key={index} className="body-list-product">
              <div className="row-body-list-product">
                <div className="info-product">
                  <div className="h-[5rem] max-md:h-[34rem] flex">
                    <Image
                      width={70}
                      height={70}
                      className="h-full rounded-[0.4rem] object-cover w-[5rem] max-md:w-[32rem] max-md:h-[34rem]"
                      src="https://dl.memuplay.com/new_market/img/com.outfit7.mytalkingtom2.icon.2023-08-29-23-30-20.png"
                      alt="img product"
                    />
                    <div className="h-full ml-[1rem] flex flex-col justify-center max-md:ml-[3.25rem] max-md:justify-between">
                      <div>
                        <h4 className="text-[1rem] leading-[1.875rem] font-Nexa-Medium">
                          Gọng kính thời trang KL060
                        </h4>
                        <div className="flex items-center">
                          <h4 className="text-[1rem] leading-[1.875rem] font-Nexa-Medium">
                            màu:
                          </h4>
                          <div className="h-[0.875rem] w-[0.875rem] rounded-full bg-black ml-[0.3rem]" />
                        </div>
                      </div>
                      {/* <div className="hidden max-md:flex mb-[1.2rem]"> */}
                      {/*  <div className="not-italic font-normal  text-[3.5rem] w-1/3"> */}
                      {/*    Price: */}
                      {/*  </div> */}
                      {/*  <div className="not-italic font-bold  text-[3.5rem]"> */}
                      {/*    200.000đ */}
                      {/*  </div> */}
                      {/* </div> */}
                      {/* <div className="hidden max-md:flex"> */}
                      {/*  <div className="not-italic font-normal  text-[3.5rem] w-1/3"> */}
                      {/*    Subtotal: */}
                      {/*  </div> */}
                      {/*  <div className="not-italic font-bold text-[3.5rem]"> */}
                      {/*    200.000đ */}
                      {/*  </div> */}
                      {/* </div> */}
                      {/* <div className="mt-[2.5rem] hidden max-md:block ">1</div> */}

                      {/* <u className="text-[1.125rem] not-italic font-normal leading-[1.6875rem] max-md:hidden"> */}
                      {/*  Xóa */}
                      {/* </u> */}
                    </div>
                  </div>
                </div>
                <div
                  style={{ alignItems: 'start', justifyContent: 'center' }}
                  className="price-product flex-col"
                >
                  <div className="text-[#FF594F] font-Nexa-Normal text-[1rem] not-italic leading-[1.6875rem]">
                    200.000đ
                  </div>
                  <div className="text-[#A6A6A6] font-Nexa-Normal text-[0.875rem] line-through not-italic leading-[1.6875rem]">
                    200.000đ
                  </div>
                </div>
                <div className="amount-product">
                  <p className="text-[1rem] leading-[1.5rem] font-Nexa-Normal">
                    Gọng kính
                  </p>
                </div>
                <div className="total-product ">
                  <span className="text-[1rem] leading-[1.5rem] font-Nexa-Normal">
                    1
                  </span>
                </div>
                <div className="total-product ">
                  <button
                    type="button"
                    className="flex justify-center items-center grow"
                  >
                    <ICTrash />
                  </button>
                </div>
              </div>
              <hr />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
