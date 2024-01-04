"use client"
import IMGFacebook from '@/assets/images/facebook.png'
import IMGIg from '@/assets/images/ig.png'
import IMGTiktok from '@/assets/images/tiktok.png'
import IMGYoutube from '@/assets/images/youtube.png'
import ICFacebookFooter from '@/components/Icons/ICFacebookFooter'
import ICInstagramFooter from '@/components/Icons/ICInstagramFooter'
import ICLogo from '@/components/Icons/ICLogo'
import ICTiktokFooter from '@/components/Icons/ICTiktokFooter'
import ICYoutube from '@/components/Icons/ICYoutube'
import ItemSocial from '@/sections/home/view/Social/SlideMobile/Item'
import { Swiper, SwiperSlide } from 'swiper/react'
import Logo from '@/assets/images/logo.png';
import Image from 'next/image'


const SlideMobileSocial = () => {
  return (
    <div className="relative">
      <div className="absolute top-0 z-10 w-full">
        <div className="flex p-[3.5rem]">
          <Image
            src={Logo}
            alt=""
            width={40}
            height={40}
            className="w-full object-cover w-[11.73333rem] h-[11.73333rem]"
          />
          <div className="pl-4">
            <p className="font-extrabold text-[4.26667rem] text-white">Social of Anna</p>
            <p className="text-[3.2rem] text-white">Chúng tôi hoạt động trên 4 nền tảng chính</p>
          </div>
        </div>
        <div className="flex px-[3rem]">
          <div className="line-container mx-2 story-1" />
          {/* <div className="line-container mx-2 story-2" />
          <div className="line-container mx-2 story-3" />
          <div className="line-container mx-2 story-4" /> */}
        </div>
      </div>
      <Swiper watchSlidesProgress slidesPerView={1} loop className="sm:h-fit">
        <SwiperSlide>
          <ItemSocial
            img={IMGFacebook}
            icon={<ICFacebookFooter width={100} height={100} stroke="#55D5D2" />}
            social="Facebook"
            infor="@kinhmatanna"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ItemSocial
            img={IMGYoutube}
            icon={<ICYoutube />}
            social="Youtube"
            infor="@kinhmatanna"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ItemSocial
            img={IMGTiktok}
            icon={<ICTiktokFooter width={100} height={100} stroke="#55D5D2" />}
            social="Tiktok"
            infor="@kinhmatanna"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ItemSocial
            img={IMGIg}
            icon={<ICInstagramFooter width={100} height={100} stroke="#55D5D2" />}
            social="Instagram"
            infor="@kinhmatanna"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default SlideMobileSocial