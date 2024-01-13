import React from 'react';
import { cn } from '@/lib/utils';
import { ICClean } from '@/components/Icons/ICClose';
import StatisticsAction from '@/sections/httt/components/action/popup/statistics';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import Image from 'next/image';
import ICHeart from '@/components/Icons/ICHeart';
import SlideAction from '@/sections/httt/components/action/popup/slide';

interface IPropPopup {
  handleClose: any;
  isShow: boolean;
}
const PopupAction = ({ handleClose, isShow }: IPropPopup) => {
  return (
    <div
      className={cn(
        'fixed h-[100vh] w-full bg-white top-0 left-0 overflow-y-auto',
        isShow ? 'z-20' : 'z-[-1] opacity-0'
      )}
    >
      <div className="relative z-30">
        <div
          className="fixed right-[3rem] top-[2rem] z-40 cursor-pointer"
          onClick={handleClose}
        >
          <ICClean stroke="#444" height={60} width={60} />
        </div>
        <StatisticsAction />
        <div className="relative pb-[5rem]">
          <AspectRatio ratio={3 / 2}>
            <Image
              className="w-full h-full object-cover z-[5] absolute top-0 left-0 opacity-35"
              src={'/img/httt/bg-action.png'}
              alt="background hanh trinh tu te"
              width={1600}
              height={900}
            />
          </AspectRatio>
          <div className="absolute z-10 top-[9.36rem] left-0 w-full">
            <div className="card-title-popup">
              <div className="relative md:max-w-[60.4375rem] m-auto text-center">
                <h3 className="text-[#7BD7D6] font-bold text-[7.46667rem] md:text-[3.5rem]">
                  Các trường hợp được phẫu thuật
                </h3>
                <h4 className="text-[6rem] md:text-[2.5rem] font-semibold text-[#444]">
                  Lorem ipsum dolor sit amet consectetur. Feugiat varius a
                  aenean egestas sed faucibus lorem iaculis lacus.
                </h4>
                <div className="absolute right-[-95px] top-[-80px]">
                  <ICHeart />
                </div>
              </div>
            </div>
            <div className="flex justify-between w-[87.5rem] mx-auto mt-[6.25rem] card-content-popup">
              <div className="w-1/4">
                <SlideAction dir={'ltr'} />
              </div>
              <div className="w-1/4">
                <SlideAction dir={'rtl'} />
              </div>
              <div className="w-1/4">
                <SlideAction dir={'ltr'} />
              </div>
              <div className="w-1/4">
                <SlideAction dir={'rtl'} />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[87.5rem] mx-auto mt-[4.31rem] flex justify-between border-t border-[#828282] py-4rem md:py-1rem">
          <div className="text-[3.66667rem] md:text-base">
            Hành trình tử tế © 2018 - 2023. Thiết kế bởi OkHub Việt Nam{' '}
          </div>
          <div className="flex">
            <p className="text-[3.66667rem] md:text-base pr-[3rem]">Kết nối yêu thương</p>
            <p className="text-[3.66667rem] md:text-base pr-[3rem]">Những câu chuyện tử tế</p>
            <p className="text-[3.66667rem] md:text-base">Túi tử tế</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupAction;
