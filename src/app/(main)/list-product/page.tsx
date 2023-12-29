import ListProduct from '@/sections/list-product';
import { postData } from '@/lib/post-data';
import { IItemAttributeProduct } from '@/types/types-general';

const ListProductPage = async () => {
  // GET LIST ATTRIBUTE PRODUCT
  const bodyGetlistAttribute: any = {
    url: `wp-json/custom/v1/attributes`,
    method: 'get',
  };
  const dataListAttribute = await postData(bodyGetlistAttribute);

  // format list attribute
  const arrayListAttributeProuct: IItemAttributeProduct[] = [];
  for (const key in dataListAttribute) {
    const newItem: IItemAttributeProduct = {
      attribute: key,
      subAttribute: dataListAttribute[key],
    };
    arrayListAttributeProuct.push(newItem);
  }
  // end format
  // END GET LIST ATTRIBUTE PRODUCT

  // GET LIST PRODUCT INIT
  const bodyGetListProduct: any = {
    url: `wp-json/custom/v1/products?per_page=12&page=1`,
    method: 'get',
  };
  const dataListProductInit = await postData(bodyGetListProduct);
  // END GET LIST PRODUCT INIT

  return (
    <ListProduct
      dataListAttribute={arrayListAttributeProuct}
      dataListProductInit={dataListProductInit}
    />
  );
};

export default ListProductPage;
