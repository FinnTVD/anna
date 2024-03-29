'use client';

import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './style.css';
import { ArrowSlideLeft } from '@/components/Icons/ICArrowSlideLeft';
import { ArrowSlideRight } from '@/components/Icons/ICArrowSlideRight';
import ItemProduct from '../item-product/ItemProduct';
import { IItemProduct } from '@/types/types-general';
import map from 'lodash.map';

export interface IProps {
  keySlide: string;
  data?: IItemProduct[];
  spaceBetween?: number;
  spaceBetWeenMobile?: number;
  breakPoint?: {
    PerView1280?: number;
    PerView1024?: number;
    PerView910?: number;
    PerView767?: number;
  };
  heightImage?: number;
  isShowArrow?: boolean;
  typePagination?: 'custom' | 'bullets' | 'fraction' | 'progressbar';
  setProgress?: any;
  left?: boolean;
}

function SlideProductComponent(props: IProps) {
  const {
    keySlide,
    data,
    spaceBetween,
    spaceBetWeenMobile,
    breakPoint,
    heightImage,
    isShowArrow = true,
    typePagination,
    setProgress,
    left,
  } = props;
  const [resSpaceBetweenSlide, setResSpaceBetweenSlide] = useState<number>(32);

  useEffect(() => {
    if (window.innerWidth < 767) {
      setResSpaceBetweenSlide(spaceBetWeenMobile ?? 4);
    } else setResSpaceBetweenSlide(spaceBetween ?? 32);
  }, []);

  const handleSlideChange = (swiper: any) => {
    if (setProgress !== undefined) {
      setProgress(swiper.realIndex);
    }
  };
  return (
    <div className="swiper-detail-product h-full relative w-full">
      <Swiper
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        spaceBetween={resSpaceBetweenSlide}
        loop
        pagination={{
          type: typePagination || 'custom',
        }}
        onSlideChange={handleSlideChange}
        breakpoints={{
          0: {
            slidesPerView: 2,
            spaceBetween: 8,
          },
          767: {
            slidesPerView: 2,
            spaceBetween: 12,
          },
          910: {
            slidesPerView: breakPoint?.PerView910 ?? 3,
          },
          1024: {
            slidesPerView: breakPoint?.PerView1024 ?? 3,
          },
          1280: {
            slidesPerView: breakPoint?.PerView1280 ?? 4,
          },
        }}
        navigation={{
          prevEl: `.prev-${keySlide}`,
          nextEl: `.next-${keySlide}`,
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper pl-[0rem] mx-[1rem] max-md:!h-[66.7rem]"
      >
        {map(data, (item: any, index: number) => (
          <SwiperSlide
            key={index}
            className="slide-hover overflow-hidden rounded-[1rem] box-shadown lg:max-w-[20.375rem] lg:mr-[2rem] lg:last:mr-0"
          >
            <ItemProduct
              item={item}
              heightImage={heightImage}
              keySlide={keySlide}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {isShowArrow && (
        <>
          <div
            className={`prev-${keySlide} ${left ? 'left-0' : 'left-[-5.5%]'} ${
              keySlide === 'flash-sale' ? 'max-md:hidden' : ''
            } max-lg:z-[2] top-[36%] absolute z-20 w-[4.5rem] h-[4.5rem] cursor-pointer max-md:opacity-90 max-md:h-[8rem] max-md:w-[8rem] max-md:left-[-4.5rem]`}
          >
            <ArrowSlideLeft />
          </div>
          <div
            className={`next-${keySlide} ${
              left ? 'right-0' : 'right-[-5.5%]'
            } ${
              keySlide === 'flash-sale' ? 'max-md:hidden' : ''
            } max-lg:z-[2]  top-[36%] absolute z-20 w-[4.5rem] h-[4.5rem] cursor-pointer max-md:opacity-90 max-md:h-[8rem] max-md:w-[8rem] max-md:right-[-4.5rem]`}
          >
            <ArrowSlideRight />
          </div>
        </>
      )}
    </div>
  );
}

export default SlideProductComponent;
