import React from 'react';

const RecommendProduct = () => {
  return (
    <div className="mx-[6.25rem] max-md-w-full max-sm:mx-0 mb-[10rem] max-sm:pl-[0.62rem] max-sm:bg-[#EEFBFB] max-sm:pb-[2.25rem]">
      <h4 className="pt-[2.06rem] text-[2rem] font-[850] text-[#4DC0BD] max-sm:text-[1.25rem] max-sm:text-[#313131] text-left ">
        GỢI Ý CHO BẠN
      </h4>
      <div className="hidden-scollbar mt-[2.13rem] flex justify-center max-lg:overflow-x-scroll max-lg:overflow-y-hidden max-sm:overflow-x-scroll max-sm:overflow-y-hidden max-sm:h-[13rem] max-sm:mt-[1rem]">
        <div className="flex">
          <div className="w-[27.5rem] mr-[2.5rem] max-sm:w-[12.75775rem] max-lg:w-[13.75775rem] max-sm:mr-[0.5rem]">
            <img
              className="w-[27.5rem] h-[24.25rem] rounded-[1.2rem] max-sm:w-[12.75775rem] max-sm:h-[11.25rem] max-sm:rounded-none"
              src="https://images.unsplash.com/photo-1519638399535-1b036603ac77?q=80&w=3131&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="suggest"
            />
            <p className="mt-[1rem] text-center text-[1.9rem] font-[850] leading-[2.4rem] max-sm:text-[0.875rem] max-sm:leading-[1.225rem] max-sm:mt-[0.5rem]">
              Gọng kính
            </p>
          </div>
          <div className="w-[27.5rem] mr-[2.5rem] max-sm:w-[12.75775rem] max-sm:mr-[0.5rem]">
            <img
              className="w-[27.5rem] h-[24.25rem] rounded-[1.2rem] max-sm:w-[12.75775rem] max-sm:h-[11.25rem] max-sm:rounded-none"
              src="https://images.unsplash.com/photo-1519638399535-1b036603ac77?q=80&w=3131&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="suggest"
            />
            <p className="mt-[1rem] text-center text-[1.9rem] font-[850] leading-[2.4rem] max-sm:text-[0.875rem] max-sm:leading-[1.225rem] max-sm:mt-[0.5rem]">
              Tròng kính
            </p>
          </div>
          <div className="w-[27.5rem] mr-[2.5rem] max-sm:w-[12.75775rem] max-sm:mr-[0.5rem]">
            <img
              className="w-[27.5rem] h-[24.25rem] rounded-[1.2rem] max-sm:w-[12.75775rem] max-sm:h-[11.25rem] max-sm:rounded-none"
              src="https://images.unsplash.com/photo-1519638399535-1b036603ac77?q=80&w=3131&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="suggest"
            />
            <p className="mt-[1rem] text-center text-[1.9rem] font-[850] leading-[2.4rem] max-sm:text-[0.875rem] max-sm:leading-[1.225rem] max-sm:mt-[0.5rem]">
              Combo gọng + tròng kính
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendProduct;
