'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const ImageProduct = () => {
  const [imageView, setImageView] = useState('');
  const handleChangeImage = (img: string) => {
    console.log(img);
    setImageView(img);
  };
  return (
    <div className="left-detail w-[52rem] max-lg:w-[40rem]  max-md:w-[52rem] max-md:h-[52rem] flex-col justify-center max-sm:block max-sm:w-full max-sm:h-[21.5rem] max-sm:mb-[1.5rem]">
      <div className="max-sm:h-full">
        <Image
          src={`${
            imageView === ''
              ? 'https://res.cloudinary.com/dkzpakm7v/image/upload/v1677917322/samples/anh/img/4f4c3d80aec335506eb6d569e3d6f91b_tmgat3.jpg'
              : imageView
          }`}
          width={111}
          height={48}
          className="object-contain h-12"
          alt=""
          style={{
            width: '100% !important',
            height: '621px !important',
            objectFit: 'cover',
          }}
        />
        <div className="hidden max-sm:block max-sm:h-full max-sm:w-full">
          {/* <SlideProductMobile/>  */}
        </div>
      </div>
      <ul className="flex min-w-full max-lg:h-[7.5rem] mt-[1rem] justify-between h-[12.15rem] max-sm:hidden">
        <li className=" mr-[1rem] w-1/4">
          <Image
            src="https://res.cloudinary.com/dkzpakm7v/image/upload/v1621505493/samples/anh/cty/2d315d9a6650930eca41_btkvxq.jpg"
            width={111}
            height={48}
            className="object-contain h-12"
            alt=""
            style={{
              width: '100% !important',
              height: '100% !important',
              objectFit: 'cover',
            }}
            onClick={() =>
              handleChangeImage(
                'https://res.cloudinary.com/dkzpakm7v/image/upload/v1621505493/samples/anh/cty/2d315d9a6650930eca41_btkvxq.jpg'
              )
            }
          />
        </li>
        <li className="mr-[1rem] w-1/4">
          <Image
            src="https://res.cloudinary.com/dkzpakm7v/image/upload/v1621498033/samples/anh/cty/3c7eaa0f86c4739a2ad5_hwdm1x.jpg"
            width={111}
            height={48}
            className="object-contain h-12"
            alt=""
            style={{
              width: '100% !important',
              height: '100% !important',
              objectFit: 'cover',
            }}
            onClick={() =>
              handleChangeImage(
                'https://res.cloudinary.com/dkzpakm7v/image/upload/v1621498033/samples/anh/cty/3c7eaa0f86c4739a2ad5_hwdm1x.jpg'
              )
            }
          />
        </li>
        <li className="mr-[1rem] w-1/4 ">
          <Image
            src="https://res.cloudinary.com/dkzpakm7v/image/upload/v1677917322/samples/anh/img/4f4c3d80aec335506eb6d569e3d6f91b_tmgat3.jpg"
            width={111}
            height={48}
            className="object-contain h-12"
            alt=""
            style={{
              width: '100% !important',
              height: '100% !important',
              objectFit: 'cover',
            }}
            onClick={() => handleChangeImage('')}
          />
        </li>
        <li className=" w-1/4 ">
          <Image
            src="https://res.cloudinary.com/dkzpakm7v/image/upload/v1677917322/samples/anh/img/4f4c3d80aec335506eb6d569e3d6f91b_tmgat3.jpg"
            width={111}
            height={48}
            className="object-contain h-12"
            alt=""
            style={{
              width: '100% !important',
              height: '100% !important',
              objectFit: 'cover',
            }}
            onClick={() => handleChangeImage('')}
          />
        </li>
      </ul>
    </div>
  );
};

export default ImageProduct;
