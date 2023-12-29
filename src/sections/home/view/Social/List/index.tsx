'use client';

import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

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

function ListSocial() {
  return (
    <div className="flex flex-wrap">
      <ItemSocial
        img={IMGFacebook}
        icon={<ICFacebookFooter width={100} height={100} stroke="#55D5D2" />}
        social="Facebook"
        infor="@kinhmatanna"
      />
      <ItemSocial
        img={IMGYoutube}
        icon={<ICYoutube />}
        social="Youtube"
        infor="@kinhmatanna"
      />
      <ItemSocial
        img={IMGTiktok}
        icon={<ICTiktokFooter width={100} height={100} stroke="#55D5D2" />}
        social="Tiktok"
        infor="@kinhmatanna"
      />
      <ItemSocial
        img={IMGIg}
        icon={<ICInstagramFooter width={100} height={100} stroke="#55D5D2" />}
        social="Instagram"
        infor="@kinhmatanna"
      />
    </div>
  );
}

export default ListSocial;
