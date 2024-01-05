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
import { useState } from 'react';

interface IpropFlash {
  smallBanner1: string;
  smallBanner2: string;
  dataProductSale: IItemProduct[];
}
function FlashSale({
  smallBanner1,
  smallBanner2,
  dataProductSale,
}: IpropFlash) {
  const [progress, setProgress] = useState(13);
  const [isTab, setIsTab] = useState(false);

  // useEffect(() => {
  //  setInterval(() => {
  //   if(progress < 100) setProgress(progress + 26)
  //   else setProgress(0)
  //  }, 2500)
  // }, [progress])

  return (
    <div className="bg-[#EEF9F9] md:relative md:mb-[13rem] md:pb-[13rem]">
      <div className="container pb-[1rem] max-lg:px-[3.25rem] pt-[7.5rem] max-sm:pb-[3.5rem]">
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
                {!isTab && (
                  <Progress
                    value={
                      (progress + 1) *
                      (100 / (dataProductSale?.length ?? 0 + 1))
                    }
                    className="h-[0.8rem] md:h-[0.1875rem] w-full bg-[#55D5D2]"
                  />
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
                {isTab && (
                  <Progress
                    value={
                      (progress + 1) *
                      (100 / (dataProductSale?.length ?? 0 + 1))
                    }
                    className="h-[0.8rem] md:h-[0.1875rem] w-full bg-[#55D5D2]"
                  />
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
                data={dataProductSale}
                setProgress={setProgress}
              />
            </div>
          </TabsContent>
        </Tabs>
        <div className="pt-10 flex justify-center">
          <ICDown />
        </div>
      </div>
      <div>
        <Swiper
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={7000}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            767: {
              slidesPerView: 2,
            },
          }}
          loop
          modules={[Navigation, Autoplay]}
          className="myTextEvent pl-[0rem] mx-[1rem]"
        >
          <SwiperSlide className="text-[#CAF2F1] text-[8rem] md:text-[4.25rem] font-black uppercase">
            Supper event 2023
          </SwiperSlide>
          <SwiperSlide className="text-[#CAF2F1] text-[8rem] md:text-[4.25rem] font-black uppercase">
            birthday 9th anna
          </SwiperSlide>
          <SwiperSlide className="text-[#CAF2F1] text-[8rem] md:text-[4.25rem] font-black uppercase">
            Supper event 2023
          </SwiperSlide>
          <SwiperSlide className="text-[#CAF2F1] text-[8rem] md:text-[4.25rem] font-black uppercase">
            birthday 9th anna
          </SwiperSlide>
        </Swiper>
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
      <div className="block p-[3.2rem] md:p-[0] md:hidden">
        <Swiper
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            767: {
              slidesPerView: 2,
            },
          }}
          loop
          modules={[Navigation, Autoplay]}
          className="pl-[0rem] mx-[1rem]"
        >
          <SwiperSlide className="text-[#CAF2F1] text-[8rem] md:text-[4.25rem] font-black uppercase">
            <Image
              src={smallBanner1}
              alt=""
              width={850}
              height={345}
              className="w-full md:w-1/2 pr-0 md:pr-3 md:h-[21.313rem] object-cover rounded-[4rem] md:rounded-[1rem]"
            />
          </SwiperSlide>
          <SwiperSlide className="text-[#CAF2F1] text-[8rem] md:text-[4.25rem] font-black uppercase">
            <Image
              src={smallBanner2}
              alt=""
              width={850}
              height={345}
              className="w-full md:w-1/2 pl-0 md:pl-3 md:h-[21.313rem] object-cover rounded-[4rem] md:rounded-[1rem] mt-8 md:mt-0"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default FlashSale;
