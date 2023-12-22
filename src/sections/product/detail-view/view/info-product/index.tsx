'use client';

import { MapMobile } from '@/app/icons';
import { ICDecreaseIcon, ICIncreaseIcon } from '@/components/Icons';
import ICArrowRight from '@/components/Icons/ICArrowRight';
import ICBag from '@/components/Icons/ICBag';
import { IDetailProductRes } from '@/types/detail-product';
import { formatCurrencyVND } from '@/ultils/format-price';
import React, { useEffect, useState } from 'react';
import useSWR from "swr";

import "./style.css";

interface IProps {
  dataInit?: IDetailProductRes;
  handleChangeColorGetApi: (value: string | number | null) => void;
  listColorProduct: any;
}

interface IDataProduct {
  color: string;
  quantityProduct: number;
  idColor: string | null | number;
}

function InfoProduct(props: IProps) {
  const { dataInit, handleChangeColorGetApi, listColorProduct } = props;

  const [numberInfor, setNumberInfor] = useState<number | undefined>(undefined);
  const [priceProduct, setPriceProduct] = useState<number>(0);
  const [dataProductSubmit, setDataProductSubmit] = useState<IDataProduct>({
    color: '',
    idColor: null,
    quantityProduct: 1,
  });

  // GET transport
  const apiTransport = useSWR(
    'https://woo-api.okhub.tech/wp-json/wp/v2/pages?slug=van-chuyen',
    () =>
      fetch('https://woo-api.okhub.tech/wp-json/wp/v2/pages?slug=van-chuyen', {
        headers: new Headers({
          'Content-Type': 'application/json',
        }),
      }).then((response) => response.json()) // Parse JSON response
  );

  // GET Return product
  const apiReturnProduct = useSWR(
    'https://woo-api.okhub.tech/wp-json/wp/v2/pages?slug=doi-tra',
    () =>
      fetch('https://woo-api.okhub.tech/wp-json/wp/v2/pages?slug=doi-tra', {
        headers: new Headers({
          'Content-Type': 'application/json',
        }),
      }).then((response) => response.json()) // Parse JSON response
  );
  // END

  const handleChangeColor = (value: any) => {
    setDataProductSubmit({
      ...dataProductSubmit,
      color: value.attributes.color,
      idColor: value.id,
    });
    handleChangeColorGetApi(value.id);
  };

  const handleHiddenInfor = (e: any, value: number) => {
    setNumberInfor(value === numberInfor ? undefined : value);
  };

  const handleOnchangeQuantity = (value: any): void => {
    console.log('valueeee', value.target.value.length);

    const valueConvert = parseInt(
      value.target.value.replace(/[^0-9]/g, ''),
      10
    );

    let check;

    if (dataInit?.stock_quantity) {
      check =
        valueConvert > dataInit?.stock_quantity
          ? dataInit?.stock_quantity
          : valueConvert;
    } else check = valueConvert;

    setDataProductSubmit({
      ...dataProductSubmit,
      quantityProduct: Number.isNaN(check) ? 1 : check,
    });
  };

  const subQuantityProduct = (): void => {
    setDataProductSubmit({
      ...dataProductSubmit,
      quantityProduct: dataProductSubmit.quantityProduct - 1,
    });
  };

  const addQuantityProduct = (): void => {
    setDataProductSubmit({
      ...dataProductSubmit,
      quantityProduct: dataProductSubmit.quantityProduct + 1,
    });
  };

  useEffect(() => {
    const priceProduct = dataInit?.price ? parseInt(dataInit.price, 10) : 0;
    setPriceProduct(priceProduct);
  }, [dataInit]);

  useEffect(() => {
    // listColorProduct.isLoading;
  }, [dataProductSubmit.idColor]);

  return (
    <div className="info-detail-product right-detail grow max-lg:w-[25rem] max-lg:ml-[1.76rem]  ml-[3.76rem] max-md:mt-[0rem] max-md:ml-[0rem] max-md:relative max-md:w-full">
      <div>
        {dataInit?.category && dataInit?.category[0]?.name && (
          <div className="flex items-center justify-center h-[1.4375rem] py-[0.8125rem] px-[0.625rem] rounded-[2.5rem] h-fit w-fit bg-[#CAF2F1] max-md:h-fit max-md:py-[3.46667rem] max-md:w-[20.8rem] max-md:px-[2.66667rem] max-md:rounded-[10.66667rem]">
            <span className="leading-[0.9rem] text-[0.75rem] not-italic font-bold max-md:text-[2.66667rem] max-md:leading-[3.46667rem]">
              {dataInit?.category[0]?.name}
            </span>
          </div>
        )}
      </div>
      {dataInit?.name && (
        <p className="text-[1.75rem] font-[850] text-[#454545] leading-[2.1rem] my-[0.75rem] max-md:text-[6.4rem] max-md:mt-[2.13rem] max-md:leading-[8.32rem] max-sm:mb-[0.75rem]">
          {dataInit?.name}
        </p>
      )}

      <div className="max-md:hidden">
        {dataInit?.price && (
          <p className="text-[1.875rem] font-[850] leading-[2.25rem] text-[#55D5D2]">
            {formatCurrencyVND(dataInit?.price)}
          </p>
        )}
      </div>

      <div className="max-md:hidden">
        {dataInit?.regular_price && (
          <p className="text-[1rem] leading-[1.4rem] font-bold text-[#6A6A6A] line-through max-md:hidden">
            {formatCurrencyVND(dataInit?.regular_price)}
          </p>
        )}
      </div>

      <ul className="max-lg:mt-[1.06rem] max-lg:mb-[2.31rem] list-color flex mt-[2.06rem] mb-[3.31rem] max-md:hidden">
        {listColorProduct &&
          listColorProduct.map((item: any, index: number) => (
            // <Link href={{pathname: "/detail/[id]",query: { id: item.id },}}>
            <li
              // role="button"
              key={index}
            >
              <div
                style={{
                  backgroundColor: item.attributes.color,
                  borderColor:
                    item.attributes.color === dataProductSubmit.color
                      ? '#55D5D2'
                      : item.attributes.color,
                }}
                role="button"
                onClick={() => handleChangeColor(item)}
                className="h-[1.875rem] w-[1.875rem] rounded-full border-2 mr-[1rem]"
              />
            </li>
            // </Link>
          ))}
      </ul>
      {/* support */}
      <p className="w-full max-lg:text-[0.95rem] not-italic max-lg:mb-[2.5rem] w-[31.625rem] text-[1rem] text-[#3F3F3F] font-bold leading-[1.5rem] mb-[3.7rem] max-md:text-[3.73333rem] max-md:leading-[5.6rem] max-md:w-[100%]">
        short description: {dataInit?.short_description}
        <br />
        Hướng dẫn sử dụng:
        <br /> + Tháo kính bằng 2 tay hoặc những nơi có nhiệt độ cao làm biến
        dạng kính.
        <br /> + Không bỏ kính vào cốp xe hoặc những nơi có nhiệt độ cao làm
        biến dạng kính.
      </p>
      {/* button */}
      <div className="max-lg:px-[0.5rem]  max-lg:py-[0.5rem] px-[1rem] py-[1.06rem] bg-[#CAF2F1]  rounded-[5rem] mb-[2.6rem] max-sm:p-0 ">
        <div className="flex justify-between items-center  h-[3.375rem] max-md:h-[11.73333rem]">
          <div className="w-[12.3125rem] h-full mr-[1.5rem] text-[#44AAA8] flex justify-between items-center rounded-[2.3125rem] bg-white border-[#4DC0BD] border-[1px] max-sm:hidden ">
            <div
              onClick={
                dataProductSubmit.quantityProduct > 1
                  ? subQuantityProduct
                  : undefined
              }
              style={{
                cursor:
                  dataProductSubmit.quantityProduct > 1
                    ? 'pointer'
                    : 'not-allowed',
              }}
              className="px-[1.5rem] py-[0.8rem] select-none max-lg:mr-[.5rem] w-[0.6875rem] text-[1.25rem] font-bold leading-[1.875rem]"
            >
              -
            </div>
            <div className="quantity-product flex grow">
              <input
                type="text"
                // pattern="[0-9]/g*"
                className="w-full focus:outline-none text-center"
                defaultValue={dataProductSubmit.quantityProduct}
                value={dataProductSubmit.quantityProduct}
                onChange={(value) => handleOnchangeQuantity(value)}
              />
            </div>
            {/* <div className="number-add-cart-opacity" /> */}
            <div
              role="button"
              onClick={
                dataProductSubmit.quantityProduct <= dataInit?.stock_quantity
                  ? addQuantityProduct
                  : undefined
              }
              style={{ cursor: 'pointer' }}
              className="select-none px-[1.5rem] py-[0.8rem] max-lg:ml-[.5rem] w-[0.6875rem] text-[1.25rem] font-bold leading-[1.875rem]"
            >
              +
            </div>
          </div>
          <div className="flex items-center grow bg-[#55D5D2] max-lg:whitespace-nowrap max-lg:px-[0.75rem] max-lg:ml-[0.5rem] text-white text-[1rem] font-extrabold leading-[1.4rem] items-center px-[1.25rem] h-full rounded-[6.25rem] ml-[1.5rem] max-sm:w-full max-sm:ml-0 max-sm:justify-between">
            <div className="hidden max-md:block mr-[2.67rem] ml-[5.33rem]">
              <ICBag />
            </div>
            <p className="max-lg:mr-[0.49rem] max-md:text-[4.26667rem] max-md:leading-[5.97333rem] max-md:w-[48rem]">
              Thêm vào giỏ
            </p>
            <div className="mx-[0.62rem] max-md:mx-[2.67rem]">
              <svg
                className="max-md:hidden"
                xmlns="http://www.w3.org/2000/svg"
                width="4"
                height="4"
                viewBox="0 0 4 4"
                fill="none"
              >
                <circle cx="2" cy="2" r="2" fill="#CAF2F1" />
              </svg>
              <svg
                className="hidden max-md:block"
                xmlns="http://www.w3.org/2000/svg"
                width="1.06667rem"
                height="1.06667rem"
                viewBox="0 0 4 4"
                fill="none"
              >
                <circle cx="2" cy="2" r="2" fill="#CAF2F1" />
              </svg>
            </div>
            <p className="title-add-cart grow max-md:text-[4.26667rem] max-md:leading-[5.97333rem] max-md:font-extrabold">
              {priceProduct * dataProductSubmit.quantityProduct}
            </p>
          </div>
        </div>
      </div>
      {/* adddress */}
      <div className="flex items-center border-t border-b border-[#55D5D2] mb-[1rem] max-sm:absolute max-sm:top-0 max-sm:right-0 max-sm:border-none ">
        <svg
          className="jumping-map max-md:hidden"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
        >
          <path
            d="M12 16.3584C12.6895 16.3584 13.3158 16.0822 13.6755 15.6195C16.1958 12.3776 19.2 8.10496 19.2 6.16075C19.2 3.0394 15.9701 0.5 12 0.5C8.02988 0.5 4.8 3.0394 4.8 6.16075C4.8 8.10496 7.80429 12.3776 10.3245 15.6195C10.6842 16.0822 11.3106 16.3584 12 16.3584ZM9.10601 5.77208C9.10601 4.51752 10.4043 3.49684 12 3.49684C13.5957 3.49684 14.894 4.51752 14.894 5.77208C14.894 7.02667 13.5957 8.04735 12 8.04735C10.4043 8.04735 9.10601 7.02671 9.10601 5.77208Z"
            fill="#55D5D2"
          />
        </svg>
        <div className="hidden max-md:flex max-md:bg-[#55D5D2] rounded-[50%] w-[6.4rem] h-[6.4rem] justify-center items-center">
          <MapMobile />
        </div>
        <p className="max-lg:text-[1rem]  max-lg:leading-[1.5rem] text-[1.5rem] font-[850] leading-[1.95rem] ml-[0.62rem] text-[#55D5D2] mx-[1.5rem] my-[0.94rem] max-md:text-[2.66667rem] max-md:font-bold max-md:leading-[1.5rem] max-md:my-[0px]">
          Tìm cửa hàng
        </p>
      </div>
      {/* infor */}
      <div className="all-infor-detail">
        <div>
          <div>
            <div
              role="button"
              className={`flex justify-between items-center py-[0.9375rem] max-md:py-[4rem] ${
                numberInfor !== 1 ? 'border-b-[1px]' : 'border-b-[0px]'
              } border-[#ECECEC]`}
              onClick={() => handleHiddenInfor('show', 1)}
            >
              <span className="max-lg:text-[1rem] not-italic max-lg:leading-[1.5rem] text-[1.5rem] font-[850] leading-[1.95rem] text-[#454545] max-md:text-[5.33333rem] max-md:leading-[7.46667rem]">
                Thông tin
              </span>
              <div className="max-md:hidden">
                {numberInfor === 1 ? (
                  <ICDecreaseIcon width="1.5rem" height="1.5rem" />
                ) : (
                  <ICIncreaseIcon width="1.5rem" height="1.5rem" />
                )}
              </div>
              <div className=" hidden max-md:block">
                {numberInfor === 1 ? (
                  <ICDecreaseIcon width="6.4rem" height="6.4rem" />
                ) : (
                  <ICIncreaseIcon width="6.4rem" height="6.4rem" />
                )}
              </div>
            </div>
            <p
              className={` left-0 max-lg:text-[0.9rem] max-lg:w-full ${
                numberInfor !== 1 ? 'h-0' : 'h-fit'
              } overflow-hidden transition-all delay-300 infor-detail infor-detail-1 w-[32.375rem] text-[1rem] font-bold leading-[1.5rem] text-[#3F3F3F] self-stretch max-md:text-[3.73333rem] max-md:leading-[5.6rem] max-md:w-[100%]`}
            >
              {dataInit?.description}
            </p>
          </div>
          <div>
            <div
              role="button"
              className={`flex justify-between items-center py-[0.9375rem] max-md:py-[4rem] ${
                numberInfor !== 2 ? 'border-b-[1px]' : 'border-b-[0px]'
              } border-[#ECECEC] `}
              onClick={() => handleHiddenInfor('show', 2)}
            >
              <span className="max-lg:text-[1rem] not-italic max-lg:leading-[1.5rem] text-[1.5rem] font-[850] leading-[1.95rem] text-[#454545] max-md:text-[5.33333rem] max-md:leading-[7.46667rem]">
                Vận chuyển
              </span>
              <div className="max-md:hidden">
                {numberInfor === 2 ? (
                  <ICDecreaseIcon width="1.5rem" height="1.5rem" />
                ) : (
                  <ICIncreaseIcon width="1.5rem" height="1.5rem" />
                )}
              </div>
              <div className="hidden max-md:block">
                {numberInfor === 2 ? (
                  <ICDecreaseIcon width="6.4rem" height="6.4rem" />
                ) : (
                  <ICIncreaseIcon width="6.4rem" height="6.4rem" />
                )}
              </div>
            </div>
            {apiTransport?.data && (
              <p
                dangerouslySetInnerHTML={{
                  __html: `${apiTransport?.data[0].content.rendered}`,
                }}
                className={`max-lg:text-[0.9rem] max-lg:w-full infor-detail infor-detail-2 w-[32.375rem] text-[1rem] font-bold leading-[1.5rem] text-[#3F3F3F] self-stretch ${
                  numberInfor !== 2 ? 'h-0' : 'h-fit'
                } overflow-hidden max-md:text-[3.73333rem] max-md:leading-[5.6rem] max-md:w-[100%]`}
              />
            )}
          </div>
          <div>
            <div
              role="button"
              className={`flex justify-between items-center py-[0.9375rem] max-md:py-[4rem] ${
                numberInfor !== 3 ? 'border-b-[1px]' : 'border-b-[0px]'
              } border-[#ECECEC]`}
              onClick={() => handleHiddenInfor('show', 3)}
            >
              <span className=" max-lg:text-[1rem] not-italic max-lg:leading-[1.5rem] text-[1.5rem] font-[850] leading-[1.95rem] text-[#454545] max-md:text-[5.33333rem] max-md:leading-[7.46667rem]">
                Đổi trả
              </span>
              <div className="max-md:hidden">
                {numberInfor === 3 ? (
                  <ICDecreaseIcon width="1.5rem" height="1.5rem" />
                ) : (
                  <ICIncreaseIcon width="1.5rem" height="1.5rem" />
                )}
              </div>
              <div className="hidden max-md:block">
                {numberInfor === 3 ? (
                  <ICDecreaseIcon width="6.4rem" height="6.4rem" />
                ) : (
                  <ICIncreaseIcon width="6.4rem" height="6.4rem" />
                )}
              </div>
            </div>
            <div>
              {apiReturnProduct?.data && (
                <p
                  dangerouslySetInnerHTML={{
                    __html: `${apiReturnProduct?.data[0].content.rendered}`,
                  }}
                  className={`max-lg:text-[0.9rem] max-lg:w-full infor-detail infor-detail-2 w-[32.375rem] text-[1rem] font-bold leading-[1.5rem] text-[#3F3F3F] self-stretch ${
                    numberInfor !== 3 ? 'h-0' : 'h-fit'
                  } overflow-hidden max-md:text-[3.73333rem] max-md:leading-[5.6rem] max-md:w-[100%]`}
                />
              )}
            </div>
          </div>
          <div>
            <div
              role="button"
              className={`flex justify-between items-center py-[0.9375rem] max-md:py-[4rem] ${
                numberInfor !== 1 ? 'border-b-[1px]' : 'border-b-[0px]'
              } border-[#ECECEC]`}
              onClick={() => handleHiddenInfor('show', 1)}
            >
              <span className="max-lg:text-[1rem] not-italic max-lg:leading-[1.5rem] text-[1.5rem] font-[850] leading-[1.95rem] text-[#454545] max-md:text-[5.33333rem] max-md:leading-[7.46667rem]">
                Chọn kính theo gương mặt
              </span>
              <div className="max-md:hidden">
                <ICArrowRight height="1.5rem" width="1.5rem" />
              </div>
              <div className="hidden max-md:block">
                <ICArrowRight height="6.4rem" width="6.4rem" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoProduct;
