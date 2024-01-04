import { ICChange } from '@/components/Icons/ICChange';
import { ICClean } from '@/components/Icons/ICClean';
import { ICFree } from '@/components/Icons/ICFree';
import { ICProtected } from '@/components/Icons/ICProtected';

function SectionHome() {
  return (
    <div className="px-4 md:px-0 border-t border-b border-teal-300 max-md:mt-[5.6rem] max-md:py-[4.27rem] max-md:bg-[#EEFBFB] flex justify-center">
      <div className="container mx-auto max-lg:mx-[0.75rem] grid gap-4 grid-cols-4 max-md:flex-wrap text-[#454545] max-md:bg-[#EEFBFB] py-[1.875rem] max-md:py-[0rem]">
        <div className="flex  justify-center max-lg:mr-[0.9rem]  max-lg:p-[0.5rem] items-center p-[1.25rem] rounded-[3.125rem] border-[1px] border-[#CAF2F1] max-md:w-[calc(50%_-_0.5rem)] max-md:mb-[4.26667rem] max-md:mr-[0.5rem] max-md:rounded-none max-sm:border-none max-sm:justify-start">
          <div className="max-md:hidden">
            <ICProtected height="1.5rem" />
          </div>
          <div className="hidden max-md:block">
            <ICProtected height="6.4rem" />
          </div>
          <p className="max-lg:text-[0.9rem] max-lg:ml-[0.25rem]-[0.9rem] text-[1.125rem] leading-[1.575rem] font-bold ml-[0.75rem] max-md:text-[3rem] max-md:leading-[3.46667rem]">
            Bảo hành trọn đời
          </p>
        </div>
        <div className="flex justify-center max-lg:mr-[0.9rem]  max-lg:p-[0.5rem] items-center p-[1.25rem] rounded-[3.125rem] border-[1px] border-[#CAF2F1] max-sm:w-[calc(50%_-_0.5rem)] max-md:mb-[4.26667rem] max-sm:ml-[0.5rem] max-sm:rounded-none max-sm:border-none  max-sm:justify-start max-sm:mr-0">
          <div className="max-md:hidden">
            <ICFree height="1.5rem" width="1.5rem" />
          </div>
          <div className="hidden max-md:block">
            <ICFree height="6.4rem" width="6.4rem" />
          </div>
          <p className="max-lg:text-[0.9rem] max-lg:ml-[0.25rem]-[0.9rem] text-[1.125rem] leading-[1.575rem] font-bold ml-[0.75rem] max-md:text-[3rem] max-md:leading-[3.46667rem]">
            Đo mắt miễn phí
          </p>
        </div>
        <div className="flex justify-center max-lg:mr-[0.9rem]  max-lg:p-[0.5rem] items-center p-[1.25rem] rounded-[3.125rem] border-[1px] border-[#CAF2F1] max-sm:w-[calc(50%_-_0.5rem)]  max-sm:mb-[1rem] max-sm:mr-[0.5rem] max-sm:rounded-none max-sm:border-none  max-sm:justify-start">
          <div className="max-md:hidden">
            <ICChange height="1.5rem" width="1.5rem" />
          </div>
          <div className="hidden max-md:block">
            <ICChange height="6.4rem" width="6.4rem" />
          </div>
          <p className="max-lg:text-[0.9rem] max-lg:ml-[0.25rem]-[0.9rem] text-[1.125rem] leading-[1.575rem] font-bold ml-[0.75rem] max-md:text-[3rem] max-md:leading-[3.46667rem]">
            Thu cũ đổi mới
          </p>
        </div>
        <div
          id="check-scroll-to-show"
          className="flex justify-center  max-lg:p-[0.5rem] items-center p-[1.25rem] rounded-[3.125rem] border-[1px] border-[#CAF2F1] max-sm:w-[calc(50%_-_0.5rem)] max-sm:mb-[1rem] max-sm:ml-[0.5rem] max-sm:rounded-none max-sm:border-none  max-sm:justify-start"
        >
          <div className="max-md:hidden">
            <ICClean height="1.5rem" width="1.5rem" />
          </div>
          <div className="hidden max-md:block">
            <ICClean height="6.4rem" width="6.4rem" />
          </div>
          <p className="max-lg:text-[0.9rem] max-lg:ml-[0.25rem]-[0.9rem] text-[1.125rem] leading-[1.575rem] font-bold ml-[0.75rem] max-md:text-[3rem] max-md:leading-[3.46667rem]">
            Vệ sinh và bảo quản kính
          </p>
        </div>
      </div>
    </div>
  );
}

export default SectionHome;
