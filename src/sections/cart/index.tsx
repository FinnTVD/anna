'use client';

import { useEffect, useState } from 'react';
import ICArrowRight2 from '@/components/Icons/ICArrowRight2';
import Image from 'next/image';
import SlideProductComponent from '@/components/component-ui-custom/slide-swiper-product/slide-product';
import { CartComponent } from '@/sections/cart/CartComponent';

interface IProps {
  dataListProductNew?: any;
}

export default function Cart(props: IProps) {
  const { dataListProductNew } = props;

  const [dataInit, setDatainit] = useState<any>();

  useEffect(() => {
    setDatainit(dataListProductNew);
  }, [dataListProductNew]);

  return (
    <div className="list-product-container mb-[2.94rem]">
      {/* banner */}
      <div className="relative bg-banner-about-us bg-[url('/img/about-us/bg-banner-about-us.jpg')] bg-cover bg-no-repeat h-[32.6875rem] max-md:h-[47.2rem]">
        <div className="absolute bottom-20 left-[8rem]">
          <h1 className="text-white text-[3.125rem] leading-[4.6875rem] font-semibold font-sans not-italic max-md:font-bold max-md:text-[4.8rem] max-md:leading-[7.2rem]">
            GIỎ HÀNG
          </h1>
          <div className="flex items-center">
            <span className="text-white text-[0.875rem] leading-[2.25rem] not-italic max-md:text-[3.2rem]">
              Trang chủ
            </span>
            <div className="bg-[#81C8C2] h-[0.625rem] w-[0.625rem] rounded-full mx-[1rem] max-md:w-[2.13333rem] max-md:h-[2.13333rem] max-md:mx-[2rem]" />
            <span className="text-white text-[0.875rem] leading-[2.25rem] not-italic max-md:text-[3.2rem] max-md:leading-[4.8rem]">
              Giỏ hàng
            </span>
          </div>
        </div>
      </div>

      {/* content */}
      <div className="w-[87.5rem] mx-auto mt-[2.5rem] max-md:w-full max-md:px-[3.2rem] max-md:mt-[3.2rem]">
        <div className="mb-[5rem] max-md:mb-[8rem]">
          <div className="flex justify-start max-md:justify-center max-md:mt-[5rem]">
            <span className="font-sans text-[1.5rem] not-italic font-bold leading-[2.25rem] max-md:text-center max-md:text-[5.3333rem] max-md:leading-[8rem]">
              Sản Phẩm
            </span>
          </div>
          <CartComponent />
        </div>
        <div className="flex justify-between mb-[2rem] items-center max-md:mb-[4.27rem]">
          <h4 className="text-[2rem] not-italic font-[850] text-[#313131] leading-[2.4rem] h-[2.4rem] text-center max-md:text-[4.8rem] max-md:leading-[7.2rem] max-md:w-[64.26667rem] max-md:h-[12rem] max-md:mb-[4rem] max-md:text-start">
            SẢN PHẨM CÓ THỂ BẠN QUAN TÂM
          </h4>
          <div className="flex items-center justify-center h-full  py-[1.6rem] hover:text-[#f58f5d] cursor-pointer max-md:hidden">
            <ICArrowRight2 fill="#F58F5D" />
            <p className="text-[1.125rem] ml-[0.62rem] text-right max-md:hidden">
              Xem thêm
            </p>
            <p className="hidden text-[0.75rem] ml-[0.25rem] leading-[1.05rem] text-right max-md:flex max-md:text-[3.2rem] max-md:text-[#F58F5D]">
              Xem tất cả
            </p>
          </div>
        </div>
        <div className="w-full">
          {/* <OutstandingProduct /> */}
          <SlideProductComponent
            keySlide="out-standing-product"
            breakPoint={{ PerView767: 2 }}
            data={dataInit}
          />
        </div>
        <div className="max-md:mt-[5rem]">
          <h4 className="text-[2rem] not-italic font-[850] text-[#313131] leading-[2.4rem] h-[2.4rem] max-md:text-[5.33333rem] mb-[3rem] max-md:mb-[5rem] max-md:leading-[5rem]">
            SẢN PHẨM TƯƠNG TỰ
          </h4>
          <div className="flex w-full max-md:flex-col">
            <Image
              width={400}
              height={300}
              // width={}
              className="w-2/5 h-[21.875rem] rounded-3xl mr-[1.25rem] max-md:w-full max-md:h-[60rem] max-md:rounded-[4.5rem] max-md:mb-[3rem]"
              src="https://kinhmatanna.com/wp-content/uploads/2022/06/Rectangle-416.jpg"
              alt=""
            />
            <div className="grow w-full overflow-hidden">
              <SlideProductComponent
                keySlide="list-new-product"
                heightImage={17}
                breakPoint={{
                  PerView1280: 3,
                }}
                data={dataInit}
              />
            </div>
          </div>
        </div>
      </div>

      {/* outstanding product */}
    </div>
  );
}