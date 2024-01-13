'use client';

import ICCart from '@/components/Icons/ICCart';
import ICSearch from '@/components/Icons/ICSearch';
import ICTabMenu from '@/components/Icons/ICTabMenu';
import ICLocation2 from '@/components/Icons/ICLocation2';
import { ICClean } from '@/components/Icons/ICClose';
import ICLogo from '@/components/Icons/ICLogo';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import ICFacebookFooter from '@/components/Icons/ICFacebookFooter';
import ICInstagramFooter from '@/components/Icons/ICInstagramFooter';
import ICTiktokFooter from '@/components/Icons/ICTiktokFooter';
import ICShopeeFooter from '@/components/Icons/ICShoppeeFooter';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import './style.css';
import ICCartMobile from '@/components/Icons/ICCartMobile';
import { cn } from '@/lib/utils';
import LayoutAttributeHeader from '@/sections/main/components/navbar/nav-mobile-detail/item-attribute-header';

interface IProps {
  dataListProductHeader?: any;
}
function NavMobileDetail(props: IProps) {
  const { dataListProductHeader } = props;
  const [isShowMenu, setIsShowMenu] = useState<boolean>(false);
  const [isShowChildrenMenu, setIsShowChildrenMenu] = useState<any>({
    isShow: false,
    listProductInCategory: [],
  });

  const handleHideChildrenMenu = (): void => {
    setIsShowChildrenMenu({
      isShow: false,
      listProductInCategory: [],
    });
  };

  const handleShowChildrenMenu = (data: any): void => {
    setIsShowChildrenMenu({
      isShow: true,
      listProductInCategory: data,
    });
  };

  const [currentPositionScrollY, setCurrentPositionScrollY] =
    useState<number>(0);
  const [styleNavbar, setStyleNavbar] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const { scrollY } = window;
      setCurrentPositionScrollY(scrollY);
      if (scrollY > currentPositionScrollY && window.scrollY >= 150) {
        setStyleNavbar(true);
      } else {
        setStyleNavbar(false);
      }
    });
  }, [currentPositionScrollY]);
  const handleTogleMenu = (): void => {
    setIsShowMenu(!isShowMenu);
  };

  return (
    <div
      className={cn(
        'py-[2.13rem] px-[3.2rem]  w-full transition-all duration-300',
        styleNavbar ? 'bg-white' : ''
      )}
    >
      {/* <button type="button" onClick={handleTogleMenu} className="pb-[2.67rem]"> */}
      {/*  <ICTabMenu /> */}
      {/* </button> */}
      {/* <Link href="/he-thong-cua-hang" onClick={handleTogleMenu}> */}
      {/*  <div className="mb-[2.67rem]"> */}
      {/*    <ICLocation2 stroke="white" width="6.4rem" height="6.4rem" /> */}
      {/*  </div> */}
      {/* </Link> */}

      {/* <Link href=""> */}
      {/*  <div className="flex justify-center"> */}
      {/*    <ICSearch fill="white" width="5.5rem" height="5.5rem" /> */}
      {/*  </div> */}
      {/* </Link> */}
      <div className="h-[10.67rem] flex">
        <div className="rounded-[26.66667rem] h-[10.67rem] bg-navbar-mobile-detail flex items-center w-[71.2rem] z-10">
          <div className="absolute top-[50%] -translate-y-1/2 left-[3.5rem] z-10">
            <ICSearch fill="#fff" width="5.333rem" height="5.333rem" />
          </div>
          <Input
            className="text-[3.73333rem] text-white h-full not-italic pl-[10.5rem] py-[5rem] rounded-[13.33333rem] border-[1px] border-[#C5C5C5] placeholder-[#fff] bg-[#7F7F7F4D] focus-visible:outline-0"
            type="text"
            placeholder="Tìm sản phẩm"
          />
        </div>
        <Link
          href="/gio-hang"
          // onClick={handleTogleMenu}
          className="mx-[2.93rem] flex items-center"
        >
          <div className="relative w-[7.54293rem] h-[7.54293rem] ml-[0.8rem]">
            <ICCartMobile
              stroke={styleNavbar ? '#454545' : 'white'}
              width="7.54293rem"
              height="7.54293rem"
            />
            <div className="flex items-center justify-center absolute -bottom-1.5 -right-1.5 bg-[#F58F5D] rounded-full w-[3.46667rem] h-[3.46667rem] font-bold not-italic text-[2.13333rem]">
              3
            </div>
          </div>
        </Link>
        <button type="button" onClick={handleTogleMenu}>
          <ICTabMenu stroke={styleNavbar ? '#454545' : 'white'} />
        </button>
      </div>

      {/* children menu */}
      <div
        className={cn(
          'fixed top-0 left-0 z-50 h-full w-full transition-all duration-500',
          isShowChildrenMenu.isShow ? 'opacity-100 z-50' : 'opacity-0 -z-50'
        )}
      >
        <LayoutAttributeHeader
          handleHideChildrenMenu={handleHideChildrenMenu}
          isShowChildrenMenu={isShowChildrenMenu}
          handleTogleMenu={handleTogleMenu}
        />
      </div>

      {/* navbar mobile */}
      <div
        className={`${
          isShowMenu ? 'opacity-100 z-20' : 'opacity-0 -z-20'
        } h-screen w-full fixed transition-all duration-500 top-0 left-0 bg-[#55D5D2] pt-[9.6rem] overflow-y-auto`}
      >
        <div className="px-[3.2rem]">
          <div className="flex justify-between">
            <ICLogo width="18.13333rem" height="16rem" />
            <button type="button" onClick={handleTogleMenu}>
              <ICClean width="6.4rem" height="6.4rem" />
            </button>
          </div>
          <div className="mt-[5.33rem] flex justify-between mb-[6.93rem]">
            <Link
              href="/gio-hang"
              onClick={handleTogleMenu}
              className="flex justify-start items-center bg-white h-[12rem] w-[46.13333rem] rounded-[12rem] py-[2.6667rem] px-[6.4rem]"
            >
              <div className="relative w-[5.83333rem] h-[5.83333rem] mr-[3.2rem]">
                <ICCart fill="#55D5D2" width="5rem" height="5rem" />
                <div className="flex items-center justify-center absolute -bottom-1.5 -right-1.5 bg-[#F58F5D] rounded-full w-[3.46667rem] h-[3.46667rem] font-bold not-italic text-[2.13333rem]">
                  3
                </div>
              </div>
              <span className="text-[3.8888rem] not-italic font-extrabold leading-[5.44453rem] text-[#55D5D2]">
                Giỏ hàng
              </span>
            </Link>
            <Link
              href="/he-thong-cua-hang"
              onClick={handleTogleMenu}
              className="flex justify-start items-center bg-white h-[12rem] w-[46.13333rem] rounded-[12rem] py-[2.6667rem] px-[6.4rem]"
            >
              <ICLocation2
                stroke="#55D5D2"
                width="5.83333rem"
                height="5.83333rem"
              />
              <span className="text-[3.8888rem] not-italic font-extrabold leading-[5.44453rem] text-[#55D5D2]">
                Tìm cửa hàng
              </span>
            </Link>
          </div>
          <span className="text-[5.33333rem] text-white not-italic font-extrabold leading-[7.46667rem] ">
            Sản phẩm
          </span>
          <ul className="mt-[2rem] list-disc list-inside grid grid-cols-2">
            {dataListProductHeader &&
              dataListProductHeader.map((item: any, index: number) => (
                <li
                  key={index}
                  onClick={() => handleShowChildrenMenu(item)}
                  className="text-[3.73333rem] text-white not-italic font-extrabold leading-[4.85333rem] uppercase py-[2.27rem] mb-[0.93rem]"
                >
                  {item?.name}
                </li>
              ))}
          </ul>
          <hr className="bg-white mt-[2.13rem] mb-[6.93rem]" />
          <Link href="/ve-anna" onClick={handleTogleMenu}>
            <h3 className="text-[5.33333rem] text-white not-italic font-extrabold leading-[7.46667rem] ">
              Về ANNA
            </h3>
          </Link>
          <Link href="/" onClick={handleTogleMenu}>
            <h3 className="text-[5.33333rem] text-white not-italic font-extrabold leading-[7.46667rem] my-[3.2rem]">
              Tra cứu đơn hàng
            </h3>
          </Link>
          <Link href="/blog" onClick={handleTogleMenu}>
            <h3 className="text-[5.33333rem] text-white not-italic font-extrabold leading-[7.46667rem] ">
              Blog
            </h3>
          </Link>
        </div>
        <div className="bg-white w-full py-[8.53rem] pl-[3.2rem] rounded-t-[4.26667rem] mt-[16rem]">
          <h3 className="text-[6.4rem] not-italic font-extrabold leading-[9.6rem] ">
            Hành trình tử tế
          </h3>
          <div className="my-[4.8rem] flex overflow-x-auto">
            <div className="mr-[1.6rem] w-[213px] relative">
              <Image
                height={420}
                width={420}
                className="h-[38.66667rem] w-full rounded-[4.288rem] object-cover shrink-0"
                src="/img/header/image4.png"
                alt=""
              />
              <div className="absolute left-0 top-0 h-[38.66667rem] rounded-[4.288rem] w-full bg-[#001515] bg-opacity-40 flex justify-center items-center">
                <span className="text-[3.73333rem] text-white leading-[5.22667rem] not-italic font-extrabold uppercase">
                  TÚI TỬ TẾ
                </span>
              </div>
            </div>
            <div className="w-[213px] relative">
              <Image
                height={420}
                width={420}
                className="h-[38.66667rem] w-full rounded-[4.288rem] object-cover shrink-0"
                src="/img/header/image5.png"
                alt=""
              />
              <div className="absolute left-0 top-0 h-[38.66667rem] rounded-[4.288rem] w-full bg-[#001515] bg-opacity-40 flex justify-center items-center">
                <span className="text-[3.73333rem] text-white leading-[5.22667rem] not-italic font-extrabold uppercase">
                  ĐÔI MẮT MẶT TRỜI
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between pr-[3.2rem]">
            <span className="text-[3.73333rem] text-[#4DC0BD] not-italic font-extrabold leading-[5.22667rem]">
              KẾT NỐI VỚI ANNA
            </span>
            <div className="grid grid-cols-4 gap-[4.27rem]">
              <ICFacebookFooter
                strokeWidth="4"
                stroke="#55D5D2"
                width="6.4rem"
                height="6.4rem"
              />
              <ICInstagramFooter
                strokeWidth="4"
                stroke="#55D5D2"
                width="6.4rem"
                height="6.4rem"
              />
              <ICTiktokFooter
                strokeWidth="4"
                stroke="#55D5D2"
                width="6.4rem"
                height="6.4rem"
              />
              <ICShopeeFooter
                strokeWidth="4"
                stroke="#55D5D2"
                width="6.4rem"
                height="6.4rem"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavMobileDetail;
