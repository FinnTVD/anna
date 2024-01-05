import ListProduct from '@/sections/list-product';
import { IItemAttributeProduct } from '@/types/types-general';
import { postData } from '@/lib/post-data';

// Return a list of `params` to populate the [slug] dynamic segment

const ListProductPage = async ({ params: { slug } }: any) => {
  // GET LIST ATTRIBUTE PRODUCT
  const bodyGetlistAttribute: any = {
    url: `wp-json/custom/v1/attributes`,
    method: 'get',
  };
  const dataListAttribute = await postData(bodyGetlistAttribute);

  // format list attribute
  const arrayListAttributeProuct: IItemAttributeProduct[] = [];
  for (const key in dataListAttribute) {
    if (dataListAttribute.hasOwnProperty(key)) {
      const newItem: IItemAttributeProduct = {
        attribute: key,
        subAttribute: dataListAttribute[key],
      };
      arrayListAttributeProuct.push(newItem);
    }
  }
  // end format
  // END GET LIST ATTRIBUTE PRODUCT

  // GET LIST PRODUCT INIT
  const bodyGetListProductByCate: any = {
    url: `wp-json/custom/v1/products-by-category?category=${slug}`,
    method: 'get',
  };
  const dataListProductInit = await postData(bodyGetListProductByCate);
  // END GET LIST PRODUCT INIT

  console.log('dataListProductInit', dataListProductInit);
  return (
    <ListProduct
      slug={slug}
      dataListProductInit={dataListProductInit}
      dataListAttribute={arrayListAttributeProuct}
    />
  );
};

export default ListProductPage;
