"use client"
import { Color_1, MapMobile } from '@/app/icons';
import React, { useState } from 'react'

const InfoProduct = () => {
  const [numberInfor, setNumberInfor] = useState<number>(1);

  const handleChangeColor = (e: any) => {
    console.log(e);
  }

  const handleHiddenInfor = (e: any, value: number) => {
    console.log(e);
  }

  return (
    <div className="right-detail max-lg:w-[25rem] max-lg:ml-[1.76rem]  ml-[3.76rem] max-sm:mt-[0rem] max-sm:ml-[0rem] max-sm:relative max-md:w-full">
      <div className="bg-[#CAF2F1] h-[1.4375rem] border-[#C5C5C5] md:border-[1px] rounded-[2.5rem] mb-[0.62rem] w-[4.875rem]  max-sm:mb-[0.5rem] ">
        <p className="text-[0.75rem]  text-[#454545] font-bold leading-[1.2375rem] h-[1.4375rem] text-center items-center max-sm:text-[0.625rem] ">
          Gọng kính
        </p>
      </div>
      <p className="text-[1.75rem] font-[850] text-[#454545] leading-[2.1rem] mb-[0.99rem] max-sm:text-[1.5rem] max-sm:leading-[1.95rem] max-sm:mb-[0.75rem]">
        GK – 380CK081
      </p>
      <p className="text-[1.875rem] font-[850] leading-[2.25rem] text-[#55D5D2] max-sm:hidden">
        320.000đ
      </p>
      <p className="text-[1rem] leading-[1.4rem] font-bold text-[#6A6A6A] line-through max-sm:hidden">
        640.000
      </p>
      <ul className="max-lg:mt-[1.06rem] max-lg:mb-[2.31rem] list-color flex mt-[2.06rem] mb-[3.31rem] max-sm:hidden">
        <li
          className="color-detail color-detail-product-1 border-[100%] mr-[1rem]"
          onClick={() => handleChangeColor(1)}
        >
          <Color_1 />
        </li>
        <li
          className="color-detail color-detail-product-2  border-[100%] mr-[1rem] active"
          onClick={() => handleChangeColor(2)}
        >
          <Color_1 />
        </li>
        <li
          className="color-detail color-detail-product-3 border-[100%] mr-[1rem] "
          onClick={() => handleChangeColor(3)}
        >
          <Color_1 />
        </li>
        <li className="color-detail color-detail-product-4  border-[100%] mr-[1rem]">
          <Color_1 />
        </li>
        <li className="color-detail color-detail-product-5  border-[100%] mr-[1rem]">
          <Color_1 />
        </li>
        <li className="color-detail color-detail-product-6  border-[100%] mr-1rem">
          <Color_1 />
        </li>
      </ul>
      {/* support */}
      <p className="max-lg:text-[0.95rem] max-lg:mb-[2.5rem] max-md:w-[31.625rem] text-[1rem] text-[#3F3F3F] font-bold leading-[1.5rem] mb-[3.7rem] max-sm:text-[0.875rem] max-sm:leading-[1.3125rem] max-sm:w-[100%]">
        Hướng dẫn sử dụng:<br></br> + Tháo kính bằng 2 tay hoặc những nơi có nhiệt độ
        cao làm biến dạng kính.<br></br> + Không bỏ kính vào cốp xe hoặc những nơi có
        nhiệt độ cao làm biến dạng kính.
      </p>
      {/* button */}
      <div className="max-lg:px-[0.5rem]  max-lg:py-[0.5rem] px-[1rem] py-[1.06rem] bg-[#CAF2F1]  rounded-[5rem] mb-[2.6rem] max-sm:p-0 ">
        <div className="flex justify-between items-center  h-[3.375rem]">
          <div className="wrapper-tongle-detail text-[#44AAA8] flex flex-1  justify-between px-[1.5rem] items-center rounded-[2.3125rem] bg-white h-full border-[#4DC0BD] border-[1px] max-sm:hidden ">
            <div className="max-lg:ml-[-0.95rem] max-lg:mr-[.5rem] w-[0.6875rem] text-[1.25rem] font-bold leading-[1.875rem]">
              -
            </div>
            <div className="number-add-cart-opacity"></div>
            <span className="max-lg:px-[0.5rem] number-add-cart text-[1rem] font-[800] leading-[1.5rem] font-[SVN-Nexa]">
              08
            </span>
            <div className="number-add-cart-opacity"></div>
            <div className="max-lg:mr-[-0.95rem] max-lg:ml-[.5rem] w-[0.6875rem] text-[1.25rem] font-bold leading-[1.875rem]">
              +
            </div>
          </div>
          <div className="flex bg-[#55D5D2] max-lg:whitespace-nowrap max-lg:px-[0.75rem] max-lg:ml-[0.5rem] text-white text-[1rem] font-extrabold leading-[1.4rem] items-center px-[1.25rem] h-full rounded-[6.25rem] ml-[1.5rem] max-sm:w-full max-sm:ml-0 max-sm:justify-between">
            <p className="max-lg:mr-[0.49rem] max-lg:text-[1rem] mr-[1.49rem]">Thêm vào giỏ</p>
            <p className=" title-add-cart">120.000.000đ</p>
          </div>
        </div>
      </div>
      {/* adddress */}
      <div className="flex items-center border-t border-b border-[#55D5D2] mb-[1rem] max-sm:absolute max-sm:top-0 max-sm:right-0 max-sm:border-none ">
        <svg
          className="jumping-map max-sm:hidden"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
        >
          <path
            d="M12 16.3584C12.6895 16.3584 13.3158 16.0822 13.6755 15.6195C16.1958 12.3776 19.2 8.10496 19.2 6.16075C19.2 3.0394 15.9701 0.5 12 0.5C8.02988 0.5 4.8 3.0394 4.8 6.16075C4.8 8.10496 7.80429 12.3776 10.3245 15.6195C10.6842 16.0822 11.3106 16.3584 12 16.3584ZM9.10601 5.77208C9.10601 4.51752 10.4043 3.49684 12 3.49684C13.5957 3.49684 14.894 4.51752 14.894 5.77208C14.894 7.02667 13.5957 8.04735 12 8.04735C10.4043 8.04735 9.10601 7.02671 9.10601 5.77208Z"
            fill="#55D5D2"
          />
        </svg>
        <div className="hidden max-sm:flex max-sm:bg-[#55D5D2] rounded-[50%] w-[1.5rem] h-[1.5rem] justify-center">
          <MapMobile />
        </div>
        <p className="max-lg:text-[1rem]  max-lg:leading-[1.5rem] text-[1.5rem] font-[850] leading-[1.95rem] ml-[0.62rem] text-[#55D5D2] mx-[1.5rem] my-[0.94rem] max-sm:text-[0.625rem] max-sm:font-bold max-sm:leading-[1.5rem] max-sm:my-[0px]">
          Tìm cửa hàng
        </p>
      </div>
      {/* infor */}
      <div className="all-infor-detail">
        <div>
          <div>
            <div
              className={`flex justify-between py-[0.9375rem] ${numberInfor !== 1 ? 'border-b-[1px]' : 'border-b-[0px]'} border-[#ECECEC]`}
              onClick={() => handleHiddenInfor("show", 1)}
            >
              <span className="max-lg:text-[1rem]  max-lg:leading-[1.5rem] text-[1.5rem] font-[850] leading-[1.95rem] text-[#454545] max-sm:text-[1.25rem] max-sm:leading-[1.75rem]">
                Thông tin
              </span>
              {numberInfor == 1 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6 12.5H18H6Z"
                    fill="#6A6A6A"
                  />
                  <path
                    d="M6 12.5H18"
                    stroke="#262626"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  className=""
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <path
                    d="M6 12.5H12M12 12.5H18M12 12.5V18.5M12 12.5V6.5"
                    stroke="#262626"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

              )}
            </div>
            <p className="max-lg:text-[0.9rem] max-lg:w-full hidden infor-detail infor-detail-1 w-[32.375rem] text-[1rem] font-bold leading-[1.5rem] text-[#3F3F3F] self-stretch max-sm:text-[0.875rem] max-sm:leading-[1.3125rem] max-sm:w-[100%]">
              Chịu trách nhiệm sản phẩm: Công Ty TNHH Dịch vụ và Thương mại
              Anna Việt Nam Cảnh báo: Bảo quản trong hộp kính Hướng dẫn sử
              dụng: + Tháo kính bằng 2 tay + Không bỏ kính vào cốp xe hoặc
              những nơi có nhiệt độ cao làm biến dạng kính. + Không bỏ kính
              vào túi sách nếu không có hộp kính, vật dụng nhọn như chìa
              khóa sẽ làm xước kính. + Không rửa kính lau kính bằng các chất
              có tính tẩy rửa mạnh làm bong tróc lớp váng phủ
            </p>
          </div>
          <div>
            <div
              className={`flex justify-between py-[0.9375rem] ${numberInfor !== 2 ? 'border-b-[1px]' : 'border-b-[0px]'} border-[#ECECEC] `}
              onClick={() => handleHiddenInfor("show", 2)}
            >
              <span className="max-lg:text-[1rem]  max-lg:leading-[1.5rem] text-[1.5rem] font-[850] leading-[1.95rem] text-[#454545] max-sm:text-[1.25rem] max-sm:leading-[1.75rem]">
                Vận chuyển
              </span>
              {numberInfor == 2 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6 12.5H18H6Z"
                    fill="#6A6A6A"
                  />
                  <path
                    d="M6 12.5H18"
                    stroke="#262626"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  className=""
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <path
                    d="M6 12.5H12M12 12.5H18M12 12.5V18.5M12 12.5V6.5"
                    stroke="#262626"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              )}
            </div>
            <p className="max-lg:text-[0.9rem] max-lg:w-full infor-detail infor-detail-2 w-[32.375rem] text-[1rem] font-bold leading-[1.5rem] text-[#3F3F3F] self-stretch hidden max-sm:text-[0.875rem] max-sm:leading-[1.3125rem] max-sm:w-[100%]">
              Chịu trách nhiệm sản phẩm: Công Ty TNHH Dịch vụ và Thương mại
              Anna Việt Nam Cảnh báo: Bảo quản trong hộp kính Hướng dẫn sử
              dụng: + Tháo kính bằng 2 tay + Không bỏ kính vào cốp xe hoặc
              những nơi có nhiệt độ cao làm biến dạng kính. + Không bỏ kính
              vào túi sách nếu không có hộp kính, vật dụng nhọn như chìa
              khóa sẽ làm xước kính. + Không rửa kính lau kính bằng các chất
              có tính tẩy rửa mạnh làm bong tróc lớp váng phủ
            </p>
          </div>
          <div>
            <div
              className={`flex justify-between py-[0.9375rem] ${numberInfor !== 3 ? 'border-b-[1px]' : 'border-b-[0px]'} border-[#ECECEC]`}
              onClick={() => handleHiddenInfor("show", 3)}
            >
              <span className=" max-lg:text-[1rem]  max-lg:leading-[1.5rem] text-[1.5rem] font-[850] leading-[1.95rem] text-[#454545] max-sm:text-[1.25rem] max-sm:leading-[1.75rem]">
                Đổi trả
              </span>
              {numberInfor == 3 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6 12.5H18H6Z"
                    fill="#6A6A6A"
                  />
                  <path
                    d="M6 12.5H18"
                    stroke="#262626"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  className=""
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <path
                    d="M6 12.5H12M12 12.5H18M12 12.5V18.5M12 12.5V6.5"
                    stroke="#262626"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              )}
            </div>
            <p className="max-lg:text-[0.9rem] max-lg:w-full infor-detail infor-detail-3 w-[32.375rem] text-[1rem] font-bold leading-[1.5rem] text-[#3F3F3F] self-stretch flex-none hidden max-sm:text-[0.875rem] max-sm:leading-[1.3125rem] max-sm:w-[100%]">
              Chịu trách nhiệm sản phẩm: Công Ty TNHH Dịch vụ và Thương mại
              Anna Việt Nam Cảnh báo: Bảo quản trong hộp kính Hướng dẫn sử
              dụng: + Tháo kính bằng 2 tay + Không bỏ kính vào cốp xe hoặc
              những nơi có nhiệt độ cao làm biến dạng kính. + Không bỏ kính
              vào túi sách nếu không có hộp kính, vật dụng nhọn như chìa
              khóa sẽ làm xước kính. + Không rửa kính lau kính bằng các chất
              có tính tẩy rửa mạnh làm bong tróc lớp váng phủ
            </p>
          </div>
          <div>
            <div
              className={`flex justify-between py-[0.9375rem] ${numberInfor !== 1 ? 'border-b-[1px]' : 'border-b-[0px]'} border-[#ECECEC]`}
              onClick={() => handleHiddenInfor("show", 1)}
            >
              <span className="max-lg:text-[1rem]  max-lg:leading-[1.5rem] text-[1.5rem] font-[850] leading-[1.95rem] text-[#454545] max-sm:text-[1.25rem] max-sm:leading-[1.75rem]">
                Chọn kính theo gương mặt
              </span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                <path d="M9 5.5L16 12.5L9 19.5" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoProduct