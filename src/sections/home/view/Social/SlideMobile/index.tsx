'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade} from 'swiper/modules';
import './style.css';
import 'swiper/css';
import 'swiper/css/effect-fade';
import Image from 'next/image';
import { useRef, useState } from 'react';
import Link from 'next/link';
const array = new Array(4).fill(0)
const listIcon = [
  '/img/home/fb_icon.svg',
  '/img/home/tiktok_icon.svg',
  '/img/home/ins_icon.svg',
  '/img/home/you_icon.svg',
]
export default function SlideMobileSocial() {
  const swiperRef = useRef(null)
  const [indexSlider, setIndexSlider] = useState(0)
  const handleSlideChange = (swiper:any) => {
    setIndexSlider(swiper.realIndex)
  }
  return (
   <div className='w-full h-[157rem] relative md:hidden'>
     <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
        }}
        effect={'fade'}
        onSlideChange={handleSlideChange}
        onBeforeInit={(swiper:any) => {
          swiperRef.current = swiper
        }}
          spaceBetween={0}
          loop
          modules={[EffectFade, Autoplay]}
          className="w-full h-full"
      >{
          array.map((item: any, index: number) => (
            <SwiperSlide
                key={index}
            >
              <Image width={420} height={600} src={index%2===0?'/img/home/facebook.png':'/img/home/ig.png'} alt='social' className='w-full h-full object-cover'/>
              </SwiperSlide>
          ))
        }
          
      </Swiper>
      <div className='absolute z-10 w-full top-[3.73rem] px-[3.2rem]'
      >
        <div className='flex items-center '>
          <Image src={'/img/home/logo.png'} width={50} height={50} alt='logo anna' className='w-[11.73333rem] h-[11.73333rem] rounded-full object-cover'/>
          <div className='w-full ml-[2.13rem]'>
            <h2 className='text-white text-[4.26667rem] md:text-[2.26667rem] font-extrabold leading-normal'>Social of Anna</h2>
            <span className='block text-[3.2rem] font-normal leading-[1.3] text-white'>Chúng tôi hoạt động trên 4 nền tảng chính</span>
          </div>
        </div>
        <ul id='progress_social' className='mt-[3.07rem] list-none flex justify-between'>
          {
            array.map((item: any, index: number) => (
          <li className={`${indexSlider === index?'active':''} relative w-[22.13333rem] h-[0.4rem] bg-white/30`}></li>))
          }
        </ul>
      </div>
      <span className='absolute block bottom-[22.4rem] left-1/2 -translate-x-1/2 z-20 text-white text-[3.7333rem] font-bold leading-normal'>@annaeyeglasses</span>
      <div className='absolute left-1/2 -translate-x-1/2 bottom-[5.33rem] w-fit flex py-[2.13rem] px-[5.3rem] rounded-[13rem] bg[#2525254d] backdrop-blur-[4px] z-20 border-[0.5px] border-solid border-white/40'>

        {listIcon.map((item: string, index: number) => (
          <Link key={index} target='_blank' href={'/'} className={`${index===0?'':'ml-[6.4rem]'} w-[9.6rem] h-[9.6rem]`}>
            <Image src={item} alt='icon social' width={40} height={40} className={`${indexSlider === index?'invert brightness-0':''} object-cover block w-full h-full`}/>
          </Link>
        ))}
      </div>
   </div>
  )
}
