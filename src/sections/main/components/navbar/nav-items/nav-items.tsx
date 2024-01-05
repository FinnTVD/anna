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
import Link from 'next/link';
import DropdownSearchHeader from '@/components/component-ui-custom/dropdown-search-header';
import { useEffect, useState } from 'react';
import ICUser from '@/components/Icons/ICUser';
import { IListProductMenuHeader } from '@/types/types-general';

interface IProps {
  dataProps: IListProductMenuHeader[] | [];
}
function NavItems(props: IProps) {
  const { dataProps } = props;

  const [currentPositionScrollY, setCurrentPositionScrollY] =
    useState<number>(0);
  const [isShowTopNav, setIsShowTopNav] = useState<boolean>(true);
  const [keyTabMenuActive, setKeyTabMenuActive] = useState<string | null>(null);

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
  return (
    <nav className="navbar-container w-[87.5rem] mx-auto">
      {keyTabMenuActive !== null && (
        <div className=" fixed top-0 left-0 h-[100vh] w-full bg-[#0000004d] -z-10 backdrop-opacity-[5px]" />
      )}

      <div
        className={`${
          isShowTopNav ? 'h-[1.84rem]' : 'h-[0rem]'
        } transition-all  duration-200 overflow-hidden top-nav flex items-center justify-between mb-[0.5rem]`}
      >
        <span
          className={` text-[0.875rem] transition-all duration-300 not-italic leading-[1.3125rem] uppercase ${
            keyTabMenuActive !== null ? 'text-white' : 'text-[#828282]'
          } ${keyTabMenuActive !== null ? 'font-semibold' : 'font-bold'} `}
        >
          giảm ngay 15% cho đơn hàng đầu tiên
        </span>
        <div className="flex items-center">
          <span className="text-white text-[0.875rem] not-italic leading-[1.3125rem] px-[0.88rem] py-[0.25rem] bg-[#55D5D2] font-bold rounded-[6.25rem] ">
            Chính sách
          </span>
          <span className="text-white text-[0.875rem] not-italic leading-[1.3125rem] px-[0.88rem] py-[0.25rem]  ml-[0.38rem] bg-[#55D5D2] font-bold rounded-[6.25rem]">
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
      <div className="h-[3.75rem] border-2 border-[#55D5D2] bg-white w-full flex items-center rounded-[6.25rem] px-[1.25rem]">
        <Link href="/">
          <ICLogo fill="#4DC0BD" width="2.8125rem" height="2.5rem" />
        </Link>
        <ul className="h-full grow flex justify-between primary-nav md:flex text-[11px] font-bold items-center ml-[2.12rem]">
          <li
            onMouseMove={() => onOpenChangeDropdown('product')}
            onMouseLeave={() => setKeyTabMenuActive(null)}
            className="active has-child h-full"
          >
            <HoverCard
              open={keyTabMenuActive === 'product'}
              openDelay={0}
              closeDelay={0}
            >
              <HoverCardTrigger asChild>
                <Link
                  style={{
                    paddingLeft: 0,
                    paddingRight: 0,
                  }}
                  href="/cua-hang"
                  onClick={onMouseLeaveTabMenu}
                  className={`${
                    keyTabMenuActive !== 'product'
                      ? 'tab-menu'
                      : 'tab-menu-active'
                  } flex items-center h-full`}
                >
                  <span className="mr-[0.38rem] not-italic font-bold text-[#454545] text-[1.125rem] leading-[1.575rem]">
                    Sản phẩm
                  </span>
                  <ICArrowDown
                    stroke="#454545"
                    width="0.7rem"
                    height="0.5rem"
                  />
                </Link>
              </HoverCardTrigger>
              <div>
                <DropdownProductHeader
                  listProduct={dataProps}
                  onMouseLeaveTabMenu={onMouseLeaveTabMenu}
                />
              </div>
            </HoverCard>
          </li>
          <li className="has-child tab-menu flex items-center ml-[1.75rem]">
            <Link href="/he-thong-cua-hang" className="flex items-center">
              <span className="cursor-pointer mr-[0.5rem] not-italic font-bold text-[#454545] text-[1.125rem] leading-[1.575rem]">
                Tìm cửa hàng
              </span>
              <ICLocation fill="#4DC0BD" width="1.25rem" height="1.51338rem" />
            </Link>
          </li>
          <li
            onMouseMove={() => onOpenChangeDropdown('search')}
            onMouseLeave={() => setKeyTabMenuActive(null)}
            className="grow has-child mx-[2.31rem] w-[29rem] h-full"
          >
            <HoverCard
              open={keyTabMenuActive === 'search'}
              openDelay={0}
              closeDelay={0}
            >
              <HoverCardTrigger asChild>
                <div className="relative rounded-[1.25rem] flex items-center h-full">
                  <Input
                    className="input-search px-[1.5rem] py-[0.75rem] rounded-[1.25rem] placeholder:italic placeholder-[#4DC0BD] bg-[#EEFBFB] border-[#EEFBFB] focus-visible:outline-0"
                    type="text"
                    placeholder="Tìm kiếm sản phẩm"
                  />
                  <div className="absolute top-[50%] -translate-y-1/2 right-[1.5rem]">
                    <ICSearch fill="#4DC0BD" width="1.00006rem" height="1rem" />
                  </div>
                </div>
              </HoverCardTrigger>
              <DropdownSearchHeader />
            </HoverCard>
          </li>
          <li
            onMouseMove={() => onOpenChangeDropdown('see-more')}
            onMouseLeave={() => setKeyTabMenuActive(null)}
            className="active has-child h-full"
          >
            <HoverCard
              open={keyTabMenuActive === 'see-more'}
              openDelay={0}
              closeDelay={0}
            >
              <HoverCardTrigger asChild>
                <div
                  className={`${
                    keyTabMenuActive !== 'see-more'
                      ? 'tab-menu'
                      : 'tab-menu-active'
                  }  cursor-pointer px-[6px] py-[4px] flex items-center h-full`}
                >
                  <span className="mr-[0.38rem] not-italic font-bold text-[#454545] text-[1.125rem] leading-[1.575rem]">
                    Xem Thêm
                  </span>
                  <ICArrowDown
                    stroke="#454545"
                    width="0.7rem"
                    height="0.5rem"
                  />
                </div>
              </HoverCardTrigger>
              <DropdownSeeMoreHeader
                onMouseLeaveTabMenu={onMouseLeaveTabMenu}
              />
            </HoverCard>
          </li>
          <li className="tab-menu cursor-pointer has-child flex items-center mx-[1.75rem]">
            <span className="mr-[0.38rem] not-italic font-bold text-[#454545] text-[1.125rem] leading-[1.575rem]">
              Hành trình tử tế
            </span>
          </li>
          <li
            onMouseMove={() => onOpenChangeDropdown('cart')}
            onMouseLeave={() => setKeyTabMenuActive(null)}
            className="cursor-pointer has-child flex items-center h-full"
          >
            <HoverCard
              open={keyTabMenuActive === 'cart'}
              openDelay={0}
              closeDelay={0}
            >
              <HoverCardTrigger asChild>
                <div
                  className={`${
                    keyTabMenuActive !== 'cart' ? 'tab-menu' : 'tab-menu-active'
                  } flex items-center relative h-full`}
                >
                  <span className="mr-[0.38rem] not-italic font-bold text-[#454545] text-[1.125rem] leading-[1.575rem]">
                    Giỏ hàng
                  </span>
                  <ICCart
                    fill="#4DC0BD"
                    width="1.47381rem"
                    height="1.44581rem"
                  />
                  <div className="flex items-center justify-center absolute bottom-2.5 -right-1.5 bg-[#F58F5D] rounded-full w-[1.0625rem] h-[1.0625rem] font-bold not-italic text-[0.75rem] leading-[1.125rem]">
                    3
                  </div>
                </div>
              </HoverCardTrigger>
              <DropdownCartHeader onMouseLeaveTabMenu={onMouseLeaveTabMenu} />
            </HoverCard>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavItems;
