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
    <div className="flex justify-between pt-[7.5rem] flex-wrap">
      <div className="w-full md:w-1/3 pt-20 hidden md:block">
        <Image
          src={dataFeature?.image?.url}
          alt=""
          width={635}
          height={755}
          className="w-full pr-5 md:pr-[4.688rem]"
        />
      </div>
      <div className="w-full md:w-2/3 max-sm:p-[3.2rem] md:pr-[6.25rem]">
        <div className="max-md:w-full md:h-[47px] md:px-5 py-2.5 md:bg-teal-100 rounded-tl-[20px] rounded-tr-[20px] rounded-br-[20px] justify-center items-center gap-2.5 inline-flex">
          <div className="max-md:w-full max-md:pb-10 text-[#313131] text-[3.73333rem] md:text-lg font-extrabold uppercase">
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
              className={`feature-item cursor-pointer py-11 flex items-start md:items-center w-full justify-between md:max-w-[63rem] ${
                index > 0
                  ? 'border-t-2 border-[#55D5D2]'
                  : 'border-t-2 border-[#55D5D2] md:border-[#fff]'
              }`}
            >
              <div>
                <div className="feature-content text-teal-300 text-[4.8rem] md:text-[2.625rem] font-black uppercase">
                  {value?.title}
                </div>
                <div className="feature-content w-full md:w-[26.5rem] text-[#454545] text-[3.73333rem] md:text-[1.125rem] font-extrabold">
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
