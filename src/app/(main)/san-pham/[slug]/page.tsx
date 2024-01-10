import ProductDetail from '@/sections/product/detail-view/detail';
import { postData } from '@/lib/post-data';
import { IPostData } from '@/types/next-auth';
import { getServerSession } from 'next-auth';
import { NEXT_AUTH_OPTIONS } from '@/configs/auth-option';

const DetaiPage = async ({ params: { slug } }: any) => {
  const session = await getServerSession(NEXT_AUTH_OPTIONS);

  // GET DETAIL PRODUCT
  const bodyGetDetailProduct: any = {
    url: `wp-json/custom/v1/products-by-slug/${slug}`,
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
    url: `wp-json/custom/v1/related-products-slug/${slug}`,
    method: 'get',
  };
  const dataListSimilarGlasses = await postData(bodyApiGetSimilarGlasses);

  // GET PRODUCT BY CATEGORY
  const getProductGlasses: IPostData = {
    url: `wp-json/custom/v1/categories/gong-kinh`,
    method: 'get',
  };
  const dataProductGlasses = await postData(getProductGlasses);

  const getLenses: IPostData = {
    url: `wp-json/custom/v1/categories/trong-kinh`,
    method: 'get',
  };
  const dataDataLenses = await postData(getLenses);

  const getProductByAnyCategory: IPostData = {
    url: `wp-json/custom/v1/categories/clothing`,
    method: 'get',
  };
  const dataProductByAnyCategory = await postData(getProductByAnyCategory);
  // END

  return (
    <ProductDetail
      accessToken={session?.user.token}
      slug={slug}
      dataInitDetail={dataDetailProduct}
      dataGlasses={dataGlasses}
      dataListSimilarGlasses={dataListSimilarGlasses}
      dataProductGlasses={dataProductGlasses}
      dataDataLenses={dataDataLenses}
      dataProductByAnyCategory={dataProductByAnyCategory}
    />
  );
};

export default DetaiPage;
