'use client';

import { HoverCardContent } from '@/components/ui/hover-card';
import ICArrowRight2 from '@/components/Icons/ICArrowRight2';
import Image from 'next/image';
import { IListProductMenuHeader } from '@/types/types-general';
import './style.css';
import { useState } from 'react';
import Link from 'next/link';

interface IProps {
  listProduct?: IListProductMenuHeader[] | [];
  onMouseLeaveTabMenu?: any;
}
function DropdownProductHeader(props: IProps) {
  const { listProduct, onMouseLeaveTabMenu } = props;
  const [listProductInCategory, setListProductInCategory] = useState<
    IListProductMenuHeader[] | []
  >([]);
  const [keyCategoryMenu, setKeyCategoryMenu] = useState<string | undefined>(
    undefined
  );

  const handleMouseCategory = (value: any): void => {
    setListProductInCategory(value);
  };

  return (
    <HoverCardContent
      onMouseLeave={onMouseLeaveTabMenu}
      className="dropdown-product-header-container relative dropdown-product-header rounded-[1.5rem] w-[87.5rem] -ml-[6.2rem] border-none p-0 -mt-[0.2rem] pt-[1rem] "
      side="bottom"
      align="start"
      // sideOffset={6}
    >
      <div
        onMouseLeave={() => {
          setKeyCategoryMenu(undefined);
        }}
        className="w-full flex justify-between bg-red rounded-[1.5rem] "
      >
        <div className="py-[1.44rem] px-[2.88rem] w-[29.125rem] border-r-2 border-[#55D5D2]">
          <ul className="w-full">
            {listProduct &&
              listProduct.map((item, index) => (
                <li
                  key={index}
                  onMouseMove={() => {
                    handleMouseCategory(item.children);
                    setKeyCategoryMenu(item.name);
                  }}
                  className={`${
                    keyCategoryMenu === item.name ? 'item-Category-active' : ''
                  } item-category-product cursor-pointer  mb-[3rem]`}
                >
                  <Link
                    href={`/danh-muc-san-pham/${item.slug}`}
                    className="flex justify-between items-center"
                  >
                    <span className="text-[1.125rem] not-italic font-extrabold leading-[1.6875rem] uppercase">
                      {item.name}
                    </span>
                    <ICArrowRight2
                      fill="#55D5D2"
                      width="1.375rem"
                      height="1.375rem"
                    />
                  </Link>
                </li>
              ))}
          </ul>
        </div>
        <div className="py-[1.5rem] px-[4rem] flex justify-between w-[33rem]">
          {listProductInCategory.map((item, index) => (
            <div key={index}>
              <h3 className="mb-[1.25rem] text-[1.125rem] not-italic font-extrabold leading-[1.125rem] uppercase">
                {item.name}
              </h3>
              <ul className="-ml-[1.95rem]">
                {item?.children &&
                  item?.children.map((itemChild, index) => (
                    <li
                      key={index}
                      className="item-sub-category-product cursor-pointer flex items-center mb-[1.25rem]"
                    >
                      <ICArrowRight2
                        fill="#F58F5D"
                        width="1.25rem"
                        height="1.25rem"
                      />
                      <span className="ml-[0.88rem] text-[1.125rem] not-italic font-extrabold leading-[1.6875rem]">
                        {itemChild.name}
                      </span>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex grow items-center justify-center py-[1.5rem] rounded-[1rem]">
          {/* {listProduct && listProduct?.length > 0 ? ( */}
          {/*  <Image */}
          {/*    height={200} */}
          {/*    width={200} */}
          {/*    className="w-[23.3125rem] h-full " */}
          {/*    src={ */}
          {/*      listProduct && listProduct[1]?.link */}
          {/*        ? listProduct[1].link */}
          {/*        : '/img/no_image.jpg' */}
          {/*    } */}
          {/*    alt="" */}
          {/*  /> */}
          {/* ) : ( */}
          {/*  <Image */}
          {/*    height={200} */}
          {/*    width={200} */}
          {/*    className="w-[23.3125rem] h-full " */}
          {/*    src="/img/no_image.jpg" */}
          {/*    alt="no-image" */}
          {/*  /> */}
          {/* )} */}
          <Image
            height={200}
            width={200}
            className="w-[23.3125rem] h-[25.6875rem] object-cover"
            src="/img/about-us/content2.jpg"
            alt="no-image"
          />
        </div>
      </div>
    </HoverCardContent>
  );
}

export default DropdownProductHeader;
