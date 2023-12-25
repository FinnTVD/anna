'use client';

import { Checkbox } from '@/components/ui/checkbox';
import './style.css';
import ItemProduct from '@/components/component-ui-custom/item-product/ItemProduct';
import ItemMobile from '@/components/component-ui-custom/item-product-mobile';
import { IItemProduct } from '@/types/types-general';

interface IProps {
  data: IItemProduct[];
}
export default function FilterListProduct(props: IProps) {
  const { data } = props;
  const listMaterial = [
    {
      id: 1,
      value: 'Acetate',
    },
    {
      id: 2,
      value: 'Kim loại',
    },
    {
      id: 3,
      value: 'Nhựa',
    },
    {
      id: 4,
      value: 'Nhựa Dẻo',
    },
  ];
  const listShape = [
    {
      id: 1,
      label: 'Browline',
    },
    {
      id: 1,
      label: 'Hình vuông',
    },
    {
      id: 1,
      label: 'Mắt mèo',
    },
    {
      id: 1,
      label: 'Oval',
    },
  ];
  const listTrademark = [
    {
      id: 1,
      label: 'Chemi',
    },
    {
      id: 1,
      label: 'Elements',
    },
    {
      id: 1,
      label: 'Essilor',
    },
    {
      id: 1,
      label: 'Hoga',
    },
    {
      id: 1,
      label: 'Thailand',
    },
  ];
  const listFeature = [
    {
      id: 1,
      label: 'Đổi màu',
    },
    {
      id: 1,
      label: 'Lọc ánh sáng xanh',
    },
    {
      id: 1,
      label: 'Râm cận',
    },
    {
      id: 1,
      label: 'Siêu mỏng',
    },
    {
      id: 1,
      label: 'Tròng kính phổ thông',
    },
  ];
  const listPrice = [
    {
      id: 1,
      label: '100.000đ — 200.000đ',
    },
    {
      id: 1,
      label: '200.000đ — 300.000đ',
    },
    {
      id: 1,
      label: '300.000đ — 500.000đ',
    },
    {
      id: 1,
      label: '500.000đ — 10.000.000đ',
    },
  ];

  // function ItemProduct() {
  //   const listColorItem = [
  //     {
  //       id: 1,
  //       color: "black",
  //     },
  //     {
  //       id: 2,
  //       color: "pink",
  //     },
  //     {
  //       id: 3,
  //       color: "blue",
  //     },
  //     {
  //       id: 3,
  //       color: "blue",
  //     },
  //   ];
  //   return (
  //     <div className="w-[16.5rem]">
  //       <div className="relative w-full rounded-[1rem] mb-[1rem]">
  //         <div className='absolute top-0 -left-[2%] bg-[url("/img/about-us/test.svg")] bg-no-repeat w-[4.375rem] h-[1.625rem] flex justify-center items-center'>
  //           <span className="text-white font-normal text-[0.788rem] mb-[2px] mr-[2px]">
  //             SALE
  //           </span>
  //         </div>
  //         <img
  //           className="rounded-[1rem] w-full h-[17.563rem]"
  //           src="https://kinhmatanna.com/wp-content/uploads/2022/07/kinhmatanna-20201215191522-300x300.jpg"
  //           alt=""
  //         />
  //         <div className="absolute flex left-[50%] -translate-x-1/2 bottom-3 py-[0.125rem] px-[0.375rem] rounded-[1.25rem] bg-white">
  //           {listColorItem.map((item, index) => (
  //             <div
  //               key={index}
  //               className="h-[0.8rem] w-[0.8rem] rounded-full"
  //               style={{
  //                 backgroundColor: item.color,
  //                 marginLeft: index === 0 ? 0 : "0.3rem",
  //               }}
  //             />
  //           ))}
  //         </div>
  //       </div>
  //       <h3 className="text-center text-[1.25rem] leading-[1.2rem] font-bold mb-[2px]">
  //         GK – 0123459
  //       </h3>
  //       <div className="flex items-center justify-center">
  //         <span className="text-[0.8rem] line-through mt-[2px]">350,000₫</span>
  //         <span className="font-medium text-black text-[0.875rem] ml-[0.4rem]">
  //           250,000₫
  //         </span>
  //       </div>
  //     </div>
  //   );
  // }

  const onChange = (checked: boolean, value: any): void => {
    console.log('check', checked);
    console.log('value', value);
  };
  return (
    <div className="filter-list-product-container">
      <div className="mb-[2rem] max-md:mt-[6rem] max-md:mb-[5rem]">
        <h2 className="font-semibold text-[2.188rem] uppercase max-md:text-[4.8rem]">
          GỌNG KÍNH
        </h2>
        <p className="text-[1.125rem] font-normal w-1/2 mt-[1.5rem] mb-[3rem] max-md:text-[3.733rem] max-md:w-full">
          Gọng kính được xem như bộ khung vững chắc, là giá đỡ vững chắc cho mắt
          kính. Không những thế, các loại gọng kính còn được thiết kế như là một
          phụ kiện thời trang hấp dẫn giúp chủ sở hữu nổi bần bật, thu hút mọi
          ánh nhìn.
        </p>
      </div>
      <div className="flex justify-between  max-md:hidden">
        <div className="w-[17.875rem]">
          <h3 className="title-filter">Chất liệu</h3>
          {listMaterial.map((item, index) => (
            <div key={index} className="flex items-center">
              <Checkbox
                onCheckedChange={(value: boolean) =>
                  onChange(value, item.value)
                }
                id="1"
                className="border-[#ccc] border-[1px]"
              />
              <span className="value-item-checkbox ">{item.value}</span>
            </div>
          ))}

          <h3 className="title-filter">Hình dáng</h3>
          {listShape.map((item, index) => (
            <div key={index} className="flex items-center">
              <Checkbox
                onCheckedChange={(value: boolean) =>
                  onChange(value, item.label)
                }
                id="1"
                className="border-[#ccc] border-[1px]"
              />
              <span className="value-item-checkbox">{item.label}</span>
            </div>
          ))}

          <h3 className="title-filter">Thương hiệu</h3>
          {listTrademark.map((item, index) => (
            <div key={index} className="flex items-center">
              <Checkbox
                onCheckedChange={(value: boolean) =>
                  onChange(value, item.label)
                }
                id="1"
                className="border-[#ccc] border-[1px]"
              />
              <span className="value-item-checkbox">{item.label}</span>
            </div>
          ))}

          <h3 className="title-filter">Tính năng</h3>
          {listFeature.map((item, index) => (
            <div key={index} className="flex items-center">
              <Checkbox
                onCheckedChange={(value: boolean) =>
                  onChange(value, item.label)
                }
                id="1"
                className="border-[#ccc] border-[1px]"
              />
              <span className="value-item-checkbox">{item.label}</span>
            </div>
          ))}

          <h3 className="title-filter">Khoảng giá</h3>
          {listPrice.map((item, index) => (
            <div key={index} className="flex items-center">
              <Checkbox
                onCheckedChange={(value: boolean) =>
                  onChange(value, item.label)
                }
                id="1"
                className="border-[#ccc] border-[1px]"
              />
              <span className="value-item-checkbox">{item.label}</span>
            </div>
          ))}
        </div>
        <div className="w-full grow grid grid-cols-4 gap-4">
          {data &&
            data.map((item, index) => (
              <div className="rounded-[1rem]" key={index}>
                <ItemProduct heightImage={17} item={item} />
              </div>
            ))}
        </div>
      </div>
      <div className="hidden max-md:block">
        <div className="grid grid-cols-2">
          <div className="relative mb-[4.27rem]">
            <ItemMobile />
          </div>
          <div className="relative mb-[4.27rem]">
            <ItemMobile />
          </div>
          <div className="relative mb-[4.27rem]">
            <ItemMobile />
          </div>
          <div className="relative mb-[4.27rem]">
            <ItemMobile />
          </div>
          <div className="relative mb-[4.27rem]">
            <ItemMobile />
          </div>
          <div className="relative mb-[4.27rem]">
            <ItemMobile />
          </div>
          <div className="relative mb-[4.27rem]">
            <ItemMobile />
          </div>
          <div className="relative mb-[4.27rem]">
            <ItemMobile />
          </div>
        </div>
        {/* <div className="flex justify-between">
            <div className="relative mb-[4.27rem]">
              <ItemMobile />
            </div>
            <div className="relative mb-[4.27rem]">
              <ItemMobile />
            </div>
          </div> */}
      </div>
    </div>
  );
}
