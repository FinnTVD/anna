"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import { IDetailProductRes } from "@/types/detail-product";

interface IProps {
  dataInit?: IDetailProductRes;
}

interface IItemImage {
  id: number | null;
  src: string | undefined;
  name: string;
}

function SlideProductMobile() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
        }}
        loop
        modules={[Pagination, Navigation]}
        className="mySwiper h-full rounded-[1rem] overflow-hidden"
      >
        <SwiperSlide className="w-full">
          <Image
            width={93}
            height={91}
            className="h-full w-full object-cover  max-md:min-w-full"
            src="https://images.unsplash.com/photo-1519638399535-1b036603ac77?q=80&w=3131&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="">
          <Image
            width={93}
            height={91}
            className="h-full w-full object-cover  max-md:min-w-full"
            src="https://images.unsplash.com/photo-1519638399535-1b036603ac77?q=80&w=3131&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
      <div className="swiper-pagination" />
    </>
  );
}

function ImageProduct(props: IProps) {
  const { dataInit } = props;
  const [itemImagePreview, setItemImagePreview] = useState<IItemImage>({
    id: null,
    name: "",
    src: "",
  });

  console.log("dataInit", dataInit);
  const handleChangeImage = (value: IItemImage): void => {
    const newObject: IItemImage = {
      id: value.id,
      src: value.src,
      name: value.name,
    };
    setItemImagePreview(newObject);
  };

  useEffect(() => {
    setItemImagePreview({ ...itemImagePreview, src: dataInit?.featuredImage });
  }, [dataInit?.featuredImage]);
  return (
    <div className="left-detail w-[47rem] max-lg:w-[40rem]  max-md:w-[52rem] max-md:h-[91.73333rem] flex-col justify-center max-md:block max-md:w-full max-md:h-[21.5rem] max-md:mb-[1.5rem]">
      <div className="max-sm:h-full">
        <div className="w-full  h-[38.8125rem] relative max-md:hidden">
          <Image
            fill
            objectFit="cover"
            className="image-current w-full h-full object-cover "
            src={itemImagePreview.src ?? "/img/no_image.jpg"}
            alt=""
          />
        </div>
        <div className="hidden max-md:block h-full w-full">
          <SlideProductMobile />
        </div>
      </div>
      <ul className="flex min-w-full max-lg:h-[7.5rem] mt-[1rem] justify-between h-[12.15rem] max-md:hidden">
        {dataInit?.gallery ? (
          dataInit?.gallery?.map((item: any, index: number) => (
            <li key={index} className="mr-[1rem]">
              <Image
                width={52}
                height={52}
                onClick={(e) => handleChangeImage(item)}
                className="flex h-[12.25rem] w-[12.25rem] object-cover"
                src={item.src ?? "/img/no_image.jpg"}
                alt=""
              />
            </li>
          ))
        ) : (
          <div>
            <Image
              width={52}
              height={52}
              className="flex h-[12.25rem] w-[12.25rem] object-cover"
              src="/img/no_image.jpg"
              alt=""
            />
          </div>
        )}
      </ul>
    </div>
  );
}

export default ImageProduct;
