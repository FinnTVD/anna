'use client';

import loginImg from '@/assets/images/img-login.jpg';
import { RHFInput } from '@/components/hook-form';
import FormProvider from '@/components/hook-form/form-provider';
import { Checkbox } from '@/components/ui/checkbox';
import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import '../style.css';
import ICFacebook from '@/components/Icons/ICFacebook';
import ICGoogle from '@/components/Icons/ICGoogle';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import SectionHome from '@/sections/home/view/SectionHome';

// interface IProps {
//   children: ReactNode;
// }

const defaultValues = {
  username: '',
  password: '',
};

const formSchema = z.object({
  username: z.string({
    required_error: 'Email is required',
  }),
  password: z.string({
    required_error: 'Password is required',
  }),
});

export function Login() {
  const [checkRemember, setCheckRemember] = useState(false);
  const router = useRouter();

  const methods = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const { handleSubmit, setError } = methods;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const { ok, error }: any = await signIn('credentials', {
        username: values.username,
        password: values.password,
        redirect: false,
      });
      if (ok) {
        router.push('/list-product-dashboard');
      } else {
        setError('password', {
          message: 'Login failed!',
        });
      }
    } catch (error) {
      setError('password', {
        message: 'Login failed!',
      });
    }
  };
  const handleCheckRemember = (value: boolean) => {
    setCheckRemember(value);
  };

  const handleFacebookLogin = () => {
    signIn('facebook')
  }

  return (
    <div>
      <div className="container flex flex-wrap m-auto items-center justify-center py-36 md:py-32">
        <div className="hidden md:block w-full md:w-1/2 px-6">
          <Image
            src={loginImg}
            alt=""
            quality={80}
            width={614}
            height={496}
            className="w-full object-cover h-[80.5rem] md:h-[30.625rem] rounded-3xl"
          />
        </div>
        <div className="w-full md:w-1/2 px-20 md:px-6 md:pr-16">
          <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <div className="text-center">
              <span className="text-black text-[5.5rem] md:text-2xl font-bold">
                Đăng nhập
              </span>
              <p className="text-[3.5rem] md:text-base">
                Hãy đăng nhập để được hưởng đặc quyền riêng dành cho bạn
              </p>
            </div>

            <div className="grid gap-12 md:gap-4 py-12 md:py-4">
              <div className="flex flex-col gap-2">
                <span className="text-black text-[4rem] md:text-lg text-[10px] uppercase font-bold">
                  Tài khoản<em className="text-red-500">*</em>
                </span>
                <RHFInput
                  name="username"
                  inputStyle="input-underline"
                  placeholder=""
                  className="w-full border border-[#55D5D2] p-8 md:p-3 text-[4rem] md:text-base rounded-3xl md:rounded-xl"
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
                  className="w-full border border-[#55D5D2] p-8 md:p-3 text-[4rem] md:text-base rounded-3xl md:rounded-xl"
                />
              </div>
              <div>
                <Checkbox
                  onCheckedChange={(value: boolean) =>
                    handleCheckRemember(value)
                  }
                  name="remember"
                  className="border-[#ccc] border-[1px] w-[3rem] md:w-[1rem] h-[3rem] md:h-[1rem]"
                />
                <span className="ml-8 md:ml-4 text-[3.5rem] md:text-[1.25rem]">
                  Lưu tài khoản
                </span>
              </div>
            </div>
            <div className="bg-[#55D5D2] hover:bg-[#f58f5d] p-12 md:p-3 text-[3.5rem] md:text-base rounded-3xl md:rounded-xl">
              <button type="submit" className="w-full text-white">
                Đăng nhập
              </button>
            </div>
            <div className="text-[3.5rem] md:text-[1.25rem] hover:text-orange-400 mt-6 md:mt-2">
              <Link href="#">Quên mật khẩu ?</Link>
            </div>
            <div className="bg-[#1877F2] p-12 md:p-3 text-[3.5rem] md:text-base rounded-3xl md:rounded-xl mt-6 md:mt-2">
              <button
                type="button"
                className="w-full text-white flex items-center"
                onClick={handleFacebookLogin}
              >
                <ICFacebook width={35} height={35} />
                <p className="text-center w-full">
                  Đăng nhập bằng
                  <b> Facebook</b>
                </p>
              </button>
            </div>
            <div className="p-12 md:p-3 text-[3.5rem] md:text-base rounded-3xl md:rounded-xl mt-12 md:mt-3 btn-login-gg">
              <button type="button" className="w-full flex items-center">
                <ICGoogle width={35} height={35} />
                <p className="text-center w-full">
                  Đăng nhập bằng
                  <b> Google</b>
                </p>
              </button>
            </div>
          </FormProvider>
          <p className="text-center mt-16 md:mt-4 text-[3.5rem] md:text-base">
            Bạn chưa có tài khoản Anna ?
          </p>
          <div className="text-center mt-6 md:mt-2 text-[#81c8c2] text-[3.5rem] md:text-base">
            <Link href="/dang-ky" className="underline">
              Đăng ký ngay
            </Link>
          </div>
        </div>
      </div>
      <SectionHome />
    </div>
  );
}
