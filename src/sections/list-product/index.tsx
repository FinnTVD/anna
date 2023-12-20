'use client';

import './style.css';
import { useEffect, useState } from 'react';
import { useQueryState } from 'next-usequerystate';
import useSWR from 'swr';
import FilterListProduct from './components/filter-list-product';
import ICArrowRight2 from '@/components/Icons/ICArrowRight2';
import Image from 'next/image';
import SlideProductComponent from '@/components/component-ui-custom/slide-swiper-product/slide-product';
import { postData } from '@/lib/post-data';

interface IProps {
  slug?: any;
}

interface IParamsSearch {
  per_page: number;
  page: number;
}

export default function ListProduct(props: IProps) {
  const { slug } = props;

  // const [paramsSearch, setParamsSearch] = useQueryState<IParamsSearch>({
  //   per_page: 12,
  //   page: 1,
  // });
  const [paramsSearch, setParamsSearch] = useState<IParamsSearch>({
    per_page: 12,
    page: 1,
  });
  const [dataInit, setDatainit] = useState<any>();

  const bodyGetListProduct: any = {
    url: `products?per_page=${paramsSearch.per_page}&page=${paramsSearch.page}`,
    method: 'get',
  };

  const getlistProduct = useSWR(bodyGetListProduct.url, () =>
    postData(bodyGetListProduct)
  );

  useEffect(() => {
    setDatainit(getlistProduct.data);
  }, [getlistProduct]);

  // console.log('dataInit', dataInit);
  return (
    <div className="list-product-container mb-[2.94rem]">
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
              Danh sách sản phẩm
            </span>
          </div>
        </div>
      </div>

      {/* content */}
      <div className="w-[87.5rem] mx-auto mt-[2.5rem] max-md:w-full max-md:px-[3.2rem] max-md:mt-[3.2rem]">
        <FilterListProduct data={dataInit} />
        <div className="mb-[5rem] max-lg:mx-[3.25rem] mt-[3.75rem] relative max-md:mx-0 max-md:mb-[3.5rem] max-md:mt-[8.53rem]">
          <div className="flex justify-between mb-[2rem] items-center max-md:px-[2.67rem] max-md:mb-[4.27rem]">
            <h4 className="text-[2rem] not-italic font-[850] text-[#313131] leading-[2.4rem] h-[2.4rem] text-center max-md:text-[5.33333rem]">
              SẢN PHẨM NỔI BẬT
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
          {/* <div className="hidden max-md:block px-[3.2rem]">
          <div className="flex justify-between">
            <div className="relative mb-[4.27rem]">
              <ItemMobile />
            </div>
            <div className="relative mb-[4.27rem]">
              <ItemMobile />
            </div>
          </div>
          <div className="flex justify-between">
            <div className="relative mb-[4.27rem]">
              <ItemMobile />
            </div>
            <div className="relative mb-[4.27rem]">
              <ItemMobile />
            </div>
          </div>
        </div> */}
          {/* <div className="hidden max-md:flex items-center justify-center h-full  py-[1.6rem] hover:text-[#f58f5d] cursor-pointer">
          <ICArrowRight2 fill="#F58F5D" />
          <p className="text-[1.125rem] ml-[0.62rem] text-right max-md:hidden">
            Xem thêm
          </p>
          <p className="hidden text-[0.75rem] ml-[0.25rem] leading-[1.05rem] text-right max-md:flex max-md:text-[3.2rem] max-md:text-[#F58F5D]">
            Xem tất cả
          </p>
        </div> */}
        </div>
        {/* newest product */}
        <div>
          <h4 className="text-[2rem] not-italic font-[850] text-[#313131] leading-[2.4rem] h-[2.4rem] max-md:text-[5.33333rem] mb-[3rem]">
            SẢN PHẨM MỚI NHẤT
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
