import ListProductDashboard from '@/sections/dashboard-user/list-product-dashboard';
import { getServerSession } from 'next-auth';
import { NEXT_AUTH_OPTIONS } from '@/configs/auth-option';
import { fetchDataAuthen } from '@/lib/post-data';

const ListProductDashboardPage = async () => {
  const session = await getServerSession(NEXT_AUTH_OPTIONS);

  // GET LIST ORDER
  const bodyGetListOrder: any = {
    url: `/wp-json/custom/v1/get-order`,
    method: 'get',
    token: session?.user.token,
  };

  const dataGetListOrder = await fetchDataAuthen(bodyGetListOrder);
  // END

  // // GET LIST WISHLIST
  // const bodyGetListWishList: any = {
  //   url: `/wp-json/custom/v1/get-wishlist `,
  //   method: 'get',
  //   token: session?.user.token,
  // };
  //
  // const dataGetListWishlist = await fetchDataAuthen(bodyGetListWishList);

  return (
    <div className="h-full">
      <ListProductDashboard
        token={session?.user?.token}
        dataGetListOrder={dataGetListOrder}
        // dataGetListWishlist={dataGetListWishlist}
      />
    </div>
  );
};

export default ListProductDashboardPage;
