import ProductDetail from '@/sections/product/detail-view/detail';
import { postData } from '@/lib/post-data';
import { IPostData } from '@/types/next-auth';

const DetaiPage = async ({ params: { slug } }: any) => {
  // GET DETAIL PRODUCT
  const bodyGetDetailProduct: any = {
    url: `wp-json/custom/v1/products-by-sku/${slug}`,
    method: 'get',
  };
  const dataDetailProduct = await postData(bodyGetDetailProduct);
  // END

  // GET LIST glasses
  const bodyApiGetGlasses: IPostData = {
    url: `wp-json/custom/v1/categories/trong-kinh`,
    method: 'get',
  };
  const dataGlasses = await postData(bodyApiGetGlasses);

  // GET THE similar GLASSES
  const bodyApiGetSimilarGlasses: IPostData = {
    url: `wp-json/custom/v1/related-products/${slug}`,
    method: 'get',
  };
  const dataListSimilarGlasses = await postData(bodyApiGetSimilarGlasses);

  return (
    <ProductDetail
      slug={slug}
      dataInitDetail={dataDetailProduct}
      dataGlasses={dataGlasses}
      dataListSimilarGlasses={dataListSimilarGlasses}
    />
  );
};

export default DetaiPage;
