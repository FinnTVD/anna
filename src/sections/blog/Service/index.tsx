import Image from 'next/image';
import React from 'react';
import serviceImg from '@/assets/blogImg/Rectangle719.png';
import ICArrowRight2 from '@/components/Icons/ICArrowRight2';
import ICSchedule from '@/components/Icons/ICSchedule';

function ServiceBlog() {
  return (
    <div className="py-[6.25rem] px-[5rem] md:px-[10rem] pb-8 md:pb-0">
      <h4 className="text-black text-[9rem] md:text-[2.25rem] font-semibold">
        GÓC TƯ VẤN CHỌN KÍNH ĐẸP
      </h4>
      <div className="py-0 md:py-[2.5rem] flex flex-wrap">
        <div className="w-full md:w-3/5">
          <Image
            src={serviceImg}
            alt=""
            quality={80}
            width={746}
            height={505}
            className="w-full object-cover"
          />
        </div>
        <div className="flex items-center w-full md:w-2/5 bg-stone-300 ">
          <div className="px-[6rem] md:px-[2rem] py-[5rem] md:py-[2rem]">
            <div className="w-[45rem] md:w-[6rem] h-[10rem] md:h-10 flex bg-[#81C8C2] items-center p-6 md:p-2">
              <ICSchedule />
              <div className="text-white text-[3rem] md:text-sm font-normal pl-6 md:pl-2">
                2/3/2022
              </div>
            </div>
            <h5 className="text-[5rem] md:text-[1.75rem] font-semibold pt-10 md:pt-0">
              Trải nghiệm những chiếc kính kết hợp và trọng lượng nhẹ từ bộ sưu
              tập mới
            </h5>
            <p className="text-[4rem] md:text-base md:max-w-[30rem] py-[4rem] md:py-[1rem]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus.
            </p>
            <div className="text-[4rem] md:text-sm font-normal flex items-center hover:text-orange-400 cursor-pointer">
              <span className="pr-[0.5rem]">ĐỌC NGAY</span>
              <ICArrowRight2 fill="black" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceBlog;
