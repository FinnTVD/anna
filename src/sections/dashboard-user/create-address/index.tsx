'use client';

import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { listInputGlobal } from '@/types/types-general';

interface IProps {
  dataDetailAddress?: any;
}
function CreateAddress(props: IProps) {
  const { dataDetailAddress } = props;

  const [dataDetailAddressInit, setDataDetailAddressInit] = useState<any>({});

  console.log('dataDetailAddressInit', dataDetailAddressInit);

  const {
    register,
    // formState: { errors },
    setValue,
  } = useForm();
  const listInput: listInputGlobal[] = [
    {
      name: 'username',
      require: true,
      type: 'input',
      placeHolder: 'Họ và tên',
    },
    {
      name: 'username',
      require: true,
      type: 'input',
      placeHolder: 'Số điện thoại',
    },
    {
      name: 'phoneNumber',
      require: true,
      type: 'input',
      placeHolder: 'Địa chỉ email',
    },
    {
      name: 'gmail',
      require: true,
      type: 'input',
      placeHolder: 'Tên công ty',
    },
    {
      name: 'phoneNumber',
      require: true,
      type: 'input',
      placeHolder: 'Quốc gia/Khu vực',
    },
    {
      name: 'gmail',
      require: true,
      type: 'input',
      placeHolder: 'Tỉnh/Thành phố',
    },
    {
      name: 'username',
      require: true,
      type: 'input',
      placeHolder: 'Quận/Huyện',
    },
    {
      name: 'username',
      require: true,
      type: 'input',
      placeHolder: 'Xã/Phường',
    },
  ];

  useEffect(() => {
    setDataDetailAddressInit(dataDetailAddress);
  }, [dataDetailAddress]);
  return (
    <div>
      <h3 className="text-[1.5rem] font-bold leading-[1.5rem] max-md:text-[5rem] max-md:leading-[5rem] max-md:pb-[3rem]">
        Địa chỉ giao hàng
      </h3>
      <form className="mt-[1.5rem]">
        <div className="grid grid-cols-2 gap-[1rem] max-md:grid-cols-1">
          {listInput.map((item, index) => (
            <div key={index}>
              <span className="text-[#414141] font-semibold text-[0.9rem] pb-[0.4rem] ml-[1rem] max-md:text-[3.733rem]">
                {item.placeHolder}
                <span className="text-[red]">*</span>
              </span>
              <div className=" relative mt-[0.5rem] max-md:mb-[3rem]">
                <input
                  type="text"
                  {...register(item.name, { required: item.require })}
                  name="input"
                  placeholder={item.placeHolder}
                  onChange={(value) => setValue(item.name, value.target.value)}
                  className="px-[1.2rem] bg-[#F4F4F4] font-medium outline-[#EAEAEA] focus:outline-[#55D5D2] focus:border-[#55D5D2] rounded-[6.25rem] h-[3.43rem]  w-full text-[1rem] transition-all duration-100 ease-linear max-md:h-[10rem] max-md:text-[4rem] max-md:px-[4rem]"
                />
                {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              </div>
              {/* {item.require === true && `errors.${item.name}` && ( */}
              {/*  <span>This field is required</span> */}
              {/* )} */}
            </div>
          ))}
        </div>
        <div className="w-full mt-[1rem]">
          <span className="text-[#414141] font-bold text-[0.9rem] pb-[0.4rem] ml-[1rem] max-md:text-[3.733rem]">
            Địa chỉ
            <span className="text-[red]">*</span>
          </span>
          <div className=" relative mt-[0.5rem] mb-[1rem] max-md:mb-[3rem]">
            <input
              type="text"
              name="input"
              placeholder="Địa chỉ"
              className="px-[1.2rem] bg-[#F4F4F4] font-medium outline-[#EAEAEA] focus:outline-[#55D5D2] focus:border-[#55D5D2] rounded-[6.25rem] h-[3.43rem]  w-full text-[1rem] transition-all duration-100 ease-linear max-md:h-[10rem] max-md:text-[4rem] max-md:px-[4rem]"
            />
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          </div>
          {/* {item.require === true && `errors.${item.name}` && ( */}
          {/*  <span>This field is required</span> */}
          {/* )} */}
        </div>
        <div className="flex justify-end max-md:mt-[5rem]">
          <button
            type="button"
            className="bg-[#55D5D2] font-bold text-white rounded-[3.125rem] py-[0.81rem] px-[2.19rem] text-[1rem] font-Nexa-Medium leading-[1.7rem] not-italic max-md:text-[3.733rem] max-md:w-full max-md:rounded-full max-md:py-[5.5rem]"
          >
            Thêm
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateAddress;
