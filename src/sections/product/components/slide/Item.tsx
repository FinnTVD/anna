import React from 'react';
import { ArrowTopRight } from '@/app/icons';
import './style.css';

interface IProps {
  item: any;
}

function Item(props: IProps) {
  const { item } = props;
  console.log('item', item);
  const listColor = [
    {
      id: 1,
      color: 'blue',
    },
    {
      id: 1,
      color: 'blue',
    },
    {
      id: 1,
      color: 'blue',
    },
    {
      id: 1,
      color: 'blue',
    },
    {
      id: 1,
      color: 'blue',
    },
    {
      id: 1,
      color: 'blue',
    },
    {
      id: 1,
      color: 'blue',
    },
    {
      id: 1,
      color: 'blue',
    },
  ];
  return (
    <div className="item-slider-product max-sm:h-[15.125rem] cursor-pointer relative">
      <div className="h-[20.375rem] w-full overflow-hidden">
        <img
          className="image-item-slide h-full object-fill max-sm:h-[9.375rem] bg-slate-500 "
          src="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg"
        />
      </div>
      <div className="relative z-2 -mt-[3.5rem] z-9 left-0 right-0 w-full box-slide max-sm:h-[5.75rem]">
        <div className="flex ml-[1rem] mb-[0.9rem]">
          <div className="lg:mb-mb-[0.75rem] bg-[#CAF2F1] h-[1.25rem] border-[#C5C5C5] border-[1px] rounded-[2.5rem] items-center w-[4.875rem] max-sm:h-[1.0625rem]  flex justify-center">
            <p className="text-[0.75rem] text-[#454545] font-bold leading-[0.9rem] text-center">
              Gọng kính
            </p>
          </div>
          <div className="lg:mb-mb-[0.75rem] bg-[#F58F5D] h-[1.25rem] flex items-center justify-center border-[#C5C5C5] border-[1px] rounded-[2.5rem] w-[6.375rem] ml-[0.25rem] max-sm:hidden">
            <p className="text-[0.75rem] text-white font-bold leading-[0.9rem] text-center mb-0">
              Siêu Sale 10.10
            </p>
          </div>
        </div>
        <div className="p-[1rem] rounded-[1rem] bg-[#FFF] box-slide max-sm:p-[0.5rem]">
          <span className="text-[1rem] mb-[0.25rem] text-[#454545] font-[850] leading-[1.2rem] max-sm:text-[0.875rem] max-sm:leading-[1.225rem] max-sm:mb-[0.25rem]">
            GK – 380CK081 111
          </span>
          <div className="flex justify-between mt-[0.25rem] mb-[0.75rem]">
            <div className="flex">
              {listColor.map(
                (item: any, index: number) =>
                  index <= 3 && (
                    <div
                      key={index}
                      style={{ background: item.color }}
                      className="h-[1.5rem] w-[1.5rem] rounded-full mr-[0.31rem]"
                    />
                  )
              )}
              <div
                style={{ background: '#A9A9A9' }}
                className="h-[1.5rem] w-[1.5rem] rounded-full mr-[0.31rem] flex justify-center items-center text-[0.625rem] leading-[0.75rem] font-bold not-italic "
              >
                +{listColor.length - 4}
              </div>
            </div>
            <span className="line-through">440.000đ</span>
          </div>
          <div className="bg-[#55D5D2] price-product-slide flex justify-between items-center px-[1.25rem] py-[0.5rem] rounded-[3.125rem] max-sm:py-[0.38rem] max-sm:px-[0.75rem] max-sm:h-[1.875rem] max-sm:rounded-[2.5rem]">
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
  );
}

export default Item;
