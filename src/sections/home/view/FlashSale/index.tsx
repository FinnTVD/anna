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
    <div className="p-[6.67rem] md:p-[0] bg-[#EEF9F9]">
      <div className="container pb-[5rem] max-lg:px-[3.25rem] pt-[3.75rem] relative max-sm:px-0 max-sm:pb-[3.5rem]">
        <div className="flex flex-wrap items-center max-sm:justify-between max-sm:mb-[1rem] max-sm:px-[0.75rem]">
          <h4 className="text-teal-300 text-[4.8rem] md:text-[2.375rem] font-black uppercase pr-[1.688rem]">
            Flash Sale
          </h4>
          <ICLine height={30} />
          <h4 className=" text-[4.3rem] md:text-[2rem] uppercase leading-[56px] pl-0 md:pl-[1.688rem]">
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
        <div className="pt-12 flex justify-center flex-wrap">
          <Image
            src={smallBanner1}
            alt=""
            width={850}
            height={345}
            className="w-full md:w-1/2 pr-0 md:pr-3 md:h-[21.313rem]"
          />
          <Image
            src={smallBanner2}
            alt=""
            width={850}
            height={345}
            className="w-full md:w-1/2 pl-0 md:pl-3 md:h-[21.313rem] mt-8 md:mt-0"
          />
        </div>
      </div>
    </div>
  );
}

export default FlashSale;
