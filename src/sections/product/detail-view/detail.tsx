'use client';

import React, { useContext, useEffect, useRef, useState } from 'react';
import ImageProduct from '@/sections/product/detail-view/view/image-product';
import InfoProduct from '@/sections/product/detail-view/view/info-product';
import RecommendProduct from '@/sections/product/detail-view/view/recommend-product';
import { fetchDataAuthen, postData } from '@/lib/post-data';
import { IPostData } from '@/types/next-auth';
import useSWR from 'swr';
import { ICProtected } from '@/components/Icons/ICProtected';
import { ICFree } from '@/components/Icons/ICFree';
import { ICChange } from '@/components/Icons/ICChange';
import { ICClean } from '@/components/Icons/ICClean';
import ICArrowRight2 from '@/components/Icons/ICArrowRight2';
import ItemMobile from '../../../components/component-ui-custom/item-product-mobile';
import SlideProductComponent from '@/components/component-ui-custom/slide-swiper-product/slide-product';
import { Fixed } from '@/sections/product/detail-view/view/Fixed';
import './style.css';
import Link from 'next/link';
import Image from 'next/image';
import { keyProductsInCart } from '@/configs/config';
import map from 'lodash.map';
import { onSuccess } from '@/ultils/notification';
import { ProductCartContext } from '@/context-provider';

interface IProps {
  slug: string;
  dataInitDetail: any;
  dataGlasses: any;
  dataListSimilarGlasses: any;

  dataProductGlasses: any;
  dataDataLenses: any;
  dataProductByAnyCategory: any;
  accessToken?: string;
}

