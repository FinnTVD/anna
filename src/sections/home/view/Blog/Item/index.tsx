import ICVectorRight from '@/components/Icons/ICVectorRight';
import Image from 'next/image';
import { formatDate } from '@/ultils/format-date';
import serviceImg from '@/assets/blogImg/Rectangle719.png';
import Link from 'next/link';
import { ItemBlogType } from '@/types/types-general';

interface IPropBlog {
  dataBlog: ItemBlogType;
}
function ItemBlog({ dataBlog }: IPropBlog) {
  return (
    <div className="blog-item-home p-4 mt-[1rem] md:mt-6">
      <div className="pb-16 md:pb-4 bg-white w-full h-full rounded-[6.4rem] md:rounded-3xl border-2 border-gray-200 flex-col justify-between items-start gap-4 inline-flex">
        <div className="pb-6 w-full flex-col justify-start gap-5 flex">
          <div className="overflow-hidden rounded-[6.4rem] md:rounded-3xl">
            <Image
              src={
                dataBlog?.thumbnail_url ? dataBlog?.thumbnail_url : serviceImg
              }
              width={445}
              height={304}
              alt=""
              className="image-item-blog w-full h-[55rem] md:h-[23.75rem] rounded-[6.4rem] md:rounded-3xl object-cover"
            />
          </div>
          <div className="item-title-blog transition-opacity px-16 md:px-4 text-zinc-700 text-[6rem] md:text-2xl font-extrabold line-clamp-2">
            {dataBlog?.title}
          </div>
        </div>
        <div className="self-stretch px-20 md:px-6 justify-between items-center flex flex-row-reverse">
          <Link
            href={`/blog/${dataBlog?.post_slug}`}
            className="item-btn-blog p-[1rem] rounded-[50px] justify-center items-center gap-2.5 flex"
          >
            <div className="btn-blog-title text-center text-teal-300 text-[4rem] md:text-lg font-bold">
              ĐỌC TIẾP
            </div>
            <ICVectorRight width={20} height={20} />
          </Link>
          <div className="item-date-blog grow shrink basis-0">
            <span className="text-zinc-500 text-[4rem] md:text-lg font-bold">
              Bog{' '}
            </span>
            <span className="text-stone-300 text-[4rem] md:text-lg font-bold">
              /
            </span>
            <span className="text-zinc-500 text-[4rem] md:text-lg font-bold">
              {' '}
              Ngày {formatDate(dataBlog?.post_date)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemBlog;
