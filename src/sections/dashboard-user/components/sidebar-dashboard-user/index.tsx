'use client';

import React from 'react';
import Image from 'next/image';
import { ICHome } from '@/components/Icons/ICHome';
import { ICProduct } from '@/components/Icons/ICProduct';
import { ICLogout } from '@/components/Icons/ICLogout';
import { ICUser2 } from '@/components/Icons/ICUser2';
import './style.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function SidebarDashboardUser() {
  const pathname = usePathname();

  const listTab = [
    {
      icon: <ICProduct width="1.25rem" height="1.25rem" fill="#414141" />,
      title: 'Danh sách sản phẩm',
      route: '/list-product-dashboard',
    },
    {
      icon: <ICUser2 width="1.25rem" height="1.25rem" stroke="#414141" />,
      title: 'Thông tin tài khoản',
      route: '/user-info',
    },
    {
      icon: <ICHome width="1.25rem" height="1.25rem" stroke="#414141" />,
      title: 'Thông tin địa chỉ',
      route: '/address-info',
    },
    {
      icon: <ICLogout width="1.25rem" height="1.25rem" stroke="#414141" />,
      title: 'Đăng xuất',
      route: '#',
    },
  ];
  return (
    <div className="side-bar-dashboard-user bg-white w-1/3 flex flex-col items-center py-[3rem] px-[1rem] rounded-[1rem] max-md:w-full">
      <Image
        src="/img/no_image.jpg"
        height={31}
        width={124}
        className="w-[7.9375rem] object-cover h-[7.9375rem] rounded-full max-md:w-[34.133rem] max-md:h-[34.133rem]"
        alt="Logo"
      />
      <h3 className="font-Nexa-Bold font-semibold text-[1.875rem] not-italic my-[0.5rem] max-md:text-[8rem]">
        Nguyen Minh Hung
      </h3>
      <p className="font-Nexa-Normal mb-[1rem] text-[1rem] max-md:text-[4.267rem]">
        hungnm.17k2@gmail.com
      </p>
      <hr className="bg-white" />
      <div className="mt-[1rem] w-[57%] h-[15rem] max-md:w-full max-md:h-auto">
        {listTab.map((item, index) => (
          <Link
            href={item.route}
            key={index}
            className={`${
              pathname === item.route
                ? 'sidebar-dashboard-hover'
                : 'item-memu-sidebar'
            } cursor-pointer mb-[0.2rem] flex items-center py-[0.3rem] rounded-[0.4rem] transition-all duration-150`}
          >
            <div className="w-[1.2rem]">{item.icon}</div>
            <span className="font-Nexa-Normal font-medium ml-[0.5rem] mt-[0.2rem]">
              {item.title}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SidebarDashboardUser;
