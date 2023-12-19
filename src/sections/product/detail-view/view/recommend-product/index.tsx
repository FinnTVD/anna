import React from 'react';

function RecommendProduct() {
  return (
    <div className="mx-[6.25rem] max-lg:mx-[3.25rem] max-md-w-full max-md:mx-0 mb-[10rem] max-md:pl-[2.67rem] max-md:bg-[#EEFBFB] max-md:pb-[3.27rem]">
      <h4 className="pt-[2.06rem] text-[2rem] font-[850] text-[#4DC0BD] max-md:text-[5.33333rem] max-md:text-[#313131] text-left ">
        GỢI Ý CHO BẠN
      </h4>
      <div className="flex w-full justify-between mt-[2.12rem]">
        <div className="w-[27.5rem]">
          <img
            className="w-full rounded-[1rem] mb-[1.5rem]"
            src="https://kinhmatanna.com/wp-content/uploads/2023/03/6021.-300x300.jpg"
            alt=""
          />
          <p className="text-[2rem] font-extrabold text-center not-italic leading-[2.4rem]">
            Bộ sưu tập mới
          </p>
        </div>
        <div className="w-[27.5rem]">
          <img
            className="w-full rounded-[1rem] mb-[1.5rem]"
            src="https://kinhmatanna.com/wp-content/uploads/2023/03/6021.-300x300.jpg"
            alt=""
          />
          <p className="text-[2rem] font-extrabold text-center not-italic leading-[2.4rem]">
            Lookbook
          </p>
        </div>
        <div className="w-[27.5rem]">
          <img
            className="w-full rounded-[1rem] mb-[1.5rem]"
            src="https://kinhmatanna.com/wp-content/uploads/2023/03/6021.-300x300.jpg"
            alt=""
          />
          <p className="text-[2rem] font-extrabold text-center not-italic leading-[2.4rem]">
            Combo gọng + tròng kính
          </p>
        </div>
      </div>
    </div>
  );
}

export default RecommendProduct;
