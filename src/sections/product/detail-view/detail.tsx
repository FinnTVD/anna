'use client';

import React, { useEffect, useState } from 'react';
import { Fixed } from '@/app/icons';
import ImageProduct from '@/sections/product/detail-view/view/image-product';
import InfoProduct from '@/sections/product/detail-view/view/info-product';
import RecommendProduct from '@/sections/product/detail-view/view/recommend-product';
import { postData } from '@/lib/post-data';
import { IPostData } from '@/types/next-auth';
import useSWR from 'swr';
import { ICProtected } from '@/components/Icons/ICProtected';
import { ICFree } from '@/components/Icons/ICFree';
import { ICChange } from '@/components/Icons/ICChange';
import { ICClean } from '@/components/Icons/ICClean';
import ICArrowRight2 from '@/components/Icons/ICArrowRight2';
import ItemMobile from '../../../components/component-ui-custom/item-product-mobile';
import SlideProductComponent from '@/components/component-ui-custom/slide-swiper-product/slide-product';

interface IProps {
  slug: string;
}

function ProductDetail({ slug }: IProps) {
  // let dataInit;
  const [dataInit, setDatainit] = useState();
  const [colorGetDetail, setColorGetDetail] = useState<number | string | null>(
    null
  );
  const [listColorProduct, setListColorProduct] = useState<any>([]);
  // const [name, setName] = useQueryState();

  // console.log('listColorProductlistColorProduct', listColorProduct);

  const bodyApi: IPostData = {
    url: `products-details/${slug}`,
    method: 'get',
  };
  const dataInitDetail = useSWR(bodyApi.url, () => postData(bodyApi));

  const bodyApiGetGlasses: IPostData = {
    url: `related-products/93`,
    method: 'get',
  };
  const dataGlasses = useSWR(bodyApiGetGlasses.url, () =>
    postData(bodyApiGetGlasses)
  );

  if (dataGlasses?.data) {
    console.log('dataGlasses', dataGlasses?.data[0]?.product_variant);
  }

  // GET DETAIL PRODUCT BY COLOR
  const bodyGetProductByColor: any = {
    url: `products-details/${colorGetDetail}`,
    method: 'get',
  };

  const getDetailProductByColor = useSWR(
    `products-details/${colorGetDetail}`,
    () => (colorGetDetail ? postData(bodyGetProductByColor) : undefined)
  );

  const handleChangeColorGetApi = (value: string | number | null): void => {
    setColorGetDetail(value);
    // setName(value);
    // console.log('value', value);
  };

  useEffect(() => {
    getDetailProductByColor.mutate();
    setDatainit(
      colorGetDetail !== 'null'
        ? getDetailProductByColor.data
        : dataInitDetail.data
    );
  }, [colorGetDetail, getDetailProductByColor.data]);

  useEffect(() => {
    setDatainit(dataInitDetail.data);
    setListColorProduct(dataInitDetail?.data?.variant ?? []);
    // console.log('datainittess', dataInitDetail?.data?.variant);
  }, [dataInitDetail.data]);

  // useEffect(() => {

  // })

  // console.log('colorGetDetail', colorGetDetail);
  // console.log('getDetailProductByColor', getDetailProductByColor.data);
  // try {
  //   await postData(bodyApi).then((res) => {
  //     dataInit = res;
  //   });
  // } catch (error: any) {
  //   console.log(error);
  // }

  // const memoizedInforProduct = useMemo(() => {})
  return (
    <div className="pt-[3.41rem]">
      {/* section 1 */}
      <div className="flex justify-center w-[87.5rem] mx-auto max-md:w-full max-md:px-[3.2rem]">
        <div className="w-full flex max-md:flex-col mb-[5rem] max-md:mb-[0]">
          <ImageProduct dataInit={dataInit} />
          {/* right */}
          <InfoProduct
            dataInit={dataInit}
            handleChangeColorGetApi={handleChangeColorGetApi}
            listColorProduct={listColorProduct}
          />
        </div>
      </div>
      {/* section 2 */}
      <div className="px-[6.25rem] border-t border-b border-teal-300 max-md:mt-[5.6rem] max-md:py-[4.27rem] max-md:px-[5.33rem] max-md:bg-[#EEFBFB]">
        <div className="w-[87.5rem] mx-auto max-lg:mx-[0.75rem] flex justify-between text-[#454545] max-md:flex-wrap max-md:bg-[#EEFBFB] py-[1.875rem] max-md:py-[0rem]">
          <div className="flex  justify-center max-lg:mr-[0.9rem]  max-lg:p-[0.5rem] items-center p-[1.25rem] rounded-[3.125rem] border-[1px] border-[#CAF2F1] max-md:w-[calc(50%_-_0.5rem)] max-md:mb-[4.26667rem] max-md:mr-[0.5rem] max-md:rounded-none max-sm:border-none max-sm:justify-start">
            <div className="max-md:hidden">
              <ICProtected height="1.5rem" />
            </div>
            <div className="hidden max-md:block">
              <ICProtected height="6.4rem" />
            </div>
            <p className="max-lg:text-[0.9rem] max-lg:ml-[0.25rem]-[0.9rem] text-[1.125rem] leading-[1.575rem] font-bold ml-[0.75rem] max-md:text-[2.66667rem] max-md:leading-[3.46667rem]">
              Bảo hành trọn đời
            </p>
          </div>
          <div className="flex justify-center max-lg:mr-[0.9rem]  max-lg:p-[0.5rem] items-center p-[1.25rem] rounded-[3.125rem] border-[1px] border-[#CAF2F1] max-sm:w-[calc(50%_-_0.5rem)] max-md:mb-[4.26667rem] max-sm:ml-[0.5rem] max-sm:rounded-none max-sm:border-none  max-sm:justify-start max-sm:mr-0">
            <div className="max-md:hidden">
              <ICFree height="1.5rem" width="1.5rem" />
            </div>
            <div className="hidden max-md:block">
              <ICFree height="6.4rem" width="6.4rem" />
            </div>
            <p className="max-lg:text-[0.9rem] max-lg:ml-[0.25rem]-[0.9rem] text-[1.125rem] leading-[1.575rem] font-bold ml-[0.75rem] max-md:text-[2.66667rem] max-md:leading-[3.46667rem]">
              Đo mắt miễn phí
            </p>
          </div>
          <div className="flex justify-center max-lg:mr-[0.9rem]  max-lg:p-[0.5rem] items-center p-[1.25rem] rounded-[3.125rem] border-[1px] border-[#CAF2F1] max-sm:w-[calc(50%_-_0.5rem)]  max-sm:mb-[1rem] max-sm:mr-[0.5rem] max-sm:rounded-none max-sm:border-none  max-sm:justify-start">
            <div className="max-md:hidden">
              <ICChange height="1.5rem" width="1.5rem" />
            </div>
            <div className="hidden max-md:block">
              <ICChange height="6.4rem" width="6.4rem" />
            </div>
            <p className="max-lg:text-[0.9rem] max-lg:ml-[0.25rem]-[0.9rem] text-[1.125rem] leading-[1.575rem] font-bold ml-[0.75rem] max-md:text-[2.66667rem] max-md:leading-[3.46667rem]">
              Thu cũ đổi mới
            </p>
          </div>
          <div
            id="check-scroll-to-show"
            className="flex justify-center  max-lg:p-[0.5rem] items-center p-[1.25rem] rounded-[3.125rem] border-[1px] border-[#CAF2F1] max-sm:w-[calc(50%_-_0.5rem)] max-sm:mb-[1rem] max-sm:ml-[0.5rem] max-sm:rounded-none max-sm:border-none  max-sm:justify-start"
          >
            <div className="max-md:hidden">
              <ICClean height="1.5rem" width="1.5rem" />
            </div>
            <div className="hidden max-md:block">
              <ICClean height="6.4rem" width="6.4rem" />
            </div>
            <p className="max-lg:text-[0.9rem] max-lg:ml-[0.25rem]-[0.9rem] text-[1.125rem] leading-[1.575rem] font-bold ml-[0.75rem] max-md:text-[2.66667rem] max-md:leading-[3.46667rem]">
              Vệ sinh và bảo quản kính
            </p>
          </div>
        </div>
      </div>
      {/* section 3 */}
      <div className="w-[87.5rem] mx-auto mb-[5rem] max-lg:mx-[3.25rem] mt-[3.75rem] relative max-md:w-full max-md:mx-0 max-md:mb-[3.5rem] max-md:mt-[8.53rem]">
        <div className="flex justify-between mb-[2rem] items-center max-md:px-[2.67rem] max-md:mb-[4.27rem]">
          <h4 className="text-[2rem] not-italic font-[850] text-[#313131] leading-[2.4rem] h-[2.4rem] text-center max-md:text-[5.33333rem]">
            TRÒNG KÍNH BỔ TRỢ
          </h4>
          <div className="flex items-center justify-center h-full  py-[1.6rem] hover:text-[#f58f5d] cursor-pointer max-md:hidden">
            <ICArrowRight2 fill="#F58F5D" />
            <p className="text-[1.125rem] ml-[0.62rem] text-right max-md:hidden">
              Xem thêm
            </p>
            <p className="hidden text-[0.75rem] ml-[0.25rem] leading-[1.05rem] text-right max-md:flex max-md:text-[3.2rem] max-md:text-[#F58F5D]">
              Xem tất cả
            </p>
          </div>
        </div>
        <div className="max-md:hidden">
          <SlideProductComponent
            keySlide="support-lenses"
            data={dataGlasses?.data}
          />
        </div>
        <div className="hidden max-md:block px-[3.2rem]">
          <div className="flex justify-between">
            <div className="relative mb-[4.27rem]">
              <ItemMobile />
            </div>
            <div className="relative mb-[4.27rem]">
              <ItemMobile />
            </div>
          </div>
          <div className="flex justify-between">
            <div className="relative mb-[4.27rem]">
              <ItemMobile />
            </div>
            <div className="relative mb-[4.27rem]">
              <ItemMobile />
            </div>
          </div>
        </div>
        <div className="hidden max-md:flex items-center justify-center h-full  py-[1.6rem] hover:text-[#f58f5d] cursor-pointer">
          <ICArrowRight2 fill="#F58F5D" />
          <p className="text-[1.125rem] ml-[0.62rem] text-right max-md:hidden">
            Xem thêm
          </p>
          <p className="hidden text-[0.75rem] ml-[0.25rem] leading-[1.05rem] text-right max-md:flex max-md:text-[3.2rem] max-md:text-[#F58F5D]">
            Xem tất cả
          </p>
        </div>
      </div>
      <div className="w-[87.5rem] mx-auto mb-[5rem] max-lg:mx-[3.25rem] mt-[3.75rem] relative max-md:w-full max-md:mx-0 max-md:mb-[3.5rem] max-md:mt-[8.53rem]">
        <div className="flex justify-between mb-[2rem] items-center max-md:px-[2.67rem] max-md:mb-[4.27rem]">
          <h4 className="text-[2rem] not-italic font-[850] text-[#313131] leading-[2.4rem] h-[2.4rem] text-center max-md:text-[5.33333rem]">
            TRÒNG KÍNH TƯƠNG TỰ
          </h4>
          <div className="flex items-center justify-center h-full  py-[1.6rem] hover:text-[#f58f5d] cursor-pointer max-md:hidden">
            <ICArrowRight2 fill="#F58F5D" />
            <p className="text-[1.125rem] ml-[0.62rem] text-right max-md:hidden">
              Xem thêm
            </p>
            <p className="hidden text-[0.75rem] ml-[0.25rem] leading-[1.05rem] text-right max-md:flex max-md:text-[3.2rem] max-md:text-[#F58F5D]">
              Xem tất cả
            </p>
          </div>
        </div>
        <div className="max-md:hidden">
          <SlideProductComponent
            keySlide="same-glasses"
            data={dataGlasses?.data}
          />
        </div>
        <div className="hidden max-md:block px-[3.2rem]">
          <div className="flex justify-between">
            <div className="relative mb-[4.27rem]">
              <ItemMobile />
            </div>
            <div className="relative mb-[4.27rem]">
              <ItemMobile />
            </div>
          </div>
          <div className="flex justify-between">
            <div className="relative mb-[4.27rem]">
              <ItemMobile />
            </div>
            <div className="relative mb-[4.27rem]">
              <ItemMobile />
            </div>
          </div>
        </div>
        <div className="hidden max-md:flex items-center justify-center h-full  py-[1.6rem] hover:text-[#f58f5d] cursor-pointer">
          <ICArrowRight2 fill="#F58F5D" />
          <p className="text-[1.125rem] ml-[0.62rem] text-right max-md:hidden">
            Xem thêm
          </p>
          <p className="hidden text-[0.75rem] ml-[0.25rem] leading-[1.05rem] text-right max-md:flex max-md:text-[3.2rem] max-md:text-[#F58F5D]">
            Xem tất cả
          </p>
        </div>
      </div>

      {/* section 4 */}
      <RecommendProduct />
      {/* section fix */}
      <div
        id="fixed-product"
        className="px-[6.25rem] fixed h-[7.5rem] w-[100%] bg-[#fff] bottom-[-7.5rem] z-50 border-t-[1px] border-[#ECECEC] max-sm:hidden items-center"
      >
        <Fixed />
      </div>
    </div>
  );
}

export default ProductDetail;
