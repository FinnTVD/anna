import ICVectorRight from '@/components/Icons/ICVectorRight';
import Image from 'next/image';

interface ItemFeature {
  option: {
    title: string;
    description: string;
    link: string;
  }[];
  image: any;
}
interface IpropFeature {
  dataFeature: ItemFeature;
}
function Feature({ dataFeature }: IpropFeature) {
  return (
    <div className="flex justify-between pt-24 flex-wrap">
      <div className="w-full md:w-1/3 pt-20">
        <Image
          src={dataFeature?.image?.url}
          alt=""
          width={635}
          height={755}
          className="w-full pr-5 sm:pr-[5.688rem]"
        />
      </div>
      <div className="w-full md:w-2/3 sm:pr-32  p-[6.67rem] md:p-[0]">
        <div className="md:h-[47px] px-5 py-2.5 bg-teal-100 rounded-tl-[20px] rounded-tr-[20px] rounded-br-[20px] justify-center items-center gap-2.5 inline-flex">
          <div className="text-neutral-800 text-[4.8rem] md:text-lg font-extrabold uppercase">
            Chọn kính phù hợp với bạn
          </div>
        </div>
        {dataFeature?.option?.map(
          (
            value: { title: string; description: string; link: string },
            index: number
          ) => (
            <div
              key={index}
              className={`feature-item cursor-pointer py-11 flex items-center w-full justify-between pr-6 sm:pr-12 ${
                index > 0 && 'border-t-2 border-[#55D5D2]'
              }`}
            >
              <div>
                <div className="feature-title text-teal-300 text-[9.2rem] md:text-[2.75rem] font-black uppercase">
                  {value?.title}
                </div>
                <div className="w-full md:w-[424px] text-zinc-700 text-[4.8rem] md:text-lg font-extrabold">
                  {value?.description}
                </div>
              </div>
              <ICVectorRight />
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default Feature;