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
import ItemMobileBlogHome from '@/sections/home/view/Blog/SlideMobile/Item';
import Link from 'next/link';
import serviceImg from '@/assets/blogImg/Rectangle719.png';
import { formatDate } from '@/ultils/format-date';
interface IPropItem {
  dataSliderBlog: any[];
}
function SliderMobileBlogHome({ dataSliderBlog }: IPropItem) {
  return (
    <div className="w-full">
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className=" max-w-[93.6rem] ov"
      >
        <SwiperSlide
          className="myBlog"
        >
          
          {dataSliderBlog?.map((blogData: string, index: number) => {
            if (index <= 3) {
              return (
                <div className='w-full'>
                  <ItemMobileBlogHome blog={blogData} index={index}/>
                </div>
              )
            }
          })}
        </SwiperSlide>

      </Swiper>
    </div>
  );
}
export default SliderMobileBlogHome;
