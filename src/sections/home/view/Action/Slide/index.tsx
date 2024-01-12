'use client';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import Image from 'next/image';
import { Pagination } from 'swiper/modules';
import ICButton from '@/components/Icons/ICButton';

interface IPropItem {
  dataSlider: string[];
}
function SliceAction({ dataSlider }: IPropItem) {
  return (
    <div className="w-full">
      <Swiper
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper-action h-[66.625rem] md:h-[34.625rem]"
      >
        {dataSlider?.map((img: string, index: number) => (
          <SwiperSlide
            key={index}
            className="relative rounded-[8rem] md:rounded-2xl"
          >
            <Image
              src={img}
              alt=""
              width={673}
              height={504}
              className="w-full h-full rounded-[8rem] md:rounded-2xl object-cover"
            />
            <div className="absolute bottom-0 mb-8 right-[2.5rem] md:right-[0.5rem] cursor-pointer">
              <ICButton />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
export default SliceAction;
