'use client';

import { HoverCardContent } from '@/components/ui/hover-card';
import ICArrowRight2 from '@/components/Icons/ICArrowRight2';

function DropdownSearchHeader() {
  const color = '#55D5D2';

  const listTextOutstanding = [
    {
      id: 1,
      title: 'Essilor',
    },
    {
      id: 1,
      title: 'Elements',
    },
    {
      id: 1,
      title: 'Chemi',
    },
    {
      id: 1,
      title: 'Kodak',
    },
    {
      id: 1,
      title: 'Essilor',
    },
    {
      id: 1,
      title: 'Elements',
    },
    {
      id: 1,
      title: 'Chemi',
    },
    {
      id: 1,
      title: 'Kodak',
    },
    {
      id: 1,
      title: 'Essilor',
    },
    {
      id: 1,
      title: 'Elements',
    },
    {
      id: 1,
      title: 'Chemi',
    },
    {
      id: 1,
      title: 'Kodak',
    },
    {
      id: 1,
      title: 'Essilor',
    },
    {
      id: 1,
      title: 'Elements',
    },
    {
      id: 1,
      title: 'Chemi',
    },
    {
      id: 1,
      title: 'Kodak',
    },
  ];
  const listHistory = [
    {
      id: 1,
      title: 'Kính áp tròng không khô mắt',
    },
    {
      id: 1,
      title: 'Kính áp tròng không khô mắt',
    },
    {
      id: 1,
      title: 'Kính áp tròng không khô mắt',
    },
    {
      id: 1,
      title: 'Kính áp tròng không khô mắt',
    },
  ];
  return (
    <HoverCardContent
      className="border-none rounded-[1.5rem] p-0 w-[32.4375rem] "
      side="bottom"
      align="start"
      sideOffset={6}
    >
      <div className="py-[2.25rem] bg-white w-[32.4375rem] rounded-[1.5rem]">
        <span className="px-[1.75rem] uppercase text-[#C5C5C5] text-[0.75rem] not-italic font-extrabold leading-[1.125rem]">
          LỊCH SỬ TÌM KIẾM
        </span>
        <ul className="mt-[1.5rem] px-[1.75rem]">
          {listHistory.map((item, index) => (
            <li
              key={index}
              className="flex items-center justify-between pb-[1.2rem] last:border-b-0 border-b-2 border-b-[#ECECEC] mb-[1.2rem] "
            >
              <span
                className={`text-[${color}] text-[1rem] not-italic font-bold leading-[1.5rem]`}
              >
                {item.title}
              </span>
              <div className="rotate-[321deg]">
                <ICArrowRight2 fill="#55D5D2" width="1.1rem" height="1.1rem" />
              </div>
            </li>
          ))}
        </ul>
        <div className="w-full h-[1.375rem] bg-[#ECECEC]" />
        <div className="px-[1.75rem] pt-[1.8rem]">
          <span className="uppercase text-[#C5C5C5] text-[0.75rem] not-italic font-extrabold leading-[1.125rem]">
            TỪ KHÓA NỔI BẬT
          </span>
          <ul className="mt-[1.5rem] flex flex-wrap ">
            {listTextOutstanding.map((item, index) => (
              <li
                key={index}
                className="mb-[0.5rem] mr-[0.38rem] w-fit h-fit py-[0.3125rem] px-[1rem] rounded-[6.25rem] bg-[#55D5D2] text-[0.875rem] text-white not-italic leading-[1.3125rem] font-bold "
              >
                {item.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </HoverCardContent>
  );
}

export default DropdownSearchHeader;
