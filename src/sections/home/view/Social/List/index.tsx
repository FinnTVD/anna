'use client';

import React from 'react';
// Import Swiper React components

// Import Swiper styles
import 'swiper/css';
import ItemSocial from '@/sections/home/view/Social/List/Item';
import ICFacebookFooter from '@/components/Icons/ICFacebookFooter';
import ICYoutube from '@/components/Icons/ICYoutube';
import ICTiktokFooter from '@/components/Icons/ICTiktokFooter';
import ICInstagramFooter from '@/components/Icons/ICInstagramFooter';
import IMGYoutube from '@/assets/images/youtube.png';
import IMGFacebook from '@/assets/images/facebook.png';
import IMGIg from '@/assets/images/ig.png';
import IMGTiktok from '@/assets/images/tiktok.png';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

function ListSocial() {
  return (
    <div>
      <Swiper
        // autoplay={{
        //   delay: 0,
        //   disableOnInteraction: false,
        // }}
        // speed={6000}
        breakpoints={{
          0: {
            slidesPerView: 2,
          },
          767: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        loop
        modules={[Navigation, Autoplay]}
        className="myTextEvent pl-[0rem] mx-[1rem]"
      >
        <SwiperSlide className="text-[#CAF2F1] text-[8rem] md:text-[4.25rem] font-black">
          <ItemSocial
            img={IMGFacebook}
            icon={<ICFacebookFooter width={100} height={100} />}
            social="Facebook"
            infor="@kinhmatanna"
          />
        </SwiperSlide>
        <SwiperSlide className="text-[#CAF2F1] text-[8rem] md:text-[4.25rem] font-black">
          <ItemSocial
            img={IMGTiktok}
            icon={<ICTiktokFooter width={100} height={100} />}
            social="Tiktok"
            infor="@kinhmatanna"
          />
        </SwiperSlide>
        <SwiperSlide className="text-[#CAF2F1] text-[8rem] md:text-[4.25rem] font-black">
          <ItemSocial
            img={IMGIg}
            icon={<ICInstagramFooter width={100} height={100} />}
            social="Instagram"
            infor="@kinhmatanna"
          />
        </SwiperSlide>
        <SwiperSlide className="text-[#CAF2F1] text-[8rem] md:text-[4.25rem] font-black">
          <ItemSocial
            img={IMGTiktok}
            icon={<ICTiktokFooter width={100} height={100} />}
            social="Tiktok"
            infor="@kinhmatanna"
          />
        </SwiperSlide>
        <SwiperSlide className="text-[#CAF2F1] text-[8rem] md:text-[4.25rem] font-black">
          <ItemSocial
            img={IMGYoutube}
            icon={<ICYoutube />}
            social="Youtube"
            infor="@kinhmatanna"
          />
        </SwiperSlide>
        <SwiperSlide className="text-[#CAF2F1] text-[8rem] md:text-[4.25rem] font-black">
          <ItemSocial
            img={IMGTiktok}
            icon={<ICTiktokFooter width={100} height={100} stroke="#55D5D2" />}
            social="Tiktok"
            infor="@kinhmatanna"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default ListSocial;
