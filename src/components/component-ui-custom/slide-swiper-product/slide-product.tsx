'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './style.css';
import { ArrowSlideLeft } from '@/components/Icons/ICArrowSlideLeft';
import { ArrowSlideRight } from '@/components/Icons/ICArrowSlideRight';
import ItemProduct from '../item-product/ItemProduct';

export interface IProps {
  keySlide: string;
  data?: any[];
  spaceBetween?: number;
  breakPoint?: {
    PerView1280?: number;
    PerView1024?: number;
    PerView910?: number;
    PerView767?: number;
  };
  heightImage?: number;
}

function SlideProductComponent(props: IProps) {
  const { keySlide, data, spaceBetween, breakPoint, heightImage } = props;
  // console.log("data", data ? data[0]?.product_variant : []);

  return (
    <div className="swiper-detail-product h-full relative">
      <Swiper
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        spaceBetween={spaceBetween ?? 32}
        loop
        breakpoints={{
          1280: {
            slidesPerView: breakPoint?.PerView1280 ?? 4,
          },
          1024: {
            slidesPerView: breakPoint?.PerView1024 ?? 3,
          },
          910: {
            slidesPerView: breakPoint?.PerView910 ?? 3,
          },
          767: {
            slidesPerView: breakPoint?.PerView767 ?? 3,
          },
        }}
        navigation={{
          prevEl: `.prev-${keySlide}`,
          nextEl: `.next-${keySlide}`,
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper pl-[0rem] mx-[1rem] "
      >
        {/* {data &&
          data[0]?.product_variant.map((item: any, index: number) => (
            <SwiperSlide key={index} className="slide-hover overflow-hidden  rounded-[1rem]  box-shadown">
              <ItemProduct item={item} />
            </SwiperSlide>
          ))} */}
        <SwiperSlide className="slide-hover overflow-hidden  rounded-[1rem]  box-shadown">
          <ItemProduct heightImage={heightImage} />
        </SwiperSlide>
        <SwiperSlide className="slide-hover overflow-hidden  rounded-[1rem]  box-shadown">
          <ItemProduct heightImage={heightImage} />
        </SwiperSlide>
        <SwiperSlide className="slide-hover overflow-hidden  rounded-[1rem]  box-shadown">
          <ItemProduct heightImage={heightImage} />
        </SwiperSlide>
        <SwiperSlide className="slide-hover overflow-hidden  rounded-[1rem]  box-shadown">
          <ItemProduct heightImage={heightImage} />
        </SwiperSlide>
        <SwiperSlide className="slide-hover overflow-hidden  rounded-[1rem]  box-shadown">
          <ItemProduct heightImage={heightImage} />
        </SwiperSlide>
        <SwiperSlide className="slide-hover overflow-hidden  rounded-[1rem]  box-shadown">
          <ItemProduct heightImage={heightImage} />
        </SwiperSlide>
        <SwiperSlide className="slide-hover overflow-hidden  rounded-[1rem]  box-shadown">
          <ItemProduct heightImage={heightImage} />
        </SwiperSlide>
        <SwiperSlide className="slide-hover overflow-hidden  rounded-[1rem]  box-shadown">
          <ItemProduct heightImage={heightImage} />
        </SwiperSlide>
      </Swiper>
      <div
        className={`prev-${keySlide} max-lg:left-[1.2rem] max-lg:z-[2] top-[50%] -translate-y-1/2 absolute lg:left-[-6.5%] md:left-[-4.5%] md:w-[4.5rem] md:h-[4.5rem] cursor-pointer`}
      >
        <ArrowSlideLeft />
      </div>
      <div
        className={`next-${keySlide} max-lg:right-[-1.2rem] max-lg:z-[2]  top-[50%] -translate-y-1/2 absolute lg:right-[-6.5%]  md:right-[-4.5%] md:w-[4.5rem] md:h-[4.5rem] cursor-pointer`}
      >
        <ArrowSlideRight />
      </div>
    </div>
  );
}

export default SlideProductComponent;
