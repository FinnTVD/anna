import Cart from '@/sections/cart';
import { fetchDataAuthen, postData } from '@/lib/post-data';
import { getServerSession } from 'next-auth';
import { NEXT_AUTH_OPTIONS } from '@/configs/auth-option';

const CartPage = async () => {
  const session = await getServerSession(NEXT_AUTH_OPTIONS);

  const bodyGetListProduct: any = {
    url: `wp-json/custom/v1/products?per_page=6&page=2`,
    method: 'get',
  };

  const dataListProductNew = await postData(bodyGetListProduct);

  // Get API Cart
  const bodyGetCart: any = {
    url: `/wp-json/woocart/v1/cart`,
    method: 'get',
    token: session?.user.token,
  };

  const dataListCart =
    session !== null ? await fetchDataAuthen(bodyGetCart) : undefined;

  return (
    <Cart
      accessToken={session?.user.token}
      dataListProductNew={dataListProductNew}
      dataListCart={dataListCart}
    />
  );
};

export default CartPage;
