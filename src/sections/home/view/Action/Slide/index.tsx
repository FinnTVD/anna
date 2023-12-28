'use client';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import Image from 'next/image';
import { Pagination } from 'swiper/modules';
import { ICArrowTopRightActive } from '@/components/Icons/ICArrowTopRightActive';

interface IPropItem {
  dataSlider: string[];
}
function SliceAction({ dataSlider }: IPropItem) {
  return (
    <div className="w-full">
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper-action h-[66.625rem] md:h-[35.625rem]"
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
            <div className="absolute bottom-0 mb-8 right-[2.5rem] md:right-[0.5rem]">
              <div className="flex justify-between items-center pl-[5rem] md:pl-[2.75rem] pr-1 py-[1.25rem] md:py-[0.25rem] bg-white hover:bg-orange-400 rounded-[26rem] md:rounded-[3.125rem] border-[1px] border-[#55D5D2]">
                <p className="text-[4rem] md:text-[1.5rem] font-[850] text-[#55D5D2] pr-2">
                  Xem dự án
                </p>
                <div className="arrow-about-slide p-[0.5rem] rounded-[50px] justify-start items-center gap-2.5 inline-flex">
                  <ICArrowTopRightActive width={30} height={30} />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
export default SliceAction;
