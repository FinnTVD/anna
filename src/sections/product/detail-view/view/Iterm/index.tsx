import React from 'react';
import { ArrowTopRightActive, ColorPink } from '@/app/icons';
import './style.css';

function ItermMobile() {
  return (
    <div className="relative max-sm:h-[14.125rem]">
      <div className="overflow-hidden rounded-[1rem] ">
        <img
          className="h-[20.375rem] object-cover  max-sm:h-[9.375rem]"
          src="https://images.unsplash.com/photo-1519638399535-1b036603ac77?q=80&w=3131&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
      <div className="absolute z-99 bottom-0 left-0 right-0 w-full md:h-[8.5rem] box-slide max-sm:h-[5.75rem]">
        <div className="flex ml-[1rem]">
          <div className="bg-[#CAF2F1] h-[1.4375rem] border-[#C5C5C5] border-[1px] rounded-[2.5rem] items-center mb-[0.62rem] w-[4.875rem] max-sm:h-[1.0625rem]  flex justify-center">
            <p className="text-[0.75rem]  text-[#454545] font-bold leading-[1.2375rem] h-[1.4375rem] text-center items-center max-sm:text-[0.625rem] max-sm:leading-[1.4rem]">
              Gọng kính
            </p>
          </div>
          <div className="bg-[#F58F5D] h-[1.4375rem] border-[#C5C5C5] border-[1px] rounded-[2.5rem] mb-[0.62rem] w-[6.375rem] ml-[0.25rem] max-sm:hidden">
            <p className="text-[0.75rem]  text-white font-bold leading-[1.2375rem] h-[1.4375rem] text-center items-center ">
              Siêu Sale 10.10
            </p>
          </div>
        </div>
        <div className="p-[1rem] rounded-[1rem] bg-[#FFF] box-slide max-sm:p-[0.5rem]">
          <span className="text-[1rem] text-[#454545] font-[850] leading-[1.2rem] mb-[0.25rem] max-sm:text-[0.875rem] max-sm:leading-[1.225rem] max-sm:mb-[0.25rem]">
            GK – 380CK081
          </span>
          {/* list color */}
          <div className="flex justify-between mb-[0.75rem]">
            <ul className="flex max-sm:order-2">
              <li>
                <ColorPink />
              </li>
              <li>
                <ColorPink />
              </li>
              <li>
                <ColorPink />
              </li>
              <li>
                <ColorPink />
              </li>
              <li>
                <ColorPink />
              </li>
            </ul>
            <span className="line-through max-sm:text-[0.625rem] font-bold max-sm:leading-[0.875rem] text-[#6A6A6A]">
              440.000đ
            </span>
          </div>
          {/* button */}
          <div />
          <div className="price-product-slide flex  justify-between items-center px-[1.25rem] py-[0.5rem] rounded-[3.125rem] max-sm:py-[0.38rem] max-sm:px-[0.75rem] max-sm:h-[1.875rem] max-sm:rounded-[2.5rem] border-[1px] border-[#55D5D2]">
            <p className="text-[1.5rem] font-[850] text-white max-sm:text-[0.875rem] max-sm:leading-[1.1375rem] max-sm:text-[#55D5D2]">
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

export default ItermMobile;
