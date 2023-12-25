'use client';

import { HoverCard, HoverCardTrigger } from '@/components/ui/hover-card';
import ICLogo from '@/components/Icons/ICLogo';
import ICLocation from '@/components/Icons/ICLocation';
import { Input } from '@/components/ui/input';
import ICSearch from '@/components/Icons/ICSearch';
import './style.css';
import ICArrowDown from '@/components/Icons/ICArrowDown';
import DropdownProductHeader from '@/components/component-ui-custom/dropdown-product-header';
import DropdownSeeMoreHeader from '@/components/component-ui-custom/dropdown-see-more-header';
import ICCart from '@/components/Icons/ICCart';
import DropdownCartHeader from '@/components/component-ui-custom/dropdown-cart-header';

function NavItems() {
  return (
    <nav className="navbar-container w-full">
      <div className="top-nav flex items-center justify-between ">
        <span className="font-bold text-[0.875rem]  leading-5 uppercase text-[#828282]">
          giảm ngay 15% cho đơn hàng đầu tiên
        </span>
        <div>
          <span className="text-white text-[0.875rem] px-3.5 py-1 bg-[#55D5D2] font-bold rounded-[6.25rem] ">
            Chính sách
          </span>
          <span className="text-white text-[0.875rem] px-3.5 py-1  ml-[0.38rem] bg-[#55D5D2] font-bold rounded-[6.25rem]">
            Tra cứu đơn hàng
          </span>
        </div>
      </div>
      <div className="navbar-main border-2 border-[#55D5D2] w-full flex mt-2 px-7 py-[0.625rem] rounded-[6.25rem]">
        <div className="xl:w-[20px] xl:h-[20px] mr-[1rem]">
          <ICLogo fill="#4DC0BD" width="2.8125rem" height="2.5rem" />
        </div>
        <ul className="grow flex justify-between primary-nav md:flex text-[11px] font-bold items-center">
          <li className="active has-child mx-3.5">
            <HoverCard openDelay={0}>
              <HoverCardTrigger asChild>
                <a href="#" className="px-[6px] py-[4px] flex items-center">
                  <span className="mr-[0.38rem] not-italic font-bold text-[#454545] text-[1.125rem] leading-[1.575rem]">
                    Sản phẩm
                  </span>
                  <ICArrowDown
                    stroke="#454545"
                    width="0.5625rem"
                    height="0.3125rem"
                  />
                </a>
              </HoverCardTrigger>
              <DropdownProductHeader />
            </HoverCard>
          </li>
          <li className="has-child flex items-center mx-3.5">
            <span className="mr-[0.38rem] not-italic font-bold text-[#454545] text-[1.125rem] leading-[1.575rem]">
              Tìm cửa hàng
            </span>
            <ICLocation fill="#4DC0BD" width="1.25rem" height="1.51338rem" />
          </li>
          <li className=" grow has-child  grow mx-3.5">
            <HoverCard openDelay={0}>
              <HoverCardTrigger asChild>
                <div className="relative rounded-[6.25rem] flex items-center">
                  <Input
                    className="input-search rounded-[6.25rem] placeholder-[#4DC0BD] bg-[#EEFBFB] border-[#EEFBFB] focus-visible:outline-0"
                    type="text"
                    placeholder="Tìm kiếm sản phẩm"
                  />
                  <div className="absolute top-[50%] -translate-y-1/2 right-[1rem]">
                    <ICSearch fill="#4DC0BD" width="1.00006rem" height="1rem" />
                  </div>
                </div>
              </HoverCardTrigger>
              <DropdownProductHeader />
            </HoverCard>
          </li>
          <li className="active has-child mx-3.5">
            <HoverCard openDelay={0}>
              <HoverCardTrigger asChild>
                <a href="#" className="px-[6px] py-[4px] flex items-center">
                  <span className="mr-[0.38rem] not-italic font-bold text-[#454545] text-[1.125rem] leading-[1.575rem]">
                    Xem Thêm
                  </span>
                  <ICArrowDown
                    stroke="#454545"
                    width="0.5625rem"
                    height="0.3125rem"
                  />
                </a>
              </HoverCardTrigger>
              <DropdownSeeMoreHeader />
            </HoverCard>
          </li>
          <li className="has-child flex items-center mx-3.5">
            <span className="mr-[0.38rem] not-italic font-bold text-[#454545] text-[1.125rem] leading-[1.575rem]">
              Hành trình tử tế
            </span>
          </li>
          <li className="has-child flex items-center mx-3.5">
            <HoverCard openDelay={0}>
              <HoverCardTrigger asChild>
                <div className="flex relative">
                  <span className="mr-[0.38rem] not-italic font-bold text-[#454545] text-[1.125rem] leading-[1.575rem]">
                    Giỏ hàng
                  </span>
                  <ICCart
                    fill="#4DC0BD"
                    width="1.47381rem"
                    height="1.44581rem"
                  />
                  <div className="flex items-center justify-center absolute -bottom-1.5 -right-1.5 bg-[#F58F5D] rounded-full w-[1.0625rem] h-[1.0625rem] font-bold not-italic text-[0.75rem]">
                    3
                  </div>
                </div>
              </HoverCardTrigger>
              <DropdownCartHeader />
            </HoverCard>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavItems;
