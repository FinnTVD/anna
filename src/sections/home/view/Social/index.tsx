import React from 'react';

function Social() {
  return (
    <div className="px-[6.67rem] sm:px-0 pb-8 pt-24 container">
      <h4 className="text-teal-300 text-[12rem] md:text-[4rem] font-black">
        ANNA ON SOCIAL
      </h4>
      <div className="flex flex-wrap justify-between">
        <div className="w-[508px] text-zinc-700 text-[6.4rem] md:text-2xl uppercase">
          Hãy follow để theo dõi chúng mình ngay từ hôm nay nha
        </div>
        <div className="hidden md:block text-[10rem] md:text-7xl font-black uppercase text-follow-shadow">
          Follow us
        </div>
      </div>
    </div>
  );
}

export default Social;
