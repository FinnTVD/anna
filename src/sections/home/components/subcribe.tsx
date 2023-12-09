import { InputUnderline } from '@/components/ui/input-underline';
import React from 'react';

function Subcribe() {
  return (
    <section className="py-[60px] bg-[#0000000d] w-full">
      <div className="container">
        <div className="flex justify-between items-center">
          <h3 className="flex-1 w-full font-light text-[18px] text-primary">
            Subscribe and be notified about new locations
          </h3>
          <div className="flex-1 w-full">
            <InputUnderline
              isShowButton
              className="w-full"
              placeholder="Your email"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Subcribe;
