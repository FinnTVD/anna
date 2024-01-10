import { ICArrowTopRightActive } from '@/components/Icons/ICArrowTopRightActive';
import SliceAction from '@/sections/home/view/Action/Slide';
import Image from 'next/image';
import React from 'react';

interface TripType {
  banner: string;
  slider: string[];
}
interface IPropsAction {
  dataTrip: TripType;
}
function ActionHome({ dataTrip }: IPropsAction) {
  return (
    <div
      className="py-[6.4rem] md:!pt-[2.19rem] sm-px-0 sm:py-[7.19rem]  bg-cover"
      style={{ backgroundImage: `url(${dataTrip?.banner})` }}
    >
      <div className="container">
        <div className="flex justify-between items-end">
          <Image
            src="/img/home/Logo_HTTT.png"
            alt=""
            width={201}
            height={120}
            className="w-[25rem] md:w-[12.563rem]"
          />
          <div className="h-[50px] pl-5 pr-1 py-2 bg-zinc-800 bg-opacity-30 rounded-[100px] border border-white backdrop-blur-[5px] justify-between items-center gap-3 hidden md:inline-flex">
            <div className="text-right text-white text-[4rem] md:text-base font-extrabold">
              Cộng đồng sống tử tế
            </div>
            <div className="p-2.5 bg-white rounded-[100px] justify-start items-center gap-2.5 flex">
              <ICArrowTopRightActive height={25} width={25} />
            </div>
          </div>
        </div>
        <div className="flex justify-center flex-wrap md:px-8 md:py-6 card-item-action mt-10">
          <div className="w-full md:w-1/2 md:h-[30.125rem] flex-col justify-start items-start gap-5 inline-flex">
            <div className="item-actions self-stretch px-[3.2rem] md:px-5 py-20 md:py-6 bg-gradient-to-r from-black via-black to-black rounded-tl-[1.75rem] rounded-bl-[1.75rem] border-l border-white flex-col justify-start items-start gap-2 flex">
              <div className="max-md:w-full px-5 bg-white bg-opacity-50 rounded-[4.25rem] md:rounded-[1rem] justify-start items-start gap-2.5 inline-flex">
                <div className="text-center w-full text-white text-[3.733rem] font-extrabold md:text-[2rem] max-md:p-[1.5rem]">
                  ĐÔI MẮT MẶT TRỜI
                </div>
              </div>
              <div className="self-stretch px-4 py-6 md:py-3 rounded-xl justify-start items-start inline-flex">
                <div className="grow shrink basis-0 text-white text-[3.733rem] md:text-xl font-bold md:font-extrabold">
                  Tài trợ các ca mổ mắt dị tật bẩm sinh cho các em nhỏ có hoàn
                  cảnh khó khăn.
                </div>
              </div>
              <div className="max-md:w-full px-5 bg-white bg-opacity-50 rounded-[4.25rem] md:rounded-[1rem] justify-start items-start gap-2.5 inline-flex">
                <div className="text-center w-full text-white text-[3.733rem] font-extrabold md:text-[2rem] max-md:p-[1.5rem]">
                  TÚI TỬ TẾ
                </div>
              </div>
              <div className="self-stretch px-4 py-6 md:py-3 rounded-xl justify-start items-start inline-flex">
                <div className="grow shrink basis-0 text-white text-[3.733rem] md:text-xl font-bold md:font-extrabold">
                  Anna sẽ in 500.000 chiếc túi tử tế nhằm lan toả câu chuyện tìm
                  người thân mất lạc, cùng hy vọng phép màu sẽ xảy ra.
                </div>
              </div>
            </div>
            <div className="item-actions self-stretch bg-gradient-to-r from-black via-black to-black rounded-3xl justify-start items-start gap-3 inline-flex">
              <div className="flex flex-col-reverse justify-end h-full w-1/3 px-[2rem] md:px-3 py-12 md:py-2.5 rounded-[5.8rem] md:rounded-[1.375rem] border-l border-white sm:max-backdrop-blur-sm justify-start items-center gap-2.5 flex">
                <div className="">
                  <span className="text-white text-[5rem] md:text-[2rem] font-black">
                    07
                    <br />
                  </span>
                  <span className="text-white text-[3rem] md:text-sm font-black">
                    TỈNH THÀNH
                    <br />
                  </span>
                  <span className="text-white text-[3rem] md:text-base md:font-bold leading-normal">
                    Hành trình tử tế có mặt
                  </span>
                </div>
              </div>
              <div className="flex flex-col-reverse justify-end h-full w-1/3 px-0 md:px-3 py-12 md:py-2.5 rounded-[5.8rem] md:rounded-[1.375rem] border-white sm:max-backdrop-blur-sm justify-center items-center gap-2.5 flex">
                <div className="grow shrink basis-0">
                  <span className="text-white text-[5rem] md:text-[2rem] font-black">
                    30
                    <br />
                  </span>
                  <span className="text-white text-[3rem] md:text-sm font-black">
                    EM NHỎ
                    <br />
                  </span>
                  <span className="text-white text-[3rem] md:text-base md:font-bold leading-normal">
                    Được tài trợ chi phí phẫu thuật mắt
                  </span>
                </div>
              </div>
              <div className="flex flex-col-reverse justify-end h-full w-1/3 px-[2rem] md:px-3 py-12 md:py-2.5 rounded-[5.8rem] md:rounded-[1.375rem] border-white sm:max-backdrop-blur-sm justify-center items-center gap-2.5 flex">
                <div className="grow shrink basis-0">
                  <span className="text-white text-[5rem] md:text-[2rem] font-black">
                    500.000
                    <br />
                  </span>
                  <span className="text-white text-[3rem] md:text-sm font-black">
                    TÚI TỬ TẾ
                    <br />
                  </span>
                  <span className="text-white text-[3rem] md:text-base md:font-bold leading-normal">
                    Được phát tặng để tìm người thân thất lạc
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 mt-10 md:mt-0">
            <SliceAction dataSlider={dataTrip?.slider} />
          </div>
        </div>
        <div className="inline-flex md:hidden w-full h-[50px] pl-5 pr-1 py-2 bg-zinc-800 bg-opacity-30 rounded-[100px] border border-white backdrop-blur-[5px] justify-center items-center gap-3">
          <div className="text-right text-white text-[4rem] md:text-base font-extrabold">
            Cộng đồng sống tử tế
          </div>
          <ICArrowTopRightActive height={25} width={25} stroke="#fff" />
        </div>
      </div>
    </div>
  );
}

export default ActionHome;
