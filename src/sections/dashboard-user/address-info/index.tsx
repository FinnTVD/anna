import React from 'react';
import Link from 'next/link';
import ICEdit from '@/components/Icons/ICEdit';
import ICDelete from '@/components/Icons/ICDelete';

function AddressInfo() {
  const list = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
  return (
    <div className="h-full pt-[0.5rem]">
      <h3 className="text-[1.5rem] font-Nexa-Semibold leading-[1.5rem] mb-[0.3rem]">
        Thông tin địa chỉ
      </h3>
      <div className="max-h-[calc(100%-6.2rem)] h-fit overflow-y-auto shadow-inherit">
        {list.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center py-[1.2rem] border-b-[1px] border-b-[#F5F5F5] pr-[2rem]"
          >
            <div>
              <div className="flex items-center">
                <h3 className="text-[#414141] text-[1rem] font-Nexa-Bold">
                  Nguyễn Minh Hùng
                </h3>
                <h3 className="text-[#454545] text-[1rem] font-Nexa-Bold ml-[0.5rem]">
                  0379634246
                </h3>
              </div>
              <span className="text-[#454545] opacity-70 text-[0.9rem] font-Nexa-Normal">
                số 79, ngõ 1, Bùi Xương Trạch, Phường Khương Đình, Quận Thanh
                Xuân, Hà Nội
              </span>
            </div>
            <div className="flex">
              <Link href="/create-address" className="text-[#55D5D2]">
                <ICEdit fill="#55D5D2" width="1.2rem" height="1.2rem" />
              </Link>
              <Link
                href="/create-address"
                className="text-[#E14C5F] ml-[0.8rem]"
              >
                <ICDelete fill="#E14C5F" width="1.2rem" height="1.2rem" />
              </Link>
            </div>
          </div>
        ))}
      </div>
      <Link
        href="/create-address"
        className="w-full mt-[2rem] rounded-[2rem] border-[1px] border-[#55D5D2] text-[#55D5D2] flex justify-center items-center py-[0.5rem] text-[1rem] font-"
      >
        + Thêm
      </Link>
    </div>
  );
}

export default AddressInfo;
