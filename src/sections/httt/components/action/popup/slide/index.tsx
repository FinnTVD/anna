import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';
import { Autoplay } from 'swiper/modules';
import ActionItemSlide from '@/sections/httt/components/action/popup/slide/Item';

interface IProps {
  dir: string
}
const SlideAction = ({dir}: IProps) => {
  return (
      <Swiper
      autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={5000}
        loop
        direction={'vertical'}
        breakpoints={{
          0: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 2,
          },
        }}
        pagination={{
          clickable: true,
        }}
        dir={dir}
        modules={[Autoplay]}
        className="mySwiperAction max-h-[187rem] md:max-h-[54.87rem]"
      >
        <SwiperSlide>
          <ActionItemSlide 
           img={'/img/httt/story2.png'}
            des="Anna tặng xuất học bổng gieo mầm ước mơ cho những em nhỏ vùng cao"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ActionItemSlide 
           img={'/img/httt/story2.png'}
            des="Anna tặng xuất học bổng gieo mầm ước mơ cho những em nhỏ vùng cao"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ActionItemSlide 
           img={'/img/httt/story2.png'}
            des="Anna tặng xuất học bổng gieo mầm ước mơ cho những em nhỏ vùng cao"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ActionItemSlide 
           img={'/img/httt/story2.png'}
            des="Anna tặng xuất học bổng gieo mầm ước mơ cho những em nhỏ vùng cao"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ActionItemSlide 
           img={'/img/httt/story2.png'}
            des="Anna tặng xuất học bổng gieo mầm ước mơ cho những em nhỏ vùng cao"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ActionItemSlide 
           img={'/img/httt/story2.png'}
            des="Anna tặng xuất học bổng gieo mầm ước mơ cho những em nhỏ vùng cao"
          />
        </SwiperSlide>
      </Swiper>
  );
};

export default SlideAction;
