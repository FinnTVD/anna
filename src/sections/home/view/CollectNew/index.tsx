import ICMore from '@/components/Icons/ICMore';
import ICVectorRight from '@/components/Icons/ICVectorRight';
import { fetchDataRest } from '@/lib/fetch-data-rest';
import ItemCollect from '@/sections/home/view/CollectNew/Item';
import SlideSelect from '@/sections/home/view/CollectNew/SlideSelect';
import map from 'lodash.map';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const NewCollection = async () => {
  const collectNewData = await fetchDataRest('GET', 'custom/v1/products');

  return (
    <div className="container px-[5rem] pb-[5rem] max-lg:px-[3.25rem] mt-[4.75rem] md:mt-[3.75rem] relative max-sm:px-0 max-sm:pb-[3.5rem] p-[6.67rem] md:p-[0]">
      <div className="flex mb-[2.5rem] mx-4 items-center max-sm:mb-[1rem] max-sm:px-[0.75rem] justify-between flex-wrap">
        <h4 className="max-lg:w-full text-[#454545] text-[5.3333rem] md:text-[2.375rem] max-sm:pb-8 max-sm:w-full flex justify-between font-black max-sm:px-[2rem] uppercase">
          bộ sưu tập mới nhất
          <Link
            href="/danh-muc-san-pham"
            className="see-more cursor-pointer flex lg:hidden items-center"
          >
            <ArrowRight className="text-[#C5C5C5]" />
            <p className="text-[#C5C5C5] text-[3.2rem] md:text-lg font-black">
              Xem tất cả
            </p>
          </Link>
        </h4>
        <div className="max-sm:hidden flex flex-wrap w-full md:w-fit max-sm:pb-8">
          <div className="item-collect pl-0 lg:px-[1.25rem] cursor-pointer relative z-10 flex items-center">
            {/* <ArrowRight className="icon-arrow-right hidden" /> */}
            <div className="icon-arrow-right hidden pr-[3.2rem] md:pr-3">
              <ICVectorRight width={16} height={16} />
            </div>
            <p className="category-collect text-[#828282] md:text-[#454545] text-[3.2rem] md:text-[1.125rem] font-extrabold md:font-black md:uppercase">
              Gọng kính
            </p>
          </div>
          <div className="item-collect px-[1.25rem] cursor-pointer relative z-10 flex items-center">
            <div className="icon-arrow-right hidden pr-[3.2rem] md:pr-3">
              <ICVectorRight width={16} height={16} />
            </div>
            <p className="category-collect text-[#828282] md:text-[#454545] text-[3.2rem] md:text-[1.125rem] font-extrabold md:font-black md:uppercase">
              Tròng Kính
            </p>
          </div>
          <div className="item-collect px-[1.25rem] cursor-pointer relative z-10 flex items-center">
            <div className="icon-arrow-right hidden pr-[3.2rem] md:pr-3">
              <ICVectorRight width={16} height={16} />
            </div>
            <p className="category-collect text-[#828282] md:text-[#454545] text-[3.2rem] md:text-[1.125rem] font-extrabold md:font-black md:uppercase">
              Kính râm
            </p>
          </div>
          <div className="item-collect px-[1.25rem] cursor-pointer relative z-10 flex items-center">
            <div className="icon-arrow-right hidden pr-[3.2rem] md:pr-3">
              <ICVectorRight width={16} height={16} />
            </div>
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
        <div className="block sm:hidden w-full">
          <SlideSelect />
        </div>
      </div>
      <div>
        <div className="grid grid-cols-2 md:grid-cols-4 max-sm:px-4">
          {/* eslint-disable-next-line array-callback-return,consistent-return */}
          {map(collectNewData, (dataCollect: any, index: number) => {
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
