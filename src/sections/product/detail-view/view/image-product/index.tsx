'use client';

import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import { IDetailProductRes } from '@/types/types-general';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import ICArrowRight from '@/components/Icons/ICArrowRight';
import ICArrowLeft from '@/components/Icons/ICArrowLeft';
import ZoomScaleImage from '@/components/component-ui-custom/zoom-scale-image';

interface IProps {
  dataInit?: IDetailProductRes;
}

function SlideProductMobile(props: any) {
  const { listImageProduct } = props;

  return (
    <div>
      {typeof listImageProduct === 'string' ? (
        <Image
          width={93}
          height={91}
          className="h-full w-full object-cover  max-md:min-w-full"
          src={listImageProduct ?? '/img/no_image.jpg'}
          alt=""
        />
      ) : (
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          pagination={{
            el: '.swiper-pagination',
            clickable: true,
          }}
          loop
          modules={[Pagination, Navigation]}
          className="mySwiper h-full rounded-[1rem] overflow-hidden"
        >
          {listImageProduct &&
            listImageProduct.map((item: string, index: number) => (
              <SwiperSlide key={index} className="w-full">
                <Image
                  width={93}
                  height={91}
                  className="h-full w-full object-cover  max-md:min-w-full"
                  src={item ?? '/img/no_image.jpg'}
                  alt=""
                />
              </SwiperSlide>
            ))}
        </Swiper>
      )}
      <div className="swiper-pagination" />
    </div>
  );
}

function ImageProduct(props: IProps) {
  const { dataInit } = props;
  const [itemImagePreview, setItemImagePreview] = useState<string>('');

  const handleChangeImage = (value: string): void => {
    setItemImagePreview(value);
  };

  useEffect(() => {
    setItemImagePreview(dataInit?.featuredImage ?? '');
  }, [dataInit?.featuredImage]);
  return (
    <div className="left-detail w-[47rem] max-lg:w-[40rem]  max-md:w-[52rem] max-md:h-[91.73333rem] flex-col justify-center max-md:block max-md:w-full max-md:h-[21.5rem] max-md:mb-[1.5rem]">
      <div className="max-sm:h-full">
        <div className="max-md:hidden">
          <ZoomScaleImage
            width="47rem"
            height="38.8125rem"
            image={itemImagePreview}
          />
        </div>
        <div className="hidden max-md:block h-full w-full">
          <SlideProductMobile
            listImageProduct={dataInit?.galleryImgs ?? dataInit?.featuredImage}
          />
        </div>
      </div>
      <div className="flex min-w-full max-lg:h-[7.5rem] mt-[1rem] justify-between h-[12.15rem] max-md:hidden">
        <div className="w-full relative">
          {dataInit?.galleryImgs && (
            <Swiper
              slidesPerView={4}
              modules={[Navigation, Pagination]}
              navigation={{
                prevEl: `.prev-${123}`,
                nextEl: `.next-${123}`,
              }}
              spaceBetween={15}
              className="mySwiper"
            >
              {dataInit?.galleryImgs?.map((item: any, index: number) => (
                <SwiperSlide key={index}>
                  <div role="button" onClick={() => handleChangeImage(item)}>
                    <Image
                      width={52}
                      height={52}
                      className="flex h-[12.25rem] w-[12.25rem] object-cover"
                      src={item ?? '/img/no_image.jpg'}
                      alt=""
                    />
                  </div>
                </SwiperSlide>
              ))}

              <div
                className={`prev-${123}] z-10 top-[50%] -translate-y-1/2 left-2 absolute w-[3rem] h-[3rem] bg-white opacity-50 flex justify-center items-center rounded-full cursor-pointer`}
              >
                <ICArrowLeft stroke="#333333" />
              </div>
              <div
                className={`next-${123} z-10  top-[50%] -translate-y-1/2 right-2 absolute w-[3rem] h-[3rem]  bg-white opacity-50 flex justify-center items-center rounded-full cursor-pointer`}
              >
                <ICArrowRight stroke="#333333" />
              </div>
            </Swiper>
          )}
        </div>
      </div>
    </div>
  );
}

export default ImageProduct;
