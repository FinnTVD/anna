'use client';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import ItemMobileBlogHome from '@/sections/home/view/Blog/SlideMobile/Item';

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
        className=" max-w-[93.6rem]"
      >
        <SwiperSlide className="myBlog">
          {/* eslint-disable-next-line array-callback-return,consistent-return */}
          {dataSliderBlog?.map((blogData: string, index: number) => {
            if (index <= 3) {
              return (
                <div key={index} className="w-full">
                  <ItemMobileBlogHome blog={blogData} index={index} />
                </div>
              );
            }
          })}
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
export default SliderMobileBlogHome;
