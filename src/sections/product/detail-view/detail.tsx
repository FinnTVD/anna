import { Change, Clean, Executive, Fixed, Free } from '@/app/icons';
import SlideProduct from '@/sections/product/components/slide/Slide';
import ImageProduct from '@/sections/product/detail-view/view/image-product';
import InfoProduct from '@/sections/product/detail-view/view/info-product';
import RecommendProduct from '@/sections/product/detail-view/view/recommend-product';
import { ArrowRight } from 'lucide-react';
import { postData } from '@/lib/post-data';
import { IPostData } from '@/types/next-auth';

interface IProps {
  slug: string;
}

function ProductDetail({ slug }: IProps) {
  const bodyApi: IPostData = {
    url: `products/${slug}`,
    method: 'get',
  };

  const check = postData(bodyApi);

  console.log('check', check);
  return (
    // <div>ssss</div>
    <div className="pt-[3.41rem]">
      {/* section 1 */}
      <div className=" flex  justify-center max-lg:px-[1rem]  max-lg:mx-[0rem] mx-[1.5rem] mb-[5rem] max-sm:block max-sm:mb-[2.25rem] max-sm:mx-0 max-sm:px-[0.75rem]">
        <ImageProduct />
        {/* right */}
        <InfoProduct />
      </div>
      {/* section 2 */}
      <div className="px-[6.25rem] border-t border-b border-teal-300 ">
        <div className="max-lg:mx-[0.75rem] flex justify-between text-[#454545] max-sm:flex-wrap max-sm:mx-0 max-sm:px-[1.5rem] max-sm:py-[1rem] max-sm:bg-[#EEFBFB] py-[1.875rem]">
          <div className="flex  justify-center max-lg:mr-[0.9rem]  max-lg:p-[0.5rem] items-center p-[1.25rem] rounded-[3.125rem] border-[1px] border-[#CAF2F1] max-sm:w-[calc(50%_-_0.5rem)] max-sm:mb-[1rem] max-sm:mr-[0.5rem] max-sm:rounded-none max-sm:border-none max-sm:justify-start">
            <Executive />
            <p className="max-lg:text-[0.9rem] max-lg:ml-[0.25rem]-[0.9rem] text-[1.125rem] leading-[1.575rem] font-bold ml-[0.75rem] max-sm:text-[0.625rem] max-sm:leading-[0.8125rem] max-sm:ml-[0.5rem] max-sm:px-[0.75rem]">
              Bảo hành trọn đời
            </p>
          </div>
          <div className="flex justify-center max-lg:mr-[0.9rem]  max-lg:p-[0.5rem] items-center p-[1.25rem] rounded-[3.125rem] border-[1px] border-[#CAF2F1] max-sm:w-[calc(50%_-_0.5rem)] max-sm:mb-[1rem] max-sm:ml-[0.5rem] max-sm:rounded-none max-sm:border-none  max-sm:justify-start max-sm:mr-0">
            <Change />

            <p className="max-lg:text-[0.9rem] max-lg:ml-[0.25rem]-[0.9rem] text-[1.125rem] leading-[1.575rem] font-bold ml-[0.75rem] max-sm:text-[0.625rem] max-sm:leading-[0.8125rem] max-sm:ml-[0.5rem]">
              Đo mắt miễn phí
            </p>
          </div>
          <div className="flex justify-center max-lg:mr-[0.9rem]  max-lg:p-[0.5rem] items-center p-[1.25rem] rounded-[3.125rem] border-[1px] border-[#CAF2F1] max-sm:w-[calc(50%_-_0.5rem)]  max-sm:mb-[1rem] max-sm:mr-[0.5rem] max-sm:rounded-none max-sm:border-none  max-sm:justify-start">
            <Free />
            <p className="max-lg:text-[0.9rem] max-lg:ml-[0.25rem]-[0.9rem] text-[1.125rem] leading-[1.575rem] font-bold ml-[0.75rem] max-sm:text-[0.625rem] max-sm:leading-[0.8125rem] max-sm:ml-[0.5rem]">
              Thu cũ đổi mới
            </p>
          </div>
          <div
            id="check-scroll-to-show"
            className="flex justify-center  max-lg:p-[0.5rem] items-center p-[1.25rem] rounded-[3.125rem] border-[1px] border-[#CAF2F1] max-sm:w-[calc(50%_-_0.5rem)] max-sm:mb-[1rem] max-sm:ml-[0.5rem] max-sm:rounded-none max-sm:border-none  max-sm:justify-start"
          >
            <Clean />
            <p className="max-lg:text-[0.9rem] max-lg:ml-[0.25rem]-[0.9rem] text-[1.125rem] leading-[1.575rem] font-bold ml-[0.75rem] max-sm:text-[0.625rem] max-sm:leading-[0.8125rem] max-sm:ml-[0.5rem]">
              Vệ sinh và bảo quản kính
            </p>
          </div>
        </div>
      </div>
      {/* section 3 */}
      <div className="mx-[6.25rem] mb-[5rem] max-lg:mx-[3.25rem] mt-[3.75rem] max-sm:mx-0 max-sm:mb-[3.5rem]">
        <div className="flex justify-between mb-[2.62rem] items-center max-sm:mb-[1rem] max-sm:px-[0.75rem]">
          <h4 className="text-[2rem] font-[850] text-[#313131] leading-[2.4rem] h-[2.4rem]  text-center max-sm:text-[1.25rem] ">
            TRÒNG KÍNH BỔ TRỢ
          </h4>
          <div className="flex justify-center h-full  py-[1.6rem] hover:text-[#f58f5d] cursor-pointer">
            <ArrowRight />
            <p className="text-[1.125rem] ml-[0.62rem] text-right max-sm:hidden">
              Xem thêm
            </p>
            <p className="hidden text-[0.75rem] ml-[0.25rem] leading-[1.05rem] text-right max-sm:flex">
              Xem tất cả
            </p>
          </div>
        </div>
        <div className="max-sm:hidden h-[25.625rem]">
          <SlideProduct number={1} />
        </div>
        <div className="hidden max-sm:flex flex-wrap px-[0.375rem]" />
        <div className="hidden justify-center h-full mt-[1rem] max-sm:flex">
          <ArrowRight />
          <p className=" text-[1.125rem] ml-[0.62rem] text-right max-sm:hidden">
            Xem thêm
          </p>
          <p className="md:hidden text-[0.75rem] ml-[0.25rem] leading-[1.05rem] text-right max-sm:flex">
            Xem tất cả
          </p>
        </div>
      </div>
      <div className=" mx-[6.25rem] mb-[5rem] max-lg:mx-[3.25rem] mt-[3.75rem] max-sm:mx-0 max-sm:mb-[3.5rem] ">
        <div className="flex justify-between mb-[2.62rem] items-center max-sm:mb-[1rem]">
          <h4 className="text-[2rem] font-[850] text-[#313131] leading-[2.4rem] h-[2.4rem]  text-center max-sm:text-[1.25rem] max-sm:pl-[0.75rem]">
            GỌNG KÍNH TƯƠNG TỰ
          </h4>
        </div>
        <div className="max-sm:hidden h-[25.625rem]">
          <SlideProduct number={2} />
        </div>
        <div className="hidden max-sm:flex flex-wrap px-[0.375rem]" />
        <div className="hidden justify-center h-full mt-[1rem] max-sm:flex">
          <ArrowRight />
          <p className=" text-[1.125rem] ml-[0.62rem] text-right max-sm:hidden">
            Xem thêm
          </p>
          <p className="md:hidden text-[0.75rem] ml-[0.25rem] leading-[1.05rem] text-right max-sm:flex">
            Xem tất cả
          </p>
        </div>
      </div>

      {/* section 4 */}
      <RecommendProduct />
      {/* section fix */}
      <div
        id="fixed-product"
        className="px-[6.25rem] fixed h-[7.5rem] w-[100%] bg-[#fff] bottom-[-7.5rem] z-50 border-t-[1px] border-[#ECECEC] max-sm:hidden items-center"
      >
        <Fixed />
      </div>
    </div>
  );
}

export default ProductDetail;
