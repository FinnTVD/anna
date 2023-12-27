'use client';

import React from 'react';
import { listInputGlobal } from '@/types/types-general';
import { useForm } from 'react-hook-form';
import Image from 'next/image';
import ICCamera from '@/components/Icons/ICCamera';

function UserInfo() {
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
      placeHolder: 'Tên',
    },
    {
      name: 'username',
      require: true,
      type: 'input',
      placeHolder: 'Họ',
    },
    {
      name: 'phoneNumber',
      require: true,
      type: 'input',
      placeHolder: 'Tên hiển thị',
    },
    {
      name: 'gmail',
      require: true,
      type: 'input',
      placeHolder: 'Địa chỉ email',
    },
    {
      name: 'gmail',
      require: true,
      type: 'input',
      placeHolder: 'Số điện thoại',
    },
  ];
  const listInputChangePassword = [
    {
      name: 'gmail',
      require: true,
      type: 'input',
      placeHolder: 'Mật khẩu hiện tại',
    },
    {
      name: 'gmail',
      require: true,
      type: 'input',
      placeHolder: 'Mật khẩu mới',
    },
    {
      name: 'gmail',
      require: true,
      type: 'input',
      placeHolder: 'Nhập lại mật khẩu',
    },
  ];
  return (
    <div>
      <h3 className="text-[1.5rem] font-Nexa-Semibold leading-[1.5rem] mb-[1.5rem] max-md:text-[5rem] max-md:pb-[3rem] max-md:leading-[5rem]">
        Thông tin tài khoản
      </h3>

      <div className="flex justify-between max-md:flex-col">
        <div className="hidden max-md:flex mb-[2rem] justify-center">
          <div className="relative w-fit h-fit">
            <Image
              src="/img/no_image.jpg"
              height={31}
              width={124}
              className="object-cover w-[10.9375rem] h-[10.9375rem] rounded-full max-md:w-[38rem] max-md:h-[38rem]"
              alt="Logo"
            />
            <button
              type="button"
              className="max-md:hidden absolute bottom-[0.6rem] right-[1.1rem] p-[0.3rem] rounded-full flex justify-center items-center bg-[#F8F8F8] shadow-lg border-[1px] border-black"
            >
              <ICCamera width="0.85rem" height="0.85rem" />
            </button>
            <button
              type="button"
              className="hidden max-md:flex absolute bottom-[0.6rem] right-[1.1rem] p-[2rem] rounded-full justify-center items-center bg-[#F8F8F8] shadow-lg border-[1px] border-black"
            >
              <ICCamera width="5rem" height="5rem" />
            </button>
          </div>
        </div>
        <div className="w-1/2 max-md:w-full">
          {listInput.map((item, index) => (
            <div key={index}>
              <span className="text-[#414141] font-Nexa-Bold text-[0.9rem] pb-[0.4rem] ml-[1rem] max-md:text-[3.733rem]">
                {item.placeHolder}
                <span className="text-[red]">*</span>
              </span>
              <div className=" relative mt-[0.5rem] mb-[0.88rem] max-md:mb-[3rem]">
                <input
                  type="text"
                  {...register(item.name, { required: item.require })}
                  name="input"
                  placeholder={item.placeHolder}
                  onChange={(value) => setValue(item.name, value.target.value)}
                  className="px-[1.2rem] bg-[#F4F4F4] outline-[#EAEAEA] focus:outline-[#55D5D2] focus:border-[#55D5D2] rounded-[6.25rem] h-[3.43rem]  w-full text-[1rem] transition-all duration-100 ease-linear max-md:h-[10rem] max-md:text-[4rem] max-md:px-[4rem]"
                />
                {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              </div>
              {/* {item.require === true && `errors.${item.name}` && ( */}
              {/*  <span>This field is required</span> */}
              {/* )} */}
            </div>
          ))}
        </div>
        <div className="grow ml-[2rem] flex flex-col items-center max-md:ml-[0rem]">
          <div className="mb-[2rem] max-md:hidden">
            <div className="relative w-fit h-fit">
              <Image
                src="/img/no_image.jpg"
                height={31}
                width={124}
                className="object-cover w-[10.9375rem] h-[10.9375rem] rounded-full max-md:w-[38rem] max-md:h-[38rem]"
                alt="Logo"
              />
              <button
                type="button"
                className="max-md:hidden absolute bottom-[0.6rem] right-[1.1rem] p-[0.3rem] rounded-full flex justify-center items-center bg-[#F8F8F8] shadow-lg border-[1px] border-black"
              >
                <ICCamera width="0.85rem" height="0.85rem" />
              </button>
              <button
                type="button"
                className="hidden max-md:flex absolute bottom-[0.6rem] right-[1.1rem] p-[2rem] rounded-full justify-center items-center bg-[#F8F8F8] shadow-lg border-[1px] border-black"
              >
                <ICCamera width="5rem" height="5rem" />
              </button>
            </div>
          </div>
          {listInputChangePassword.map((item, index) => (
            <div key={index} className="w-full">
              <span className="text-[#414141] font-Nexa-Bold text-[0.9rem] pb-[0.4rem] ml-[1rem] max-md:text-[3.733rem]">
                {item.placeHolder}
              </span>
              <div className=" relative mt-[0.5rem] mb-[0.8rem] max-md:mb-[3rem]">
                <input
                  type="text"
                  {...register(item.name, { required: item.require })}
                  name="input"
                  placeholder={item.placeHolder}
                  onChange={(value) => setValue(item.name, value.target.value)}
                  className="px-[1.2rem] bg-[#F4F4F4]  outline-[#EAEAEA] focus:outline-[#55D5D2] focus:border-[#55D5D2] rounded-[6.25rem] h-[3.43rem]  w-full text-[1rem] transition-all duration-100 ease-linear max-md:h-[10rem] max-md:text-[4rem] max-md:px-[4rem]"
                />
                {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              </div>
              {/* {item.require === true && `errors.${item.name}` && ( */}
              {/*  <span>This field is required</span> */}
              {/* )} */}
            </div>
          ))}

          <div className="w-full flex justify-end max-md:hidden">
            <button
              type="button"
              className="border-[1px] border-[#55D5D2] mr-[0.5rem] text-[#55D5D2] rounded-[3.125rem] py-[0.81rem] px-[2.19rem] text-[1rem] font-Nexa-Medium leading-[1.7rem] not-italic"
            >
              Hủy
            </button>
            <button
              type="button"
              className="bg-[#55D5D2] text-white rounded-[3.125rem] py-[0.81rem] px-[2.19rem] text-[1rem] font-Nexa-Medium leading-[1.7rem] not-italic"
            >
              Lưu thay đổi
            </button>
          </div>
        </div>
      </div>
      <div className="w-full hidden justify-end max-md:grid grid-cols-2 gap-[2rem] mt-[3rem]">
        <button
          type="button"
          className="border-[1px] border-[#55D5D2] mr-[0.5rem] text-[#55D5D2] rounded-full py-[5rem] px-[2.19rem] text-[3.733rem] font-Nexa-Medium leading-[1.7rem] not-italic"
        >
          Hủy
        </button>
        <button
          type="button"
          className="bg-[#55D5D2] text-white rounded-full py-[5rem] text-[3.733rem] font-Nexa-Medium leading-[1.7rem] not-italic"
        >
          Lưu thay đổi
        </button>
      </div>
    </div>
  );
}

export default UserInfo;
