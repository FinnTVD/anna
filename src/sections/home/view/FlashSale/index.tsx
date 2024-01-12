'use client';

import ICDown from '@/components/Icons/ICDown';
import ICLine from '@/components/Icons/ICLine';
import SlideProductComponent from '@/components/component-ui-custom/slide-swiper-product/slide-product';
import { IItemProduct } from '@/types/types-general';
import Image from 'next/image';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
interface IpropFlash {
  smallBanner1: string;
  smallBanner2: string;
  dataProductSale: IItemProduct[];
  dataSellingProduct: IItemProduct[];
}
function FlashSale({
  smallBanner1,
  smallBanner2,
  dataProductSale,
  dataSellingProduct,
}: IpropFlash) {
  const [progress, setProgress] = useState(13);
  const [isTab, setIsTab] = useState(false);
  const lineRef = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.to(lineRef.current, {
        scrollTrigger: {
          trigger: lineRef.current,
          scrub: true,
          start: `top bottom`,
          end: `bottom top`,
        },
        stagger: 0.5,
        ease: 'power1.out',
        translateX: '-25%',
      });
    }, lineRef);
    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div className="bg-[#EEF9F9] md:relative md:mb-[13rem] md:pb-[13rem]">
      <div className="container pb-[1rem] max-lg:px-[3.25rem] pt-[7.5rem] max-sm:pb-[6.4rem]">
        <Tabs defaultValue="flash-sale" className="w-full h-full scroll-smooth">
          <TabsList className="flash-product bg-[#EEF9F9] h-auto flex flex-wrap items-center justify-start max-sm:justify-between max-sm:mb-[1rem] max-sm:px-[4.27rem]">
            <div
              role="button"
              className="flash-sale-tab"
              onClick={() => setIsTab(false)}
            >
              <TabsTrigger
                value="flash-sale"
                className="text-[#55D5D2] text-[4.8rem] md:text-[2.375rem] font-black uppercase pr-[1.688rem]"
              >
                Flash Sale
              </TabsTrigger>
              <div className="">
                {!isTab ? (
                  <Progress
                    value={
                      (progress + 1) *
                      (100 / (dataProductSale?.length ?? 0 + 1))
                    }
                    className="h-[0.8rem] md:h-[0.1875rem] w-full bg-[#55D5D2]"
                  />
                ) : (
                  <div className="h-[0.8rem] md:h-[0.1875rem] w-full invisible" />
                )}
              </div>
            </div>
            <ICLine height={30} />
            <div
              role="button"
              className="flash-sale-tab"
              onClick={() => setIsTab(true)}
            >
              <TabsTrigger
                value="favorite-product"
                className="text-[#55D5D2] text-[4.3rem] md:text-[2rem] uppercase pl-0 font-black md:pl-[1.688rem]"
              >
                bán chạy nhất
              </TabsTrigger>
              <div className="">
                {isTab ? (
                  <Progress
                    value={
                      (progress + 1) *
                      (100 / (dataSellingProduct?.length ?? 0 + 1))
                    }
                    className="h-[0.8rem] md:h-[0.1875rem] w-full bg-[#55D5D2]"
                  />
                ) : (
                  <div className="h-[0.8rem] md:h-[0.1875rem] w-full invisible" />
                )}
              </div>
            </div>
          </TabsList>
          <TabsContent value="flash-sale">
            <div className="flash-sale-home">
              <SlideProductComponent
                keySlide="flash-sale"
                data={dataProductSale}
                setProgress={setProgress}
              />
            </div>
          </TabsContent>
          <TabsContent value="favorite-product">
            <div className="flash-sale-home">
              <SlideProductComponent
                keySlide="flash-sale"
                data={dataSellingProduct}
                setProgress={setProgress}
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
      <div className="pt-[6.4rem] pb-[1.17rem] md:pt-10 flex justify-center max-sm:bg-white">
        <ICDown />
      </div>
      <div className="max-sm:bg-white relative h-[6.375rem] max-md:h-[10.375rem] overflow-hidden w-full">
        <div
          ref={lineRef}
          className="flex items-center absolute top-0 left-1/2 -translate-x-[150%] flex-nowrap"
        >
          <div className="text-[#CAF2F1] text-[8rem] md:text-[4.25rem] font-black uppercase whitespace-nowrap">
            Supper event 2023 birthday 9th anna
          </div>
        </div>
      </div>
      <div className="hidden md:flex pt-12 justify-center flex-wrap absolute container -translate-x-2/4 left-1/2">
        <div className="pr-0 md:pr-3 w-full md:h-[21.313rem] md:w-1/2 rounded-[4rem] md:rounded-[1rem]">
          <Image
            src={smallBanner1}
            alt=""
            width={850}
            height={345}
            className="object-cover rounded-[4rem] md:rounded-[1rem]"
          />
        </div>
        <div className="pl-0 md:pl-3 w-full md:h-[21.313rem] md:w-1/2 rounded-[4rem] md:rounded-[1rem]">
          <Image
            src={smallBanner2}
            alt=""
            width={850}
            height={345}
            className="object-cover mt-8 rounded-[4rem] md:rounded-[1rem] md:mt-0"
          />
        </div>
      </div>
      <div className="block p-[3.2rem] md:p-[0] md:hidden max-sm:bg-white">
        <Swiper
          // autoplay={{
          //   delay: 3000,
          //   disableOnInteraction: false,
          // }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 8,
            },
            767: {
              slidesPerView: 2,
            },
          }}
          loop
          modules={[Navigation, Autoplay]}
          className="pl-[0rem] mx-[1rem] rounded-[4rem] md:rounded-[1rem]"
        >
          <SwiperSlide className="text-[#CAF2F1] text-[8rem] md:text-[4.25rem] font-black uppercase md:h-[21.313rem] h-[34.94rem]">
            <Image
              src={smallBanner1}
              alt=""
              width={850}
              height={345}
              className="w-full md:w-1/2 pr-0 md:pr-3 h-full object-cover rounded-[4rem] md:rounded-[1rem]"
            />
          </SwiperSlide>
          <SwiperSlide className="text-[#CAF2F1] text-[8rem] md:text-[4.25rem] font-black uppercase md:h-[21.313rem] h-[34.94rem]">
            <Image
              src={smallBanner2}
              alt=""
              width={850}
              height={345}
              className="w-full md:w-1/2 pl-0 md:pl-3 h-full object-cover rounded-[4rem] md:rounded-[1rem] md:mt-0"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default FlashSale;
