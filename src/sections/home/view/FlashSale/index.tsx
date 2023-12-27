'use client';

import ICDown from '@/components/Icons/ICDown';
import ICLine from '@/components/Icons/ICLine';
import SlideProductComponent from '@/components/component-ui-custom/slide-swiper-product/slide-product';
import { IItemProduct } from '@/types/types-general';
import Image from 'next/image';

interface IpropFlash {
  smallBanner1: string;
  smallBanner2: string;
  dataProduct: IItemProduct[];
}
function FlashSale({ smallBanner1, smallBanner2, dataProduct }: IpropFlash) {
  return (
    <div className="p-[6.67rem] md:p-[0] bg-[#EEF9F9]">
      <div className="mx-[6.25rem] mb-[5rem] max-lg:mx-[3.25rem] mt-[3.75rem] relative max-sm:mx-0 max-sm:mb-[3.5rem]">
        <div className="flex mb-[2.62rem] flex-wrap items-center max-sm:mb-[1rem] max-sm:px-[0.75rem]">
          <h4 className="text-teal-300 text-[38px] font-black uppercase pr-[1.688rem]">
            Flash Sale
            <div className="bg-[#55D5D2] w-full">
              <p className="h-2 bg-[#F58F5D]" />
            </div>
          </h4>

          <ICLine />
          <h4 className="text-[32px] uppercase leading-[56px] pl-0 md:pl-[1.688rem]">
            bán chạy nhất
          </h4>
        </div>
        <div>
          <SlideProductComponent keySlide="flash-sale" data={dataProduct} />
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
