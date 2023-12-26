'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { listInputGlobal } from '@/types/types-general';

function CreateAddress() {
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
      placeHolder: 'Tên công ty (tuỳ chọn)',
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

  return (
    <div>
      <h3 className="text-[1.5rem] font-Nexa-Semibold leading-[1.5rem]">
        Địa chỉ giao hàng
      </h3>
      <form className="mt-[1.5rem]">
        <div className="grid grid-cols-2 gap-[1rem]">
          {listInput.map((item, index) => (
            <div key={index}>
              <span className="text-[#414141] font-Nexa-Bold text-[0.9rem] pb-[0.4rem] ml-[1rem]">
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
                  className="px-[1.2rem] bg-[#F4F4F4] outline-[#EAEAEA] focus:outline-[#55D5D2] focus:border-[#55D5D2] rounded-[6.25rem] h-[3.43rem]  w-full text-[1rem] transition-all duration-100 ease-linear max-md:h-[10rem] max-md:text-[4rem]"
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
          <span className="text-[#414141] font-Nexa-Bold text-[0.9rem] pb-[0.4rem] ml-[1rem]">
            Địa chỉ
            <span className="text-[red]">*</span>
          </span>
          <div className=" relative mt-[0.5rem] mb-[1rem] max-md:mb-[3rem]">
            <input
              type="text"
              name="input"
              placeholder="Địa chỉ"
              className="px-[1.2rem] bg-[#F4F4F4] outline-[#EAEAEA] focus:outline-[#55D5D2] focus:border-[#55D5D2] rounded-[6.25rem] h-[3.43rem]  w-full text-[1rem] transition-all duration-100 ease-linear max-md:h-[10rem] max-md:text-[4rem]"
            />
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          </div>
          {/* {item.require === true && `errors.${item.name}` && ( */}
          {/*  <span>This field is required</span> */}
          {/* )} */}
        </div>
        <div className="flex justify-end">
          <button
            type="button"
            className="bg-[#55D5D2] text-white rounded-[3.125rem] py-[0.81rem] px-[2.19rem] text-[1rem] font-Nexa-Medium leading-[1.7rem] not-italic"
          >
            Thêm
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateAddress;
