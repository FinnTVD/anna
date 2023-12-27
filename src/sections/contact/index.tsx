'use client';

import { RHFInput } from '@/components/hook-form';
import { baseUrl, fetchDataRest } from '@/lib/fetch-data-rest';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import useSWR from 'swr';
import { z } from 'zod';
import './style.css';
import Link from 'next/link';

interface BlogItemType {
  content: string;
  post_date: string;
  post_id: string | number;
  post_type: string;
  thumbnail_url: string | boolean;
  title: string;
}
const defaultValues = {
  search: '',
};

const formSchema = z.object({
  search: z.string(),
});
function Contact() {
  const [dataContact, setDataContact] = useState(null) as any;
  const [dataBlog, setDataBlog] = useState(null) as any;

  const paramApi: any = {
    method: "get",
    urlContact: "wp/v2/pages?slug=lien-he",
    urlBlog: "post/v1/posts",
  };
  const getListContact = useSWR(`${baseUrl}${paramApi.urlContact}`, () =>
    fetchDataRest(paramApi.method, paramApi.urlContact).then((res: any) =>
      setDataContact(res[0])
    )
  );
  const getListBlog = useSWR(`${baseUrl}${paramApi.urlBlog}`, () =>
    fetchDataRest(paramApi.method, paramApi.urlBlog).then((res: any) =>
      setDataBlog(res)
    )
  );
  useEffect(() => {
    getListContact;
    getListBlog;
  }, []);

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
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex justify-end mb-4 md:mb-2"
        >
          <div className="mr-8 md:mr-4">
            <div className="flex justify-between">
              <div className="w-full">
                <RHFInput
                  name="search"
                  inputStyle="input-underline"
                  placeholder="Tìm kiếm"
                  className="w-full border border-stone-300 bg-[#FAFAFA] text-[3rem] md:text-base p-3"
                />
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="text-white p-6 md:p-[0.65rem] text-[3rem] md:text-[1.25rem] bg-[#81C8C2]"
          >
            Post Comments
          </button>
        </form>
      </FormProvider>
      <h4 className="text-black text-[3.5rem] md:text-2xl font-semibold  pb-10 md:pb-4">
        LIÊN HỆ
      </h4>
      <div className="flex justify-between flex-wrap">
        <div
          className="w-full md:w-2/3 contact-page"
          dangerouslySetInnerHTML={{
            __html: `${dataContact ? dataContact?.content?.rendered : ""}`,
          }}
        />
        <div className="w-full md:w-1/3">
          <div>
            <h4 className="font-semibold text-[4.5rem] md:text-[2rem]">
              Recent Posts
            </h4>
            <div className="flex flex-wrap">
              {dataBlog?.map((data: BlogItemType, index: number) => (
                <Link
                  href="#"
                  className="text-[4.5rem] md:text-[1.75rem] w-full py-6 md:py-2"
                >
                  {data?.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-12 md:mt-8">
            <h4 className="font-semibold text-[4.5rem] md:text-[2rem]">
              Recent Comments
            </h4>
            <div className="flex flex-wrap" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
