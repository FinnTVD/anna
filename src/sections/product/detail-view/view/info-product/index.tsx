'use client';

import { MapMobile } from '@/app/icons';
import { ICIncreaseIcon, ICDecreaseIcon } from '@/components/Icons';
import { postData } from '@/lib/post-data';
import { IDetailProductRes } from '@/types/detail-product';
import { IPostData } from '@/types/next-auth';
import { formatCurrencyVND } from '@/ultils/format-price';
import React, { useEffect, useState } from 'react';
import useSWR from 'swr';

interface IProps {
  dataInit?: IDetailProductRes;
  slug?: string | number;
}

interface IDataProduct {
  color: string;
  quantityProduct: number;
  idColor: string | null | number;
}

function InfoProduct(props: IProps) {
  const { dataInit, slug } = props;
  const [dataInitInfoProduct, setDataInitInfoProduct] = useState(dataInit);
  const [numberInfor, setNumberInfor] = useState<number>(0);
  const [priceProduct, setPriceProduct] = useState<number>();
  const [dataProduct, setDataProduct] = useState<IDataProduct>({
    color: '',
    idColor: null,
    quantityProduct: 1,
  });

  console.log("dataProduct.idColor", dataProduct.idColor);
  console.log("dataInitInfoProduct", dataInitInfoProduct);

  console.log('dataInit', dataInit);

  const handleGet = () => {
    const bodyGetProductByColor: any = {
      url: `products-details/${dataProduct.idColor}`,
      method: 'get',
    };

    const { data } = useSWR(`product-variations/${slug}`, async () =>
      postData(bodyGetProductByColor)
    );

    return { data };
  };

  // const getDataDetail = ()
  const handleChangeColor = async (value: any) => {
    setDataProduct({
      ...dataProduct,
      color: value.attributes.color,
      idColor: value.id,
    });

    console.log('handleGet', handleGet());
    // const bodyGetProductByColor: any = {
    //   url: `products-details/${dataProduct.idColor}`,
    //   method: 'get',
    // };

    // const { data: detailData } = await useSWR(
    //   `product-variations/${slug}`,
    //   async () => postData(bodyGetProductByColor)
    // );

    // console.log('data', data);
    // setDataInitInfoProduct(getDetailProductByColor.data);
  };

  const handleHiddenInfor = (e: any, value: number) => {
    setNumberInfor(value);
  };

  const subQuantityProduct = (): void => {
    setDataProduct({
      ...dataProduct,
      quantityProduct: dataProduct.quantityProduct - 1,
    });
  };

  const addQuantityProduct = (): void => {
    setDataProduct({
      ...dataProduct,
      quantityProduct: dataProduct.quantityProduct + 1,
    });
  };

  const bodyApi: IPostData = {
    url: `product-variations/${slug}`,
    method: "get",
  };
  const listColorProduct = useSWR(bodyApi.url, () => postData(bodyApi));

  console.log("listColorProduct", listColorProduct?.data);

  useEffect(() => {
    const priceProduct = dataInit?.price ? parseInt(dataInit.price, 10) : 0;
    setPriceProduct(priceProduct);
  }, [dataInit]);

  useEffect(() => {
    listColorProduct.isLoading;
  }, [dataProduct.idColor]);

  // console.log("data", data);

  return (
    <div className="right-detail grow max-lg:w-[25rem] max-lg:ml-[1.76rem]  ml-[3.76rem] max-sm:mt-[0rem] max-sm:ml-[0rem] max-sm:relative max-md:w-full">
      <div className="h-[1.4375rem] py-[0.8125rem] px-[0.625rem] rounded-[2.5rem] h-fit w-fit bg-[#CAF2F1]">
        {dataInitInfoProduct?.category[0]?.name && (
          <span className="leading-[0.9rem] text-[0.75rem] not-italic font-bold">
            {dataInitInfoProduct?.category[0]?.name}
          </span>
        )}
      </div>
      <p className="text-[1.75rem] font-[850] text-[#454545] leading-[2.1rem] my-[0.75rem] max-sm:text-[1.5rem] max-sm:leading-[1.95rem] max-sm:mb-[0.75rem]">
        {dataInitInfoProduct?.name}
      </p>

      {dataInitInfoProduct?.price && (
        <p className="text-[1.875rem] font-[850] leading-[2.25rem] text-[#55D5D2] max-sm:hidden">
          {formatCurrencyVND(dataInitInfoProduct?.price)}
        </p>
      )}

      {dataInitInfoProduct?.regular_price && (
        <p className="text-[1rem] leading-[1.4rem] font-bold text-[#6A6A6A] line-through max-sm:hidden">
          {formatCurrencyVND(dataInitInfoProduct?.regular_price)}
        </p>
      )}

      <ul className="max-lg:mt-[1.06rem] max-lg:mb-[2.31rem] list-color flex mt-[2.06rem] mb-[3.31rem] max-sm:hidden">
        {listColorProduct?.data &&
          listColorProduct?.data.map((item: any, index: number) => (
            <li
              key={index}
              style={{
                backgroundColor: item.attributes.color,
                borderColor:
                  item.attributes.color === dataProduct.color
                    ? '#55D5D2'
                    : item.attributes.color,
              }}
              className="h-[1.875rem] w-[1.875rem] rounded-full border-2 mr-[1rem]"
              onClick={() => handleChangeColor(item)}
            />
          ))}
      </ul>
      {/* support */}
      <p className="max-lg:text-[0.95rem] max-lg:mb-[2.5rem] max-md:w-[31.625rem] text-[1rem] text-[#3F3F3F] font-bold leading-[1.5rem] mb-[3.7rem] max-sm:text-[0.875rem] max-sm:leading-[1.3125rem] max-sm:w-[100%]">
        short description: {dataInitInfoProduct?.short_description}
        <br />
        Hướng dẫn sử dụng:
        <br /> + Tháo kính bằng 2 tay hoặc những nơi có nhiệt độ cao làm biến
        dạng kính.
        <br /> + Không bỏ kính vào cốp xe hoặc những nơi có nhiệt độ cao làm
        biến dạng kính.
      </p>
      {/* button */}
      <div className="max-lg:px-[0.5rem]  max-lg:py-[0.5rem] px-[1rem] py-[1.06rem] bg-[#CAF2F1]  rounded-[5rem] mb-[2.6rem] max-sm:p-0 ">
        <div className="flex justify-between items-center  h-[3.375rem]">
          <div className="w-[12.3125rem] h-full mr-[1.5rem] text-[#44AAA8] flex justify-between items-center rounded-[2.3125rem] bg-white border-[#4DC0BD] border-[1px] max-sm:hidden ">
            <div
              onClick={
                dataProduct.quantityProduct > 1 ? subQuantityProduct : undefined
              }
              style={{
                cursor:
                  dataProduct.quantityProduct > 1 ? 'pointer' : 'not-allowed',
              }}
              className="px-[1.5rem] py-[0.8rem] select-none max-lg:mr-[.5rem] w-[0.6875rem] text-[1.25rem] font-bold leading-[1.875rem]"
            >
              -
            </div>
            {/* <div className="number-add-cart-opacity" /> */}
            <span className="flex grow justify-center items-center max-lg:px-[0.5rem] number-add-cart text-[1rem] font-[800] leading-[1.5rem] font-[SVN-Nexa]">
              {dataProduct.quantityProduct}
            </span>
            {/* <div className="number-add-cart-opacity" /> */}
            <div
              onClick={addQuantityProduct}
              style={{ cursor: 'pointer' }}
              className="select-none px-[1.5rem] py-[0.8rem] max-lg:ml-[.5rem] w-[0.6875rem] text-[1.25rem] font-bold leading-[1.875rem]"
            >
              +
            </div>
          </div>
          <div className="flex grow bg-[#55D5D2] max-lg:whitespace-nowrap max-lg:px-[0.75rem] max-lg:ml-[0.5rem] text-white text-[1rem] font-extrabold leading-[1.4rem] items-center px-[1.25rem] h-full rounded-[6.25rem] ml-[1.5rem] max-sm:w-full max-sm:ml-0 max-sm:justify-between">
            <p className="max-lg:mr-[0.49rem] max-lg:text-[1rem]">
              Thêm vào giỏ
            </p>
            <div className="mx-[0.62rem]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="4"
                height="4"
                viewBox="0 0 4 4"
                fill="none"
              >
                <circle cx="2" cy="2" r="2" fill="#CAF2F1" />
              </svg>
            </div>
            <p className="title-add-cart grow">
              {priceProduct * dataProduct.quantityProduct}
            </p>
          </div>
        </div>
      </div>
      {/* adddress */}
      <div className="flex items-center border-t border-b border-[#55D5D2] mb-[1rem] max-sm:absolute max-sm:top-0 max-sm:right-0 max-sm:border-none ">
        <svg
          className="jumping-map max-sm:hidden"
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
        <div className="hidden max-sm:flex max-sm:bg-[#55D5D2] rounded-[50%] w-[1.5rem] h-[1.5rem] justify-center">
          <MapMobile />
        </div>
        <p className="max-lg:text-[1rem]  max-lg:leading-[1.5rem] text-[1.5rem] font-[850] leading-[1.95rem] ml-[0.62rem] text-[#55D5D2] mx-[1.5rem] my-[0.94rem] max-sm:text-[0.625rem] max-sm:font-bold max-sm:leading-[1.5rem] max-sm:my-[0px]">
          Tìm cửa hàng
        </p>
      </div>
      {/* infor */}
      <div className="all-infor-detail">
        <div>
          <div>
            <div
              className={`flex justify-between items-center py-[0.9375rem] ${
                numberInfor !== 1 ? 'border-b-[1px]' : 'border-b-[0px]'
              } border-[#ECECEC]`}
              onClick={() => handleHiddenInfor('show', 1)}
            >
              <span className="max-lg:text-[1rem]  max-lg:leading-[1.5rem] text-[1.5rem] font-[850] leading-[1.95rem] text-[#454545] max-sm:text-[1.25rem] max-sm:leading-[1.75rem]">
                Thông tin
              </span>
              {numberInfor === 1 ? <ICDecreaseIcon /> : <ICIncreaseIcon />}
            </div>
            <p
              className={`max-lg:text-[0.9rem] max-lg:w-full ${
                numberInfor !== 1 ? 'h-0' : 'h-fit'
              } overflow-hidden infor-detail infor-detail-1 w-[32.375rem] text-[1rem] font-bold leading-[1.5rem] text-[#3F3F3F] self-stretch max-sm:text-[0.875rem] max-sm:leading-[1.3125rem] max-sm:w-[100%]`}
            >
              {dataInitInfoProduct?.description}
            </p>
          </div>
          <div>
            <div
              className={`flex justify-between items-center py-[0.9375rem] ${
                numberInfor !== 2 ? 'border-b-[1px]' : 'border-b-[0px]'
              } border-[#ECECEC] `}
              onClick={() => handleHiddenInfor('show', 2)}
            >
              <span className="max-lg:text-[1rem]  max-lg:leading-[1.5rem] text-[1.5rem] font-[850] leading-[1.95rem] text-[#454545] max-sm:text-[1.25rem] max-sm:leading-[1.75rem]">
                Vận chuyển
              </span>
              {numberInfor === 2 ? <ICDecreaseIcon /> : <ICIncreaseIcon />}
            </div>
            <p
              className={`max-lg:text-[0.9rem] max-lg:w-full infor-detail infor-detail-2 w-[32.375rem] text-[1rem] font-bold leading-[1.5rem] text-[#3F3F3F] self-stretch ${
                numberInfor !== 2 ? 'h-0' : 'h-fit'
              } overflow-hidden max-sm:text-[0.875rem] max-sm:leading-[1.3125rem] max-sm:w-[100%]`}
            >
              Chịu trách nhiệm sản phẩm: Công Ty TNHH Dịch vụ và Thương mại Anna
              Việt Nam Cảnh báo: Bảo quản trong hộp kính Hướng dẫn sử dụng: +
              Tháo kính bằng 2 tay + Không bỏ kính vào cốp xe hoặc những nơi có
              nhiệt độ cao làm biến dạng kính. + Không bỏ kính vào túi sách nếu
              không có hộp kính, vật dụng nhọn như chìa khóa sẽ làm xước kính. +
              Không rửa kính lau kính bằng các chất có tính tẩy rửa mạnh làm
              bong tróc lớp váng phủ
            </p>
          </div>
          <div>
            <div
              className={`flex justify-between items-center py-[0.9375rem] ${
                numberInfor !== 3 ? 'border-b-[1px]' : 'border-b-[0px]'
              } border-[#ECECEC]`}
              onClick={() => handleHiddenInfor('show', 3)}
            >
              <span className=" max-lg:text-[1rem]  max-lg:leading-[1.5rem] text-[1.5rem] font-[850] leading-[1.95rem] text-[#454545] max-sm:text-[1.25rem] max-sm:leading-[1.75rem]">
                Đổi trả
              </span>
              {numberInfor == 3 ? <ICDecreaseIcon /> : <ICIncreaseIcon />}
            </div>
            <p
              className={`max-lg:text-[0.9rem] max-lg:w-full infor-detail infor-detail-3 w-[32.375rem] text-[1rem] font-bold leading-[1.5rem] text-[#3F3F3F] self-stretch flex-none ${
                numberInfor !== 3 ? 'h-0' : 'h-fit'
              } overflow-hidden max-sm:text-[0.875rem] max-sm:leading-[1.3125rem] max-sm:w-[100%]`}
            >
              Chịu trách nhiệm sản phẩm: Công Ty TNHH Dịch vụ và Thương mại Anna
              Việt Nam Cảnh báo: Bảo quản trong hộp kính Hướng dẫn sử dụng: +
              Tháo kính bằng 2 tay + Không bỏ kính vào cốp xe hoặc những nơi có
              nhiệt độ cao làm biến dạng kính. + Không bỏ kính vào túi sách nếu
              không có hộp kính, vật dụng nhọn như chìa khóa sẽ làm xước kính. +
              Không rửa kính lau kính bằng các chất có tính tẩy rửa mạnh làm
              bong tróc lớp váng phủ
            </p>
          </div>
          <div>
            <div
              className={`flex justify-between items-center py-[0.9375rem] ${
                numberInfor !== 1 ? 'border-b-[1px]' : 'border-b-[0px]'
              } border-[#ECECEC]`}
              onClick={() => handleHiddenInfor('show', 1)}
            >
              <span className="max-lg:text-[1rem]  max-lg:leading-[1.5rem] text-[1.5rem] font-[850] leading-[1.95rem] text-[#454545] max-sm:text-[1.25rem] max-sm:leading-[1.75rem]">
                Chọn kính theo gương mặt
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M9 5.5L16 12.5L9 19.5"
                  stroke="#262626"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoProduct;
