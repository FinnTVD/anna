'use client';

import { useForm } from 'react-hook-form';
import { listInputGlobal } from '@/types/types-general';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Button } from '@/components/ui/button';
// eslint-disable-next-line import/no-cycle
import ListProductInCart from '@/sections/payment/components/list-product-in-cart';
import GroupInputGlobal from '@/components/component-ui-custom/group-input-global';
import useSWR from 'swr';
import { IItemProvinceConvert } from '@/app/(main)/thanh-toan/page';
import { useEffect, useState } from 'react';
import { undefined } from 'zod';
import map from 'lodash.map';
import { keyProductsInCart } from '@/configs/config';
import { fetchDataAuthen } from '@/lib/post-data';
import { onError, onSuccess } from '@/ultils/notification';
import { useRouter } from 'next/navigation';

interface IProps {
  listProvinceConvert?: IItemProvinceConvert[];
  voucher: any;
}

interface IParamItemDistrict {
  label: string;
  value: string;
}

interface IParamSearchArea {
  district: string;
  wards: string;
}
export default function FormPayment(props: IProps) {
  const { listProvinceConvert, voucher } = props;
  const router = useRouter();

  const [paramSearchArea, setParamSearchArea] = useState<IParamSearchArea>({
    district: '',
    wards: '',
  });
  const [listDistrict, setListDistrict] = useState<IParamItemDistrict[]>([
    {
      label: '',
      value: '',
    },
  ]);
  const [listWards, setListWards] = useState<IParamItemDistrict[]>([
    {
      label: '',
      value: '',
    },
  ]);
  const [dataSubmit, setDataSubmit] = useState({});

  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    reset,
  } = useForm();

  const handleFindLabelByValue = (value: string, data: any) => {
    const findObject = data.filter((item: any) => item.value === value);

    return findObject[0].label;
  };

  const onSubmit = async (data: any) => {
    // list product
    const arrayProduct: any = [];
    if (
      typeof window !== 'undefined' &&
      localStorage.getItem(keyProductsInCart) !== null
    ) {
      const storedData = localStorage.getItem(keyProductsInCart) as string;
      const tmpArray = JSON.parse(storedData);

      map(tmpArray, (item) =>
        arrayProduct.push({
          cart_key: item.key,
          product_id: item.product_id,
          quantity: item.quantity,
        })
      );
    }

    // convert data hook form
    const newData = {
      ...data,
      city: handleFindLabelByValue(data.city, listProvinceConvert),
      state: handleFindLabelByValue(data.state, listDistrict),
      address_1: handleFindLabelByValue(data.address_1, listWards),
    };

    // payment method
    const paymentMethod = {
      payment_method: 'cod',
      payment_method_title: 'Cash on delivery',
      voucher: voucher,
    };

    // merge object
    const dataSubmitTmp = Object.assign(newData, dataSubmit, paymentMethod, {
      products: arrayProduct,
    });

    try {
      await fetchDataAuthen({
        url: 'wp-json/custom/v1/create-order',
        method: 'post',
        body: JSON.stringify(dataSubmitTmp),
      }).then(() => {
        onSuccess({
          message: 'Đặt hàng thành công!',
        });
        reset();
        router.push('/cua-hang');
      });
    } catch (error: any) {
      onError();
    }
  };

  const handleOnChangeArea = (key: string, value: string): void => {
    if (key === 'city') {
      setParamSearchArea({ ...paramSearchArea, district: value });
    }
    if (key === 'state') {
      setParamSearchArea({ ...paramSearchArea, wards: value });
    }
  };

  // GET API Districts & Wards in Vietnam
  const fetchDataArea = (url: string) => {
    return fetch(url).then((response) => {
      return response.json();
    });
  };

  const urlFetchArea = {
    getDistrict: `https://provinces.open-api.vn/api/p/${parseInt(
      paramSearchArea.district,
      10
    )}?depth=2`,
    getWard: `https://provinces.open-api.vn/api/d/${parseInt(
      paramSearchArea.wards,
      10
    )}?depth=2`,
  };

  const listDataDistrict = useSWR(urlFetchArea.getDistrict, () =>
    paramSearchArea.district.length > 0
      ? fetchDataArea(urlFetchArea.getDistrict)
      : undefined
  );
  const listDataWard = useSWR(urlFetchArea.getWard, () =>
    paramSearchArea.wards.length > 0
      ? fetchDataArea(urlFetchArea.getWard)
      : undefined
  );
  // END

  useEffect(() => {
    listDataDistrict.mutate();
    const arrayDistrict: IParamItemDistrict[] = [];
    map(listDataDistrict.data?.districts, (item) => {
      arrayDistrict.push({
        value: item.code.toString(),
        label: item.name,
      });
    });

    setListDistrict(arrayDistrict);
  }, [listDataDistrict.data, paramSearchArea]);

  useEffect(() => {
    listDataWard.mutate();
    const arrayWards: IParamItemDistrict[] = [];
    map(listDataWard.data?.wards, (item) => {
      arrayWards.push({
        value: item.code.toString(),
        label: item.name,
      });
    });

    setListWards(arrayWards);
  }, [listDataWard.data, paramSearchArea]);

  const listInput: listInputGlobal[] = [
    {
      name: 'first_name',
      require: true,
      type: 'input',
      placeHolder: 'Họ và tên',
    },
    {
      name: 'phone',
      require: true,
      type: 'input',
      placeHolder: 'Số điện thoại',
    },
    {
      name: 'email',
      require: true,
      type: 'input',
      placeHolder: 'Gmail',
    },
    {
      name: 'city',
      require: true,
      placeHolder: 'Tỉnh/Thành phố',
      type: 'select-option',
      width: '40rem',
      listOption: listProvinceConvert,
    },
    {
      name: 'state',
      require: true,
      placeHolder: 'Quận/huyện',
      type: 'select-option',
      width: '40rem',
      listOption: listDistrict,
    },
    {
      name: 'address_1',
      require: true,
      placeHolder: 'Xã/Phuờng',
      type: 'select-option',
      width: '40rem',
      listOption: listWards,
    },
    {
      name: 'address_2',
      require: true,
      type: 'input',
      placeHolder: 'Địa chỉ chi tiết',
    },
    {
      name: 'description',
      require: true,
      type: 'text-area',
      placeHolder: 'Thông tin bổ sung',
    },
  ];

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit(onSubmit)}>
        <GroupInputGlobal
          register={register}
          listInputGlobal={listInput}
          setValueInput={setValue}
          errors={errors}
          handleOnChangeArea={handleOnChangeArea}
        />
        {/* <div> */}
        {/*  <input {...register('exampleRequired', { required: true })} /> */}
        {/*  {errors.exampleRequired && <span>This field is required</span>} */}
        {/* </div> */}
        {/* errors will return when field validation fails  */}
        <div className="grow hidden max-md:block mt-[6rem]">
          <ListProductInCart />
        </div>
        <h3 className="text-[1.5rem] font-bold mb-[0.8rem] max-md:text-[6.4rem] max-md:mt-[6rem]">
          Phương thức thanh toán
        </h3>
        <RadioGroup
          defaultValue="cod"
          onChange={(value: any) =>
            setDataSubmit({
              ...dataSubmit,
              payment_method_title: value?.target.value,
            })
          }
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="cod" id="option-one" />
            <Label
              htmlFor="option-one"
              className="text-[#00225D] font-medium text-[1rem] max-md:text-[3.733rem]"
            >
              Trả tiền mặt khi nhận hàng
            </Label>
          </div>
          {/* <div className="flex items-center space-x-2 mt-[0.5rem]"> */}
          {/*  <RadioGroupItem value="option-two" id="option-two" /> */}
          {/*  <Label */}
          {/*    htmlFor="option-two" */}
          {/*    className="text-[#00225D] font-medium text-[1rem] max-md:text-[3.733rem]" */}
          {/*  > */}
          {/*    Trả tiền mặt khi giao hàng */}
          {/*  </Label> */}
          {/* </div> */}
        </RadioGroup>
        <p className="mt-[0.8rem] font-medium max-md:text-[3.733rem] max-md:my-[3rem]">
          Thông tin cá nhân của bạn sẽ được sử dụng để xử lý đơn hàng và cho các
          mục đích cụ thể khác đã được mô tả trong chính sách riêng tư của chúng
          tôi.
        </p>
        <Button
          type="submit"
          className="mt-[1.2rem] w-[20rem] bg-[#55D5D2] text-[1rem] not-italic font-bold leading-[1.5rem] max-md:h-[10rem] max-md:w-full max-md:text-[3.733rem]"
        >
          Đặt hàng
        </Button>
      </form>
    </div>
  );
}
