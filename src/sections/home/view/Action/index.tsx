import { ICArrowTopRightActive } from '@/components/Icons/ICArrowTopRightActive';
import SliceAction from '@/sections/home/view/Action/Slide';
import Image from 'next/image';
import React from 'react';

interface TripType {
  banner: string;
  slider: string[]
}
interface IPropsAction {
  dataTrip: TripType
}
function ActionHome({dataTrip}: IPropsAction) {
  
  return (
    <div className={`p-[6.67rem] sm:p-24 bg-cover`} style={{backgroundImage: `url(${dataTrip?.banner})`}}>
      <div className="flex justify-between items-end">
        <Image
          src="/img/home/Logo_HTTT.png"
          alt=""
          width={201}
          height={120}
          className="w-[12.563rem]"
        />
        <div className="w-[238px] h-[50px] pl-5 pr-1 py-2 bg-zinc-800 bg-opacity-30 rounded-[100px] border border-white backdrop-blur-[5px] justify-between items-center gap-3 inline-flex">
          <div className="text-right text-white text-base font-extrabold">
            Cộng đồng sống tử tế
          </div>
          <div className="p-2.5 bg-white rounded-[100px] justify-start items-center gap-2.5 flex">
            <ICArrowTopRightActive height={25} width={25} />
          </div>
        </div>
      </div>
      <div className="flex justify-center flex-wrap p-10 card-item-action mt-10">
        <div className="w-full md:w-1/2 md:h-[30.125rem] flex-col justify-start items-start gap-5 inline-flex">
          <div className="item-actions self-stretch h-[90rem] md:h-[19.25rem] px-20 md:px-5 py-20 md:py-6 bg-gradient-to-r from-black via-black to-black rounded-tl-[1.75rem] rounded-bl-[1.75rem] border-l border-white flex-col justify-start items-start gap-2 flex">
            <div className="px-5 bg-white bg-opacity-50 rounded-[4.25rem] md:rounded-2xl justify-start items-start gap-2.5 inline-flex">
              <div className="text-center text-white text-[5rem] md:text-[2rem]">
                ĐÔI MẮT MẶT TRỜI
              </div>
            </div>
            <div className="self-stretch px-4 py-3 rounded-xl justify-start items-start inline-flex">
              <div className="grow shrink basis-0 text-white text-[5rem] md:text-xl font-extrabold">
                Tài trợ các ca mổ mắt dị tật bẩm sinh cho các em nhỏ có hoàn
                cảnh khó khăn.
              </div>
            </div>
            <div className="px-5 bg-white bg-opacity-50 rounded-[4.25rem] md:rounded-2xl justify-start items-start gap-2.5 inline-flex">
              <div className="text-center text-white text-[5rem] md:text-[2rem]">
                TÚI TỬ TẾ
              </div>
            </div>
            <div className="self-stretch px-4 py-3 rounded-xl justify-start items-start inline-flex">
              <div className="grow shrink basis-0 text-white text-[5rem] md:text-xl font-extrabold">
                Anna sẽ in 500.000 chiếc túi tử tế nhằm lan toả câu chuyện tìm
                người thân mất lạc, cùng hy vọng phép màu sẽ xảy ra.
              </div>
            </div>
          </div>
          <div className="item-actions self-stretch bg-gradient-to-r from-black via-black to-black rounded-3xl justify-start items-start gap-3 inline-flex flex-wrap">
            <div className="w-full md:w-[12.25rem] md:h-[154px] px-20 md:px-3 py-20 md:py-2.5 rounded-[5.8rem] md:rounded-[1.375rem] border-l border-white sm:max-backdrop-blur-sm justify-start items-center gap-2.5 flex">
              <div className="w-[141px]">
                <span className="text-white text-[8rem] md:text-[2rem] font-black">
                  07
                  <br />
                </span>
                <span className="text-white text-[4rem] md:text-sm">
                  TỈNH THÀNH
                  <br />
                </span>
                <span className="text-white text-[5rem] md:text-base font-bold leading-normal">
                  Hành trình tử tế có mặt
                </span>
              </div>
            </div>
            <div className="w-full md:w-[12.25rem] md:h-[154px] px-20 md:px-3 py-20 md:py-2.5 rounded-[5.8rem] md:rounded-[1.375rem] border-white sm:max-backdrop-blur-sm justify-center items-center gap-2.5 flex">
              <div className="grow shrink basis-0">
                <span className="text-white text-[8rem] md:text-[2rem] font-black">
                  30
                  <br />
                </span>
                <span className="text-white text-[4rem] md:text-sm">
                  EM NHỎ
                  <br />
                </span>
                <span className="text-white text-[5rem] md:text-base font-bold leading-normal">
                  Được tài trợ chi phí phẫu thuật mắt
                </span>
              </div>
            </div>
            <div className="w-full md:w-[12.25rem] md:h-[154px] px-20 md:px-3 py-20 md:py-2.5 rounded-[5.8rem] md:rounded-[1.375rem] border-white sm:max-backdrop-blur-sm justify-center items-center gap-2.5 flex">
              <div className="grow shrink basis-0">
                <span className="text-white text-[8rem] md:text-[2rem] font-black">
                  500.000
                  <br />
                </span>
                <span className="text-white text-[4rem] md:text-sm">
                  TÚI TỬ TẾ
                  <br />
                </span>
                <span className="text-white text-[5rem] md:text-base font-bold leading-normal">
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
    </div>
  );
}

export default ActionHome;
