import React from 'react';

function Social() {
  return (
    <div className="bg-[#EEF9F9] mt-[8rem]">
      <div className="px-[6.67rem] sm:px-3 pb-8 pt-24 container">
        <h4 className="text-teal-300 text-[5.33333rem] md:text-[4rem] font-black">
          ANNA ON SOCIAL
        </h4>
        <div className="flex flex-wrap justify-between">
          <div className="w-[31.75rem] text-zinc-700 text-[4.26667rem] font-extrabold md:text-2xl md:uppercase">
            Hãy follow để theo dõi chúng mình ngay từ hôm nay nha...
          </div>
          <div className="hidden md:block text-[10rem] md:text-7xl font-black uppercase text-follow-shadow">
            Follow us
          </div>
        </div>
      </div>
    </div>
  );
}

export default Social;
