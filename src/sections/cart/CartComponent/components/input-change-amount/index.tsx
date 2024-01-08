import * as React from 'react';

interface IProps {
  defaultValue?: number;
}
export function InputChangeAmount(props: IProps): React.JSX.Element {
  const { defaultValue } = props;
  return (
    <div className="w-[7.3125rem] h-[3rem] text-[#44AAA8] flex justify-between items-center rounded-[2.3125rem] bg-white border-[#4DC0BD] border-[1px] max-md:w-[29.3125rem] max-md:h-[8rem] max-md:rounded-[0rem] max-md:border-[#F2F2F2] max-md:border-[2px]">
      <div className="pl-[1.2rem] h-full flex items-center justify-center select-none text-[1.25rem] font-bold leading-[1.875rem] max-md:text-[4.25rem] max-md:w-[11rem] max-md:pl-[0rem] max-md:border-r-[#F2F2F2] max-md:border-r-[2px]">
        -
      </div>
      <div className="quantity-product flex grow">
        <input
          type="text"
          defaultValue={defaultValue}
          // pattern="[0-9]/g*"
          className="w-full focus:outline-none text-center text-[1rem] not-italic font-bold leading-[1.5rem]"
        />
      </div>
      <div
        role="button"
        style={{ cursor: 'pointer' }}
        className="select-none pr-[1.2rem] py-[0.8rem] text-[1.25rem] h-full flex items-center justify-center font-bold leading-[1.875rem] max-md:text-[4.25rem] max-md:w-[11rem] max-md:pr-[0rem] max-md:border-l-[#F2F2F2] max-md:border-l-[2px]"
      >
        +
      </div>
    </div>
  );
}
