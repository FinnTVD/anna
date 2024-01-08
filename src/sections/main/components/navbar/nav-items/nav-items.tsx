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
import { cn } from '@/lib/utils';
import { HoverCardArrow } from '@radix-ui/react-hover-card';
import { delayMenu } from '@/config/config';
import { HoverCardContent } from "@/components/ui-custom/hover-card-without-animate";

interface IProps {
  dataProps: IListProductMenuHeader[] | [];
}
function NavItems(props: IProps) {
  const { dataProps } = props;

  const [currentPositionScrollY, setCurrentPositionScrollY] =
    useState<number>(0);
  const [isShowTopNav, setIsShowTopNav] = useState<boolean>(true);
  const [keyTabMenuActive, setKeyTabMenuActive] = useState<string | null>(null);
  const [numberProductInCart, setNumberProductInCart] = useState<number>(0);
  // const [isShowBlur, setIsShowBlur] = useState<boolean>(false);
  const [startTime, setStartTime] = useState<any>();

  const onOpenChangeDropdown = (
    tab: 'product' | 'see-more' | 'cart' | 'search'
  ) => {
    // console.log('startTime', startTime);
    // console.log('Date.now()', Date.now());
    console.log('move');
    setTimeout(() => {
      if (keyTabMenuActive === null) {
        setKeyTabMenuActive(tab);
        // setStartTime(Date.now());
      }
    }, delayMenu.openDelay);
  };

  console.log('keyTabMenuActive', keyTabMenuActive);

  const onMouseLeaveTabMenu = async () => {
    setStartTime(Date.now());

    await Promise.resolve();

    if (keyTabMenuActive !== null) {
      setKeyTabMenuActive(null);
    }
  };

  const onMove = async (tab: "product" | "see-more" | "cart" | "search") => {
    if (Date.now() - startTime < delayMenu.closeDelay) {
      setKeyTabMenuActive(tab);
    }
  };

  const onLeave = async () => {
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
  }, [localStorage.getItem('listMyCart')]);
  return (
    <nav className={` w-full py-[0.63rem]`}>
      <div className="navbar-container w-[87.5rem] mx-auto">
        <div
          className={cn(
            ' fixed top-0 left-0 h-[100vh] transition-all duration-300 w-full bg-[#0000004d] -z-10 backdrop-blur-[12.5px]',
            keyTabMenuActive !== null ? 'visible' : 'invisible'
          )}
        />

        <div
          className={cn(
            'transition-all  duration-200 overflow-hidden top-nav flex items-center justify-between mb-[0.5rem]',
            isShowTopNav ? 'h-[1.9rem]' : 'h-[0rem]'
          )}
        >
          <span
            className={cn(
              'text-[0.875rem] transition-all duration-300 not-italic leading-[1.3125rem] uppercase',
              keyTabMenuActive !== null
                ? 'text-white'
                : 'text-title-level-black',
              keyTabMenuActive !== null ? 'font-semibold' : 'font-bold'
            )}
          >
            giảm ngay 15% cho đơn hàng đầu tiên
          </span>
          <div className="flex items-center">
            <span
              className={cn(
                'text-white text-[0.875rem]  border-[#ffffff69] not-italic leading-[1.3125rem] px-[0.88rem] py-[0.25rem] bg-[#1d1d1d57] backdrop-blur-[12.5px] font-bold rounded-[6.25rem]',
                keyTabMenuActive !== null ? 'border-[1px]' : 'border-0'
              )}
            >
              Chính sách
            </span>
            <span
              className={cn(
                'text-white text-[0.875rem] border-[1px] border-[#ffffff69]  not-italic leading-[1.3125rem] px-[0.88rem] py-[0.25rem] ml-[0.38rem] bg-[#1d1d1d57] backdrop-blur-[12.5px] font-bold rounded-[6.25rem]',
                keyTabMenuActive !== null ? 'border-[1px]' : 'border-0'
              )}
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
        <div className="h-[3.75rem] hover:border-[1px] border-[#ffffff69] bg-[#1d1d1d42] backdrop-blur-[12.5px] w-full flex items-center rounded-[6.25rem] px-[1.25rem]">
          <Link href="/">
            <ICLogo fill="white" width="2.8125rem" height="2.5rem" />
          </Link>
          <ul className="h-full grow flex justify-between primary-nav md:flex text-[11px] font-bold items-center ml-[2.12rem]">
            <li
              onMouseMove={() => onOpenChangeDropdown('product')}
              onMouseLeave={() => onMouseLeaveTabMenu()}
              className="active has-child h-full group"
            >
              <HoverCard
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
                    onClick={onMouseLeaveTabMenu}
                    className={cn(
                      `flex items-center h-full`,
                      keyTabMenuActive !== 'product'
                        ? 'tab-menu'
                        : 'tab-menu-active'
                    )}
                  >
                    <span className="mr-[0.38rem] not-italic capitalize font-bold text-white text-[1.125rem] leading-[1.575rem]">
                      Sản phẩm
                    </span>
                    <ICArrowDown
                      stroke="white"
                      width="0.7rem"
                      height="0.5rem"
                    />
                  </Link>
                </HoverCardTrigger>

                <HoverCardContent
                  side="bottom"
                  align="start"
                  // sideOffset={6}
                  onMouseLeave={() => onLeave()}
                  onMouseMove={() => onMove('product')}
                  className="w-[87.5rem] -ml-[6rem] rounded-[1.5rem]"
                >
                  <DropdownProductHeader
                    listProduct={dataProps}
                    // onMouseLeaveTabMenu={onMouseLeaveTabMenu}
                  />
                  <HoverCardArrow className="w-[1.625rem] h-[1.25rem] fill-white" />
                </HoverCardContent>
              </HoverCard>
            </li>
            <li className="has-child tab-menu flex items-center ml-[1.75rem]">
              <Link href="/he-thong-cua-hang" className="flex items-center">
                <span className=" cursor-pointer mr-[0.5rem] capitalize not-italic font-bold text-white text-[1.125rem] leading-[1.575rem]">
                  Tìm cửa hàng
                </span>
                <ICLocation fill="white" width="1.25rem" height="1.51338rem" />
              </Link>
            </li>
            <li
              onMouseMove={() => onOpenChangeDropdown('search')}
              onMouseLeave={() => setKeyTabMenuActive(null)}
              className="grow has-child mx-[2.31rem] w-[29rem] h-full"
            >
              <HoverCard
                openDelay={delayMenu.openDelay}
                closeDelay={delayMenu.closeDelay}
                // open={keyTabMenuActive === "search"}
              >
                <HoverCardTrigger>
                  <div className="relative rounded-[1.25rem] flex items-center h-full">
                    <Input
                      className={cn(
                        'input-search px-[1.5rem] py-[0.75rem] border-0 outline-0 rounded-[6.25rem] bg-[#D4D4D4] focus-visible:outline-0',
                        keyTabMenuActive !== null
                          ? 'placeholder-[#7B7B7B]'
                          : 'placeholder-[#F4F4F4]'
                      )}
                      type="text"
                      placeholder="Tìm kiếm sản phẩm"
                    />
                    <div className="absolute top-[50%] -translate-y-1/2 right-[1.5rem]">
                      <ICSearch fill="white" width="1.00006rem" height="1rem" />
                    </div>
                  </div>
                </HoverCardTrigger>
                <HoverCardContent
                  side="bottom"
                  align="start"
                  asChild={false}
                  // sideOffset={6}
                  onMouseLeave={() => onLeave()}
                  onMouseMove={() => onMove('search')}
                  className="w-[30.4375rem] rounded-[1.5rem]"
                >
                  <DropdownSearchHeader />
                </HoverCardContent>
              </HoverCard>
            </li>
            <li
              onMouseMove={() => onOpenChangeDropdown('see-more')}
              onMouseLeave={() => onMouseLeaveTabMenu()}
              className="active has-child h-full"
            >
              <HoverCard
                // open={keyTabMenuActive === 'see-more'}
                openDelay={delayMenu.openDelay}
                closeDelay={delayMenu.closeDelay}
              >
                <HoverCardTrigger asChild>
                  <div
                    className={cn(
                      `cursor-pointer px-[6px] py-[4px] flex items-center h-full`,
                      keyTabMenuActive !== 'see-more'
                        ? 'tab-menu'
                        : 'tab-menu-active'
                    )}
                  >
                    <span className="mr-[0.38rem] capitalize not-italic font-bold text-white text-[1.125rem] leading-[1.575rem]">
                      Xem Thêm
                    </span>
                    <ICArrowDown
                      stroke="white"
                      width="0.7rem"
                      height="0.5rem"
                    />
                  </div>
                </HoverCardTrigger>
                <HoverCardContent
                  side="bottom"
                  align="end"
                  onMouseLeave={() => onLeave()}
                  onMouseMove={() => onMove('see-more')}
                  className="w-[87.5rem] -mr-[21rem] rounded-[1.5rem] relative mt-[12px]"
                >
                  <DropdownSeeMoreHeader
                  // onMouseLeaveTabMenu={onMouseLeaveTabMenu}
                  />
                  <HoverCardArrow className="w-[1.625rem] h-[1.25rem] fill-white" />
                </HoverCardContent>
              </HoverCard>
            </li>
            <li className="tab-menu cursor-pointer has-child flex items-center mx-[1.75rem]">
              <span className="mr-[0.38rem] not-italic capitalize font-bold text-white text-[1.125rem] leading-[1.575rem]">
                Hành trình tử tế
              </span>
            </li>
            <li
              onMouseMove={() => onOpenChangeDropdown('cart')}
              onMouseLeave={() => onMouseLeaveTabMenu()}
              className="cursor-pointer has-child flex items-center h-full"
            >
              <HoverCard
                // open={keyTabMenuActive === 'cart'}
                openDelay={delayMenu.openDelay}
                closeDelay={delayMenu.closeDelay}
              >
                <HoverCardTrigger asChild>
                  <div
                    className={cn(
                      `flex items-center h-full`,
                      keyTabMenuActive !== 'cart'
                        ? 'tab-menu'
                        : 'tab-menu-active'
                    )}
                  >
                    <span className="mr-[0.38rem] not-italic capitalize font-bold text-white text-[1.125rem] leading-[1.575rem]">
                      Giỏ hàng
                    </span>
                    <div className="relative mb-[0.5rem]">
                      <ICCart
                        fill="white"
                        width="1.47381rem"
                        height="1.44581rem"
                      />
                      <div className="flex items-center justify-center absolute -bottom-1.5 -right-1.5 bg-[#F58F5D] rounded-full w-[1.0625rem] h-[1.0625rem] font-bold not-italic text-[0.75rem] leading-[1.125rem]">
                        {numberProductInCart}
                      </div>
                    </div>
                  </div>
                </HoverCardTrigger>
                <HoverCardContent
                  side="bottom"
                  align="end"
                  // sideOffset={6}
                  onMouseLeave={() => onLeave()}
                  onMouseMove={() => onMove('cart')}
                  className="w-[25.875rem] -mr-[1.5rem] relative rounded-[1.5rem]"
                >
                  <DropdownCartHeader
                    numberProductInCart={numberProductInCart}
                    // onMouseLeaveTabMenu={onMouseLeaveTabMenu}
                  />
                  <HoverCardArrow className="w-[1.625rem] h-[1.25rem] fill-white" />
                </HoverCardContent>
              </HoverCard>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavItems;
