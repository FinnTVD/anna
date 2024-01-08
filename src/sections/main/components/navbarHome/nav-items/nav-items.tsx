'use client';

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';
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
import Link from 'next/link';
import DropdownSearchHeader from '@/components/component-ui-custom/dropdown-search-header';
import { useEffect, useState } from 'react';
import ICUser from '@/components/Icons/ICUser';
import { IListProductMenuHeader } from '@/types/types-general';
import { HoverCardArrow } from '@radix-ui/react-hover-card';
import { delayMenu } from '@/config/config';

interface IProps {
  dataProps: IListProductMenuHeader[] | [];
  styleNavbar: boolean;
}
function NavItems(props: IProps) {
  const { dataProps, styleNavbar } = props;

  const [currentPositionScrollY, setCurrentPositionScrollY] =
    useState<number>(0);
  const [isShowTopNav, setIsShowTopNav] = useState<boolean>(true);
  const [keyTabMenuActive, setKeyTabMenuActive] = useState<string | null>(null);
  const [numberProductInCart, setNumberProductInCart] = useState<number>(0);
  const onOpenChangeDropdown = (
    tab: 'product' | 'see-more' | 'cart' | 'search'
  ) => {
    setKeyTabMenuActive(tab);
  };

  const onMouseLeaveTabMenu = (): void => {
    setKeyTabMenuActive(null);
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const { scrollY } = window;
      setCurrentPositionScrollY(scrollY);

      if (scrollY > currentPositionScrollY) {
        setIsShowTopNav(false);
      } else setIsShowTopNav(true);
    });
  }, [currentPositionScrollY]);

  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      localStorage.getItem('listMyCart') !== null
    ) {
      const listProduct: any = localStorage.getItem('listMyCart');
      setNumberProductInCart(JSON.parse(listProduct).length);
    }
  }, []);
  return (
    <nav className="container">
      {keyTabMenuActive !== null && (
        <div className=" fixed top-0 left-0 h-[100vh] w-full bg-navbar-main-home -z-10" />
      )}

      <div
        className={`${
          isShowTopNav ? 'h-[1.84rem]' : 'h-[0rem]'
        } transition-all  duration-200 overflow-hidden top-nav flex items-center justify-between mb-[0.5rem]`}
      >
        <span
          className={` text-[0.875rem] transition-all duration-300 not-italic leading-[1.3125rem] uppercase ${
            keyTabMenuActive !== null || !styleNavbar
              ? 'text-white'
              : 'text-[#828282]'
          } ${keyTabMenuActive !== null ? 'font-semibold' : 'font-bold'} `}
        >
          giảm ngay 15% cho đơn hàng đầu tiên
        </span>
        <div className="flex items-center">
          <span
            className={`${
              styleNavbar ? 'bg-[#55D5D2]' : 'bg-[#1D1D1D42]'
            } text-white text-[0.875rem] not-italic leading-[1.3125rem] px-[0.88rem] py-[0.25rem]  font-bold rounded-[6.25rem] `}
          >
            Chính sách
          </span>
          <span
            className={`${
              styleNavbar ? 'bg-[#55D5D2]' : 'bg-[#1D1D1D42]'
            } text-white text-[0.875rem] not-italic leading-[1.3125rem] px-[0.88rem] py-[0.25rem] ml-[0.38rem] font-bold rounded-[6.25rem] `}
          >
            Tra cứu đơn hàng
          </span>
          <Link
            href="/list-product-dashboard"
            className="h-full w-auto p-[0.25rem] ml-[0.4rem] flex justify-center items-center rounded-full border-[1px] border-[#ACACAC]"
          >
            <ICUser width="1rem" height="1rem" />
          </Link>
        </div>
      </div>
      <div
        className={`${
          styleNavbar ? 'bg-white border-2 border-[#55D5D2]' : 'bg-[#1D1D1D42]'
        } h-[3.75rem] w-full flex items-center rounded-[6.25rem] px-[1.25rem]`}
      >
        <Link href="/">
          <ICLogo
            fill={`${styleNavbar ? '#4DC0BD' : '#fff'}`}
            width="2.8125rem"
            height="2.5rem"
          />
        </Link>
        <ul className="h-full grow flex justify-between primary-nav md:flex text-[11px] font-bold items-center ml-[2.12rem]">
          <li
            onMouseMove={() => onOpenChangeDropdown('product')}
            onMouseLeave={() => setKeyTabMenuActive(null)}
            className="active navbar-home has-child h-full"
          >
            <HoverCard
              // open={true}
              // open={keyTabMenuActive === 'product'}
              // openDelay={5000}
              // closeDelay={0}
              openDelay={delayMenu.openDelay}
              closeDelay={delayMenu.closeDelay}
            >
              <HoverCardTrigger asChild>
                <Link
                  style={{
                    paddingLeft: 0,
                    paddingRight: 0,
                  }}
                  href="/cua-hang"
                  className={`${
                    keyTabMenuActive === null ? 'tab-menu' : 'tab-menu-active'
                  } flex items-center h-full`}
                >
                  <span
                    className={`mr-[0.38rem] not-italic font-bold text-[#454545] text-[1.125rem] leading-[1.575rem] ${
                      styleNavbar ? 'text-[#454545]' : 'text-[#fff]'
                    }`}
                  >
                    Sản phẩm
                  </span>
                  <ICArrowDown
                    stroke={`${styleNavbar ? '#454545' : '#fff'}`}
                    width="0.7rem"
                    height="0.5rem"
                  />
                </Link>
              </HoverCardTrigger>

              <HoverCardContent
                side="bottom"
                align="start"
                // sideOffset={6}
                className="container-dropdown-menu rounded-[1.5rem]"
              >
                <DropdownProductHeader
                  listProduct={dataProps}
                  onMouseLeaveTabMenu={onMouseLeaveTabMenu}
                />
                <HoverCardArrow className="w-[1.625rem] h-[1.25rem] fill-white !left-[30px]" />
              </HoverCardContent>
            </HoverCard>
          </li>
          <li className="has-child">
            <Link
              href="/he-thong-cua-hang"
              className="tab-menu flex items-center ml-[1.75rem]"
            >
              <span
                className={`${
                  styleNavbar ? 'text-[#454545]' : 'text-[#fff]'
                } cursor-pointer mr-[0.5rem] not-italic font-bold text-[#454545] text-[1.125rem] leading-[1.575rem]`}
              >
                Tìm cửa hàng
              </span>
              <ICLocation
                fill={`${styleNavbar ? '#4DC0BD' : '#fff'}`}
                width="1.25rem"
                height="1.51338rem"
              />
            </Link>
          </li>
          <li
            onMouseMove={() => onOpenChangeDropdown('search')}
            onMouseLeave={() => setKeyTabMenuActive(null)}
            className="grow has-child mx-[2.31rem] w-[30.4375rem] h-full"
          >
            <HoverCard
              // open={keyTabMenuActive === 'search'}
              // openDelay={0}
              // closeDelay={0}
              // open
              openDelay={delayMenu.openDelay}
              closeDelay={delayMenu.closeDelay}
            >
              <HoverCardTrigger asChild={false}>
                <div className="relative rounded-[1.25rem] flex items-center h-full">
                  <Input
                    className={`${
                      styleNavbar
                        ? 'placeholder-[#4DC0BD]'
                        : 'opacity-25	placeholder-[#fff]'
                    }input-search px-[1.5rem] py-[0.75rem] rounded-[1.25rem] placeholder:opacity: 0.75 bg-[#EEFBFB] border-[#EEFBFB] focus-visible:outline-0`}
                    type="text"
                    placeholder="Tìm kiếm sản phẩm"
                  />
                  <div className="absolute top-[50%] -translate-y-1/2 right-[1.5rem]">
                    <ICSearch fill="#4DC0BD" width="1.00006rem" height="1rem" />
                  </div>
                </div>
              </HoverCardTrigger>
              <HoverCardContent
                side="bottom"
                align="start"
                // sideOffset={6}
                className="rounded-[1.5rem] w-[30.4375rem]"
              >
                <DropdownSearchHeader />
              </HoverCardContent>
            </HoverCard>
          </li>
          <li
            onMouseMove={() => onOpenChangeDropdown('see-more')}
            onMouseLeave={() => setKeyTabMenuActive(null)}
            className="active has-child h-full"
          >
            <HoverCard
              // open={keyTabMenuActive === 'see-more'}
              // openDelay={0}
              // closeDelay={0}
              openDelay={delayMenu.openDelay}
              closeDelay={delayMenu.closeDelay}
            >
              <HoverCardTrigger asChild>
                <div className="tab-menu cursor-pointer px-[6px] py-[4px] flex items-center h-full">
                  <span
                    className={`${
                      styleNavbar ? 'text-[#454545]' : 'text-[#fff]'
                    } mr-[0.38rem] not-italic font-bold text-[#454545] text-[1.125rem] leading-[1.575rem]`}
                  >
                    Xem Thêm
                  </span>
                  <ICArrowDown
                    stroke={`${styleNavbar ? '#454545' : '#fff'}`}
                    width="0.7rem"
                    height="0.5rem"
                  />
                </div>
              </HoverCardTrigger>
              <HoverCardContent
                side="bottom"
                align="start"
                // sideOffset={6}
                className="container-dropdown-menu rounded-[1.5rem]"
              >
                <DropdownSeeMoreHeader
                  onMouseLeaveTabMenu={onMouseLeaveTabMenu}
                />
                <HoverCardArrow className="w-[1.625rem] h-[1.25rem] fill-white left-[30px] !left-[780px]" />
              </HoverCardContent>
            </HoverCard>
          </li>
          <li className="tab-menu cursor-pointer has-child flex items-center mx-[1.75rem]">
            <span
              className={`${
                styleNavbar ? 'text-[#454545]' : 'text-[#fff]'
              } mr-[0.38rem] not-italic font-bold text-[#454545] text-[1.125rem] leading-[1.575rem]`}
            >
              Hành trình tử tế
            </span>
          </li>
          <li
            onMouseMove={() => onOpenChangeDropdown('cart')}
            onMouseLeave={() => setKeyTabMenuActive(null)}
            className="cursor-pointer has-child flex items-center h-full"
          >
            <HoverCard
              // open={keyTabMenuActive === 'cart'}
              // openDelay={0}
              // closeDelay={0}
              openDelay={delayMenu.openDelay}
              closeDelay={delayMenu.closeDelay}
            >
              <HoverCardTrigger asChild>
                <div className="tab-menu flex items-center relative h-full">
                  <span
                    className={`${
                      styleNavbar ? 'text-[#454545]' : 'text-[#fff]'
                    } mr-[0.38rem] not-italic font-bold text-[#454545] text-[1.125rem] leading-[1.575rem]`}
                  >
                    Giỏ hàng
                  </span>
                  <ICCart
                    fill={`${styleNavbar ? '#4DC0BD' : '#fff'}`}
                    width="1.47381rem"
                    height="1.44581rem"
                  />
                  <div className="flex items-center justify-center absolute bottom-2.5 -right-1.5 bg-[#F58F5D] rounded-full w-[1.0625rem] h-[1.0625rem] font-bold not-italic text-[0.75rem] leading-[1.125rem]">
                    {numberProductInCart}
                  </div>
                </div>
              </HoverCardTrigger>
              <HoverCardContent
                side="bottom"
                align="start"
                // sideOffset={6}
                className="container-dropdown-menu rounded-[1.5rem] !w-[414px]"
              >
                <DropdownCartHeader
                  numberProductInCart={numberProductInCart}
                  onMouseLeaveTabMenu={onMouseLeaveTabMenu}
                />
                <HoverCardArrow className="w-[1.625rem] h-[1.25rem] fill-white !left-[30px]" />
              </HoverCardContent>
            </HoverCard>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavItems;
