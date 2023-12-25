'use client';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import Image from 'next/image';
import 'swiper/css';

interface IpropBanner {
  dataBanner: any;
}
function BannerHome({ dataBanner }: IpropBanner) {
  return (
    <div>
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
  );
}

export default BannerHome;