function ProductDetail({
  slug,
  dataInitDetail,
  dataGlasses,
  dataListSimilarGlasses,
  dataProductGlasses,
  dataDataLenses,
  dataProductByAnyCategory,
  accessToken,
}: IProps) {
  const refHeightProductInfo = useRef<any>();
  const [isShowItemProduct, setIsShowItemProduct] = useState<boolean>(false);
  const [dataInit, setDatainit] = useState(dataInitDetail);
  const [colorGetDetail, setColorGetDetail] = useState<number | string | null>(
    null
  );
  const [listColorProduct, setListColorProduct] = useState<any>(
    dataInitDetail?.data?.variant ?? []
  );
  const [isLoadingAddToCart, setIsLoadingAddToCart] = useState<boolean>(false);

  const { handleChangeDataGlobal } = useContext<any>(ProductCartContext);

  const bodyApi: IPostData = {
    url: `wp-json/custom/v1/products-by-slug/${slug}`,
    method: 'get',
  };
  const dataDetailProduct = useSWR(bodyApi.url, () => postData(bodyApi));

  // GET DETAIL PRODUCT BY COLOR
  const bodyGetProductByColor: any = {
    url: `wp-json/custom/v1/products-details/${colorGetDetail}`,
    method: 'get',
  };

  const getDetailProductByColor = useSWR(
    `wp-json/custom/v1/products-details/${colorGetDetail}`,
    () => (colorGetDetail ? postData(bodyGetProductByColor) : undefined)
  );

  const handleChangeColorGetApi = (value: string | number | null): void => {
    setColorGetDetail(value);
  };

  const handleAddToCartLocalStorage = (
    data: any,
    quantityProduct: any
  ): void => {
    let getListProductInCart;

    if (
      typeof window !== 'undefined' &&
      localStorage.getItem(keyProductsInCart) !== null
    ) {
      getListProductInCart = localStorage.getItem(keyProductsInCart);
    }

    if (!getListProductInCart) {
      const newArray = [];
      const ItemAddToCard = {
        product_id: data?.id,
        product_image: data?.featuredImage,
        product_name: data?.sku,
        category: data?.categories ? data?.categories[0] : 'no-data',
        product_price: data?.price,
        // salePrice: data?.sale_price,
        stock_quantity: data?.stock_quantity,
        quantity: quantityProduct,
      };

      newArray.push(ItemAddToCard);

      // add product in context
      handleChangeDataGlobal(newArray);

      if (typeof window !== 'undefined') {
        localStorage.setItem(keyProductsInCart, JSON.stringify(newArray));
      }

      onSuccess({ message: 'Thêm giỏ hàng thành công' });
    } else {
      const initCurrentCart = JSON.parse(getListProductInCart);

      const newList = map(initCurrentCart, (item: any) => {
        const newObject = {
          product_id: item.product_id,
          product_image: item.product_image,
          product_name: item.product_name,
          category: item.category,
          product_price: item?.product_price,
          // salePrice: item.salePrice,
          stock_quantity: data?.stock_quantity,
          quantity:
            item.product_id === data?.id
              ? item.quantity + quantityProduct > data?.stock_quantity
                ? data?.stock_quantity
                : item.quantity + quantityProduct
              : item.quantity,
        };
        return newObject;
      });

      // add item if item do not available in cart
      const findItemAvailable = initCurrentCart.filter(
        (item: any) => item.product_id === data?.id
      );

      const newObjectDoNotAvailable = {
        product_id: data?.id,
        product_image: data?.featuredImage,
        product_name: data?.sku,
        category: data?.categories ? data?.categories[0] : 'no-data',
        stock_quantity: data?.stock_quantity,
        product_price: data?.price,
        // salePrice: data?.sale_price,
        quantity: quantityProduct,
      };

      if (findItemAvailable.length === 0) {
        newList.push(newObjectDoNotAvailable);
      }

      // add product in context
      handleChangeDataGlobal(newList);

      // eslint-disable-next-line no-unused-expressions
      typeof window !== 'undefined' &&
        localStorage.setItem(keyProductsInCart, JSON.stringify(newList));

      onSuccess({ message: 'Thêm giỏ hàng thành công' });
    }
  };

  const handleAddToCartAPI = async (data: any, quantityProduct: any) => {
    setIsLoadingAddToCart(true);

    const objectSubmit = {
      product_id: data?.id,
      quantity: quantityProduct,
      variation_id: data?.variation_id,
    };

    try {
      await fetchDataAuthen({
        url: `/wp-json/woocart/v1/cart`,
        method: 'post',
        body: JSON.stringify(objectSubmit),
        token: accessToken,
      });
      // toast({
      //   title: 'Save changes successfully!',
      // });

      handleAddToCartLocalStorage(data, quantityProduct);

      onSuccess({ message: 'Thêm giỏ hàng thành công' });
      setIsLoadingAddToCart(false);
    } catch (error) {
      setIsLoadingAddToCart(false);
    }
  };

  useEffect(() => {
    getDetailProductByColor.mutate();
    setDatainit(
      colorGetDetail !== 'null'
        ? getDetailProductByColor.data
        : dataDetailProduct.data
    );
  }, [colorGetDetail, getDetailProductByColor.data]);

  useEffect(() => {
    setDatainit(dataDetailProduct.data);
    setListColorProduct(dataDetailProduct?.data?.variant ?? []);
  }, [dataDetailProduct.data]);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const { scrollY } = window;

      if (scrollY > refHeightProductInfo.current?.clientHeight) {
        setIsShowItemProduct(true);
      } else setIsShowItemProduct(false);
    });
  }, []);

  return (
    <div className="pt-[12rem] detail-product-container">
      <div className="fixed -left-[15.25rem] -top-[16rem] -z-20">
        <Image
          height={200}
          width={200}
          className="w-[61rem] h-[61rem]"
          src="/img/detail/EllipseLightBlue.svg"
          alt=""
        />
      </div>
      <div className="fixed -right-[15.25rem] -top-[16rem] -z-20">
        <Image
          height={200}
          width={200}
          className="w-[61rem] h-[61rem]"
          src="/img/detail/EllipseLightOrange.svg"
          alt=""
        />
      </div>
      {/* section 1 */}
      <div
        ref={refHeightProductInfo}
        className="flex justify-center w-[87.5rem] mx-auto max-md:w-full max-md:px-[3.2rem]"
      >
        <div className="w-full flex max-md:flex-col mb-[5rem] max-md:mb-[0]">
          <ImageProduct dataInit={dataInit} />
          {/* right */}
          <InfoProduct
            dataInit={dataInit}
            isLoadingAddToCart={isLoadingAddToCart}
            handleChangeColorGetApi={handleChangeColorGetApi}
            listColorProduct={listColorProduct}
            handleAddToCart={
              accessToken && accessToken.length > 0
                ? handleAddToCartAPI
                : handleAddToCartLocalStorage
            }
            // handleAddToCart={handleAddToCartLocalStorage}
          />
        </div>
      </div>
      {/* section 2 */}
      <div
        id="check-scroll-to-show"
        className="px-[6.25rem] border-t border-b border-teal-300 max-md:mt-[5.6rem] max-md:py-[4.27rem] max-md:px-[5.33rem] max-md:bg-[#EEFBFB]"
      >
        <div className="w-[87.5rem] mx-auto max-lg:mx-[0.75rem] flex justify-between text-[#454545] max-md:flex-wrap max-md:bg-[#EEFBFB] py-[1.875rem] max-md:py-[0rem]">
          <Link
            href="/blog/bao-hanh"
            className="w-[20rem] flex justify-center cursor-pointer  items-center p-[1.25rem] rounded-[3.125rem] border-[1px] border-[#CAF2F1] max-md:rounded-none max-md:border-none  max-md:justify-start max-md:w-1/2"
          >
            <div className="max-md:hidden">
              <ICProtected height="3rem" />
            </div>
            <div className="hidden max-md:block">
              <ICProtected height="6.4rem" />
            </div>
            <p className="max-lg:text-[0.9rem] max-lg:ml-[0.25rem]-[0.9rem] text-[1.125rem] leading-[1.575rem] font-bold ml-[0.75rem] max-md:text-[2.66667rem] max-md:leading-[3.46667rem]">
              Bảo hành trọn đời
            </p>
          </Link>
          <Link
            href="/blog/do-mat-mien-phi"
            className="w-[20rem] flex justify-center cursor-pointer  items-center p-[1.25rem] rounded-[3.125rem] border-[1px] border-[#CAF2F1] max-md:rounded-none max-md:border-none  max-md:justify-start max-md:w-1/2"
          >
            <div className="max-md:hidden">
              <ICFree height="3rem" width="3rem" />
            </div>
            <div className="hidden max-md:block">
              <ICFree height="6.4rem" width="6.4rem" />
            </div>
            <p className="max-lg:text-[0.9rem] max-lg:ml-[0.25rem]-[0.9rem] text-[1.125rem] not-italic leading-[1.575rem] font-bold ml-[0.75rem] max-md:text-[2.66667rem] max-md:leading-[3.46667rem]">
              Đo mắt miễn phí
            </p>
          </Link>
          <Link
            href="/blog/thu-cu-doi-moi"
            className="w-[20rem] flex justify-center cursor-pointer  items-center p-[1.25rem] rounded-[3.125rem] border-[1px] border-[#CAF2F1] max-md:rounded-none max-md:border-none  max-md:justify-start max-md:w-1/2 max-md:mt-[4.27rem]"
          >
            <div className="max-md:hidden">
              <ICChange height="3rem" width="3rem" />
            </div>
            <div className="hidden max-md:block">
              <ICChange height="6.4rem" width="6.4rem" />
            </div>
            <p className="max-lg:text-[0.9rem] max-lg:ml-[0.25rem]-[0.9rem] text-[1.125rem] leading-[1.575rem] font-bold ml-[0.75rem] max-md:text-[2.66667rem] max-md:leading-[3.46667rem]">
              Thu cũ đổi mới
            </p>
          </Link>
          <Link
            href="/blog/ve-sinh-va-bao-quan-kinh"
            className="w-[20rem] flex justify-center cursor-pointer  items-center p-[1.25rem] rounded-[3.125rem] border-[1px] border-[#CAF2F1] max-md:rounded-none max-md:border-none  max-md:justify-start max-md:w-1/2 max-md:mt-[4.27rem]"
          >
            <div className="max-md:hidden">
              <ICClean height="3rem" width="3rem" />
            </div>
            <div className="hidden max-md:block">
              <ICClean height="6.4rem" width="6.4rem" />
            </div>
            <p className="max-lg:text-[0.9rem] max-lg:ml-[0.25rem]-[0.9rem] text-[1.125rem] leading-[1.575rem] font-bold ml-[0.75rem] max-md:text-[2.66667rem] max-md:leading-[3.46667rem]">
              Vệ sinh và bảo quản kính
            </p>
          </Link>
        </div>
      </div>
      {/* section 3 */}
      <div className="w-[87.5rem] mx-auto mb-[5rem] max-lg:mx-[3.25rem] mt-[3.75rem] relative max-md:w-full max-md:mx-0 max-md:mb-[3.5rem] max-md:mt-[8.53rem]">
        <div className="flex justify-between mb-[2rem] items-center max-md:px-[2.67rem] max-md:mb-[4.27rem]">
          <h4 className="text-[2rem] not-italic font-extrabold text-[#313131] leading-[2.4rem] h-[2.4rem] text-center max-md:text-[5.33333rem]">
            TRÒNG KÍNH BỔ TRỢ
          </h4>
          <div className="hover-see-more flex items-center justify-center h-full  py-[1.6rem] hover:text-[#f58f5d] cursor-pointer max-md:hidden">
            <ICArrowRight2 fill="#F58F5D" />
            <Link
              href="/cua-hang"
              className="text-[1.125rem] leading-[1.4625rem] font-bold ml-[0.62rem] text-right max-md:hidden"
            >
              Xem thêm
            </Link>
            <Link
              href="/cua-hang"
              className="hidden text-[0.75rem] ml-[0.25rem] leading-[1.05rem] text-right max-md:flex max-md:text-[3.2rem] max-md:text-[#F58F5D]"
            >
              Xem tất cả
            </Link>
          </div>
        </div>
        <div className="max-md:hidden">
          <SlideProductComponent keySlide="support-lenses" data={dataGlasses} />
        </div>
        <div className="hidden max-md:block px-[3.2rem]">
          <div className="flex justify-between">
            {dataGlasses[0] && (
              <div className="relative mb-[4.27rem]">
                <ItemMobile itemProduct={dataGlasses[0]} />
              </div>
            )}
            {dataGlasses[1] && (
              <div className="relative mb-[4.27rem]">
                <ItemMobile itemProduct={dataGlasses[1]} />
              </div>
            )}
          </div>
          <div className="flex justify-between">
            {dataGlasses[2] && (
              <div className="relative mb-[4.27rem]">
                <ItemMobile itemProduct={dataGlasses[2]} />
              </div>
            )}
            {dataGlasses[3] && (
              <div className="relative mb-[4.27rem]">
                <ItemMobile itemProduct={dataGlasses[3]} />
              </div>
            )}
          </div>
        </div>
        <div className="hidden max-md:flex items-center justify-center h-full  py-[1.6rem] hover:text-[#f58f5d] cursor-pointer">
          <ICArrowRight2 fill="#F58F5D" />
          <p className="text-[#F58F5D] text-[3.2rem] ml-[1.07rem] not-italic font-extrabold leading-[4.48rem] text-right pt-[0.8rem]">
            Xem tất cả
          </p>
        </div>
      </div>
      <div className="w-[87.5rem] mx-auto mb-[5rem] max-lg:mx-[3.25rem] mt-[3.75rem] relative max-md:w-full max-md:mx-0 max-md:mb-[3.5rem] max-md:mt-[8.53rem]">
        <div className="flex justify-between mb-[2rem] items-center max-md:px-[2.67rem] max-md:mb-[4.27rem]">
          <h4 className="text-[2rem] not-italic font-extrabold text-[#313131] leading-[2.4rem] h-[2.4rem] text-center max-md:text-[5.33333rem]">
            TRÒNG KÍNH TƯƠNG TỰ
          </h4>
          <div className="hover-see-more flex items-center justify-center h-full  py-[1.6rem] hover:text-[#f58f5d] cursor-pointer max-md:hidden">
            <ICArrowRight2 fill="#A9A9A9" />
            <Link
              href="/cua-hang"
              className="text-[1.125rem] leading-[1.4625rem] font-bold ml-[0.62rem] text-right max-md:hidden"
            >
              Xem thêm
            </Link>
            <Link
              href="/cua-hang"
              className="hidden text-[0.75rem] ml-[0.25rem] leading-[1.05rem] text-right max-md:flex max-md:text-[3.2rem] max-md:text-[#F58F5D]"
            >
              Xem tất cả
            </Link>
          </div>
        </div>
        <div className="max-md:hidden">
          <SlideProductComponent
            keySlide="same-glasses"
            data={dataListSimilarGlasses}
          />
        </div>
        <div className="hidden max-md:block px-[3.2rem]">
          <div className="flex justify-between">
            {dataListSimilarGlasses[0] && (
              <div className="relative mb-[4.27rem]">
                <ItemMobile itemProduct={dataListSimilarGlasses[0]} />
              </div>
            )}
            {dataListSimilarGlasses[1] && (
              <div className="relative mb-[4.27rem]">
                <ItemMobile itemProduct={dataListSimilarGlasses[1]} />
              </div>
            )}
          </div>
          <div className="flex justify-between">
            {dataListSimilarGlasses[2] && (
              <div className="relative mb-[4.27rem]">
                <ItemMobile itemProduct={dataListSimilarGlasses[2]} />
              </div>
            )}
            {dataListSimilarGlasses[3] && (
              <div className="relative mb-[4.27rem]">
                <ItemMobile itemProduct={dataListSimilarGlasses[3]} />
              </div>
            )}
          </div>
        </div>
        <div className="hidden max-md:flex items-center justify-center h-full  py-[1.6rem] hover:text-[#f58f5d] cursor-pointer">
          <ICArrowRight2 fill="#F58F5D" />
          <p className="text-[#F58F5D] text-[3.2rem] ml-[1.07rem] not-italic font-extrabold leading-[4.48rem] text-right pt-[0.8rem]">
            Xem tất cả
          </p>
        </div>
      </div>

      {/* section 4 */}
      <RecommendProduct
        dataProductGlasses={dataProductGlasses}
        dataDataLenses={dataDataLenses}
        dataProductByAnyCategory={dataProductByAnyCategory}
      />
      {/* section fix */}

      <div
        className={`h-[7.5rem] ${
          isShowItemProduct ? '-bottom-[0rem]' : '-bottom-[7.5rem]'
        }  fixed transition-all duration-150  z-50 bg-[#FAFAFA] w-full px-[6.25rem] border-t-[1px] border-t-[#ECECEC] max-md:hidden`}
      >
        <Fixed
          dataInit={dataInit}
          listColorProduct={listColorProduct}
          handleAddToCart={
            accessToken && accessToken.length > 0
              ? handleAddToCartAPI
              : handleAddToCartLocalStorage
          }
        />
      </div>
    </div>
  );
}

export default ProductDetail;
