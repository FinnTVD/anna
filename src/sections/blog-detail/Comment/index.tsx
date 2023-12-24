'use client';

import { RHFInput } from '@/components/hook-form';
import { Checkbox } from '@/components/ui/checkbox';
import { DialogFooter } from '@/components/ui/dialog';
import { TextareaUnderline } from '@/components/ui/textarea-underline';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';

const defaultValues = {
  email: '',
  message: '',
  name: '',
  website: '',
  remember: false
};

const formSchema = z.object({
  name: z
    .string({
      required_error: 'Name is required',
    }),
  email: z
    .string({
      required_error: 'Email is required',
    })
    .email('Email invalid!'),
  message: z.string({
    required_error: 'message is required',
  }),
  website: z.string(),
  remember: z.boolean(),
});

const CommentBlog = () => {
  const methods = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const { handleSubmit, setError } = methods;
  const [message, setMessage] = useState('')
  const [checkRemember, setCheckRemember] = useState(false)

  const handleMessage = (e: any) => {
    setMessage(e?.target?.value)
  }
  const handleCheckRemember = (value: boolean) => {
    setCheckRemember(value)
  }
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const param = {
      ...values,
      remember: checkRemember,
      message: message
    }
    console.log("value: ", param);
  };
  return (
    <div className="md:max-w-[57.25rem] px-12 md:px-2 m-auto">
      <h4 className="text-black pt-8 md:pt-4 text-[4.5rem] md:text-[2.25rem] font-semibold">VIẾT BÌNH LUẬN</h4>
      <p className='text-[3.25rem] md:text-[1.25rem]'>Email của bạn sẽ không được hiển thị công khai. Các trường bắt buộc được đánh dấu *</p>

      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-4 py-4">
            <div className="flex flex-col mb-12 md:mb-0 gap-2">
              <TextareaUnderline
                name="message"
                onChange={(e) => handleMessage(e)}
                placeholder="Type here..."
                className="w-full border border-stone-300 text-[3rem] md:text-base bg-[#FAFAFA] p-3 h-[25rem] md:h-[12rem]"
              />
            </div>
            <div className="flex justify-between flex-wrap md:flex-nowrap gap-12 md:gap-3">
              <div className='w-full'>
                <RHFInput
                  name="name"
                  inputStyle="input-underline"
                  placeholder="Name*"
                  className="w-full border border-stone-300 bg-[#FAFAFA] text-[3rem] md:text-base p-3"
                />
              </div>
              <div className='w-full'>
                <RHFInput
                  name="email"
                  inputStyle="input-underline"
                  placeholder="admin@gmail.com"
                  className="w-full border border-stone-300 bg-[#FAFAFA] text-[3rem] md:text-base p-3"
                />
              </div>
              <div className='w-full'>
                <RHFInput
                  name="website"
                  inputStyle="input-underline"
                  placeholder="Website"
                  className="w-full border border-stone-300 bg-[#FAFAFA] text-[3rem] md:text-base p-3"
                />
              </div>
            </div>
            <div>
            <Checkbox
                onCheckedChange={(value: boolean) =>
                  handleCheckRemember(value)
                }
                name='remember'
                className="border-[#ccc] border-[1px] w-[3rem] md:w-[1rem] h-[3rem] md:h-[1rem]"
              />
              <span className='ml-8 md:ml-4 text-[3.25rem] md:text-[1.25rem]'>Lưu tên của tôi, email, và trang web trong trình duyệt này cho lần bình luận kế tiếp của tôi.</span>
            </div>
          </div>
          <DialogFooter className='sm:justify-start'>
            <button type="submit" className="text-white p-8 md:p-3 text-[3rem] md:text-[1.25rem] bg-[#81C8C2] mb-20 md:mb-16">
              Post Comments
            </button>
          </DialogFooter>
        </form>
      </FormProvider>
    </div>
  )
}

export default CommentBlog