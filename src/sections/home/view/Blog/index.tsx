import { ICArrowTopRightActive } from '@/components/Icons/ICArrowTopRightActive';
import { fetchDataRest } from '@/lib/fetch-data-rest';
import ItemBlog from '@/sections/home/view/Blog/Item';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import serviceImg from '@/assets/blogImg/Rectangle719.png';
import { formatDate } from '@/ultils/format-date';
import { ArrowRight } from 'lucide-react';

const Blog = async () => {
  const listBlog = await fetchDataRest('GET', 'post/v1/posts');

  return (
    <div className="px-[3.2rem] sm:p-0 flex flex-wrap container max-md:pb-6">
      <div className="w-full md:w-1/3 pt-20 sm:pt-48">
        <h4 className="text-teal-300 text-[5.33333rem] text-center md:text-start md:text-[4.25rem] font-black uppercase">
          ANNA BLOG
          <br className="hidden md:block" /> & SHARE
        </h4>
        <Link
          href="/blog"
          className="md:w-[252px] hidden md:block md:h-[52px] pl-12 pr-1 py-1 bg-teal-300 rounded-[100px] flex justify-between items-center gap-3"
        >
          <div className="text-white text-[20px] md:text-lg font-black uppercase">
            Xem tất cả
          </div>
          <div className="p-1.5 bg-white rounded-[50px] justify-start items-center gap-2.5 flex">
            <ICArrowTopRightActive width={35} height={35} stroke="#55D5D2" />
          </div>
        </Link>
      </div>
      <div className="hidden md:flex w-full md:w-2/3 flex-wrap">
        <div className="w-full md:w-1/2">
          {/* eslint-disable-next-line array-callback-return,consistent-return */}
          {listBlog?.map((blog: any, index: number) => {
            if (index <= 2) {
              return <ItemBlog key={index} dataBlog={blog} />;
            }
          })}
        </div>
        <div className="w-full md:w-1/2 pt-0 sm:pt-40">
          {/* eslint-disable-next-line array-callback-return,consistent-return */}
          {listBlog?.map((blog: any, index: number) => {
            if (index > 2 && index <= 5) {
              return <ItemBlog key={index} dataBlog={blog} />;
            }
          })}
        </div>
      </div>
      <div className="block md:hidden">
        {listBlog?.map((blog: any, index: number) => {
          if (index <= 3) {
            return (
              <Link
                href={`/blog/${blog?.post_slug}`}
                className="flex md:hidden rounded-[3.2rem] bg-white  mb-8"
              >
                <div className="w-2/5  rounded-[3.2rem]">
                  <Image
                    alt=""
                    height={102}
                    width={135}
                    className="image-item-slide ease-out duration-300  rounded-[3.2rem] h-full w-full object-fill bg-slate-500 "
                    src={blog?.thumbnail_url ? blog?.thumbnail_url : serviceImg}
                  />
                </div>
                <div className="p-[2.3rem] w-3/5">
                  <p className="font-extrabold text-[3.73333rem] line-clamp-3 pb-12">
                    {blog?.title}
                  </p>
                  <span className="text-[2.66667rem] text-neutral-400 font-bold">
                    {formatDate(blog?.post_date)}
                  </span>
                </div>
              </Link>
            );
          }
        })}
      </div>
      <div className="block md:hidden text-end w-full">
        <Link
          href="/blog"
          className="flex w-full justify-end items-center gap-2.5 inline-flex"
        >
          <div className="w-[4.2666rem] md:w-6 h-[4.2666rem] md:h-6 justify-center items-center flex">
            <ArrowRight className="text-orange-400" />
          </div>
          <div className="collect-title text-center text-orange-400 text-[3.2rem] md:text-lg font-bold leading-normal">
            Xem tất cả
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Blog;
