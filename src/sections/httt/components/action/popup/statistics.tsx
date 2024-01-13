'use client'
import ICStart from '@/components/Icons/ICStart';
import map from 'lodash.map';
import React from 'react';
import CountUp from 'react-countup';

const dataMock = [
  {
    startQuantity: 0,
    endQuantity: 30,
    title: 'Em nhỏ',
    des: 'Được tài trợ chi phí phẫu thuật mắt',
  },
  {
    startQuantity: 0,
    endQuantity: 294,
    title: 'TRIỆU VNĐ',
    des: 'Số tiền Kính mắt Anna đóng góp xây dựng quỹ',
  },
  {
    startQuantity: 0,
    endQuantity: 1046,
    title: 'LƯỢT CHIA SẺ',
    des: 'Các câu chuyện của Hành trình Tử tế',
  },
  {
    startQuantity: 0,
    endQuantity: 7,
    title: 'TỈNH THÀNH',
    des: 'Hành trình Tử tế có mặt',
  },
];
const StatisticsAction = () => {
  return (
    <div className="w-[87.5rem] mx-auto mt-[6.25rem]">
      <div className="flex">
        <ICStart />
        <p className="text-[3.2rem] md:text-[0.875rem]">LÁ LÀNH ĐÙM LÁ RÁCH</p>
      </div>
      <div className="py-[3.2rem] md:py-[0.75rem]">
        <p className="text-[1.75rem] text-[#414141] font-semibold leading-[2.625rem] md:max-w-[45.4375rem]">
          Chuyến hành trình của{' '}
          <span className="text-[#7BD7D6]">“Hành trình tử tế by Anna”</span> sẽ
          luôn tiếp tục tiến về phía trước. Chúng mình rất mong sự{' '}
          <span className="text-[#7BD7D6]">chung tay giúp sức</span> của tất cả
          các bạn
        </p>
      </div>
      <div className="flex justify-between flex-wrap">
        {map(dataMock, (value, index) => (
          <div className="text-center" key={index}>
            <CountUp
              end={value?.endQuantity}
              start={value?.startQuantity}
              duration={2.75}
              className="text-[9.6rem] md:text-[6.25rem] text-[#7BD7D6] font-bold"
            />
            <h4 className="text-[4rem] md:text-[1.6875rem] text-[#414141] font-bold">
              {value?.title}
            </h4>
            <div className="flex justify-center">
            <p className="text-[3.73333rem ] md:text-[1.125rem] md: max-w-[13rem] leading-[1.6875rem]">
              {value?.des}
            </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatisticsAction;
