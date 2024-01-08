import Cart from '@/sections/cart';
import { fetchDataAuthen, postData } from '@/lib/post-data';

const CartPage = async () => {
  const bodyGetListProduct: any = {
    url: `wp-json/custom/v1/products?per_page=6&page=2`,
    method: 'get',
  };

  const dataListProductNew = await postData(bodyGetListProduct);

  // Get API Cart
  const bodyGetCart: any = {
    url: `/wp-json/woocart/v1/cart`,
    method: 'get',
    token:
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FubmEub2todWItdGVjaC5jb20iLCJpYXQiOjE3MDQ1OTExMTMsIm5iZiI6MTcwNDU5MTExMywiZXhwIjoxNzA1MTk1OTEzLCJkYXRhIjp7InVzZXIiOnsiaWQiOjUsImRldmljZSI6IiIsInBhc3MiOiI4ZWMzMmIzNGRlYjhjMTJlMjhmNWQwYjQ0Njk0ZjkyNiJ9fX0.Do7zY3gSwLqfTGDwS4QrCHnATlNzai1-UxvdHICnOL4',
  };

  const dataListCart = await fetchDataAuthen(bodyGetCart);

  return (
    <Cart dataListProductNew={dataListProductNew} dataListCart={dataListCart} />
  );
};

export default CartPage;
