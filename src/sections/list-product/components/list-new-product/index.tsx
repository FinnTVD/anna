'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import ItemProduct from '@/sections/product/components/slide/ItemProduct';
import { ArrowSlideLeft } from '@/components/Icons/ICArrowSlideLeft';
import { ArrowSlideRight } from '@/components/Icons/ICArrowSlideRight';

export default function ListNewProduct() {
  return (
    <div className="swiper-list-new-product w-full h-full relative">
      <Swiper
        // autoplay={{
        //   delay: 2000,
        //   disableOnInteraction: false,
        // }}
        spaceBetween={32}
        loop
        breakpoints={{
          1280: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 3,
          },
          910: {
            slidesPerView: 3,
          },
          767: {
            slidesPerView: 3,
          },
        }}
        navigation={{
          prevEl: `.prev-${1}`,
          nextEl: `.next-${1}`,
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper pl-[0rem] mx-[1rem] "
      >
        <SwiperSlide className="slide-hover overflow-hidden  rounded-[1rem]  box-shadown">
          <ItemProduct height={23} />
        </SwiperSlide>
        <SwiperSlide className="slide-hover overflow-hidden  rounded-[1rem]  box-shadown">
          <ItemProduct height={23} />
        </SwiperSlide>
        <SwiperSlide className="slide-hover overflow-hidden  rounded-[1rem]  box-shadown">
          <ItemProduct height={23} />
        </SwiperSlide>
        <SwiperSlide className="slide-hover overflow-hidden  rounded-[1rem]  box-shadown">
          <ItemProduct height={23} />
        </SwiperSlide>
        <SwiperSlide className="slide-hover overflow-hidden  rounded-[1rem]  box-shadown">
          <ItemProduct height={23} />
        </SwiperSlide>
        <SwiperSlide className="slide-hover overflow-hidden  rounded-[1rem]  box-shadown">
          <ItemProduct height={23} />
        </SwiperSlide>
      </Swiper>
      <div
        className={`prev-${1} max-lg:left-[1.2rem] max-lg:z-[2] top-[50%] -translate-y-1/2 absolute lg:left-[-6.5%] md:left-[-4.5%] md:w-[4.5rem] md:h-[4.5rem] cursor-pointer`}
      >
        <ArrowSlideLeft />
      </div>
      <div
        className={`next-${1} max-lg:right-[-1.2rem] max-lg:z-[2]  top-[50%] -translate-y-1/2 absolute lg:right-[-6.5%]  md:right-[-4.5%] md:w-[4.5rem] md:h-[4.5rem] cursor-pointer`}
      >
        <ArrowSlideRight />
      </div>
    </div>
  );
}
