"use client"
import { fetchDataV2 } from '@/lib/fetch-data-rest'
import React from 'react'
import './style.css'
import { RHFInput } from '@/components/hook-form'
import { DialogFooter } from '@/components/ui/dialog'
import { FormProvider, useForm } from 'react-hook-form'
import useSWR from 'swr'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { postData } from '@/lib/post-data'

const defaultValues = {
  website: '',
};

const formSchema = z.object({
  website: z.string(),
});
const Contact = () => {
  // const listBlog = await fetchDataV2('GET', 'pages?slug=lien-he')

  // const bodyGetlistBlog: any = {
  //   method: 'get',
  //   // url: 'https://woo-api.okhub.tech/wp-json/wp/v2/pages?slug=lien-he',
  //   url: 'pages?slug=lien-he'
  // };

  // const listBlog = useSWR('https://woo-api.okhub.tech/wp-json/wp/v2/pages?slug=lien-he', () =>
  //   fetchDataV2(bodyGetlistBlog)
  // );
  // console.log("listBlog: ", listBlog?.data);

  const methods = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log("value: ", values);
  };
  const { handleSubmit, setError } = methods;
  return (
    <div className="md:max-w-[83.75rem] py-24 md:py-12 px-[5rem] md:px-0 m-auto">
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-4 py-4">

            <div className="flex justify-between flex-wrap md:flex-nowrap gap-12 md:gap-3">

              <div className='w-full'>
                <RHFInput
                  name="website"
                  inputStyle="input-underline"
                  placeholder="Website"
                  className="w-full border border-stone-300 bg-[#FAFAFA] text-[3rem] md:text-base p-3"
                />
              </div>
            </div>

          </div>
          <DialogFooter className='sm:justify-start'>
            <button type="submit" className="text-white p-8 md:p-3 text-[3rem] md:text-[1.25rem] bg-[#81C8C2] mb-20 md:mb-16">
              Post Comments
            </button>
          </DialogFooter>
        </form>
      </FormProvider>
      <h4 className="text-black text-[3.5rem] md:text-2xl font-semibold  pb-10 md:pb-4">LIÊN HỆ</h4>
      <div className="flex justify-between flex-wrap">
        {/* <div
          className="w-full md:w-2/3 contact-page"
          dangerouslySetInnerHTML={{ __html: `${listBlog[0]?.content?.rendered}` }}
        ></div> */}
        <div className='w-full md:w-1/3'>

        </div>
      </div>
    </div>
  )
}

export default Contact