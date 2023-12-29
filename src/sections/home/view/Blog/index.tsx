import { ICArrowTopRightActive } from '@/components/Icons/ICArrowTopRightActive';
import { fetchDataRest } from '@/lib/fetch-data-rest';
import ItemBlog from '@/sections/home/view/Blog/Item';
import Link from 'next/link';
import React from 'react';

const Blog = async () => {
  const listBlog = await fetchDataRest('GET', 'post/v1/posts');

  return (
    <div className="px-[6.67rem] sm:p-0 flex flex-wrap container">
      <div className="w-full md:w-1/3 pt-20 sm:pt-48">
        <h4 className="text-teal-300 text-[64px] font-black uppercase">
          ANNA BLOG
          <br />& SHARE
        </h4>
        <Link href='/blog' className="md:w-[252px] md:h-[52px] pl-12 pr-1 py-1 bg-teal-300 rounded-[100px] flex justify-between items-center gap-3">
          <div className="text-white text-[20px] md:text-lg font-black uppercase">
            Xem tất cả
          </div>
          <div className="p-1.5 bg-white rounded-[50px] justify-start items-center gap-2.5 flex">
            <ICArrowTopRightActive width={35} height={35} stroke="#55D5D2" />
          </div>
        </Link>
      </div>
      <div className="flex w-full md:w-2/3 flex-wrap">
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
    </div>
  );
};

export default Blog;
