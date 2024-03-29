import React, { useEffect, useState } from 'react';
import { ArrowTopRight } from '@/app/icons';
import Image from 'next/image';
import { IItemProduct } from '@/types/types-general';
import { formatCurrencyVND } from '@/ultils/format-price';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface IProps {
  item?: IItemProduct;
  heightImage?: number;
  heightImageMobile?: number;
  keySlide?: string;
}

interface IImageItem {
  variation_id?: number;
  image?: string;
}

function ItemProduct(props: IProps) {
  const { item, heightImage, heightImageMobile, keySlide } = props;
  const [heightSlider, setHeightSlider] = useState<number>(20.375);
  const [imageItem, setImageItem] = useState<IImageItem>({
    variation_id: undefined,
    image: '',
  });
  const handleChangeColor = (item: any): void => {
    const tmp = {
      variation_id: item?.variation_id,
      image: item?.image?.full_src,
    };

    setImageItem(tmp);
    // if (tmp?.variation_id === imageItem?.variation_id) {
    //   setImageItem({
    //     variation_id: undefined,
    //     image: item?.featuredImage,
    //   });
    // } else setImageItem(tmp);
  };

  useEffect(() => {
    if (window.innerWidth < 767) {
      setHeightSlider(heightImageMobile ?? 44);
    } else setHeightSlider(heightImage ?? 20.375);
  }, []);

  useEffect(() => {
    setImageItem({ ...imageItem, image: item?.featuredImage });
  }, [item]);

  return (
    <div className="item-slider-product rounded-2xl overflow-hidden  cursor-pointer relative max-md:mb-[2rem]">
      <Link
        href={`/san-pham/${item?.slug?.trim()}`}
        style={{
          height: `${heightSlider}rem`,
        }}
        className="w-full overflow-hidden"
      >
        <Image
          width={326}
          height={326}
          className="image-item-slide rounded-2xl w-full h-[20.56588rem] object-cover bg-slate-500 max-md:rounded-[1.5rem]"
          src={
            imageItem?.image
              ? imageItem?.image.length > 0
                ? imageItem?.image
                : '/img/no_image.jpg'
              : '/img/no_image.jpg'
          }
          alt=""
        />
      </Link>
      <div className="relative z-2  -mt-[5.1rem] z-9 left-0 right-0 w-full box-slide max-md:h-[35.5rem] max-md:-mt-[15.1rem]">
        <div className="flex ml-[1rem] mb-[0.9rem]">
          {/* show in PC */}
          <div className="max-md:hidden lg:mb-mb-[0.75rem] bg-[#CAF2F1] h-[1.25rem] border-[#C5C5C5] border-[1px] rounded-[2.5rem] px-[0.5rem] items-center overflow-hidden w-[5.875rem] max-md:h-[1.0625rem]  flex justify-center">
            {item?.categories && (
              <p className="text-[0.75rem] text-[#454545] font-bold leading-[0.9rem] text-center line-clamp-1">
                {item?.categories[0] ?? 'null'}
              </p>
            )}
          </div>

          {/* Show in Mobile */}
          <div className="hidden max-md:block bg-[#CAF2F1] border-[#C5C5C5] border-[1px] rounded-[2.5rem] items-center mb-[0.62rem] flex justify-center w-fit">
            {item?.categories && (
              <p className="text-[2.66667rem] text-[#454545] font-bold py-[0.2rem] px-[1.6rem] text-center items-center">
                {item?.categories ?? 'null'}
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
        <div className="relative p-[1rem] rounded-2xl bg-[#FFF] box-slide max-md:p-[2.13rem] max-md:rounded-[3.2rem]">
          <div
            className={`${
              keySlide !== 'flash-sale'
                ? 'h-[2.4rem] max-md:h-[10.45334rem]'
                : ''
            } mb-[0.5rem]`}
          >
            <span className="text-[1rem] mb-[0.25rem] text-[#454545] font-extrabold text-truncate line-clamp-2 leading-[1.2rem] max-md:text-[3.73333rem] max-md:leading-[5.22667rem]">
              {item?.name}
            </span>
          </div>
          {keySlide === 'flash-sale' ? (
            <div className="md:flex justify-between lg:mb-[0.5rem]">
              <div className="text-[2.66667rem] md:text-[0.875rem] text-[#6A6A6A] font-bold md:font-extrabold">
                Tiết kiệm được
                {item?.salePrice && item?.salePrice !== 0 && (
                  <span className="text-[#F58F5D] pl-2">
                    {formatCurrencyVND(item?.salePrice.toString())}
                  </span>
                )}
              </div>
              {item?.salePrice && item?.salePrice !== 0 && (
                <span className="line-through max-md:text-[2.66667rem] font-bold">
                  {formatCurrencyVND(item?.salePrice.toString())}
                </span>
              )}
            </div>
          ) : (
            <div className="flex justify-between mt-[0.25rem] mb-[0.75rem] max-md:flex-row-reverse">
              <div className="flex flex-start h-[1rem] max-md:h-[3.2rem]">
                {item?.variations &&
                  item?.variations.map(
                    (item: any, index: number) =>
                      index <= 2 && (
                        <button
                          role="button"
                          onClick={() => handleChangeColor(item)}
                          key={index}
                          style={{
                            background: item.attributes.attribute_color,
                          }}
                          className={cn(
                            'h-[1rem] w-[1rem] rounded-full mr-[0.31rem] max-md:h-[3.2rem] max-md:w-[3.2rem]',
                            item?.variation_id === imageItem.variation_id
                              ? 'border-[2px] border-[#55D5D2]'
                              : ''
                          )}
                        />
                      )
                  )}

                {item?.variations && item?.variations.length > 4 && (
                  <div
                    style={{ background: '#A9A9A9' }}
                    className="h-[1rem] w-[1rem] rounded-full mr-[0.31rem] flex justify-center items-center text-[0.625rem] leading-[0.75rem] font-bold not-italic max-md:h-[3.2rem] max-md:w-[3.2rem] max-md:text-[2.13333rem] max-md:leading-[2.56rem]"
                  >
                    +{item?.variations.length ?? 4 - 4}
                  </div>
                )}
              </div>

              {item?.salePrice && item?.salePrice !== 0 && (
                <span className="line-through max-md:text-[2.66667rem] font-bold">
                  {formatCurrencyVND(item?.salePrice.toString())}
                </span>
              )}
            </div>
          )}
          {/* button show in PC */}
          <Link href={`/san-pham/${item?.slug?.trim()}`}>
            <div className="max-md:hidden bg-[#55D5D2] price-product-slide flex justify-between items-center px-[1.25rem] py-[0.5rem] rounded-[3.125rem] ">
              <p className="text-[1.5rem] font-extrabold text-[#fff] not-italic leading-[1.8rem] h-[1.8rem]">
                {item?.price ? formatCurrencyVND(item?.price.toString()) : ' '}
              </p>
              <div className="arrow-peoduct-slide pl-[0.5rem] text-[#fff]">
                <ArrowTopRight />
              </div>
            </div>
          </Link>

          {/* button show in mobile */}

          <Link href={`/san-pham/${item?.slug?.trim()}`}>
            <div
              className={`hidden max-md:flex price-product-slide justify-between items-center rounded-[10.66667rem] py-[1.6rem] px-[3.2rem] mt-[2rem] ${
                keySlide === 'flash-sale'
                  ? 'bg-[#55D5D2]'
                  : 'border-[1px] border-[#55D5D2]'
              }`}
            >
              <p
                className={`text-[3.73333rem] font-extrabold leading-[4.85333rem] ${
                  keySlide === 'flash-sale' ? 'text-[#fff]' : 'text-[#55D5D2]'
                }`}
              >
                {item?.price && formatCurrencyVND(item?.price.toString())}
              </p>
              <div
                className={`arrow-peoduct-slide p-[0.5rem] ${
                  keySlide === 'flash-sale' ? 'text-[#fff]' : 'text-[#55D5D2]'
                }`}
              >
                <ArrowTopRight />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ItemProduct;
