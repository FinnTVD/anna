'use client';

import ICArrowRight2 from "@/components/Icons/ICArrowRight2";
import Image from "next/image";
import { formatCurrencyVND } from "@/ultils/format-price";

function ComponentDropdownHeader() {
  // dropdown product header
  const listProduct = [
    {
      id: 1,
      title: "Gọng kính",
    },
    {
      id: 1,
      title: "tròng kính",
    },

    {
      id: 1,
      title: "Kính râm",
    },
    {
      id: 1,
      title: "kính trẻ em",
    },
    {
      id: 1,
      title: "kính ÁP TRÒNG",
    },
  ];

  const listCategory1 = [
    {
      id: 1,
      title: "Acetate",
    },
    {
      id: 1,
      title: "Kim loại",
    },
    {
      id: 1,
      title: "Nhựa",
    },
    {
      id: 1,
      title: "Nhựa dẻo",
    },
  ];
  const listCategory2 = [
    {
      id: 1,
      title: "Browline",
    },
    {
      id: 1,
      title: "Hình vuông",
    },

    {
      id: 1,
      title: "Mắt mèo",
    },
    {
      id: 1,
      title: "Oval",
    },
  ];

  const listHistory = [
    {
      id: 1,
      title: "Kính áp tròng không khô mắt",
    },
    {
      id: 1,
      title: "Kính áp tròng không khô mắt",
    },
    {
      id: 1,
      title: "Kính áp tròng không khô mắt",
    },
    {
      id: 1,
      title: "Kính áp tròng không khô mắt",
    },
  ];

  const listTextOutstanding = [
    {
      id: 1,
      title: "Essilor",
    },
    {
      id: 1,
      title: "Elements",
    },
    {
      id: 1,
      title: "Chemi",
    },
    {
      id: 1,
      title: "Kodak",
    },
    {
      id: 1,
      title: "Essilor",
    },
    {
      id: 1,
      title: "Elements",
    },
    {
      id: 1,
      title: "Chemi",
    },
    {
      id: 1,
      title: "Kodak",
    },
    {
      id: 1,
      title: "Essilor",
    },
    {
      id: 1,
      title: "Elements",
    },
    {
      id: 1,
      title: "Chemi",
    },
    {
      id: 1,
      title: "Kodak",
    },
    {
      id: 1,
      title: "Essilor",
    },
    {
      id: 1,
      title: "Elements",
    },
    {
      id: 1,
      title: "Chemi",
    },
    {
      id: 1,
      title: "Kodak",
    },
  ];

  const listSeemore = [
    {
      id: 1,
      title: "Giúp bạn chọn kính",
    },
    {
      id: 1,
      title: "Về chúng tôi",
    },
    {
      id: 1,
      title: "blog",
    },
  ];

  const listProductCart = [
    {
      image:
        "https://kinhmatanna.com/wp-content/uploads/2023/09/TU-1636-600x600.png",
      category: "Gọng kính",
      name: "GK – 380CK081",
      material: "Kim loại titan",
      color: "Đen vàng",
      price: 495000,
      salePrice: 440000,
    },
    {
      image:
        "https://kinhmatanna.com/wp-content/uploads/2023/09/TU-1636-600x600.png",
      category: "Gọng kính",
      name: "GK – 380CK081",
      material: "Kim loại titan",
      color: "Đen vàng",
      price: 495000,
      salePrice: 440000,
    },
    {
      image:
        "https://kinhmatanna.com/wp-content/uploads/2023/09/TU-1636-600x600.png",
      category: "Gọng kính",
      name: "GK – 380CK081",
      material: "Kim loại titan",
      color: "Đen vàng",
      price: 495000,
      salePrice: 440000,
    },
  ];

  const color = "#55D5D2";
  return (
    <div className="w-[92.5rem] mx-auto my-[3rem] mt-[12rem] bg-[black] p-[2rem]">
      {/* dropdown product header */}
      <div className="w-full flex justify-between bg-white rounded-[1.5rem] ">
        <div className="py-[1.44rem] px-[2.88rem] w-[29.125rem] border-r-2 border-[#55D5D2]">
          <ul className="w-full">
            {listProduct.map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center mb-[3rem]"
              >
                <span
                  className={`text-[${color}] text-[1.125rem] not-italic font-extrabold leading-[1.6875rem] uppercase`}
                >
                  {item.title}
                </span>
                <ICArrowRight2
                  fill="#55D5D2"
                  width="1.375rem"
                  height="1.375rem"
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="py-[1.5rem] px-[4rem] flex justify-between w-[33rem]">
          <div>
            <h3 className="mb-[1.25rem] text-[1.125rem] not-italic font-extrabold leading-[1.125rem] uppercase">
              Chất liệu
            </h3>
            <ul>
              {listCategory1.map((item, index) => (
                <li key={index} className="flex items-center mb-[1.25rem]">
                  <ICArrowRight2
                    fill="#F58F5D"
                    width="1.25rem"
                    height="1.25rem"
                  />
                  <span className="ml-[0.88rem] text-[#F58F5D] text-[1.125rem] not-italic font-extrabold leading-[1.6875rem]">
                    {item.title}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-[1.25rem] text-[1.125rem] not-italic font-extrabold leading-[1.125rem] uppercase">
              Hình dáng
            </h3>
            <ul>
              {listCategory2.map((item, index) => (
                <li key={index} className="flex items-center mb-[1.25rem]">
                  <ICArrowRight2
                    fill="#F58F5D"
                    width="1.25rem"
                    height="1.25rem"
                  />
                  <span className="ml-[0.88rem] text-[#F58F5D] text-[1.125rem] not-italic font-extrabold leading-[1.6875rem]">
                    {item.title}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex grow items-center justify-center py-[1.5rem]">
          <Image
            height={200}
            width={200}
            className="w-[23.3125rem] h-[25.6875rem] rounded-[1rem]"
            src="https://kinhmatanna.com/wp-content/uploads/2023/09/TU-1636-600x600.png"
            alt=""
          />
        </div>
      </div>

      {/* dropdown search product */}
      <div className="mt-[4rem] py-[2.25rem] bg-white w-[30.4375rem] rounded-[1.5rem]">
        <span className="px-[1.75rem] uppercase text-[#C5C5C5] text-[0.75rem] not-italic font-extrabold leading-[1.125rem]">
          LỊCH SỬ TÌM KIẾM
        </span>
        <ul className="mt-[1.5rem] px-[1.75rem]">
          {listHistory.map((item, index) => (
            <li
              key={index}
              className="flex items-center justify-between pb-[1.2rem] last:border-b-0 border-b-2 border-b-[#ECECEC] mb-[1.2rem] "
            >
              <span
                className={`text-[${color}] text-[1rem] not-italic font-bold leading-[1.5rem]`}
              >
                {item.title}
              </span>
              <div className="rotate-[321deg]">
                <ICArrowRight2 fill="#55D5D2" width="1.1rem" height="1.1rem" />
              </div>
            </li>
          ))}
        </ul>
        <div className="w-full h-[1.375rem] bg-[#ECECEC]" />
        <div className="px-[1.75rem] pt-[1.8rem]">
          <span className="uppercase text-[#C5C5C5] text-[0.75rem] not-italic font-extrabold leading-[1.125rem]">
            TỪ KHÓA NỔI BẬT
          </span>
          <ul className="mt-[1.5rem] flex flex-wrap ">
            {listTextOutstanding.map((item, index) => (
              <li
                key={index}
                className="mb-[0.5rem] mr-[0.38rem] w-fit h-fit py-[0.3125rem] px-[1rem] rounded-[6.25rem] bg-[#55D5D2] text-[0.875rem] text-white not-italic leading-[1.3125rem] font-bold "
              >
                {item.title}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* dropdown see more header */}
      <div className="w-full flex justify-between bg-white rounded-[1.5rem] mt-[4rem]">
        <div className="py-[2rem] px-[2.88rem] w-[24.5rem] border-r-2 border-[#55D5D2]">
          <ul className="w-full">
            {listSeemore.map((item, index) => (
              <li key={index} className="mb-[3rem]">
                <span
                  className={`text-[${color}] text-[1.125rem] not-italic font-extrabold leading-[1.6875rem] uppercase`}
                >
                  {item.title}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex grow items-center justify-between p-[2rem]">
          <div className="w-[18.66669rem] h-[19.3125rem] relative flex justify-center">
            <Image
              height={200}
              width={200}
              className="w-[18.66669rem] h-[19.3125rem] rounded-[0.75rem]"
              src="https://kinhmatanna.com/wp-content/uploads/2023/09/TU-1636-600x600.png"
              alt=""
            />
            <button
              type="button"
              className="absolute bottom-2 rounded-[6.25rem] pl-[1.25rem] pt-[0.25rem] pr-[0.25rem] pb-[0.25rem] bg-[#F58F5D] flex justify-between items-center"
            >
              <span className="text-[0.8125rem] text-white not-italic font-extrabold leading-[0.975rem] mr-[0.75rem]">
                CHỌN KÍNH THEO KHUÔN MẶT
              </span>
              <div className="bg-white rounded-full p-[0.8125rem] h-fit w-fit flex justify-center items-center">
                <div className="rotate-[321deg] ">
                  <ICArrowRight2
                    fill="#F58F5D"
                    width="1.1rem"
                    height="1.1rem"
                  />
                </div>
              </div>
            </button>
          </div>
          <div className="w-[18.66669rem] h-[19.3125rem] relative flex justify-center">
            <Image
              height={200}
              width={200}
              className="w-[18.66669rem] h-[19.3125rem] rounded-[0.75rem]"
              src="https://kinhmatanna.com/wp-content/uploads/2023/09/TU-1636-600x600.png"
              alt=""
            />
            <button
              type="button"
              className="absolute bottom-2 rounded-[6.25rem] pl-[1.25rem] pt-[0.25rem] pr-[0.25rem] pb-[0.25rem] bg-[#F58F5D] flex justify-between items-center"
            >
              <span className="text-[0.8125rem] text-white not-italic font-extrabold leading-[0.975rem] mr-[0.75rem]">
                CHỌN KÍNH THEO KHUÔN MẶT
              </span>
              <div className="bg-white rounded-full p-[0.8125rem] h-fit w-fit flex justify-center items-center">
                <div className="rotate-[321deg] ">
                  <ICArrowRight2
                    fill="#F58F5D"
                    width="1.1rem"
                    height="1.1rem"
                  />
                </div>
              </div>
            </button>
          </div>
          <div className="w-[18.66669rem] h-[19.3125rem] relative flex justify-center">
            <Image
              height={200}
              width={200}
              className="w-[18.66669rem] h-[19.3125rem] rounded-[0.75rem]"
              src="https://kinhmatanna.com/wp-content/uploads/2023/09/TU-1636-600x600.png"
              alt=""
            />
            <button
              type="button"
              className="absolute bottom-2 rounded-[6.25rem] pl-[1.25rem] pt-[0.25rem] pr-[0.25rem] pb-[0.25rem] bg-[#F58F5D] flex justify-between items-center"
            >
              <span className="text-[0.8125rem] text-white not-italic font-extrabold leading-[0.975rem] mr-[0.75rem]">
                CHỌN KÍNH THEO KHUÔN MẶT
              </span>
              <div className="bg-white rounded-full p-[0.8125rem] h-fit w-fit flex justify-center items-center">
                <div className="rotate-[321deg] ">
                  <ICArrowRight2
                    fill="#F58F5D"
                    width="1.1rem"
                    height="1.1rem"
                  />
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* dropdown cart header */}
      <div className="w-[25.875rem] bg-white px-[1.25rem] py-[1.75rem] rounded-[1.5rem] mt-[4rem]">
        <div className="flex justify-between mb-[1.5rem] pb-[1rem] border-b-2 border-[#ECECEC]">
          <div className="flex items-center">
            <span className="text-[1.25rem] not-italic font-extrabold leading-[1.5rem] mr-[0.5rem]">
              Giỏ hàng
            </span>
            <div className="h-[1.0625rem] w-[1.0625rem] rounded-full bg-[#F58F5D] flex justify-center items-center text-[0.75rem] not-italic leading-[1.125rem] font-bold">
              2
            </div>
          </div>
          <span className="text-[0.75rem] not-italic font-bold leading-[1.125rem] text-[#55D5D2]">
            Xem tất cả
          </span>
        </div>
        <div>
          {listProductCart.map((item, index) => (
            <div
              key={index}
              className="flex pb-[1.25rem] border-b-2 border-[#8258282] mb-[1.25rem]"
            >
              <Image
                height={80}
                width={80}
                className="w-[8.125rem] h-[8.125rem] rounded-[0.5rem] mr-[1rem]"
                src={item.image}
                alt=""
              />
              <div className="grow">
                <div className="h-fit w-fit py-[0.3rem] px-[0.625rem] rounded-[2.5rem] bg-[#CAF2F1] text-[0.75rem] not-italic font-bold">
                  {item.category}
                </div>
                <h3 className="mt-[0.5rem] text-[1rem] not-italic font-extrabold leading-[1.2rem]">
                  {item.name}
                </h3>
                <div className="flex items-center mt-[0.5rem]">
                  <div className="w-[0.375rem] h-[0.375rem] bg-[#55D5D2] rounded-full mr-[0.38rem]" />
                  <span className="text-[0.75rem] text-[#828282] not-italic font-bold leading-[0.9rem]">
                    Chất liệu: {item.material}
                  </span>
                </div>
                <div className="flex items-center mt-[0.5rem] mb-[0.75rem]">
                  <div className="w-[0.375rem] h-[0.375rem] bg-[#55D5D2] rounded-full mr-[0.38rem]" />
                  <span className="text-[0.75rem] text-[#828282] not-italic font-bold leading-[0.9rem]">
                    Màu sắc: {item.color}
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="mr-[0.62rem] text-[1.125rem] text-[#55D5D2] not-italic font-extrabold leading-[1.35rem]">
                    {formatCurrencyVND(item.price.toString())}
                  </span>
                  <span className="text-[0.875rem] not-italic font-normal leading-[1.05rem] line-through">
                    {formatCurrencyVND(item.salePrice.toString())}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          type="button"
          className="rounded-[6.25rem] pl-[1.25rem] pt-[0.25rem] pr-[0.25rem] pb-[0.25rem] bg-[#55D5D2] flex justify-between items-center"
        >
          <span className="text-[0.8125rem] text-white not-italic font-extrabold leading-[0.975rem] mr-[0.75rem]">
            ĐI ĐẾN THANH TOÁN
          </span>
          <div className="bg-white rounded-full p-[0.8125rem] h-fit w-fit flex justify-center items-center">
            <div className="rotate-[321deg] ">
              <ICArrowRight2 fill="#55D5D2" width="1.1rem" height="1.1rem" />
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}

export default ComponentDropdownHeader;
