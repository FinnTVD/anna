import { ArrowRight } from 'lucide-react';
import React from 'react';
import ItemCollect from '@/sections/home/view/CollectNew/Item';
import ICMore from '@/components/Icons/ICMore';
import { fetchDataRest } from '@/lib/fetch-data-rest';

const NewCollection = async () => {
  const collectNewData = await fetchDataRest('GET', 'products');
  // console.log("CcollectNewData: ", collectNewData);

  return (
    <div className="mx-[5rem] mb-[5rem] max-lg:mx-[3.25rem] mt-[3.75rem] relative max-sm:mx-0 max-sm:mb-[3.5rem] p-[6.67rem] md:p-[0]">
      <div className="flex mb-[2.62rem] mx-4 items-center max-sm:mb-[1rem] max-sm:px-[0.75rem] justify-between flex-wrap">
        <h4 className="text-zinc-700 text-[10rem] md:text-[2.375rem] font-black uppercase">
          bộ sưu tập mới nhất
        </h4>
        <div className="flex flex-wrap w-full md:w-fit">
          <div className="item-collect px-6 cursor-pointer relative z-10">
            <ArrowRight className="icon-arrow-right absolute top-1 z-1 invisible" />
            <p className="category-collect text-zinc-700 text-[4.8rem] md:text-lg font-black uppercase">
              Gọng kính
            </p>
          </div>
          <div className="item-collect px-6 cursor-pointer relative z-10">
            <ArrowRight className="icon-arrow-right absolute top-1 z-1 invisible" />
            <p className="category-collect text-zinc-700 text-[4.8rem] md:text-lg font-black uppercase">
              Tròng Kính
            </p>
          </div>
          <div className="item-collect px-6 cursor-pointer relative z-10">
            <ArrowRight className="icon-arrow-right absolute top-1 z-1 invisible" />
            <p className="category-collect text-zinc-700 text-[4.8rem] md:text-lg font-black uppercase">
              Kính râm
            </p>
          </div>
          <div className="item-collect px-6 cursor-pointer relative z-10">
            <ArrowRight className="icon-arrow-right absolute top-1 z-1 invisible" />
            <p className="category-collect text-zinc-700 text-[4.8rem] md:text-lg font-black uppercase">
              Kính áp tròng
            </p>
          </div>
          <div className="see-more cursor-pointer flex items-center">
            <ArrowRight className="text-stone-300" />
            <p className="text-stone-300 text-[4.8rem] md:text-lg font-black uppercase">
              Xem thêm
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-4">
          {/* eslint-disable-next-line array-callback-return,consistent-return */}
          {collectNewData?.map((dataCollect: any, index: number) => {
            if (index <= 7) {
              return (
                <div key={index} className="px-4">
                  <ItemCollect dataCollect={dataCollect} key={index} />
                </div>
              );
            }
          })}
        </div>
      </div>
      <div className="collect-more w-full mt-11 h-[58px] px-[30px] py-[17px] rounded-[50px] border-2 border-teal-300 justify-center items-center gap-2.5 inline-flex">
        <div className="collect-title text-center text-teal-300 text-[4.8rem] md:text-lg font-extrabold leading-normal">
          XEM THÊM GỌNG KÍNH
        </div>
        <div className="w-[6.4rem] md:w-6 h-[6.4rem] md:h-6 justify-center items-center flex">
          <ICMore />
        </div>
      </div>
    </div>
  );
};

export default NewCollection;
