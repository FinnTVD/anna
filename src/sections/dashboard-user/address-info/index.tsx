'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import ICEdit from '@/components/Icons/ICEdit';
import ICDelete from '@/components/Icons/ICDelete';
import Image from 'next/image';
import LoadingGlobal from "@/components/component-ui-custom/loading-global";
import { fetchDataAuthen, postData } from "@/lib/post-data";
import { onError, onSuccess } from "@/ultils/notification";
import { useSession } from "next-auth/react";
import { IPostData } from "@/types/next-auth";
import useSWR from "swr";

interface IProps {
  dataListAddress?: any;
}
function AddressInfo(props: IProps) {
  const { dataListAddress } = props;
  const { data: session } = useSession();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [keySelected, setKeySelected] = useState<any>(undefined);

  const bodyGetListAddress: IPostData = {
    url: `wp-json/shipping/v1/customer-shipping-addresses`,
    method: 'get',
    token: session?.user?.token,
  };
  const dataDetailProduct = useSWR(bodyGetListAddress.url, () =>
    fetchDataAuthen(bodyGetListAddress)
  );

  console.log('dataDetailProduct', dataDetailProduct?.data);

  const deleteAddress = async (value: any) => {
    setKeySelected(value);
    console.log("value", value);
    setIsLoading(true);

    try {
      await fetchDataAuthen({
        url: 'wp-json/shipping/v1/delete-shipping-address',
        method: 'delete',
        body: JSON.stringify({ address: [{ id: value }] }),
        token: session?.user?.token,
      }).then(() => {
        onSuccess({
          message: 'Xóa sản phẩm yêu thích thành công!',
        });
        setIsLoading(false);
      });
    } catch (error: any) {
      setIsLoading(false);
      onError();
    }
  };

  const handleConvertAddress = (
    address: string,
    district: string,
    city: string,
    country: string
  ): string => {
    const addressConvert = `${address ?? ''}${address ? ',' : ''}`;
    const districtConvert = `${district ?? ''}${district ? ',' : ''}`;
    const cityConvert = `${city ?? ''}${city ? ',' : ''}`;
    const countryConvert = `${country ?? ''}${country ? '.' : ''}`;

    return `${addressConvert} ${districtConvert} ${cityConvert} ${countryConvert}`;
  };

  return (
    <div className="h-full pt-[0.5rem]">
      <h3 className="text-[1.5rem] font-bold leading-[1.5rem] mb-[0.3rem] max-md:text-[5rem] max-md:leading-[5rem] max-md:pb-[3rem]">
        Thông tin địa chỉ
      </h3>
      <div className="overflow-y-auto shadow-inherit">
        {dataListAddress && dataListAddress?.length > 0 ? (
          dataListAddress.map((item: any, index: number) => (
            <div
              key={index}
              className="flex justify-between items-center py-[1.2rem] border-b-[1px] border-b-[#F5F5F5] pr-[2rem] max-md:py-[3rem]"
            >
              <div className="max-md:w-4/5">
                <div className="flex items-center max-md:flex-col max-md:items-start">
                  <h3 className="text-[#414141] font-semibold text-[1rem] font-Nexa-Bold max-md:text-[3.8rem]">
                    {item?.name}
                  </h3>
                  <h3 className="text-[#454545] font-semibold text-[1rem] font-Nexa-Bold ml-[0.5rem] max-md:text-[3.5rem] max-md:ml-[0rem]">
                    {item?.phone}
                  </h3>
                </div>
                <span className="text-[#454545] font-medium opacity-70 text-[0.9rem] font-Nexa-Normal max-md:text-[3.2rem]">
                  {handleConvertAddress(
                    item?.address,
                    item?.state,
                    item?.city,
                    item?.country
                  )}
                </span>
              </div>
              <div className="flex max-md:hidden">
                <Link
                  href={`/create-address/${index}`}
                  className="text-[#55D5D2]"
                >
                  <ICEdit fill="#55D5D2" width="1.2rem" height="1.2rem" />
                </Link>
                {index === keySelected && isLoading ? (
                  <div className="text-[#E14C5F] ml-[0.7rem] -mr-3 max-md:ml-[0rem]">
                    <LoadingGlobal stroke="red" />
                  </div>
                ) : (
                  <button
                    role="button"
                    onClick={() => deleteAddress(index)}
                    className="text-[#E14C5F] ml-[0.8rem] max-md:ml-[0rem]"
                  >
                    <ICDelete fill="#E14C5F" width="1.2rem" height="1.2rem" />
                  </button>
                )}
              </div>
              <div className="hidden max-md:block h-full">
                <Link
                  href={`/create-address/${index}`}
                  className="text-[#55D5D2]"
                >
                  <ICEdit fill="#55D5D2" width="6rem" height="6rem" />
                </Link>
                <div className="mt-[2rem]">
                  {index === keySelected && isLoading ? (
                    <LoadingGlobal stroke="#55D5D2" />
                  ) : (
                    <button
                      role="button"
                      onClick={() => deleteAddress(index)}
                      className="text-[#E14C5F]"
                    >
                      <ICDelete fill="#E14C5F" width="6rem" height="6rem" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="w-full flex justify-center">
            <Image
              src="/img/no-data.avif"
              alt="banner-aboutus"
              height={300}
              width={300}
            />
          </div>
        )}
      </div>
      <Link
        href="/create-address"
        className="w-full mt-[2rem] rounded-[2rem] font-bold border-[2px] border-[#55D5D2] text-[#55D5D2] flex justify-center items-center py-[0.3rem] text-[1rem] font-Nexa-Normal max-md:text-[3.8rem] max-md:font-Nexa-Bold max-md:rounded-full max-md:py-[3rem] max-md:mt-[4rem]"
      >
        <span className="mr-[0.3rem] pb-[0.1rem] text-[1.7rem] max-md:text-[5rem] max-md:mr-[2rem]">
          +
        </span>
        Thêm
      </Link>
    </div>
  );
}

export default AddressInfo;
