import React, { useEffect, useState } from 'react';
import { ArrowTopRight, ArrowTopRightActive } from '@/app/icons';
import Image from 'next/image';
import { IItemProduct, IProductVariantItem } from '@/types/detail-product';
import { formatCurrencyVND } from '@/ultils/format-price';
import Link from 'next/link';

interface IProps {
  item?: {
    item_product: IItemProduct;
    product_variant: IProductVariantItem[];
  };
  heightImage?: number;
  heightImageMobile?: number;
}

function ItemProduct(props: IProps) {
  const { item, heightImage, heightImageMobile } = props;
  const [heightSlider, setHeightSlider] = useState<number>(20.375);

  useEffect(() => {
    if (window.innerWidth < 767) {
      setHeightSlider(heightImageMobile ?? 40);
    } else setHeightSlider(heightImage ?? 20.375);
  }, []);

  return (
    <div className="item-slider-product rounded-2xl overflow-hidden  cursor-pointer relative max-md:mb-[2rem]">
      <div
        style={{
          height: `${heightSlider}rem`,
        }}
        className="w-full overflow-hidden"
      >
        <Image
          width={122}
          height={222}
          className="image-item-slide rounded-2xl w-full h-full object-cover bg-slate-500 max-md:rounded-[1.5rem]"
          src={item?.item_product.featuredImage ?? '/img/no_image.jpg'}
          alt=""
        />
      </div>
      <div className="relative z-2  -mt-[5.1rem] z-9 left-0 right-0 w-full box-slide max-md:h-[30.5rem] max-md:-mt-[15.1rem]">
        <div className="flex ml-[1rem] mb-[0.9rem]">
          {/* show in PC */}
          <div className="max-md:hidden lg:mb-mb-[0.75rem] bg-[#CAF2F1] h-[1.25rem] border-[#C5C5C5] border-[1px] rounded-[2.5rem] items-center w-[4.875rem] max-md:h-[1.0625rem]  flex justify-center">
            {item?.item_product?.category && (
              <p className="text-[0.75rem] text-[#454545] font-bold leading-[0.9rem] text-center">
                {item?.item_product?.category[0].name ?? 'null'}
              </p>
            )}
          </div>

          {/* Show in Mobile */}
          <div className="hidden max-md:block bg-[#CAF2F1] border-[#C5C5C5] border-[1px] rounded-[2.5rem] items-center mb-[0.62rem] flex justify-center w-fit">
            {item?.item_product?.category && (
              <p className="text-[2.66667rem] text-[#454545] font-bold py-[0.2rem] px-[1.6rem] text-center items-center">
                {item?.item_product?.category[0].name ?? 'null'}
              </p>
            )}
          </div>

          {/* hide in mobile */}
          <div className="lg:mb-mb-[0.75rem] bg-[#F58F5D] h-[1.25rem] flex items-center justify-center border-[#C5C5C5] border-[1px] rounded-[2.5rem] w-[6.375rem] ml-[0.25rem] max-md:hidden">
            <p className="text-[0.75rem] text-white font-bold leading-[0.9rem] text-center mb-0">
              Siêu Sale 10.10
            </p>
          </div>
        </div>
        <div className="relative p-[1rem] rounded-2xl bg-[#FFF] box-slide max-md:p-[2.13rem] max-md:rounded-[3.2rem] max-md:p-[0.5rem]">
          <div className="h-[2.4rem] max-md:h-[10.45334rem] mb-[0.5rem]">
            <span className="text-[1rem] mb-[0.25rem] text-[#454545] font-[850] text-truncate line-clamp-2 leading-[1.2rem] max-md:text-[3.73333rem] max-md:leading-[5.22667rem]">
              {item?.item_product?.name}
            </span>
          </div>
          <div className="flex justify-between mt-[0.25rem] mb-[0.75rem] max-md:flex-row-reverse">
            <div className="flex items-center h-[1rem] max-md:h-[3.2rem]">
              {item?.product_variant &&
                item?.product_variant.map(
                  (item: any, index: number) =>
                    index <= 2 && (
                      <div
                        key={index}
                        style={{ background: item.attributes.color }}
                        className="h-[1rem] w-[1rem] rounded-full mr-[0.31rem] max-md:h-[3.2rem] max-md:w-[3.2rem]"
                      />
                    )
                )}

              {item?.product_variant && item?.product_variant.length > 4 && (
                <div
                  style={{ background: '#A9A9A9' }}
                  className="h-[1rem] w-[1rem] rounded-full mr-[0.31rem] flex justify-center items-center text-[0.625rem] leading-[0.75rem] font-bold not-italic max-md:h-[3.2rem] max-md:w-[3.2rem] max-md:text-[2.13333rem] max-md:leading-[2.56rem]"
                >
                  +{item?.product_variant.length - 4}
                </div>
              )}
            </div>
            <span className="line-through max-md:text-[2.66667rem]">
              {item?.item_product?.sale_price !== 0 &&
                formatCurrencyVND(item?.item_product?.sale_price.toString())}
            </span>
          </div>

          {/* button show in PC */}
          <Link href={`/detail/${item?.item_product.id}`}>
            <div className="max-md:hidden bg-[#55D5D2] price-product-slide flex justify-between items-center px-[1.25rem] py-[0.5rem] rounded-[3.125rem] ">
              <p className="text-[1.5rem] font-[850] text-[#fff] leading-[1.8rem] ">
                {item?.item_product?.price &&
                  formatCurrencyVND(item?.item_product?.price.toString())}
              </p>
              <div className="arrow-peoduct-slide pl-[0.5rem] text-[#fff]">
                <ArrowTopRight />
              </div>
            </div>
          </Link>

          {/* button show in mobile */}

          <Link href={`/detail/${item?.item_product.id}`}>
            <div className=" hidden max-md:flex price-product-slide justify-between items-center rounded-[10.66667rem] py-[1.6rem] px-[3.2rem] mt-[2rem] rounded-[2.5rem] border-[1px] border-[#55D5D2]">
              <p className="text-[3.73333rem] font-[850] leading-[4.85333rem] text-[#55D5D2]">
                {item?.item_product?.price &&
                  formatCurrencyVND(item?.item_product?.price.toString())}
              </p>
              <div className="arrow-peoduct-slide p-[0.5rem]">
                <ArrowTopRightActive />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ItemProduct;
