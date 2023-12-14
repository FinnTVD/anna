'use client';

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
import { IDetailProductRes } from '@/types/detail-product';

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
          <img
            className="h-full w-full object-cover  max-sm:min-w-full"
            src="https://images.unsplash.com/photo-1519638399535-1b036603ac77?q=80&w=3131&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </SwiperSlide>
        <SwiperSlide className="">
          <img
            className="h-full w-full object-cover "
            src="https://images.unsplash.com/photo-1519638399535-1b036603ac77?q=80&w=3131&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </SwiperSlide>
      </Swiper>
      <div className="swiper-pagination" />
    </>
  );
}

function ImageProduct(props: IProps) {
  const { dataInit } = props;

  console.log('dataInit', dataInit);

  const [imageView, setImageView] = useState('');
  const handleChangeImage = (img: string) => {
    console.log(img);
    setImageView(img);
  };
  return (
    <div className="left-detail w-[47rem] max-lg:w-[40rem]  max-md:w-[52rem] max-md:h-[52rem] flex-col justify-center max-sm:block max-sm:w-full max-sm:h-[21.5rem] max-sm:mb-[1.5rem]">
      <div className="max-sm:h-full">
        <div className="w-full  h-[38.8125rem] relative max-sm:hidden">
          <Image
            fill
            objectFit="cover"
            className="image-current w-full h-full object-cover "
            src="/img/no_image.jpg"
            alt=""
          />
        </div>
        <div className="hidden max-md:block h-full w-full">
          <SlideProductMobile />
        </div>
      </div>
      <ul className="flex min-w-full max-lg:h-[7.5rem] mt-[1rem] justify-between h-[12.15rem] max-sm:hidden">
        <li className=" mr-[1rem]">
          <img
            // onClick={(e) => handleChangeImage(e)}
            className="flex h-full object-cover"
            src="/img/no_image.jpg"
            alt=""
          />
        </li>
        <li className="mr-[1rem]">
          <img
            // onClick={(e) => handleChangeImage(e)}
            className="flex h-full object-cover"
            src="/img/no_image.jpg"
            alt=""
          />
        </li>
        <li className="mr-[1rem] ">
          <img
            // onClick={(e) => handleChangeImage(e)}
            className="flex h-full object-cover "
            src="/img/no_image.jpg"
            alt=""
          />
        </li>
        <li>
          <img
            // onClick={(e) => handleChangeImage(e)}
            className="flex h-full object-cover "
            src="/img/no_image.jpg"
            alt=""
          />
        </li>
      </ul>
    </div>
  );
}

export default ImageProduct;
