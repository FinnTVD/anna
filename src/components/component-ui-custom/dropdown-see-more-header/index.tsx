'use client';

import { HoverCardArrow } from '@radix-ui/react-hover-card';
import { HoverCardContent } from '@/components/ui/hover-card';
import Image from "next/image";
import ICArrowRight2 from "@/components/Icons/ICArrowRight2";

function DropdownSeeMoreHeader() {
  const color = '#55D5D2';

  const listSeemore = [
    {
      id: 1,
      title: 'Giúp bạn chọn kính',
    },
    {
      id: 1,
      title: 'Về chúng tôi',
    },
    {
      id: 1,
      title: 'blog',
    },
  ];

  return (
    <HoverCardContent
      className="border-none p-0 w-[87.5rem] -mr-[21rem] rounded-[1.5rem] mt-[1rem]"
      side="bottom"
      align="end"
      sideOffset={6}
    >
      <div className="w-full flex justify-between bg-white rounded-[1.5rem]">
        <div className="py-[2rem] px-[2.88rem] w-[24.5rem] border-r-2 border-[#55D5D2] ">
          <ul className="w-full">
            {listSeemore.map((item, index) => (
              <li key={index} className="mb-[3rem]">
                <span
                  className={`text-[${color}] text-[1.125rem] not-italic font-extrabold leading-[1.6875rem] uppercase`}
                >
                  {item.title}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex grow items-center justify-between p-[2rem]">
          <div className="w-[18.66669rem] h-[19.3125rem] relative flex justify-center">
            <Image
              height={200}
              width={200}
              className="w-[18.66669rem] h-[19.3125rem] rounded-[0.75rem]"
              src="https://kinhmatanna.com/wp-content/uploads/2023/09/TU-1636-600x600.png"
              alt=""
            />
            <button
              type="button"
              className="absolute bottom-2 rounded-[6.25rem] pl-[1.25rem] pt-[0.25rem] pr-[0.25rem] pb-[0.25rem] bg-[#F58F5D] flex justify-between items-center"
            >
              <span className="text-[0.8125rem] text-white not-italic font-extrabold leading-[0.975rem] mr-[0.75rem]">
                CHỌN KÍNH THEO KHUÔN MẶT
              </span>
              <div className="bg-white rounded-full p-[0.8125rem] h-fit w-fit flex justify-center items-center">
                <div className="rotate-[321deg] ">
                  <ICArrowRight2
                    fill="#F58F5D"
                    width="1.1rem"
                    height="1.1rem"
                  />
                </div>
              </div>
            </button>
          </div>
          <div className="w-[18.66669rem] h-[19.3125rem] relative flex justify-center">
            <Image
              height={200}
              width={200}
              className="w-[18.66669rem] h-[19.3125rem] rounded-[0.75rem]"
              src="https://kinhmatanna.com/wp-content/uploads/2023/09/TU-1636-600x600.png"
              alt=""
            />
            <button
              type="button"
              className="absolute bottom-2 rounded-[6.25rem] pl-[1.25rem] pt-[0.25rem] pr-[0.25rem] pb-[0.25rem] bg-[#F58F5D] flex justify-between items-center"
            >
              <span className="text-[0.8125rem] text-white not-italic font-extrabold leading-[0.975rem] mr-[0.75rem]">
                CHỌN KÍNH THEO KHUÔN MẶT
              </span>
              <div className="bg-white rounded-full p-[0.8125rem] h-fit w-fit flex justify-center items-center">
                <div className="rotate-[321deg] ">
                  <ICArrowRight2
                    fill="#F58F5D"
                    width="1.1rem"
                    height="1.1rem"
                  />
                </div>
              </div>
            </button>
          </div>
          <div className="w-[18.66669rem] h-[19.3125rem] relative flex justify-center">
            <Image
              height={200}
              width={200}
              className="w-[18.66669rem] h-[19.3125rem] rounded-[0.75rem]"
              src="https://kinhmatanna.com/wp-content/uploads/2023/09/TU-1636-600x600.png"
              alt=""
            />
            <button
              type="button"
              className="absolute bottom-2 rounded-[6.25rem] pl-[1.25rem] pt-[0.25rem] pr-[0.25rem] pb-[0.25rem] bg-[#F58F5D] flex justify-between items-center"
            >
              <span className="text-[0.8125rem] text-white not-italic font-extrabold leading-[0.975rem] mr-[0.75rem]">
                CHỌN KÍNH THEO KHUÔN MẶT
              </span>
              <div className="bg-white rounded-full p-[0.8125rem] h-fit w-fit flex justify-center items-center">
                <div className="rotate-[321deg] ">
                  <ICArrowRight2
                    fill="#F58F5D"
                    width="1.1rem"
                    height="1.1rem"
                  />
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </HoverCardContent>
  );
}

export default DropdownSeeMoreHeader;
