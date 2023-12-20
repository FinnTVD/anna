import React from 'react';
import { ArrowTopRightActive } from '@/app/icons';
import './style.css';

function ItemMobile() {
  const listColor = [
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
  return (
    <div className="relative max-md:h-[50rem] max-md:w-[45.2rem]">
      <div className="overflow-hidden rounded-[1rem] ">
        <img
          className=" object-cover h-[40rem]"
          src="https://images.unsplash.com/photo-1519638399535-1b036603ac77?q=80&w=3131&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
      <div className="absolute z-99 bottom-[1rem] w-full md:h-[8.5rem] box-slide">
        <div className="bg-[#CAF2F1] border-[#C5C5C5] border-[1px] rounded-[2.5rem] items-center mb-[0.62rem] flex justify-center w-fit">
          <p className="text-[2.66667rem] text-[#454545] font-bold py-[0.2rem] px-[1.6rem] text-center items-center">
            Gọng kính
          </p>
        </div>
        <div className="p-[2.13rem] rounded-[3.2rem] bg-[#FFF] box-slide">
          <span className="text-[1rem] text-[#454545] font-[850] leading-[1.2rem] mb-[0.25rem] max-md:text-[3.73333rem] max-md:leading-[5.22667rem] mb-[3.25rem]">
            GK – 380CK081
          </span>
          {/* list color */}
          <div className="flex justify-between mb-[1.6rem]">
            <span className="line-through text-[2.66667rem] font-bold leading-[3.73333rem] text-[#6A6A6A]">
              440.000đ
            </span>
            <div className="flex">
              {listColor.map(
                (item: any, index: number) =>
                  index <= 3 && (
                    <div
                      key={index}
                      style={{ background: item.color }}
                      className="h-[3.2rem] w-[3.2rem] rounded-full ml-[1.07rem]"
                    />
                  )
              )}
              <div
                style={{ background: '#A9A9A9' }}
                className="h-[3.2rem] w-[3.2rem] rounded-full ml-[1.07rem] flex justify-center items-center text-[2.13333rem] leading-[2.56rem] font-bold not-italic "
              >
                +{listColor.length - 4}
              </div>
            </div>
          </div>
          {/* button */}
          <div />
          <div className="price-product-slide flex justify-between items-center rounded-[10.66667rem] py-[1.6rem] px-[3.2rem] rounded-[2.5rem] border-[1px] border-[#55D5D2]">
            <p className="text-[3.73333rem] font-[850] leading-[4.85333rem] text-[#55D5D2]">
              320.000đ
            </p>
            <div className="arrow-peoduct-slide p-[0.5rem]">
              <ArrowTopRightActive />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemMobile;
