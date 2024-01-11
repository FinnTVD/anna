import DetailOrder from '@/sections/dashboard-user/detail-order';
import { fetchDataAuthen } from '@/lib/post-data';
import { getServerSession } from 'next-auth';
import { NEXT_AUTH_OPTIONS } from '@/configs/auth-option';

const DetailOrderPage = async ({ params: { slug } }: any) => {
  const session = await getServerSession(NEXT_AUTH_OPTIONS);

  const bodyGetDetailOrder: any = {
    url: `wp-json/custom/v1/order/${slug}`,
    method: 'get',
    token: session?.user.token,
  };

  const dataGetDetailOrder = await fetchDataAuthen(bodyGetDetailOrder);

  return (
    <div className="h-full">
      <DetailOrder dataGetDetailOrder={dataGetDetailOrder} />
    </div>
  );
};

export default DetailOrderPage;
