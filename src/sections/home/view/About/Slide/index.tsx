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
              src={info?.image}
              alt=""
              width={612}
              height={488}
              className="w-full h-full object-cover max-sm:rounded-[4rem]"
            />
            <div className="absolute bottom-0 w-full">
              <div className="p-8 md:p-3 bg-black bg-opacity-30 rounded-[20px] backdrop-blur-[25px] m-3">
                <h4 className="text-left text-white text-[3.73333rem] md:text-2xl font-black uppercase">
                  {info?.title}
                </h4>
                <div className="text-white flex justify-between text-[3.2rem] md:text-[2.5rem] md:text-lg font-normal">
                  {info?.location}
                  <div className="hidden md:block">
                    <ICArrowTopRightActive width={30} height={30} stroke='#fff' fill='#fff' />
                  </div>
                  <div className="block md:hidden p-[1.5rem] bg-white rounded-full rotate-45">
                    <ICArrowTopRightActive width={30} height={30} stroke='#F58F5D' fill='#F58F5D'/>
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
