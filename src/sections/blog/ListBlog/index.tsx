import Image from 'next/image';
import React from 'react';
import serviceImg from '@/assets/blogImg/Rectangle719.png';
import ICUser from '@/components/Icons/ICUser';
import ICComment from '@/components/Icons/ICComment';
import ICSchedule from '@/components/Icons/ICSchedule';
import { fetchDataRest } from '@/lib/fetch-data-rest';
import { formatDate } from '@/ultils/format-date';
import Link from 'next/link';

const ListBlog = async () => {
  const listBlog = await fetchDataRest('GET', 'post/v1/posts');

  return (
    <div className="py-[6.25rem] px-[5rem] md:px-[9rem] md:py-0 flex flex-wrap md:pb-12">
      {listBlog?.map((dataBlog: any, index: number) => (
        <div
          className="w-full md:w-1/3 lg:w-1/4 px-8 md:px-4 mt-[6rem] md:mt-4"
          key={index}
        >
          <div className="relative">
            <Image
              src={dataBlog?.thumbnail_url ? dataBlog?.thumbnail_url : serviceImg}
              alt=""
              quality={80}
              width={304}
              height={302}
              className="w-full object-cover h-[80.5rem] md:h-[18.75rem]"
            />
            <div className="w-[45rem] md:w-[8rem] h-[10rem] md:h-10 flex bg-[#81C8C2] items-center p-6 md:p-2 absolute top-12 md:top-4 left-12 md:left-4">
              <ICSchedule />
              <div className=" text-white text-[3.25rem] md:text-sm font-normal pl-6 md:pl-2">
                {formatDate(dataBlog?.post_date)}
              </div>
            </div>
          </div>
          <Link
            href={`/blog/${dataBlog?.post_slug}`}
            className="md:h-[3.5rem] text-black text-[4.25rem] md:text-lg font-bold my-8 md:my-4 line-clamp-2"
          >
            {dataBlog?.title}
          </Link>
          <div className="border-t border-t-neutral-700 border-opacity-20 py-[4rem] md:py-4 flex justify-between md:block">
            <div className="flex mb-1">
              <ICUser />
              <p className="pl-4 md:pl-2 text-[4.25rem] md:text-base text-black text-opacity-40">
                KinhMatAnna
              </p>
            </div>
            <div className="flex mt-1">
              <ICComment />
              <p className="pl-4 md:pl-2 text-[4.25rem] md:text-base text-black text-opacity-40">
                {dataBlog?.comment_status}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListBlog;
