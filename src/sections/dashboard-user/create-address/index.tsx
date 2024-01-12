'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { cn } from '@/lib/utils';
import LoadingGlobal from '@/components/component-ui-custom/loading-global';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
  INameItemForm,
  listInput,
} from '@/sections/dashboard-user/create-address/listInput';
import map from 'lodash.map';
import FormProvider from '@/components/hook-form';
import { fetchDataAuthen } from '@/lib/post-data';
import { onError, onSuccess } from '@/ultils/notification';
import { useRouter } from 'next/navigation';

interface IProps {
  dataDetailAddress?: INameItemForm;
  accessToken?: any;
  slug?: string;
}

function CreateAddress(props: IProps) {
  const { dataDetailAddress, accessToken, slug } = props;
  const router = useRouter();

  console.log('dataDetailAddress', dataDetailAddress);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const schema = yup.object().shape({
    username: yup.string().required('Required').email('Email invalid'),
    pass: yup.string().required('Required'),
  });

  console.log('dataDetailAddress', dataDetailAddress);

  const defaultValues = {
    name: dataDetailAddress?.name ?? '',
    email: dataDetailAddress?.email ?? '',
    company: dataDetailAddress?.company ?? '',
    address: dataDetailAddress?.address ?? '',
    city: dataDetailAddress?.city ?? '',
    state: dataDetailAddress?.state ?? '',
    country: dataDetailAddress?.country ?? '',
    phone: dataDetailAddress?.phone ?? '',
    phuong: dataDetailAddress?.phuong ?? '',
  };

  const methods = useForm<INameItemForm>({
    // resolver: yupResolver(schema) as any,
    defaultValues,
  });

  const {
    register,
    reset,
    // formState: { errors },
    setValue,
    handleSubmit,
  } = methods;
  const handleSubmitForm = async (value: any) => {
    setIsLoading(true);

    const bodyPostAddress: any = {
      url: dataDetailAddress
        ? `wp-json/shipping/v1/update-shipping-address/${slug}`
        : 'wp-json/shipping/v1/add-multiple-shipping-addresses',
      method: dataDetailAddress ? 'put' : 'post',
      body: JSON.stringify(dataDetailAddress ? value : { addresses: value }),
      token: accessToken,
    };

    try {
      await fetchDataAuthen(bodyPostAddress).then(() => {
        setIsLoading(false);
        reset();
        onSuccess({
          message: 'Cập nhật giỏ hàng thành công!',
        });
        router.push('/address-info');
      });
    } catch (error: any) {
      setIsLoading(false);
      onError();
    }
  };

  return (
    <div>
      <h3 className="text-[1.5rem] font-bold leading-[1.5rem] max-md:text-[5rem] max-md:leading-[5rem] max-md:pb-[3rem]">
        {dataDetailAddress ? 'Chỉnh sửa' : 'Thêm'} địa chỉ giao hàng
      </h3>
      <FormProvider methods={methods} onSubmit={handleSubmit(handleSubmitForm)}>
        <div className="grid grid-cols-2 gap-[1rem] max-md:grid-cols-1 mt-[1.5rem]">
          {map(listInput, (item, index) => (
            <div key={index}>
              <span className="text-[#414141] font-semibold text-[0.9rem] pb-[0.4rem] ml-[1rem] max-md:text-[3.733rem]">
                {item.placeHolder}
                {item.require && <span className="text-[red]">*</span>}
              </span>
              <div className=" relative mt-[0.5rem] max-md:mb-[3rem]">
                <input
                  type="text"
                  // value={item.name}
                  {...register(item.name, { required: item.require })}
                  name="input"
                  placeholder={item.placeHolder}
                  onChange={(value) => setValue(item.name, value.target.value)}
                  className="px-[1.2rem] bg-[#F4F4F4] font-medium outline-[#EAEAEA] focus:outline-[#55D5D2] focus:border-[#55D5D2] rounded-[6.25rem] h-[3.43rem]  w-full text-[1rem] transition-all duration-100 ease-linear max-md:h-[10rem] max-md:text-[4rem] max-md:px-[4rem]"
                />
              </div>
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
              {...register('address', { required: true })}
              onChange={(value) => setValue('address', value.target.value)}
              name="input"
              placeholder="Địa chỉ"
              className="px-[1.2rem] bg-[#F4F4F4] font-medium outline-[#EAEAEA] focus:outline-[#55D5D2] focus:border-[#55D5D2] rounded-[6.25rem] h-[3.43rem]  w-full text-[1rem] transition-all duration-100 ease-linear max-md:h-[10rem] max-md:text-[4rem] max-md:px-[4rem]"
            />
          </div>
        </div>
        <div className="flex justify-end max-md:mt-[5rem]">
          <button
            type="submit"
            className="flex items-center bg-[#55D5D2] outline-0 transition-all duration-300 hover:bg-[#F58F5D] focus-visible:bg-[#F58F5D] hover font-bold text-white rounded-[3.125rem] py-[0.81rem] px-[2.19rem] text-[1rem] leading-[1.7rem] not-italic max-md:text-[3.733rem] max-md:w-full max-md:rounded-full max-md:py-[5.5rem]"
          >
            <div
              className={cn(
                'transition-all duration-300 overflow-hidden',
                isLoading ? 'w-[2rem]' : 'w-0'
              )}
            >
              <LoadingGlobal stroke="white" />
            </div>
            <span className="pb-0 mb-0">
              {dataDetailAddress ? 'Chỉnh sửa 11' : 'Thêm'}
            </span>
          </button>
        </div>
      </FormProvider>
    </div>
  );
}

export default CreateAddress;
