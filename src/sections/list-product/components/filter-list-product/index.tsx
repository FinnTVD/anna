'use client';

import { Checkbox } from '@/components/ui/checkbox';
import './style.css';
import ItemProduct from '@/components/component-ui-custom/item-product/ItemProduct';
import ItemMobile from '@/components/component-ui-custom/item-product-mobile';
import { IItemAttributeProduct, IItemProduct } from '@/types/types-general';
import { useEffect, useState } from 'react';
import useSWR from 'swr';
import { postData } from '@/lib/post-data';
import SkeletonItemProduct from '@/sections/list-product/components/skeleton-item-product';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';

interface IProps {
  data: IItemProduct[];
  listAttribute: IItemAttributeProduct[];
  searchParams?: any;
}

interface IParamsFilter {
  atttribute: string;
  subAtttribute: string[];
}
export default function FilterListProduct(props: IProps) {
  const { data, listAttribute, searchParams } = props;

  const [paramsFilter, setParamsFilter] = useState<IParamsFilter[]>([]);
  const [paramRouterGetApi, setParamRouterGetApi] = useState<any>();
  const [dataInit, setDataInit] = useState<any>([]);

  // const [coordinates, setCoordinates] = useQueryStates(
  //   {
  //     lat: parseAsFloat.withDefault(45.18),
  //     lng: parseAsFloat.withDefault(5.72),
  //   },
  //   {
  //     history: "push",
  //   }
  // );
  // const [name1111, setName1111] = useQueryState('name1234433');

  console.log('searchParamaa', searchParams);
  console.log('paramRouterGetApi', paramRouterGetApi);

  const bodyGetListProduct: any = {
    url: `wp-json/product/v1/filter-products?${paramRouterGetApi}`,
    method: 'get',
  };

  const getlistProduct = useSWR(bodyGetListProduct.url, () =>
    paramsFilter[0].subAtttribute.length > 0
      ? postData(bodyGetListProduct)
      : undefined
  );

  const onChange = (atttribute?: string, slugSubAttribute?: string): void => {
    const findItemAdded = paramsFilter.filter(
      (item) => item.atttribute === atttribute
    );

    if (findItemAdded.length === 0) {
      const newObject: IParamsFilter = {
        atttribute: atttribute ?? '',
        subAtttribute: [slugSubAttribute ?? ''],
      };

      setParamsFilter([...paramsFilter, newObject]);
    } else {
      // if add new subAttribute in attribute
      const newArrayChangeFilter: any = [];

      // eslint-disable-next-line array-callback-return
      paramsFilter.map((item) => {
        if (item.atttribute !== atttribute) {
          newArrayChangeFilter.push(item);
        } else {
          let arrayItemSubAttributeReset: any = [];

          const fintSubAttributeAvailable = item.subAtttribute.filter(
            (item) => item === slugSubAttribute
          );

          if (fintSubAttributeAvailable.length === 0) {
            arrayItemSubAttributeReset = item.subAtttribute;
            arrayItemSubAttributeReset.push(slugSubAttribute);
          } else {
            // eslint-disable-next-line array-callback-return
            item.subAtttribute.map((item: any): void => {
              if (item !== slugSubAttribute) {
                arrayItemSubAttributeReset.push(item);
              }
            });
          }
          const objectPushNewArray = {
            atttribute: item.atttribute,
            subAtttribute: arrayItemSubAttributeReset,
          };

          newArrayChangeFilter.push(objectPushNewArray);
        }
        setParamsFilter(newArrayChangeFilter);
      });
    }
  };

  useEffect(() => {
    if (dataInit.length === 0) {
      setDataInit(data);
    }
  }, [data]);

  useEffect(() => {
    let paramTmp = '';

    // eslint-disable-next-line array-callback-return
    paramsFilter.map((itemParams) => {
      paramTmp = `${paramTmp}&attribute=${itemParams.atttribute}`;

      // eslint-disable-next-line array-callback-return
      itemParams.subAtttribute.map((itemSubcate) => {
        paramTmp = `${paramTmp}&terms[]=${itemSubcate}`;
      });
    });
    setParamRouterGetApi(paramTmp.replace(paramTmp[0], ''));
    getlistProduct.mutate();
  }, [paramsFilter]);

  useEffect(() => {
    setDataInit(getlistProduct.data ?? data);
  }, [getlistProduct.data]);

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
                    className="flex items-center w-full overflow-hidden mb-[0.5rem]"
                  >
                    <Checkbox
                      onCheckedChange={(value: boolean) =>
                        onChange(item.attribute, itemSubAttribute.slug)
                      }
                      id="1"
                      className="border-[#ccc] border-[1px]"
                    />
                    <span className="font-medium line-clamp-1 text-nowrap ml-[0.7rem]">
                      {itemSubAttribute.name}
                    </span>
                  </div>
                ))}
            </div>
          ))}
        </div>
        <div className="grow">
          {dataInit.length === 0 && (
            <div className="flex justify-center">
              <Image
                src="/img/no-data.avif"
                alt="banner-aboutus"
                height={300}
                width={300}
              />
            </div>
          )}
          {dataInit.length > 0 && getlistProduct.isLoading ? (
            <SkeletonItemProduct />
          ) : (
            <div className="grid grid-cols-4 gap-4">
              {dataInit &&
                dataInit.map((item: any, index: number) => (
                  <div className="rounded-[1rem]" key={index}>
                    <ItemProduct heightImage={17} item={item} />
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
      {/* <PaginationGlobal /> */}

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
