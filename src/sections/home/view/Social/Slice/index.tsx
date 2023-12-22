'use client';

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import ItemSocial from "@/sections/home/view/Social/Slice/Item";
import ICFacebookFooter from "@/components/Icons/ICFacebookFooter";
import ICYoutube from "@/components/Icons/ICYoutube";
import ICTiktokFooter from "@/components/Icons/ICTiktokFooter";
import ICInstagramFooter from "@/components/Icons/ICInstagramFooter";
import IMGYoutube from '@/assets/images/youtube.png'
import IMGFacebook from '@/assets/images/facebook.png'
import IMGIg from '@/assets/images/ig.png'
import IMGTiktok from '@/assets/images/tiktok.png'


const SliceSocial = () => {
  return (
    <div>
      <Swiper 
      watchSlidesProgress={true} 
      breakpoints={{
        414: {
          slidesPerView: 1
        },
        767: {
          slidesPerView: 3
        },
        1023: {
          slidesPerView: 4
        }
      }}
       className="mySwiper">
        <SwiperSlide>
          <ItemSocial
            img={IMGFacebook}
            icon={<ICFacebookFooter width={100} height={100} stroke='#55D5D2' />}
            social={'Facebook'}
            infor={'@kinhmatanna'}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ItemSocial
            img={IMGYoutube}
            icon={<ICYoutube />}
            social={'Youtube'}
            infor={'@kinhmatanna'}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ItemSocial
            img={IMGTiktok}
            icon={<ICTiktokFooter width={100} height={100} stroke='#55D5D2' />}
            social={'Tiktok'}
            infor={'@kinhmatanna'}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ItemSocial
            img={IMGIg}
            icon={<ICInstagramFooter width={100} height={100} stroke='#55D5D2' />}
            social={'Instagram'}
            infor={'@kinhmatanna'}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ItemSocial
            img={IMGFacebook}
            icon={<ICFacebookFooter width={100} height={100} stroke='#55D5D2' />}
            social={'Facebook'}
            infor={'@kinhmatanna'}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default SliceSocial;