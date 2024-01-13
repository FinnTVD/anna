'use client';

import ItemStory from '@/sections/httt/components/story/Slide/Item';
// Import Swiper React components

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

function ListStory() {
  return (
    <div>
      <Swiper
       
        breakpoints={{
          0: {
            slidesPerView: 1.2,
          },
          767: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3.2,
          },
        }}
        loop
        // modules={[Navigation]}
        className="myJoin pl-[0rem] mx-[1rem]"
      >
        <SwiperSlide className="pr-[1.87rem]">
          <ItemStory
            img={'/img/httt/story1.png'}
            des="Anna tặng xuất học bổng gieo mầm ước mơ cho những em nhỏ vùng cao"
          />
        </SwiperSlide>
        <SwiperSlide className="pr-[1.87rem]">
          <ItemStory
            img={'/img/httt/story2.png'}
            des="Anna tặng xuất học bổng gieo mầm ước mơ cho những em nhỏ vùng cao"
          />
        </SwiperSlide>
        <SwiperSlide className="pr-[1.87rem]">
          <ItemStory
            img={'/img/httt/story3.png'}
            des="Anna tặng xuất học bổng gieo mầm ước mơ cho những em nhỏ vùng cao"
          />
        </SwiperSlide>
        <SwiperSlide className="pr-[1.87rem]">
          <ItemStory
            img={'/img/httt/story2.png'}
            des="Anna tặng xuất học bổng gieo mầm ước mơ cho những em nhỏ vùng cao"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default ListStory;
