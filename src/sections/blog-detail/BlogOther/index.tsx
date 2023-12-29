import Image from 'next/image';
import React from 'react';
import logoImg from '@/assets/blogImg/kinh-mat-anna.jpg';
import SliceBlogOther from '@/sections/blog-detail/BlogOther/Slide';
import { fetchDataRest } from '@/lib/fetch-data-rest';

const BlogOther = async () => {
  const listBlogOther = await fetchDataRest('GET', 'post/v1/posts');

  return (
    <div className="md:max-w-[57.25rem] px-12 md:px-2 m-auto">
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/3 flex justify-center">
          <Image
            src={logoImg}
            alt=""
            height={200}
            width={200}
            className="w-[50rem] h-[50rem] md:w-[12.5rem] md:h-[12.5rem] rounded-full"
          />
        </div>
        <div className="w-full md:w-2/3 flex items-center">
          <div>
            <div className="text-black pt-8 md:pt-4 text-[4.5rem] md:text-[2.25rem] font-semibold">
              VIẾT BÌNH LUẬN
            </div>
            <p className="text-[3.25rem] md:text-base text-opacity-70">
              Kính mắt Anna là thương hiệu kính mắt lớn được nhiều người biết
              đến, đặc biệt là khách hàng trẻ tuổi. Với nhiều năm kinh nghiệm
              trong lĩnh vực này, Kính mắt Anna sẽ mang tới bạn đọc những kiến
              thức hữu ích về tư vấn chọn kính đẹp và các bệnh về mắt, giúp bạn
              đọc tự tin lựa chọn cho mình chiếc kính phù hợp nhất
            </p>
          </div>
        </div>
      </div>
      <SliceBlogOther listBlogOther={listBlogOther} />
    </div>
  );
};

export default BlogOther;
