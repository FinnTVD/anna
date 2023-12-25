'use client';

import { useForm } from 'react-hook-form';
import InputGlobal from '@/components/component-ui-custom/input-global';
import { listInputGlobal } from '@/types/types-general';
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import ListProductInCart from "@/sections/payment/components/list-product-in-cart";

export default function FormPayment() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm();

  const onSubmit = (data: any) => console.log(data);

  const listInput: listInputGlobal[] = [
    {
      name: 'username',
      require: true,
      type: 'input',
      placeHolder: 'Họ và tên',
    },
    {
      name: 'phoneNumber',
      require: true,
      type: 'input',
      placeHolder: 'Số điện thoại',
    },
    {
      name: 'gmail',
      require: true,
      type: 'input',
      placeHolder: "Gmail",
    },
    {
      name: 'textarea',
      require: true,
      placeHolder: 'Tỉnh/Thành phố',
      type: 'select-option',
      width: "40rem",
      listOption: [
        {
          value: "next.js",
          label: "Next.js 1111",
        },
        {
          value: "sveltekit",
          label: "SvelteKit",
        },
        {
          value: "nuxt.js",
          label: "Nuxt.js",
        },
        {
          value: "remix",
          label: "Remix",
        },
        {
          value: "astro",
          label: "Astro",
        },
      ],
    },
    {
      name: 'textarea',
      require: true,
      placeHolder: 'Quận/huyện',
      type: 'select-option',
      width: "40rem",
      listOption: [
        {
          value: "next.js",
          label: "Next.js 1111",
        },
        {
          value: "sveltekit",
          label: "SvelteKit",
        },
        {
          value: "nuxt.js",
          label: "Nuxt.js",
        },
        {
          value: "remix",
          label: "Remix",
        },
        {
          value: "astro",
          label: "Astro",
        },
      ],
    },
    // {
    //   name: 'textarea',
    //   require: true,
    //   placeHolder: 'Xã/Phuờng',
    //   type: 'select-option',
    //   width: "40rem",
    //   listOption: [
    //     {
    //       value: "next.js",
    //       label: "Next.js 1111",
    //     },
    //     {
    //       value: "sveltekit",
    //       label: "SvelteKit",
    //     },
    //     {
    //       value: "nuxt.js",
    //       label: "Nuxt.js",
    //     },
    //     {
    //       value: "remix",
    //       label: "Remix",
    //     },
    //     {
    //       value: "astro",
    //       label: "Astro",
    //     },
    //   ],
    // },
    {
      name: 'textarea',
      require: true,
      type: 'input',
      placeHolder: 'Địa chỉ chi tiết',
    },
    {
      name: 'textarea',
      require: true,
      type: 'text-area',
      placeHolder: 'Thông tin bổ sung',
    },
  ];

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputGlobal
          register={register}
          listInputGlobal={listInput}
          setValueInput={setValue}
          errors={errors}
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
        <RadioGroup defaultValue="option-one">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-one" id="option-one" />
            <Label
              htmlFor="option-one"
              className="text-[#00225D] text-[1rem] font-normal max-md:text-[3.733rem]"
            >
              Trả tiền mặt khi nhận hàng
            </Label>
          </div>
          <div className="flex items-center space-x-2 mt-[0.5rem]">
            <RadioGroupItem value="option-two" id="option-two" />
            <Label
              htmlFor="option-two"
              className="text-[#00225D] text-[1rem] font-normal max-md:text-[3.733rem]"
            >
              Trả tiền mặt khi giao hàng
            </Label>
          </div>
        </RadioGroup>
        <p className="mt-[0.8rem] max-md:text-[3.733rem] max-md:my-[3rem]">
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
