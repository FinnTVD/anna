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
  return (
    <div className="p-[6.67rem] md:p-[0] bg-[#EEF9F9] md:relative md:mb-[13rem] md:pb-[13rem]">
      <div className="container pb-[5rem] max-lg:px-[3.25rem] pt-[3.75rem] max-sm:px-0 max-sm:pb-[3.5rem]">
        <div className="flex flex-wrap items-center max-sm:justify-between max-sm:mb-[1rem] max-sm:px-[0.75rem]">
          <h4 className="text-teal-300 text-[4.8rem] md:text-[2.375rem] font-black uppercase pr-[1.688rem]">
            Flash Sale
          </h4>
          <ICLine height={30} />
          <h4 className=" text-[4.3rem] md:text-[2rem] uppercase md:leading-[56px] pl-0 md:pl-[1.688rem]">
            bán chạy nhất
          </h4>
        </div>
        <div className="flash-sale-home">
          <SlideProductComponent
            keySlide="flash-sale"
            data={dataProductSale}
            typePagination="progressbar"
          />
        </div>
        <div className="pt-6 flex justify-center">
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
        <Image
          src={smallBanner1}
          alt=""
          width={850}
          height={345}
          className="w-full md:w-1/2 pr-0 md:pr-3 md:h-[21.313rem] object-cover rounded-[4rem] md:rounded-[1rem]"
        />
        <Image
          src={smallBanner2}
          alt=""
          width={850}
          height={345}
          className="w-full md:w-1/2 pl-0 md:pl-3 md:h-[21.313rem] object-cover rounded-[4rem] md:rounded-[1rem] mt-8 md:mt-0"
        />
      </div>
      <div className="block md:hidden">
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
