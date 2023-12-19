'use client';

import { Checkbox } from '@/components/ui/checkbox';
import './style.css';
import FilterListProduct from './components/filter-list-product';

export default function ListProduct() {
  return (
    <div className="list-product-container">
      {/* banner */}
      <div className="relative bg-banner-about-us bg-[url('/img/about-us/bg-banner-about-us.jpg')] bg-cover bg-no-repeat h-[32.6875rem] max-md:h-[47.2rem]">
        <div className="absolute bottom-20 left-[8rem]">
          <h1 className="text-white text-[3.125rem] leading-[4.6875rem] font-semibold font-sans not-italic max-md:font-bold max-md:text-[4.8rem] max-md:leading-[7.2rem]">
            LỜI CẢM ƠN
          </h1>
          <div className="flex items-center">
            <span className="text-white text-[0.875rem] leading-[2.25rem] not-italic max-md:text-[3.2rem]">
              Trang chủ
            </span>
            <div className="bg-[#81C8C2] h-[0.625rem] w-[0.625rem] rounded-full mx-[1rem] max-md:w-[2.13333rem] max-md:h-[2.13333rem] max-md:mx-[2rem]" />
            <span className="text-white text-[0.875rem] leading-[2.25rem] not-italic max-md:text-[3.2rem] max-md:leading-[4.8rem]">
              Về Anna
            </span>
          </div>
        </div>
      </div>

      {/* content */}
      <div className="px-[6.25rem] mt-[1.5rem]">
        <FilterListProduct />
      </div>
    </div>
  );
}
