import { ICArrowTopRightActive } from '@/components/Icons/ICArrowTopRightActive';
import { fetchDataRest } from '@/lib/fetch-data-rest';
import ItemBlog from '@/sections/home/view/Blog/Item';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import serviceImg from '@/assets/blogImg/Rectangle719.png';
import { formatDate } from '@/ultils/format-date';
import { ArrowRight } from 'lucide-react';
import ICLine from '@/components/Icons/ICLine';

const Blog = async () => {
  const listBlog = await fetchDataRest('GET', 'post/v1/posts');

  return (
    <div className="px-[3.2rem] sm:p-3 flex flex-wrap container max-lg:pb-6">
      <div className="w-full lg:w-1/3 pt-[6.4rem] sm:pt-[18rem]">
        <h4 className="text-[#55D5D2] text-[5.33333rem] text-center lg:text-start lg:text-[4rem] max-sm:pb-8 font-black uppercase">
          ANNA BLOG
          <br className="hidden lg:block" /> & SHARE
        </h4>
        <Link
          href="/blog"
          className="lg:w-[252px] hidden lg:flex lg:h-[52px] pl-12 pr-1 py-1 bg-[#55D5D2] rounded-[100px] flex justify-between items-center gap-3"
        >
          <div className="text-white text-[20px] lg:text-lg font-black uppercase">
            Xem tất cả
          </div>
          <div className="p-1.5 bg-white rounded-[50px] justify-start items-center gap-2.5 flex">
            <ICArrowTopRightActive
              width={31.997}
              height={32}
              stroke="#55D5D2"
            />
          </div>
        </Link>
      </div>
      <div className="hidden lg:flex w-full lg:w-2/3 flex-wrap">
        <div className="w-full lg:w-1/2">
          {/* eslint-disable-next-line array-callback-return,consistent-return */}
          {listBlog?.map((blog: any, index: number) => {
            if (index <= 2) {
              return <ItemBlog key={index} dataBlog={blog} />;
            }
          })}
        </div>
        <div className="w-full lg:w-1/2 pt-0 sm:pt-40">
          {/* eslint-disable-next-line array-callback-return,consistent-return */}
          {listBlog?.map((blog: any, index: number) => {
            if (index > 2 && index <= 5) {
              return <ItemBlog key={index} dataBlog={blog} />;
            }
          })}
        </div>
      </div>
      <div className="block lg:hidden">
        {/* <SliderMobileBlogHome dataSliderBlog={listBlog}/> */}
        {/* eslint-disable-next-line array-callback-return,consistent-return */}
        {listBlog?.map((blog: any, index: number) => {
          if (index <= 3) {
            return (
              <Link
                key={index}
                href={`/blog/${blog?.post_slug}`}
                className="flex lg:hidden rounded-[3.2rem] bg-white  mb-8"
              >
                <div className="w-2/5  rounded-[3.2rem]">
                  <Image
                    alt=""
                    height={102}
                    width={135}
                    className="image-item-slide ease-out duration-300  rounded-[3.2rem] h-full w-full object-cover bg-slate-500 "
                    src={blog?.thumbnail_url ? blog?.thumbnail_url : serviceImg}
                  />
                </div>
                <div className="p-[2.3rem] w-3/5 grid grid-flow-col">
                  <p className="font-extrabold text-[3.73333rem] line-clamp-3 pb-12 text-[#454545]">
                    {blog?.title}
                  </p>
                  <div className="text-[2.66667rem] text-[#828282] font-bold flex items-center">
                    <span className="pr-2">Blog</span>
                    <ICLine height={10} />
                    <span className="pl-2">
                      {blog && formatDate(blog.post_date)}
                    </span>
                  </div>
                </div>
              </Link>
            );
          }
        })}
      </div>
      <div className="block lg:hidden text-end w-full">
        <Link
          href="/blog"
          className="flex w-full justify-end items-center gap-2.5 inline-flex"
        >
          <div className="w-[4.2666rem] lg:w-6 h-[4.2666rem] lg:h-6 justify-center items-center flex">
            <ArrowRight className="text-[F58F5D#]" />
          </div>
          <div className="collect-title text-center text-[#F58F5D] text-[3.2rem] lg:text-lg font-bold leading-normal">
            Xem tất cả
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Blog;
