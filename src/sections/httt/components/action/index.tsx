import Image from 'next/image';

export default function Action() {
  return (
    <div className="w-[87.5rem] mx-auto mt-[6.25rem] h-[58.4375rem] rounded-[1.25rem] bg-[#6fb6b3] pt-[4.31rem] pb-[4.94rem] px-[3.965rem]">
      <div className="flex justify-between items-center">
        <div className="w-[40rem]">
          <h2 className="text-[3.5rem] text-white font-bold leading-[1.3] tracking-[-0.175rem]">
            Các Hoạt Động Chính
          </h2>
          <h3 className="text-white font-medium leading-[1.3] tracking-[-0.0625rem] mt-[0.75rem]">
            ”Hành Trình Tử Tế” được khởi hành với 3 nhóm hoạt động chính
          </h3>
        </div>
        <button className="rounded-[6.5rem] border border-solid border-white px-[2rem] py-[0.75rem] flex items-center h-fit">
          <span className="block mr-[1.5rem] text-white font-medium leading-[1.57] tracking-[-0.03rem]">
            Cộng đồng sống tử tế
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="18"
            viewBox="0 0 10 18"
            fill="none"
          >
            <path
              opacity="0.7"
              d="M0.767274 0.599121C0.962138 0.599121 1.157 0.675675 1.31011 0.821822L8.94457 8.46325C9.24383 8.7625 9.24383 9.2427 8.94457 9.54195L1.30315 17.1764C1.00389 17.4757 0.523695 17.4757 0.224441 17.1764C-0.0748136 16.8772 -0.0748136 16.397 0.224441 16.0977L7.32303 8.99912L0.224441 1.90053C-0.0748136 1.60128 -0.0748136 1.12108 0.224441 0.821822C0.377548 0.675675 0.572411 0.599121 0.767274 0.599121Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
      <div className="border-t border-solid border-white/50 my-[3.19rem]"></div>
      <div className="grid grid-cols-2 gap-x-[2rem] h-[35.875rem]">
        <div className="bg-white rounded-[1rem] h-full px-[2rem] pb-[2rem] pt-[3rem]">
          <h2>Đôi Mắt Mặt Trời</h2>
          <div className="border-t border-solid border-[#414141]/60 my-[1.12rem]"></div>
          <p className="text-[1.25rem] text-[#414141]/70 font-medium leading-[1.4] tracking-[-0.0375rem] w-[26.3125rem] mb-[2.31rem]">
            Tài trợ các ca mổ mắt dị tật bẩm sinh cho các em nhỏ có hoàn cảnh
            khó khăn
          </p>
          <Image
            className="w-full h-[20.1875rem] object-cover rounded-[1rem]"
            src={'/img/httt/eye.jpg'}
            alt="doi mat mat troi"
            width={560}
            height={330}
          />
        </div>
        <div className="bg-white rounded-[1rem] h-full px-[2rem] pb-[2rem] pt-[3rem]">
          <h2>Đôi Mắt Mặt Trời</h2>
          <div className="border-t border-solid border-[#414141]/60 my-[1.12rem]"></div>
          <p className="text-[1.25rem] text-[#414141]/70 font-medium leading-[1.4] tracking-[-0.0375rem] w-[26.3125rem] mb-[2.31rem]">
            Tài trợ các ca mổ mắt dị tật bẩm sinh cho các em nhỏ có hoàn cảnh
            khó khăn
          </p>
          <Image
            className="w-full h-[20.1875rem] object-cover rounded-[1rem]"
            src={'/img/httt/eye.jpg'}
            alt="doi mat mat troi"
            width={560}
            height={330}
          />
        </div>
      </div>
    </div>
  );
}
