'use client';

import loginImg from '@/assets/images/img-login.jpg';
import { RHFInput } from '@/components/hook-form';
import FormProvider from '@/components/hook-form/form-provider';
import { Checkbox } from '@/components/ui/checkbox';
import { zodResolver } from '@hookform/resolvers/zod';
import { signIn } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { ReactNode, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import '../style.css';

interface IProps {
  children: ReactNode;
}

const defaultValues = {
  email: '',
  password: '',
};

const formSchema = z.object({
  email: z
    .string({
      required_error: 'Email is required',
    })
    .email('Email invalid!'),
  password: z.string({
    required_error: 'Password is required',
  }),
});

export function Login() {
  const [checkRemember, setCheckRemember] = useState(false);

  const methods = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const { handleSubmit, setError } = methods;

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    try {
      signIn('credentials', {
        identifier: values.email,
        password: values.password,
      });
    } catch (error) {
      setError('password', {
        message: 'Login failed!',
      });
    }
  };
  const handleCheckRemember = (value: boolean) => {
    setCheckRemember(value);
  };

  return (
    <div className="md:max-w-[81.25rem] flex flex-wrap m-auto items-center justify-center my-32">
      <div className="w-full md:w-1/2 px-6">
        <Image
          src={loginImg}
          alt=""
          quality={80}
          width={614}
          height={496}
          className="w-full object-cover h-[80.5rem] md:h-[30.625rem]"
        />
      </div>
      <div className="w-full md:w-1/2 px-6">
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <div className="text-center">
            <span className="text-black text-[4rem] md:text-2xl font-bold">
              Đăng nhập
            </span>
            <p className="text-2xl md:text-base">
              Hãy đăng nhập để được hưởng đặc quyền riêng dành cho bạn
            </p>
          </div>

          <div className="grid gap-4 py-4">
            <div className="flex flex-col gap-2">
              <span className="text-black text-[4rem] md:text-lg text-[10px] uppercase font-bold">
                Tài khoản<em className="text-red-500">*</em>
              </span>
              <RHFInput
                name="username"
                inputStyle="input-underline"
                placeholder=""
                className="w-full border border-[#55D5D2] p-3 rounded-3xl md:rounded-xl"
              />
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-black text-[4rem] md:text-lg text-[10px] uppercase font-bold">
                Mật khẩu<em className="text-red-500">*</em>
              </span>
              <RHFInput
                type="password"
                name="password"
                inputStyle="input-underline"
                placeholder=""
                className="w-full border border-[#55D5D2] p-3 rounded-3xl md:rounded-xl"
              />
            </div>
            <div>
              <Checkbox
                onCheckedChange={(value: boolean) => handleCheckRemember(value)}
                name="remember"
                className="border-[#ccc] border-[1px] w-[3rem] md:w-[1rem] h-[3rem] md:h-[1rem]"
              />
              <span className="ml-8 md:ml-4 text-[3.25rem] md:text-[1.25rem]">
                Lưu tài khoản
              </span>
            </div>
          </div>
          <div className="bg-[#55D5D2] hover:bg-[#f58f5d] p-3 rounded-3xl md:rounded-xl">
            <button type="submit" className="w-full text-white">
              Đăng nhập
            </button>
          </div>
          <Link
            href="#"
            className="text-[3.25rem] md:text-[1.25rem] hover:text-orange-400"
          >
            Quên mật khẩu ?
          </Link>
          <div className="bg-[#1877F2] p-3 rounded-3xl md:rounded-xl mt-2">
            <button className="w-full text-white">
              Đăng nhập bằng
              <b> Facebook</b>
            </button>
          </div>
          <div className="p-3 rounded-3xl md:rounded-xl mt-3 btn-login-gg">
            <button className="w-full">
              Đăng nhập bằng
              <b> Google</b>
            </button>
          </div>
        </FormProvider>
        <p className="text-center mt-6 md:mt-4">Bạn chưa có tài khoản Anna ?</p>
        <div className="text-center mt-6 md:mt-2 text-[#81c8c2]">
          <Link href="#" className="underline">
            Đăng ký ngay
          </Link>
        </div>
      </div>
    </div>
  );
}
