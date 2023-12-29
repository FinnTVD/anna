'use client';

import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import ItemBlog from '@/sections/blog-detail/BlogOther/Slide/Item';
import { Autoplay } from 'swiper/modules';
import { ItemBlogType } from '@/types/types-general';

interface IPropBlogOther {
  listBlogOther: ItemBlogType[];
}
function SliceBlogOther({ listBlogOther }: IPropBlogOther) {
  return (
    <div>
      <Swiper
        watchSlidesProgress
        loop
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
        {listBlogOther?.map((dataBlog: any, index: number) => (
          <SwiperSlide key={index}>
            <ItemBlog dataBlogOther={dataBlog} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SliceBlogOther;