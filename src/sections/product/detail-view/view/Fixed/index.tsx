import Image from 'next/image';
import { IDetailProductRes } from '@/types/types-general';
import React from 'react';
import { formatCurrencyVND } from '@/ultils/format-price';

interface IProps {
  dataInit?: IDetailProductRes;
  listColorProduct?: any;
  handleAddToCart: (data: any, quantity: any) => void;
}

export function Fixed(props: IProps) {
  const { dataInit, listColorProduct, handleAddToCart } = props;
  return (
    <div
      className="flex justify-between items-center
    "
    >
      <div className="left flex items-center">
        <Image
          width={200}
          height={200}
          className="w-[7.5rem] h-[7.5rem] mr-[2rem] object-cover"
          src={dataInit?.featuredImage ?? '/img/no_image.jpg'}
          alt=""
        />
        <div className="flex flex-col items-center h-[7.5rem]">
          {dataInit?.name && (
            <p className="text-[1rem] font-extrabold leading-[1.4625rem] mb-[0.5rem]">
              {dataInit?.name}
            </p>
          )}

          {dataInit?.sale_price && (
            <p className="text-[1rem] not-italic leading-[1.3rem] font-bold line-through">
              {formatCurrencyVND(dataInit?.sale_price.toString())}
            </p>
          )}

          {listColorProduct && (
            <ul className="max-lg:mt-[1.06rem] max-lg:mb-[2.31rem] list-color flex mt-[2.06rem] mb-[3.31rem] max-md:hidden">
              {listColorProduct.map((item: any, index: number) => (
                // <Link href={{pathname: "/detail/[id]",query: { id: item.id },}}>
                <li
                  // role="button"
                  key={index}
                >
                  <div
                    style={{
                      backgroundColor: item.attributes.color,
                      // borderColor:
                      //   item.attributes.color === dataProductSubmit.color
                      //     ? '#55D5D2'
                      //     : item.attributes.color,
                    }}
                    role="button"
                    // onClick={() => handleChangeColor(item)}
                    className="h-[1.875rem] w-[1.875rem] rounded-full border-2 mr-[1rem]"
                  />
                </li>
                // </Link>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="right flex items-center">
        <p className="text-[1.875rem] font-extrabold leading-[2.25rem] text-[#55D5D2] mr-[3.25rem]">
          {dataInit?.price && formatCurrencyVND(dataInit?.price.toString())}
        </p>
        <button
          type="button"
          onClick={() => handleAddToCart(dataInit, 1)}
          className="py-[0.94rem] px-[1.88rem] bg-[#55D5D2] rounded-[3.125rem]"
        >
          <span className="text-[1rem] leading-[1.5rem] font-[800] text-white">
            Thêm vào giỏ hàng
          </span>
        </button>
      </div>
    </div>
  );
}
