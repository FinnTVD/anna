import ICDots from '@/components/Icons/ICDots';
import Link from 'next/link';

function BannerBlog() {
  return (
    <div className="banner-blog py-10">
      <div className="min-h-[45rem] md:min-h-[33.25rem] px-[5rem] md:px-[10rem] flex items-end">
        <div className="pb-8">
          <div className="text-white text-[13rem] md:text-[3.25rem] font-bold pb-4">
            BLOG
          </div>
          <div className="flex items-center">
            <Link
              href="/"
              className="text-white text-[3.5rem] md:text-base pr-8 md:pr-4 font-normal"
            >
              Trang chủ
            </Link>
            <ICDots height={10} width={10} />
            <div className="text-white text-[3.5rem] md:text-base pl-8 md:pl-4 font-semibold">
              Blog
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerBlog;
