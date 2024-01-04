import React from 'react';
import ICArrowLeft from '@/components/Icons/ICArrowLeft';
import ICArrowRight from '@/components/Icons/ICArrowRight';
import './style.css';

interface IProps {
  justify?: 'justify-start' | 'justify-center' | 'justify-end';
}
function PaginationGlobal(props: IProps) {
  const { justify } = props;
  console.log('justify', justify);
  return (
    <div className="w-fit flex items-center pagigation-global-container max-md:hidden">
      <ICArrowLeft stroke="#55D5D2" />
      <button
        type="button"
        className="active h-[2rem] w-[2rem] mr-[0.62rem] rounded-full text-[0.875rem] leading-[1.3125rem] not-italic"
      >
        1
      </button>
      <button
        type="button"
        className="inactive h-[2rem] w-[2rem] rounded-full text-[0.875rem] leading-[1.3125rem] not-italic"
      >
        2
      </button>
      <ICArrowRight stroke="#55D5D2" />
    </div>
  );
}

export default PaginationGlobal;
