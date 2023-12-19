'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { ArrowSlideLeft, ArrowSlideRight } from '@/app/icons';
import Item from './Item';
import './style.css';

export interface numberArrow {
  number: number;
  data: any[];
}

const SlideProduct: React.FC<numberArrow> = ({ number, data }) => {
  // console.log("data", data ? data[0]?.product_variant : []);

  return (
    <div className="swiper-detail-product h-full relative">
      {/* <div>{JSON.stringify(data)}</div> */}
      <Swiper
        spaceBetween={32}
        loop
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
          767: {
            slidesPerView: 3,
          },
        }}
        navigation={{
          prevEl: `.prev-${data?.length}`,
          nextEl: `.next-${data?.length}`,
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper pl-[0rem] mx-[1rem] "
      >
        {data &&
          data[0]?.product_variant.map((item) => (
            <SwiperSlide className="slide-hover overflow-hidden  rounded-[1rem]  box-shadown">
              <Item item={item} />
            </SwiperSlide>
          ))}
      </Swiper>
      <div
        className={`prev-${number} max-lg:left-[1.2rem] max-lg:z-[2] top-[50%] -translate-y-1/2 absolute lg:left-[-6.5%] md:left-[-4.5%] md:w-[4.5rem] md:h-[4.5rem] cursor-pointer`}
      >
        <ArrowSlideLeft />
      </div>
      <div
        className={`next-${number} max-lg:right-[-1.2rem] max-lg:z-[2]  top-[50%] -translate-y-1/2 absolute lg:right-[-6.5%]  md:right-[-4.5%] md:w-[4.5rem] md:h-[4.5rem] cursor-pointer`}
      >
        <ArrowSlideRight />
      </div>
    </div>
  );
};

export default SlideProduct;
