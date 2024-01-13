import ICQueto from '@/components/Icons/ICQueto';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import Image from 'next/image';
import React from 'react';

const Share = () => {
  return (
    <div className="mt-[8rem] md:py-[6.25rem] relative">
      <AspectRatio ratio={2 / 1}>
        <Image
          className="w-full h-full object-cover z-[5] absolute top-0 left-0 opacity-35"
          src={'/img/httt/banner_desktop.jpg'}
          alt="background hanh trinh tu te"
          width={1600}
          height={900}
        />
      </AspectRatio>
      <div className="absolute z-10 top-1/2 -translate-y-1/2 left-0">
        <div></div>
        <div>
          <div className="py-[1.44rem] border-b border-[#414141]">
            <h3 className="flex">
              <span className="text-[#7BD7D6] font-bold text-[7.46667rem] md:text-[3.5rem]">Chia Sẻ Về Hành Trình</span>
              <ICQueto />
            </h3>
          </div>
          <div className="py-6">
            <h4 className="py-6 text-[#414141] md:text-[2rem] font-bold">Tun Phạm</h4>
            <span className="py-4">Diễn viên, 24 tuổi</span>
          </div>
          <div className="">
            <h4 className="text-[#414141] md:text-[1.375rem] font-bold">
              Hành trình này cần được kéo dài mãi
            </h4>
            <p className="py-4 md:max-w-[32.0625rem] text-[#414141] md:text-[1.25rem]">
              Tun sẽ không bao giờ dừng lại trên Hành trình Tử tế by Anna, đây
              là một hành trình nhân ái, tiếp sức cộng đồng đầy ý nghĩa “ và cần
              được nối dài mãi mãi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;
