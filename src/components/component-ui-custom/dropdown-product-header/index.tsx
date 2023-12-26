'use client';

import { HoverCardArrow } from '@radix-ui/react-hover-card';
import { HoverCardContent } from '@/components/ui/hover-card';
import ICArrowRight2 from '@/components/Icons/ICArrowRight2';
import Image from 'next/image';

function DropdownProductHeader() {
  const color = '#55D5D2';

  const listProduct = [
    {
      id: 1,
      title: 'Gọng kính',
    },
    {
      id: 1,
      title: 'tròng kính',
    },

    {
      id: 1,
      title: 'Kính râm',
    },
    {
      id: 1,
      title: 'kính trẻ em',
    },
    {
      id: 1,
      title: 'kính ÁP TRÒNG',
    },
  ];

  const listCategory1 = [
    {
      id: 1,
      title: 'Acetate',
    },
    {
      id: 1,
      title: 'Kim loại',
    },
    {
      id: 1,
      title: 'Nhựa',
    },
    {
      id: 1,
      title: 'Nhựa dẻo',
    },
  ];
  const listCategory2 = [
    {
      id: 1,
      title: 'Browline',
    },
    {
      id: 1,
      title: 'Hình vuông',
    },

    {
      id: 1,
      title: 'Mắt mèo',
    },
    {
      id: 1,
      title: 'Oval',
    },
  ];
  return (
    <HoverCardContent
      className="dropdown-product-header rounded-[1.5rem] w-[87.5rem] -ml-[5.5rem] border-none p-0 mt-[1rem]"
      side="bottom"
      align="start"
      sideOffset={6}
    >
      {/* <HoverCardArrow className="fill-white shadow-md"> */}
      <div className="w-full flex justify-between bg-white rounded-[1.5rem] ">
        <div className="py-[1.44rem] px-[2.88rem] w-[29.125rem] border-r-2 border-[#55D5D2]">
          <ul className="w-full">
            {listProduct.map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center mb-[3rem]"
              >
                <span
                  className={`text-[${color}] text-[1.125rem] not-italic font-extrabold leading-[1.6875rem] uppercase`}
                >
                  {item.title}
                </span>
                <ICArrowRight2
                  fill="#55D5D2"
                  width="1.375rem"
                  height="1.375rem"
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="py-[1.5rem] px-[4rem] flex justify-between w-[33rem]">
          <div>
            <h3 className="mb-[1.25rem] text-[1.125rem] not-italic font-extrabold leading-[1.125rem] uppercase">
              Chất liệu
            </h3>
            <ul>
              {listCategory1.map((item, index) => (
                <li key={index} className="flex items-center mb-[1.25rem]">
                  <ICArrowRight2
                    fill="#F58F5D"
                    width="1.25rem"
                    height="1.25rem"
                  />
                  <span className="ml-[0.88rem] text-[#F58F5D] text-[1.125rem] not-italic font-extrabold leading-[1.6875rem]">
                    {item.title}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-[1.25rem] text-[1.125rem] not-italic font-extrabold leading-[1.125rem] uppercase">
              Hình dáng
            </h3>
            <ul>
              {listCategory2.map((item, index) => (
                <li key={index} className="flex items-center mb-[1.25rem]">
                  <ICArrowRight2
                    fill="#F58F5D"
                    width="1.25rem"
                    height="1.25rem"
                  />
                  <span className="ml-[0.88rem] text-[#F58F5D] text-[1.125rem] not-italic font-extrabold leading-[1.6875rem]">
                    {item.title}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex grow items-center justify-center py-[1.5rem]">
          <Image
            height={200}
            width={200}
            className="w-[23.3125rem] h-[25.6875rem] rounded-[1rem]"
            src="https://kinhmatanna.com/wp-content/uploads/2023/09/TU-1636-600x600.png"
            alt=""
          />
        </div>
      </div>
      {/* </HoverCardArrow> */}
    </HoverCardContent>
  );
}

export default DropdownProductHeader;
