'use client';

import { Checkbox } from '@/components/ui/checkbox';
import './style.css';
import ItemProduct from '@/components/component-ui-custom/item-product/ItemProduct';
import ItemMobile from '@/components/component-ui-custom/item-product-mobile';
import { IItemAttributeProduct, IItemProduct } from '@/types/types-general';
import useSWR from 'swr';
import { postData } from '@/lib/post-data';
import { useState } from 'react';

interface IProps {
  data: IItemProduct[];
  listAttribute: IItemAttributeProduct[];
}

interface IParamsFilter {
  atttribute: string;
  subAtttribute: string;
}
export default function FilterListProduct(props: IProps) {
  const { data, listAttribute } = props;

  const [paramsFilter, setParamsFilter] = useState({
    atttribute: '',
    subAtttribute: '',
  });

  const bodyGetListProduct: any = {
    url: `wp-json/product/v1/products/attributes?${paramsFilter.atttribute}=${paramsFilter.subAtttribute}`,
    method: 'get',
  };

  const getlistProduct = useSWR(bodyGetListProduct.url, () =>
    paramsFilter ? postData(bodyGetListProduct) : undefined
  );

  console.log('paramsFilter', paramsFilter);
  console.log('getlistProduct.data', getlistProduct.data);

  const onChange = (
    checked: boolean,
    atttribute?: string,
    slugSubAttribute?: string
  ): void => {
    // console.log("check", checked);
    // console.log("atttribute", atttribute);
    // console.log("slugSubAttribute", slugSubAttribute);
    const newObject: IParamsFilter = {
      atttribute: atttribute ?? '',
      subAtttribute: slugSubAttribute ?? '',
    };
    setParamsFilter(newObject);
  };

  return (
    <div className="filter-list-product-container">
      {/* <div className="mb-[2rem] max-md:mt-[6rem] max-md:mb-[5rem]"> */}
      {/*  <h2 className="font-semibold text-[2.188rem] uppercase max-md:text-[4.8rem]"> */}
      {/*    GỌNG KÍNH */}
      {/*  </h2> */}
      {/*  <p className="text-[1.125rem] font-normal w-1/2 mt-[1.5rem] mb-[3rem] max-md:text-[3.733rem] max-md:w-full"> */}
      {/*    Gọng kính được xem như bộ khung vững chắc, là giá đỡ vững chắc cho mắt */}
      {/*    kính. Không những thế, các loại gọng kính còn được thiết kế như là một */}
      {/*    phụ kiện thời trang hấp dẫn giúp chủ sở hữu nổi bần bật, thu hút mọi */}
      {/*    ánh nhìn. */}
      {/*  </p> */}
      {/* </div> */}
      <div className="flex justify-between  max-md:hidden pt-[2rem]">
        <div className="w-[18rem] overflow-hidden pr-[1rem]">
          {listAttribute.map((item, index) => (
            <div key={index} className="w-full">
              <h3 className="title-filter">{item.attribute}</h3>
              {item.subAttribute &&
                item.subAttribute.map((itemSubAttribute, index) => (
                  <div
                    key={index}
                    className="flex items-center w-full overflow-hidden"
                  >
                    <Checkbox
                      onCheckedChange={(value: boolean) =>
                        onChange(value, item.attribute, itemSubAttribute.slug)
                      }
                      id="1"
                      className="border-[#ccc] border-[1px]"
                    />
                    <span className="value-item-checkbox line-clamp-1 text-nowrap">
                      {itemSubAttribute.name}
                    </span>
                  </div>
                ))}
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
