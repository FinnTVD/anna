import React from 'react';
import Image from 'next/image';

const ImageProduct = () => {
  const handleChangeImage = (e: any) => {
    console.log(e);
  };
  return (
    <div className="left-detail w-[52rem] max-lg:w-[40rem]  max-md:w-[52rem] max-md:h-[52rem] flex-col justify-center max-sm:block max-sm:w-full max-sm:h-[21.5rem] max-sm:mb-[1.5rem]">
      <div className="max-sm:h-full">
        <Image
          src="/img/logo-1.png"
          width={111}
          height={48}
          className="object-contain h-12"
          alt=""
        />
        <div className="hidden max-sm:block max-sm:h-full max-sm:w-full">
          {/* <SlideProductMobile/>  */}
        </div>
      </div>
      <ul className="flex min-w-full max-lg:h-[7.5rem] mt-[1rem] justify-between h-[12.15rem] max-sm:hidden">
        <li className=" mr-[1rem]">
          <Image
            src="/img/logo-1.png"
            width={111}
            height={48}
            className="object-contain h-12"
            alt=""
          />
        </li>
        <li className="mr-[1rem]">
          <Image
            src="/img/logo-1.png"
            width={111}
            height={48}
            className="object-contain h-12"
            alt=""
          />
        </li>
        <li className="mr-[1rem] ">
          <Image
            src="/img/logo-1.png"
            width={111}
            height={48}
            className="object-contain h-12"
            alt=""
          />
        </li>
        <li>
          <Image
            src="/img/logo-1.png"
            width={111}
            height={48}
            className="object-contain h-12"
            alt=""
          />
        </li>
      </ul>
    </div>
  );
};

export default ImageProduct;
