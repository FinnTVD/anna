import React from 'react';
import { ArrowTopRight } from '@/app/icons';
import Image from 'next/image';

interface IPropsItemCollect {
  dataCollect: any;
  key: number;
}
function ItemCollect({ dataCollect, key }: IPropsItemCollect) {
  const listColor = [
    {
      id: 1,
      color: 'blue',
    },
    {
      id: 1,
      color: 'black',
    },
    {
      id: 1,
      color: 'red',
    },
    {
      id: 1,
      color: 'yellow',
    },
    {
      id: 1,
      color: 'blue',
    },
    {
      id: 1,
      color: 'blue',
    },
    {
      id: 1,
      color: 'blue',
    },
    {
      id: 1,
      color: 'blue',
    },
  ];
  const currencyFormat = Number(dataCollect?.price).toLocaleString('vi', {
    style: 'currency',
    currency: 'VND',
  });
  return (
    <div className="item-slider-product cursor-pointer relative rounded-[4.26667rem] md:rounded-2xl">
      <div className="h-[87.74773rem] md:h-[20.375rem] w-full overflow-hidden rounded-[4.26667rem] md:rounded-2xl">
        <Image
          alt=""
          height={326}
          width={326}
          className="image-item-slide ease-out duration-300 h-full w-full object-fill bg-slate-500 "
          src={dataCollect?.featuredImage}
        />
      </div>
      <div className="relative z-2 -mt-[21rem] md:-mt-[3.5rem] z-9 left-0 right-0 w-full box-slide ">
        <div className="flex ml-[4.25rem] md:ml-[1rem] mb-[3rem] md:mb-[0.9rem]">
          <div className="p-8 md:p-2 bg-[#CAF2F1] h-[5.33333rem] md:h-[1.25rem] border-[#C5C5C5] border-[1px] rounded-[2.5rem] items-center flex justify-center">
            <p className="text-[3.2rem] md:text-[0.75rem] text-[#454545] font-bold text-center">
              Gọng kính
            </p>
          </div>
          <div className="p-2 bg-[#F58F5D] h-[5.33333rem] md:h-[1.25rem] flex items-center justify-center border-[#C5C5C5] border-[1px] rounded-[2.5rem] ml-[0.25rem]">
            <p className="text-[3.2rem] md:text-[0.75rem] text-white font-bold text-center mb-0">
              Siêu Sale 10.10
            </p>
          </div>
        </div>
        <div className="p-[4.25rem] md:p-[1rem] rounded-[4.26667rem] md:rounded-[1rem] bg-[#FFF] box-slide">
          <span className="text-[4.26667rem] md:text-[1rem] line-clamp-1 mb-[0.25rem] text-[#454545] font-[850]">
            {dataCollect?.name}
          </span>
          <div className="flex justify-between mt-[2.5rem] md:mt-[0.25rem] mb-[2.8rem] md:mb-[0.75rem]">
            <div className="flex">
              {listColor.map(
                (item: any, index: number) =>
                  index <= 3 && (
                    <div
                      key={index}
                      style={{ background: item.color }}
                      className="h-[6.4rem] md:h-[1.5rem] w-[6.4rem] md:w-[1.5rem] rounded-full mr-[0.31rem]"
                    />
                  )
              )}
              <div
                style={{ background: '#A9A9A9' }}
                className="h-[6.4rem] md:h-[1.5rem] w-[6.4rem] md:w-[1.5rem] rounded-full mr-[0.31rem] flex justify-center items-center text-[2.66667rem] md:text-[0.625rem] leading-[0.75rem] font-bold not-italic "
              >
                +{listColor.length - 4}
              </div>
            </div>
            <span className="line-through text-[3.73333rem] md:text-[0.875rem]">{dataCollect?.price}</span>
          </div>
          <div className="bg-[#55D5D2] price-product-slide flex justify-between items-center px-[1.25rem] py-[0.5rem] rounded-[13.33333rem] md:rounded-[3.125rem]">
            <p className="text-[6.4rem] md:text-[1.5rem] font-[850] text-[#fff]">
              {currencyFormat}
            </p>
            <div className="arrow-peoduct-slide p-[0.5rem] text-[#fff]">
              <ArrowTopRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemCollect;
