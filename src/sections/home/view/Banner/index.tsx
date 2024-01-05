'use client';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import Image from 'next/image';
import 'swiper/css';
import { Pagination } from 'swiper/modules';

interface IpropBanner {
  dataBanner: any;
}
function BannerHome({ dataBanner }: IpropBanner) {
  return (
    <div>
      <div className="hidden sm:block">
        <Swiper watchSlidesProgress slidesPerView={1} loop className="sm:h-fit">
          {dataBanner?.map((valueBanner: any, index: number) => (
            <SwiperSlide key={index}>
              <Image
                src={valueBanner?.url}
                alt=""
                quality={80}
                width={1920}
                height={848}
                className="w-full object-cover h-[65rem] md:h-[53rem]"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="block sm:hidden">
      <Swiper
        watchSlidesProgress
        slidesPerView={1}
        loop
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="sm:h-fit mySwiper-action">
        {dataBanner?.map((valueBanner: any, index: number) => (
          <SwiperSlide key={index}>
            <Image
              src={valueBanner?.url}
              alt=""
              quality={80}
              width={1920}
              height={848}
              className="w-full object-cover h-[65rem] md:h-[53rem]"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </div>
  );
}

export default BannerHome;
