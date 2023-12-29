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
    <div className={`p-4 mt-[1rem] md:mt-6 h-[90rem] md:h-[597px] `}>
      <div className="pb-16 md:pb-4 bg-white w-full h-full rounded-[6.4rem] md:rounded-3xl border-2 border-gray-200 flex-col justify-between items-start gap-4 inline-flex">
        <div className="pb-6 w-full flex-col justify-start gap-5 flex">
          <Image
            src={dataBlog?.thumbnail_url ? dataBlog?.thumbnail_url : serviceImg}
            width={445}
            height={304}
            alt=""
            className="w-full h-[55rem] md:h-[23.75rem] rounded-[6.4rem] md:rounded-3xl object-cover"
          />
          <div className="px-16 md:px-4 text-zinc-700 text-[6rem] md:text-2xl font-extrabold line-clamp-2">
            {dataBlog?.title}
          </div>
        </div>
        <div className="self-stretch px-20 md:px-6 justify-between items-center inline-flex">
          <div className="grow shrink basis-0">
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
          <div className="py-[15px] rounded-[50px] justify-center items-center gap-2.5 flex">
            <Link
              href={`/blog/${dataBlog?.post_slug}`}
              className="text-center text-teal-300 text-[4rem] md:text-lg font-bold hover:text-orange-400"
            >
              ĐỌC TIẾP
            </Link>
            <ICVectorRight width={20} height={20} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemBlog;
