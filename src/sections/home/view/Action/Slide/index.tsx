'use client';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import Image from 'next/image';
import { Pagination } from 'swiper/modules';

const SliceAction = () => {
  return (
    <div className="w-full">
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper-action"
      >
        <SwiperSlide className="relative rounded-2xl">
          <Image src='/img/home/image1836.png' alt='' width={673} height={504} className="w-full h-full rounded-2xl" />
          <div className="absolute bottom-0 w-full h-[127px] mb-8" >
            <div className="p-3 bg-black bg-opacity-30 rounded-[20px] backdrop-blur-[25px] m-3">
              <h4 className="text-left text-white text-2xl font-black uppercase">khai trương cửa hàng mới</h4>
              <div className="text-white text-lg font-normal">Địa chỉ: 37/18 Dọc bún 2 - La Khê - Văn Khê<br />Hà Đông - Hà Nội</div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative rounded-2xl">
          <Image src='/img/home/image1814.png' alt='' width={673} height={504} className="w-full h-full rounded-2xl" />
          <div className="absolute bottom-0 w-full h-[127px] mb-8" >
            <div className="p-3 bg-black bg-opacity-30 rounded-[20px] backdrop-blur-[25px] m-3">
              <h4 className="text-left text-white text-2xl font-black uppercase">khai trương cửa hàng mới</h4>
              <div className="text-white text-lg font-normal">Địa chỉ: 37/18 Dọc bún 2 - La Khê - Văn Khê<br />Hà Đông - Hà Nội</div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative rounded-2xl">
          <Image src='/img/home/image1836.png' alt='' width={673} height={504} className="w-full h-full rounded-2xl" />
          <div className="absolute bottom-0 w-full h-[127px] mb-8" >
            <div className="p-3 bg-black bg-opacity-30 rounded-[20px] backdrop-blur-[25px] m-3">
              <h4 className="text-left text-white text-2xl font-black uppercase">khai trương cửa hàng mới</h4>
              <div className="text-white text-lg font-normal">Địa chỉ: 37/18 Dọc bún 2 - La Khê - Văn Khê<br />Hà Đông - Hà Nội</div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative rounded-2xl">
          <Image src='/img/home/image1814.png' alt='' width={673} height={504} className="w-full h-full rounded-2xl" />
          <div className="absolute bottom-0 w-full h-[127px] mb-8" >
            <div className="p-3 bg-black bg-opacity-30 rounded-[20px] backdrop-blur-[25px] m-3">
              <h4 className="text-left text-white text-2xl font-black uppercase">khai trương cửa hàng mới</h4>
              <div className="text-white text-lg font-normal">Địa chỉ: 37/18 Dọc bún 2 - La Khê - Văn Khê<br />Hà Đông - Hà Nội</div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative rounded-2xl">
          <Image src='/img/home/image1836.png' alt='' width={673} height={504} className="w-full h-full rounded-2xl" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
export default SliceAction