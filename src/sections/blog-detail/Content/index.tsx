import ICSchedule from '@/components/Icons/ICSchedule';
import ICUser from '@/components/Icons/ICUser';
import { formatDate } from '@/ultils/format-date';
import React from 'react';

function ContentBlogDetail({ listBlog }: any) {
  return (
    <div className="md:max-w-[57.25rem] px-12 md:px-2 m-auto py-[6.25rem] md:pb-6">
      <div className="flex items-center">
        <div className="w-[45rem] md:w-[8rem] h-[10rem] md:h-10 flex bg-[#81C8C2] items-center p-6 md:p-2 mr-12 md:mr-6">
          <ICSchedule />
          <div className="text-white text-[3.25rem] md:text-base font-normal pl-6 md:pl-2">
            {formatDate(listBlog?.date)}
          </div>
        </div>
        <div className="flex">
          <ICUser />
          <p className="pl-4 md:pl-2 text-[4.25rem] md:text-[1.25rem] text-black text-opacity-40">
            KinhMatAnna
          </p>
        </div>
      </div>
      <h4 className="text-black pt-8 md:pt-4 text-[4.5rem] md:text-[2.25rem] font-semibold">
        {listBlog?.title?.rendered}
      </h4>
      <div
        className="blog-content"
        dangerouslySetInnerHTML={{ __html: `${listBlog?.content?.rendered}` }}
      />
    </div>
  );
}

export default ContentBlogDetail;
