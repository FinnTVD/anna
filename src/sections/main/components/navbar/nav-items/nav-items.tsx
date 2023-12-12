'use client';

import { Session } from 'next-auth';
import { HoverCardArrow } from '@radix-ui/react-hover-card';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';
import ICLogo from '@/components/Icons/ICLogo';
import ICLocation from '@/components/Icons/ICLocation';
import ICArrowDown from '@/components/Icons/ICArrowDown';
import ICCart from '@/components/Icons/ICCart';
import { Input } from '@/components/ui/input';
import ICSearch from '@/components/Icons/ICSearch';
import './index.css';

interface IProps {
  session: Session | null;
}

function NavItems({ session }: IProps) {
  return (
    <nav className="navbar-container w-full">
      <div className="top-nav flex items-center justify-between ">
        <span className="font-bold text-sm leading-5 uppercase text-[#828282]">
          giảm ngay 15% cho đơn hàng đầu tiên
        </span>
        <div>
          <span className="text-white px-3.5 py-1 bg-[#55D5D2] text-sm font-bold rounded-[6.25rem] ">
            Chính sách
          </span>
          <span className="text-white px-3.5 py-1  ml-[0.38rem] bg-[#55D5D2] text-sm font-bold rounded-[6.25rem]">
            Tra cứu đơn hàng
          </span>
        </div>
      </div>
      <div className="navbar-main w-full flex mt-2 bg-[#55D5D2] px-7 py-[0.625rem] rounded-[6.25rem]">
        <div className="w-[2.8125rem] h-[2.5rem]">
          <ICLogo />
        </div>
        <ul className="grow flex justify-between primary-nav hidden md:flex text-[11px] font-bold items-center">
          <li className="active has-child mx-3.5">
            <HoverCard openDelay={0}>
              <HoverCardTrigger asChild>
                <a
                  href="src/sections/main-layout/components/navbar/nav-items"
                  className="px-[6px] py-[4px] flex items-center"
                >
                  <span className="mr-[0.38rem] not-italic font-bold text-white text-[1.125rem] leading-[1.575rem]">
                    Sản phẩm
                  </span>
                  <ICArrowDown />
                </a>
              </HoverCardTrigger>
              <HoverCardContent
                className="border-none p-0"
                side="bottom"
                align="start"
              >
                <ul>
                  <li className="border-b px-2 py-[6px]">
                    <a
                      className="uppercase font-bold"
                      href="src/sections/main-layout/components/navbar/nav-items"
                    >
                      Map Full Screen Sidebar Results
                    </a>
                  </li>
                  <li className="border-b px-2 py-[6px]">
                    <a
                      className="uppercase font-bold"
                      href="src/sections/main-layout/components/navbar/nav-items"
                    >
                      Map Full Screen Sidebar Results
                    </a>
                  </li>
                  <li className="border-b px-2 py-[6px]">
                    <a
                      className="uppercase font-bold"
                      href="src/sections/main-layout/components/navbar/nav-items"
                    >
                      Map Full Screen Sidebar Results
                    </a>
                  </li>
                  <li className="border-b px-2 py-[6px]">
                    <a
                      className="uppercase font-bold"
                      href="src/sections/main-layout/components/navbar/nav-items"
                    >
                      Map Full Screen Sidebar Results
                    </a>
                  </li>
                </ul>
                <HoverCardArrow className="fill-white shadow-md" />
              </HoverCardContent>
            </HoverCard>
          </li>
          <li className="has-child flex items-center mx-3.5">
            <span className="mr-[0.38rem] not-italic font-bold text-white text-[1.125rem] leading-[1.575rem]">
              Tìm cửa hàng
            </span>
            <ICLocation />
          </li>
          <li className="relative rounded-[6.25rem] grow has-child flex items-center w-[30.4375rem] mx-3.5">
            <Input
              className="input-search rounded-[6.25rem] placeholder-[#A9A9A9]"
              _placeholder={{ fontWeight: 400 }}
              type="text"
              placeholder="Tìm kiếm sản phẩm"
            />
            <div className="absolute top-[31%] right-[1rem]">
              <ICSearch />
            </div>
          </li>
          <li className="active has-child mx-3.5">
            <HoverCard openDelay={0}>
              <HoverCardTrigger asChild>
                <a
                  href="src/sections/main-layout/components/navbar/nav-items"
                  className="px-[6px] py-[4px] flex items-center"
                >
                  <span className="mr-[0.38rem] not-italic font-bold text-white text-[1.125rem] leading-[1.575rem]">
                    Xem Thêm
                  </span>
                  <ICArrowDown />
                </a>
              </HoverCardTrigger>
              <HoverCardContent
                className="border-none p-0"
                side="bottom"
                align="start"
              >
                <ul>
                  <li className="border-b px-2 py-[6px]">
                    <a
                      className="uppercase font-bold"
                      href="src/sections/main-layout/components/navbar/nav-items"
                    >
                      Map Full Screen Sidebar Results
                    </a>
                  </li>
                  <li className="border-b px-2 py-[6px]">
                    <a
                      className="uppercase font-bold"
                      href="src/sections/main-layout/components/navbar/nav-items"
                    >
                      Map Full Screen Sidebar Results
                    </a>
                  </li>
                  <li className="border-b px-2 py-[6px]">
                    <a
                      className="uppercase font-bold"
                      href="src/sections/main-layout/components/navbar/nav-items"
                    >
                      Map Full Screen Sidebar Results
                    </a>
                  </li>
                  <li className="border-b px-2 py-[6px]">
                    <a
                      className="uppercase font-bold"
                      href="src/sections/main-layout/components/navbar/nav-items"
                    >
                      Map Full Screen Sidebar Results
                    </a>
                  </li>
                </ul>
                <HoverCardArrow className="fill-white shadow-md" />
              </HoverCardContent>
            </HoverCard>
          </li>
          <li className="has-child flex items-center mx-3.5">
            <span className="mr-[0.38rem] not-italic font-bold text-white text-[1.125rem] leading-[1.575rem]">
              Hành trình tử tế
            </span>
            <ICLocation />
          </li>
          <li className="has-child flex items-center mx-3.5">
            <span className="mr-[0.38rem] not-italic font-bold text-white text-[1.125rem] leading-[1.575rem]">
              Giỏ hàng
            </span>
            <div className="relative">
              <ICCart />
              <div className="flex items-center justify-center absolute -bottom-1.5 -right-1.5 bg-[#F58F5D] rounded-full w-[1.0625rem] h-[1.0625rem] font-bold not-italic">
                3
              </div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavItems;
