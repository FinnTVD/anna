import Image from 'next/image';
import React from 'react';

interface IProps {
  dataProductGlasses: any;
  dataDataLenses: any;
  dataProductByAnyCategory: any;
}

function RecommendProduct(props: IProps) {
  const { dataProductGlasses, dataDataLenses, dataProductByAnyCategory } =
    props;

  return (
    <div className="bg-[#EEFBFB]">
      <div className="w-[87.5rem] mx-auto max-lg:mx-[3.25rem] max-md-w-full max-md:mx-0 pb-[10rem] max-md:w-full max-md:px-[2.67rem] max-md:bg-[#EEFBFB] max-md:pb-[3.27rem]">
        <h4 className="pt-[2.06rem] text-[2rem] font-extrabold text-[#4DC0BD] max-md:text-[5.33333rem] max-md:text-[#313131] text-left ">
          GỢI Ý CHO BẠN
        </h4>
        <div className="flex w-full justify-between mt-[2.12rem]">
          <div className="w-[27.5rem]">
            <Image
              width={100}
              height={100}
              className="w-full object-cover rounded-[1rem] mb-[1.5rem] h-[24.25rem]"
              src={
                (dataProductGlasses && dataProductGlasses[0]?.featuredImage) ??
                '/img/no_image.jpg'
              }
              alt=""
            />
            <p className="text-[2rem] font-extrabold text-center not-italic leading-[2.4rem]">
              {dataProductGlasses && dataProductGlasses[0]?.categories[0]}
            </p>
          </div>
          <div className="w-[27.5rem]">
            <Image
              width={100}
              height={100}
              className="w-full object-cover rounded-[1rem] mb-[1.5rem] h-[24.25rem]"
              src={
                (dataDataLenses && dataDataLenses[0]?.featuredImage) ??
                '/img/no_image.jpg'
              }
              alt=""
            />
            <p className="text-[2rem] font-extrabold text-center not-italic leading-[2.4rem]">
              {dataDataLenses && dataDataLenses[0]?.categories[0]}
            </p>
          </div>
          <div className="w-[27.5rem]">
            <Image
              width={100}
              height={100}
              className="w-full object-cover rounded-[1rem] mb-[1.5rem] h-[24.25rem]"
              src={
                (dataProductByAnyCategory &&
                  dataProductByAnyCategory[0]?.featuredImage) ??
                '/img/no_image.jpg'
              }
              alt="image"
            />
            <p className="text-[2rem] font-extrabold text-center not-italic leading-[2.4rem]">
              {dataProductByAnyCategory &&
                dataProductByAnyCategory[0]?.categories[0]}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecommendProduct;
