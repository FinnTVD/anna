import React from 'react';
import {
  ArrowSlideLeft,
  ArrowSlideRight,
  ArrowTopRight,
  ArrowTopRightActive,
  ColorPink,
} from '@/app/icons';

const Iterm = () => {
  return (
    <div className="max-sm:h-[14.125rem]">
      <div className="relative  ">
        <img
          className="h-[20.375rem] object-fill  max-sm:h-[9.375rem] bg-slate-500 w-full "
          src="https://lh3.googleusercontent.com/pw/ADCreHdEeAG7birZnakSien_iTBZGjzQP91lSlWG_KqZH0sDSkUO-Qfi49K68Rokz3eYmx92GT1J71lCLtdUu0LFVE78ppfC33gWAN4VqRjIY3cDRtORkEkPPwWZKgNoiB4lnqIGJBy91xMtzgTkCbT-nnALeIHCvxe_BxQxVECauogTWewS7TnbgqfHRZn8PuLwoQjqOPy9EsXffn7VxELV6ooKJAdI9_h2QSbUDGIeKLq8zrnmYFq7j4iTb5wAri-Kv7Ad54eREBCyxwARnkQoyjMOye65LGCjmyEYW0bPB-a3ViH89QSvvx4hOlcQrIWbuYsLapu6LDvFX76VlZPFzorgdScw7IAgKNLgWjussS4aEAxt7_lM_xpYfvolwuwgvIEURlZQB81QHeeltwdKgMUBjIdVHcX0FtXQvvn8GJHTldJU0IApiYwSBtxbL3vExmdUlFPm0fQHEq4NfNMrI1gVrAHE0O5ByIkvDlm07cZsg67mWw5wA6iwCZgcPgYYQqZKRkf30aXV1cmwPCIUvb3r6JxjyU992-3oxpQzl4pk0-woQlTIAQsxeqmRILqviEt77YRARI2OofXWa83cdixSutfuJXWxCWNdyPAF6zgWR3JfC4jdt1MeN2x91N5MMJqZn_DeuXXFl8ZzcEIGNQiJpd7VK2NGQv_v-Jnci9ugGj6EYPvc_HDcvU42uRqZgJjtgyD9mfTWmXxkL2AhwPQbC3LwzctWsQEfxv_M1crTC0ItsjhAm296eGIFKYUU_QjIb_G9kTyoA2ziIycN8iDZQad5uZin03mjFtbLv7GXrCC34ZeZ4XZzJ3m8ol_RP4zbYvBIZjNqNChrizTIRv435Yh6nvTCPIy6SnEVzqsjWaskY7OsmPoJu-gV=w326-h326-s-no-gm?authuser=0"
        ></img>
      <div className="absolute  z-9 bottom-[-3.5rem] left-0 right-0 w-full md:h-[8.5rem] box-slide max-sm:h-[5.75rem]">
        <div className="flex ml-[1rem]">
          <div className="lg:mb-mb-[0.75rem]bg-[#CAF2F1] h-[1.4375rem] border-[#C5C5C5] border-[1px] rounded-[2.5rem] items-center mb-[0.62rem] w-[4.875rem] max-sm:h-[1.0625rem]  flex justify-center">
            <p className="text-[0.75rem]  text-[#454545] font-bold leading-[1.2375rem] h-[1.4375rem] text-center items-center max-sm:text-[0.625rem] max-sm:leading-[1.4rem]">
              Gọng kính
            </p>
          </div>
          <div className="bg-[#F58F5D] h-[1.4375rem] border-[#C5C5C5] border-[1px] rounded-[2.5rem] mb-[0.62rem] w-[6.375rem] ml-[0.25rem] max-sm:hidden">
            <p className="text-[0.75rem]  text-white font-bold leading-[1.2375rem] h-[1.4375rem] text-center items-center ">
              Siêu Sale 10.10
            </p>
          </div>
        </div>
        <div className=" p-[1rem] rounded-[1rem] bg-[#FFF] h-[8.55rem] box-slide max-sm:p-[0.5rem]">
          <span className="text-[1rem] mb-[0.25rem] text-[#454545] font-[850] leading-[1.2rem] max-sm:text-[0.875rem] max-sm:leading-[1.225rem] max-sm:mb-[0.25rem]">
            GK – 380CK081
          </span>
          <div className="flex justify-between mb-[0.5rem]">
            <p className="text-[0.875rem] font-extrabold leading-[1.3125rem]">
              Tiết kiệm được <span className="text-[#F58F5D]">55.000đ</span>
            </p>
            <span className="line-through max-sm:text-[0.875rem] font-normal max-sm:leading-[1.05rem] text-[#6A6A6A]">
              440.000đ
            </span>
          </div>
          {/* button */}
          <div className=" bg-[#55D5D2] price-product-slide flex  justify-between items-center px-[1.25rem] py-[0.5rem] md:py-[0.25rem] rounded-[3.125rem] max-sm:py-[0.38rem] max-sm:px-[0.75rem] max-sm:h-[1.875rem] max-sm:rounded-[2.5rem] border-[1px] border-[#55D5D2]">
            <p className="text-[1.5rem] font-[850] text-[#fff] max-sm:text-[0.875rem] max-sm:leading-[1.8rem] max-sm:text-[#55D5D2]">
              320.000đ
            </p>
            <div className="arrow-peoduct-slide p-[0.5rem] text-[#fff]">
              <ArrowTopRight />
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Iterm;
