import ICDown from '@/components/Icons/ICDown';
import ICLine from '@/components/Icons/ICLine';
import SlideProductComponent from '@/components/component-ui-custom/slide-swiper-product/slide-product';
import { fetchDataRest } from '@/lib/fetch-data-rest';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const dataSlide: any = [
  {
    item_product: {
      id: 304,
      name: 'test',
      slug: 'test',
      sku: '',
      type: 'variable',
      price: 120000,
      sale_price: 150000,
      featuredImage:
        'https://woo-api.okhub.tech/wp-content/uploads/2023/12/20231117_xa44VCCaw2.jpeg',
      ratings: '3',
      shortDescription: '',
      description: 'asdasd',
      categories: ['tròng kính'],
      seller: 'ad_okhub2',
      isDownloadable: false,
      crossSellCount: 0,
      gallImgCOunt: 4,
      galleryImgs: [
        'https://woo-api.okhub.tech/wp-content/uploads/2023/12/20231117_5d65vLIk6O.jpeg',
        'https://woo-api.okhub.tech/wp-content/uploads/2023/12/20231117_0dSsMgZnxM.jpeg',
        'https://woo-api.okhub.tech/wp-content/uploads/2023/12/20231117_bqCvRQ103n.jpeg',
        'https://woo-api.okhub.tech/wp-content/uploads/2023/12/20231117_QHtfmEaBXU.jpeg',
      ],
    },
    product_variant: [
      {
        attributes: {
          Color: 'Black | Blue | Pink',
        },
        variations: [],
      },
    ],

    heightImage: 2,
    heightImageMobile: 2,
  },
];

interface IpropFlash {
  smallBanner1: string;
  smallBanner2: string;
}
const FlashSale = async ({ smallBanner1, smallBanner2 }: IpropFlash) => {
  const dataProduct = await fetchDataRest('GET', 'products');

  return (
    <div>
      <div className="mx-[6.25rem] mb-[5rem] max-lg:mx-[3.25rem] mt-[3.75rem] relative max-sm:mx-0 max-sm:mb-[3.5rem]">
        <div className="flex mb-[2.62rem] items-center max-sm:mb-[1rem] max-sm:px-[0.75rem]">
          <h4 className="text-teal-300 text-[38px] font-black uppercase pr-[1.688rem]">
            Flash Sale
          </h4>
          <ICLine />
          <h4 className="text-[32px] uppercase leading-[56px] pl-[1.688rem]">
            bán chạy nhất
          </h4>
        </div>
        <div>
          <SlideProductComponent keySlide="flash-sale" data={dataProduct} />
        </div>
        <div className="pt-6 flex justify-center">
          <ICDown />
        </div>
        <div className="pt-12 flex justify-center flex-wrap">
          <Image
            src={smallBanner1}
            alt=""
            width={850}
            height={345}
            className="w-full md:w-1/2 pr-0 md:pr-3 md:h-[21.313rem]"
          />
          <Image
            src={smallBanner2}
            alt=""
            width={850}
            height={345}
            className="w-full md:w-1/2 pl-0 md:pl-3 md:h-[21.313rem] mt-8 md:mt-0"
          />
        </div>
      </div>
    </div>
  );
};

export default FlashSale;
