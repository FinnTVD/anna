import React from 'react';
import { ArrowTopRight } from '@/app/icons';
import "./style.css";

function Item() {
  return (
    <div className="item-slider-product max-sm:h-[15.125rem] cursor-pointer relative">
      <div className="h-[20.375rem] w-full overflow-hidden">
        <img
          className="image-item-slide h-full object-fill max-sm:h-[9.375rem] bg-slate-500 "
          src="https://images.unsplash.com/photo-1519638399535-1b036603ac77?q=80&w=3131&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
      <div className="z-9 left-0 right-0 w-full box-slide max-sm:h-[5.75rem]">
        <div className="flex ml-[1rem]">
          <div className="lg:mb-mb-[0.75rem] bg-[#CAF2F1] h-[1.25rem] border-[#C5C5C5] border-[1px] rounded-[2.5rem] items-center w-[4.875rem] max-sm:h-[1.0625rem]  flex justify-center">
            <p className="text-[0.75rem] text-[#454545] font-bold leading-[0.9rem] text-center">
              Gọng kính
            </p>
          </div>
          <div className="lg:mb-mb-[0.75rem] bg-[#F58F5D] h-[1.4375rem] flex items-center justify-center border-[#C5C5C5] border-[1px] rounded-[2.5rem] w-[6.375rem] ml-[0.25rem] max-sm:hidden">
            <p className="text-[0.75rem] text-white font-bold leading-[0.9rem] text-center mb-0">
              Siêu Sale 10.10 
            </p>
          </div>
        </div>
        <div className="p-[1rem] rounded-[1rem] bg-[#FFF] box-slide max-sm:p-[0.5rem]">
          <span className="text-[1rem] mb-[0.25rem] text-[#454545] font-[850] leading-[1.2rem] max-sm:text-[0.875rem] max-sm:leading-[1.225rem] max-sm:mb-[0.25rem]">
            GK – 380CK081 111
          </span>
          <div className="bg-[#55D5D2] price-product-slide flex justify-between items-center px-[1.25rem] py-[0.5rem] rounded-[3.125rem] max-sm:py-[0.38rem] max-sm:px-[0.75rem] max-sm:h-[1.875rem] max-sm:rounded-[2.5rem]">
            <p className="text-[1.5rem] font-[850] text-[#fff] max-sm:text-[0.875rem] max-sm:leading-[1.8rem] max-sm:text-[#55D5D2]">
              320.000đ
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

export default Item;
