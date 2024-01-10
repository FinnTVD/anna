import ICDots from '@/components/Icons/ICDots';
import Image from 'next/image';
import Link from 'next/link';
import BannerImg from '@/assets/blogImg/Rectangle146.jpg';
function BannerBlog() {
  return (
    <div className="relative">
      <Image
        src={BannerImg}
        width={1600}
        height={1000}
        alt="background"
        className="min-h-[45rem] md:min-h-[36.25rem] z-[1] object-fill w-full"
      />
      <div className="h-full w-full flex items-end absolute top-0 left-0">
        <div className="container md:px-8">
          <div className="pb-16">
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
    </div>
  );
}

export default BannerBlog;
