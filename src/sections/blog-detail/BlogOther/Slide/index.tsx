'use client';

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import ICFacebookFooter from '@/components/Icons/ICFacebookFooter';
import ICYoutube from '@/components/Icons/ICYoutube';
import ICTiktokFooter from '@/components/Icons/ICTiktokFooter';
import ICInstagramFooter from '@/components/Icons/ICInstagramFooter';
import IMGYoutube from '@/assets/images/youtube.png';
import IMGFacebook from '@/assets/images/facebook.png';
import IMGIg from '@/assets/images/ig.png';
import IMGTiktok from '@/assets/images/tiktok.png';
import ItemBlog from '@/sections/blog-detail/BlogOther/Slide/Item';
import { Autoplay } from 'swiper/modules';

function SliceBlogOther() {
  return (
    <div>
      <Swiper
        watchSlidesProgress
        loop={true}
        autoplay={{
          delay: 3000,
        }}
        breakpoints={{
          414: {
            slidesPerView: 1,
          },
          767: {
            slidesPerView: 3,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <ItemBlog />
        </SwiperSlide>
        <SwiperSlide>
          <ItemBlog />
        </SwiperSlide>
        <SwiperSlide>
          <ItemBlog />
        </SwiperSlide>
        <SwiperSlide>
          <ItemBlog />
        </SwiperSlide>
        <SwiperSlide>
          <ItemBlog />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default SliceBlogOther;
