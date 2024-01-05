import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import serviceImg from '@/assets/blogImg/Rectangle719.png';
import { formatDate } from '@/ultils/format-date';

interface IPropItem {
  blog: any;
  index: number;
}
function ItemMobileBlogHome({ blog, index }: IPropItem) {
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
      <div className="p-[2.3rem] w-3/5">
        <p className="font-extrabold text-[3.73333rem] line-clamp-3 pb-12">
          {blog?.title}
        </p>
        <span className="text-[2.66667rem] text-neutral-400 font-bold">
          {blog && formatDate(blog.post_date)}
        </span>
      </div>
    </Link>
  );
}

export default ItemMobileBlogHome;
