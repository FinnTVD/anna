'use client';

import * as React from 'react';
import { useEffect, useState } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import Image from 'next/image';
import './style.css';
import { InputChangeAmount } from '@/sections/cart/CartComponent/components/input-change-amount';
import { IItemCart } from '@/types/types-general';
import { formatCurrencyVND } from '@/ultils/format-price';
import Link from 'next/link';
import { toast } from 'sonner';

interface IProps {
  dataProps?: IItemCart[];
}

export function TableCart(props: IProps) {
  const { dataProps } = props;
  const [dataInit, setDataInit] = useState<any>([]);
  const [listIdSelected, setListIdSelected] = useState<number[]>([]);

  const handleSelecAllProduct = (value: any): void => {
    const listID: any = [];

    if (value) {
      dataInit.map((item: any) =>
        listID.push(item?.id ? item?.id : item?.product_id)
      );

      setListIdSelected(listID);
    } else {
      setListIdSelected([]);
    }
  };

  const onChangeSelectOneProduct = (value: any, id?: number): void => {
    if (id) {
      const fintIdSelected = listIdSelected.filter(
        (itemID: number) => itemID === id
      );

      if (fintIdSelected.length === 0) {
        setListIdSelected([...listIdSelected, id]);
      } else {
        const newArrayID = listIdSelected.filter((item) => item !== id);
        setListIdSelected(newArrayID);
      }
    }
  };

  const handleFindIDSeleced = (id?: number): boolean => {
    const fintID = listIdSelected.filter((item) => item === id);

    return fintID.length > 0;
  };

  const handleDeleteProductLocalStorage = (): void => {
    const arrayProductSubmitLocalStorage = [];

    const newArrayListId = listIdSelected.sort();

    let indexTmp = 0; // save index in dataInit
    for (let i = 0; i < newArrayListId.length; i++) {
      while (indexTmp <= dataInit.length - 1) {
        const currentItem = dataInit[indexTmp];

        if (newArrayListId[i] !== currentItem.id) {
          arrayProductSubmitLocalStorage.push(currentItem);
        }
        indexTmp++;
      }
    }

    typeof window !== 'undefined' && localStorage.setItem(
      'listMyCart',
      JSON.stringify(arrayProductSubmitLocalStorage)
    );

    toast('Thành công !', {
      position: 'top-right',
      description: 'Xóa sản phẩm thành công',
      duration: 3000,
      action: {
        label: 'ẨN',
        onClick: () => console.log('Undo'),
      },
    });

    setDataInit(arrayProductSubmitLocalStorage);
  };

  const handleDeleteProductAPI = (): void => {
    console.log('handleDeleteProductAPI');
  };

  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      localStorage.getItem('listMyCart') !== null
    ) {
      const storedData = localStorage.getItem('listMyCart') as string;
      const listDataLocalStorage = JSON.parse(storedData);

      setDataInit(listDataLocalStorage);
    }
  }, []);

  return (
    <>
      <div className="list-product-cart">
        <div className="header-list-product ">
          <div className="checkbox-header">
            <Checkbox
              checked={dataInit.length === listIdSelected.length}
              onCheckedChange={(value) => handleSelecAllProduct(value)}
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

        {dataProps &&
          dataProps?.length > 0 &&
          dataInit.map((item: IItemCart, index: number) => (
            <div key={index} className="body-list-product">
              <div className="row-body-list-product">
                <div className="checkbox-body">
                  <Checkbox
                    onCheckedChange={(value: boolean) =>
                      onChangeSelectOneProduct(value, item?.product_id)
                    }
                    checked={handleFindIDSeleced(item?.product_id)}
                    className="border-2 border-[#C4C4C4] max-md:w-[5rem] max-md:h-[5rem]"
                    aria-label="Select row"
                  />
                </div>
                <div className="info-product">
                  <div className="h-[7.5rem] max-md:h-[34rem] flex ">
                    <Image
                      width={70}
                      height={70}
                      className="h-full w-[7.5rem] max-md:w-[32rem] max-md:h-[34rem]"
                      src={item?.product_image ?? '/img/no_image.jpg'}
                      alt="img product"
                    />
                    <div className="h-full ml-[1rem] flex flex-col justify-center max-md:ml-[3.25rem] max-md:justify-between">
                      <h4 className="text-[0.875rem] not-italic font-bold  max-md:text-[4.267rem] max-md:mb-[1rem] line-clamp-2 max-md:leading-[5.2rem]">
                        Gọng kính thời trang KL060 {item?.product_name}
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
                      <div className="mt-[2.5rem] hidden max-md:block ">
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
                    {formatCurrencyVND(item?.product_price ?? '0')}
                  </div>
                </div>
                <div className="amount-product">
                  <InputChangeAmount defaultValue={item?.quantity} />
                </div>
                <div className="total-product ">
                  {item?.product_price && item?.quantity && (
                    <div className="text-[1.125rem] not-italic font-bold leading-[1.6875rem]">
                      {formatCurrencyVND(
                        (
                          parseInt(item.product_price, 10) * item.quantity
                        ).toString()
                      )}
                    </div>
                  )}
                </div>
              </div>
              <hr />
            </div>
          ))}
      </div>
      <div className="flex justify-between max-md:mt-[2rem]">
        <button
          type="button"
          onClick={() =>
            dataProps === undefined || dataProps?.length === 0
              ? handleDeleteProductLocalStorage()
              : handleDeleteProductAPI()
          }
          className={`${
            listIdSelected.length === 0 ? 'cursor-not-allowed' : undefined
          }  ${listIdSelected.length === 0 ? 'bg-[#D9D9D9]' : 'bg-white'} ${
            listIdSelected.length === 0 ? 'text-[#00000040]' : 'text-black'
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
          <Link
            href="/cua-hang"
            className="ml-[1rem] mt-[1.25rem] rounded-[0.5rem] px-[2rem] py-[0.75rem] bg-[#55D5D2] text-white text-[0.875rem] not-italic font-bold leading-[1.5rem] max-md:text-[2.8rem] max-md:leading-[6.4rem]"
          >
            Tiếp tục mua hàng
          </Link>
        </div>
      </div>
    </>
  );
}
