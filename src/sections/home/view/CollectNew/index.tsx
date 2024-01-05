import { ArrowRight } from 'lucide-react';
import React from 'react';
import ItemCollect from '@/sections/home/view/CollectNew/Item';
import ICMore from '@/components/Icons/ICMore';
import { fetchDataRest } from '@/lib/fetch-data-rest';
import Link from 'next/link';

const NewCollection = async () => {
  const collectNewData = await fetchDataRest('GET', 'custom/v1/products');
  // console.log("CcollectNewData: ", collectNewData);

  return (
    <div className="container px-[5rem] pb-[5rem] max-lg:px-[3.25rem] mt-[3.75rem] relative max-sm:px-0 max-sm:pb-[3.5rem] p-[6.67rem] md:p-[0]">
      <div className="flex mb-[2.5rem] mx-4 items-center max-sm:mb-[1rem] max-sm:px-[0.75rem] justify-between flex-wrap">
        <h4 className="max-lg:w-full text-[#454545] text-[5.3333rem] md:text-[2.375rem] max-sm:pb-8 max-sm:w-full flex justify-between font-black uppercase">
          bộ sưu tập mới nhất
          <Link
            href="/danh-muc-san-pham"
            className="see-more cursor-pointer flex lg:hidden items-center"
          >
            <ArrowRight className="text-stone-300" />
            <p className="text-stone-300 text-[3.2rem] md:text-lg font-black lowercase">
              Xem tất cả
            </p>
          </Link>
        </h4>
        <div className="flex flex-wrap w-full md:w-fit max-sm:pb-8">
          <div className="item-collect pl-0 lg:px-[1.25rem] cursor-pointer relative z-10 flex items-center">
            <ArrowRight className="icon-arrow-right hidden" />
            <p className="category-collect text-[#828282] md:text-[#454545] text-[3.2rem] md:text-[1.125rem] font-extrabold md:font-black md:uppercase">
              Gọng kính
            </p>
          </div>
          <div className="item-collect px-[1.25rem] cursor-pointer relative z-10 flex items-center">
            <ArrowRight className="icon-arrow-right hidden" />
            <p className="category-collect text-[#828282] md:text-[#454545] text-[3.2rem] md:text-[1.125rem] font-extrabold md:font-black md:uppercase">
              Tròng Kính
            </p>
          </div>
          <div className="item-collect px-[1.25rem] cursor-pointer relative z-10 flex items-center">
            <ArrowRight className="icon-arrow-right hidden" />
            <p className="category-collect text-[#828282] md:text-[#454545] text-[3.2rem] md:text-[1.125rem] font-extrabold md:font-black md:uppercase">
              Kính râm
            </p>
          </div>
          <div className="item-collect px-[1.25rem] cursor-pointer relative z-10 flex items-center">
            <ArrowRight className="icon-arrow-right hidden" />
            <p className="category-collect text-[#828282] md:text-[#454545] text-[3.2rem] md:text-[1.125rem] font-extrabold md:font-black md:uppercase">
              Kính áp tròng
            </p>
          </div>
          <Link
            href="/cua-hang"
            className="see-more cursor-pointer hidden lg:flex items-center"
          >
            <ArrowRight className="text-[#C5C5C5]" />
            <p className="text-[#C5C5C5] text-[3.2rem] md:text-lg font-black uppercase pl-[1.25rem]">
              Xem thêm
            </p>
          </Link>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-2 md:grid-cols-4 max-sm:px-4">
          {/* eslint-disable-next-line array-callback-return,consistent-return */}
          {collectNewData?.map((dataCollect: any, index: number) => {
            if (index <= 7) {
              return (
                <div key={index} className="px-8 md:px-4">
                  <ItemCollect dataCollect={dataCollect} key={index} />
                </div>
              );
            }
          })}
        </div>
      </div>
      <div className="px-4">
        <Link
          href="/cua-hang"
          className="hidden md:inline-flex collect-more w-full mt-11 mb-[7.5rem] h-[58px] px-[30px] py-[17px] rounded-[50px] border-2 border-teal-300 justify-center items-center gap-2.5"
        >
          <div className="collect-title text-center text-[#55D5D2] text-[4.8rem] md:text-lg font-extrabold md:leading-[1.4625rem] leading-normal">
            XEM THÊM GỌNG KÍNH
          </div>
          <div className="w-[6.4rem] md:w-6 h-[6.4rem] md:h-6 justify-center items-center flex">
            <ICMore />
          </div>
        </Link>
      </div>
      <Link
        href="/cua-hang"
        className="inline-flex md:hidden w-full justify-center items-center gap-2.5"
      >
        <div className="w-[6.4rem] md:w-6 h-[6.4rem] md:h-6 justify-center items-center flex">
          <ArrowRight className="text-orange-400" />
        </div>
        <div className="collect-title text-center text-orange-400 text-[4.8rem] md:text-lg font-extrabold leading-normal">
          Xem tất cả
        </div>
      </Link>
    </div>
  );
};

export default NewCollection;
