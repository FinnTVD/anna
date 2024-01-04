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

interface ItemSlice {
  image: string;
  title: string;
  location: string;
}
interface IpropSlideAbout {
  dataInfo: ItemSlice[];
}
function SliceAbout({ dataInfo }: IpropSlideAbout) {
  return (
    <div className="w-full">
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper-about "
      >
        {dataInfo?.map((info: ItemSlice, index: number) => (
          <SwiperSlide
            className="relative rounded-[4rem] md:rounded-2xl"
            key={index}
          >
            <Image
              src={'/img/home/q12.jpg'}
              alt=""
              width={612}
              height={488}
              className=" w-full h-full object-fill max-sm:rounded-[4rem] lg:rounded-[1.25rem] border-[6px] border-solid border-[#E6F9F8]"
            />
            <div className="absolute bottom-0 w-full p-[6px]">
              <div className="p-8 md:p-3 bg-black/30 rounded-[1rem] backdrop-blur-[12.5px] lg:py-[1.13rem] lg:pl-[1.31rem] lg:pr-[1.94rem]">
                <h4 className="text-left text-white text-[3.73333rem] md:text-2xl lg:text-[1.5rem] font-black uppercase leading-[1.2]">
                  {info?.title}
                </h4>
                <div className="text-white flex justify-between lg:mt-[0.12rem]">
                  <p className='text-[3.2rem] md:text-[2.5rem] md:text-lg lg:text-[1.125rem] leading-[1.4] font-normal lg:w-[23.5625rem]'>{info?.location}</p>
                  <div className="hidden md:block">
                    <ICArrowTopRightActive
                      width={30}
                      height={30}
                      stroke="#fff"
                      fill="#fff"
                    />
                  </div>
                  <div className="block md:hidden p-[1.5rem] bg-white rounded-full rotate-45">
                    <ICArrowTopRightActive
                      width={30}
                      height={30}
                      stroke="#F58F5D"
                      fill="#F58F5D"
                    />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
export default SliceAbout;
