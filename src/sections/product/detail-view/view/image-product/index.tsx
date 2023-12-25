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

interface IProps {
  dataInit?: IDetailProductRes;
}

function SlideProductMobile() {
  return (
    <>
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
        <SwiperSlide className="w-full">
          <Image
            width={93}
            height={91}
            className="h-full w-full object-cover  max-md:min-w-full"
            src="https://images.unsplash.com/photo-1519638399535-1b036603ac77?q=80&w=3131&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="">
          <Image
            width={93}
            height={91}
            className="h-full w-full object-cover  max-md:min-w-full"
            src="https://images.unsplash.com/photo-1519638399535-1b036603ac77?q=80&w=3131&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
      <div className="swiper-pagination" />
    </>
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
        <div className="w-full  h-[38.8125rem] relative max-md:hidden">
          <Image
            fill
            objectFit="cover"
            className="image-current w-full h-full object-cover "
            src={itemImagePreview ?? '/img/no_image.jpg'}
            alt=""
          />
        </div>
        <div className="hidden max-md:block h-full w-full">
          <SlideProductMobile />
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
