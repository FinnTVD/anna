'use client';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {
  ArrowSlideLeft,
  ArrowSlideRight,
  ArrowTopRight,
  ColorPink,
} from '@/app/icons';
import Iterm from './Item';

export interface numberArrow {
  number: number;
}

const SlideProduct: React.FC<numberArrow> = ({ number }) => {
  return (
    <div className="flex relative h-full">
      <Swiper
        spaceBetween={32}
        loop={true}
        breakpoints={{
          1280: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 3,
          },
          910: {
            slidesPerView: 3,
          },
        }}
        navigation={{
          prevEl: `.prev-${number}`,
          nextEl: `.next-${number}`,
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper pl-[0rem] mx-[1rem] "
      >
        <SwiperSlide className="slide-hover rounded-[1rem] box-shadown pb-1rem overflow-hidden">
          <Iterm />
        </SwiperSlide>
        <SwiperSlide className="slide-hover overflow-hidden  rounded-[1rem]  box-shadown">
          <Iterm />
        </SwiperSlide>
        <SwiperSlide className="slide-hover overflow-hidden  rounded-[1rem]  box-shadown">
          <Iterm />
        </SwiperSlide>
        <SwiperSlide className="slide-hover overflow-hidden  rounded-[1rem]  box-shadown">
          <Iterm />
        </SwiperSlide>
        <SwiperSlide className="slide-hover overflow-hidden  rounded-[1rem]  box-shadown">
          <Iterm />
        </SwiperSlide>
        <SwiperSlide className="slide-hover overflow-hidden  rounded-[1rem]  box-shadown">
          <Iterm />
        </SwiperSlide>
        <SwiperSlide className="slide-hover overflow-hidden  rounded-[1rem]  box-shadown">
          <Iterm />
        </SwiperSlide>
      </Swiper>
      <div
        className={`prev-${number} max-lg:left-[1.2rem] max-lg:z-[2] top-[30%] absolute lg:left-[-6.5%] md:left-[-4.5%] md:w-[4.5rem] md:h-[4.5rem] cursor-pointer`}
      >
        <ArrowSlideLeft />
      </div>
      <div
        className={`next-${number} max-lg:right-[-1.2rem] max-lg:z-[2]  top-[30%] absolute lg:right-[-6.5%]  md:right-[-4.5%] md:w-[4.5rem] md:h-[4.5rem] cursor-pointer`}
      >
        <ArrowSlideRight />
      </div>
    </div>
  );
};

export default SlideProduct;
