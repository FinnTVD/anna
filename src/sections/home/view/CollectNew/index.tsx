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
      <div className="flex mb-[2.62rem] mx-4 items-center max-sm:mb-[1rem] max-sm:px-[0.75rem] justify-between flex-wrap">
        <h4 className="text-zinc-800 md:text-zinc-700 text-[5.3333rem] md:text-[2.375rem] max-sm:pb-8 max-sm:w-full flex justify-between font-black uppercase">
          bộ sưu tập mới nhất
          <Link
            href="/list-product"
            className="see-more cursor-pointer flex md:hidden items-center"
          >
            <ArrowRight className="text-stone-300" />
            <p className="text-stone-300 text-[3.2rem] md:text-lg font-black lowercase">
              Xem tất cả
            </p>
          </Link>
        </h4>
        <div className="flex flex-wrap w-full md:w-fit max-sm:pb-8">
          <div className="item-collect px-6 cursor-pointer relative z-10">
            <ArrowRight className="icon-arrow-right absolute top-1 z-1 invisible" />
            <p className="category-collect text-zinc-700 text-[3.2rem] md:text-lg font-black md:uppercase">
              Gọng kính
            </p>
          </div>
          <div className="item-collect px-6 cursor-pointer relative z-10">
            <ArrowRight className="icon-arrow-right absolute top-1 z-1 invisible" />
            <p className="category-collect text-zinc-700 text-[3.2rem] md:text-lg font-black md:uppercase">
              Tròng Kính
            </p>
          </div>
          <div className="item-collect px-6 cursor-pointer relative z-10">
            <ArrowRight className="icon-arrow-right absolute top-1 z-1 invisible" />
            <p className="category-collect text-zinc-700 text-[3.2rem] md:text-lg font-black md:uppercase">
              Kính râm
            </p>
          </div>
          <div className="item-collect px-6 cursor-pointer relative z-10">
            <ArrowRight className="icon-arrow-right absolute top-1 z-1 invisible" />
            <p className="category-collect text-zinc-700 text-[3.2rem] md:text-lg font-black md:uppercase">
              Kính áp tròng
            </p>
          </div>
          <Link
            href="/list-product"
            className="see-more cursor-pointer hidden md:flex items-center"
          >
            <ArrowRight className="text-stone-300" />
            <p className="text-stone-300 text-[3.2rem] md:text-lg font-black uppercase">
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
        href="/list-product"
        className="hidden md:inline-flex collect-more w-full mt-11 mb-20 h-[58px] px-[30px] py-[17px] rounded-[50px] border-2 border-teal-300 justify-center items-center gap-2.5"
      >
        <div className="collect-title text-center text-teal-300 text-[4.8rem] md:text-lg font-extrabold leading-normal">
          XEM THÊM GỌNG KÍNH
        </div>
        <div className="w-[6.4rem] md:w-6 h-[6.4rem] md:h-6 justify-center items-center flex">
          <ICMore />
        </div>
      </Link>
      </div>
      <Link
        href="/list-product"
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
