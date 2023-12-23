import ICVectorRight from '@/components/Icons/ICVectorRight';
import Image from 'next/image';

interface Iprops {
  isItemSecond?: boolean;
}
function ItemBlog(props: Iprops) {
  return (
    <div className={`p-4 mt-10 md:h-[597px] `}>
      <div className="pb-4 bg-white rounded-3xl border-2 border-gray-200 flex-col justify-start items-start gap-4 inline-flex">
        <div className="pb-6 w-full flex-col justify-start items-center gap-5 flex">
          <Image
            src="/img/home/image1836.png"
            width={445}
            height={304}
            alt=""
            className="w-full h-[400px] rounded-3xl"
          />
          <div className="px-4 text-zinc-700 text-2xl font-extrabold line-clamp-2">
            Linh K & Tun Phạm cực tình tứ trong bộ ảnh chụp sinh nhật 9 năm Linh
            K & Tun Phạm cực tình tứ trong bộ ảnh chụp sinh nhật 9 năm Linh K &
            Tun Phạm cực tình tứ trong bộ ảnh chụp sinh nhật 9 năm
          </div>
        </div>
        <div className="self-stretch px-6 justify-between items-center inline-flex">
          <div className="grow shrink basis-0">
            <span className="text-zinc-500 text-lg font-bold">Bog </span>
            <span className="text-stone-300 text-lg font-bold">/</span>
            <span className="text-zinc-500 text-lg font-bold  leading-loose">
              {" "}
              Ngày 03.09.2013
            </span>
          </div>
          <div className="py-[15px] rounded-[50px] justify-center items-center gap-2.5 flex">
            <div className="text-center text-teal-300 text-lg font-bold">
              ĐỌC TIẾP
            </div>
            <ICVectorRight width={20} height={20} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemBlog;
