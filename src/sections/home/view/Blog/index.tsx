import { ICArrowTopRightActive } from '@/components/Icons/ICArrowTopRightActive'
import { fetchDataRest, fetchDataV2 } from '@/lib/fetch-data-rest'
import ItemBlog from '@/sections/home/view/Blog/Item'
import Image from 'next/image'
import React from 'react'

const Blog = async () => {
  const listBlog = await fetchDataV2('GET', 'posts')

  return (
    <div className="px-[6.67rem] sm:p-24 flex flex-wrap">
      <div className="w-full md:w-1/3 pt-20 sm:pt-48">
        <h4 className="text-teal-300 text-[64px] font-black uppercase">
          ANNA BLOG
          <br />& SHARE
        </h4>
        <div className="md:w-[252px] md:h-[52px] pl-12 pr-1 py-1 bg-teal-300 rounded-[100px] flex justify-between items-center gap-3">
          <div className="text-white text-[20px] md:text-lg font-black uppercase">
            Xem tất cả
          </div>
          <div className="p-1.5 bg-white rounded-[50px] justify-start items-center gap-2.5 flex">
            <ICArrowTopRightActive width={35} height={35} stroke="#55D5D2" />
          </div>
        </div>
      </div>
      <div className="flex w-full md:w-2/3 flex-wrap">
        <div className="w-full md:w-1/2">
          {listBlog?.map((blog: any, index: number) => {
            if (index <= 2) {
              return (
                <ItemBlog dataBlog={blog} />
              )
            }
          })}
        </div>
        <div className="w-full md:w-1/2 pt-0 sm:pt-40">
        {listBlog?.map((blog: any, index: number) => {
          if (index > 2 && index <= 5) {
            return(
              <ItemBlog dataBlog={blog} />
            )
          }
        })}
        </div>
      </div>
    </div>
  );
};

export default Blog;
