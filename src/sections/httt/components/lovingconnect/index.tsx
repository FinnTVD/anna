import ICEmail from '@/components/Icons/ICEmail';
import ICLocation from '@/components/Icons/ICLocation';

import ICLovingFace from '@/components/Icons/ICLovingFace';
import ICLovingInsta from '@/components/Icons/ICLovingInsta';
import ICLovingTiktok from '@/components/Icons/ICLovingTiktok';
import ICLovingTwitter from '@/components/Icons/ICLovingTwitter';
import ICPhone from '@/components/Icons/ICPhone';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const LovingConnect = () => {
  return (
    <div className="relative">
      <AspectRatio ratio={3 / 1}>
        <Image
          className="w-full h-full object-cover z-[5] absolute top-0 left-0"
          src={'/img/httt/bg-loving.jpg'}
          alt="background hanh trinh tu te"
          width={1600}
          height={534}
          style={{ opacity: 0.35 }}
        />
      </AspectRatio>
      <div className="absolute z-10 top-[4.36rem] left-0 w-full">
        <div className="flex flex-wrap w-[87.5rem] mx-auto">
          <div className="w-full md:w-1/2 px-[1rem]">
            <h3 className="text-[#7BD7D6] font-bold text-[7.46667rem] md:text-[3.5rem]">
              Kết Nối Yêu Thương
            </h3>
            <div className="flex items-center pt-[2.25rem]">
              <ICPhone stroke="#7BD7D6" fill="#7BD7D6" width={22} height={22} />
              <span className="font-semibold px-2 text-[4.26667rem] md:text-[1.25rem]">
                Liên hệ:
              </span>
              <Link
                href="tel:0888.071.297"
                className="text-[3.73333rem] md:text-base"
              >
                0888.071.297
              </Link>
            </div>
            <div className="flex items-center">
              <ICEmail stroke="#7BD7D6" fill="#7BD7D6" width={22} height={22} />
              <span className="font-semibold px-2 text-[4.26667rem] md:text-[1.25rem]">
                Email:
              </span>
              <span className="text-[3.73333rem] md:text-base">
                kinhmatanna@gmail.com
              </span>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-[1rem] py-[1rem]">
            <div className="flex">
              <div className="pr-[1.54rem]">
                <ICLovingFace />
              </div>
              <div className="pr-[1.54rem]">
                <ICLovingTwitter />
              </div>
              <div className="pr-[1.54rem]">
                <ICLovingTiktok />
              </div>
              <div className="pr-[1.54rem]">
                <ICLovingInsta />
              </div>
            </div>
            <div className="pt-[2.25rem]">
              <div className="flex items-center">
                <ICLocation fill="#7BD7D6" width={22} height={22} />
                <p className="font-semibold text-[4.26667rem] md:text-[1.25rem] pl-[0.75rem]">
                  Địa điểm:
                </p>
              </div>
              <p className="text-[3.73333rem] md:text-[1.125rem] leading-[1.6875rem]">
                Dự kiến 30.000+ học sinh bản CAO và XA khó khăn trong hơn 60 xã
                thuộc 7 huyện khó nhất của tỉnh Điện Biên: Huyện Mường Nhé,
                huyện Nậm Pồ, huyện Điện Biên Đông và Mường Chà, Tủa Chùa ,
                Mường Ảng, TP.Điện Biên Phủ, Huyện Điện Biên.
              </p>
              <p className="text-[3.73333rem] md:text-[1.125rem] pt-[1rem]">
                - Tỉnh Cao Bằng : Huyện Bảo Lâm
              </p>
              <p className="text-[3.73333rem] md:text-[1.125rem] pt-[1rem]">- Tỉnh Gia Lai</p>
              <p className="text-[3.73333rem] md:text-[1.125rem] pt-[1rem]">
                - Tỉnh Đắk Lắk .....
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LovingConnect;
