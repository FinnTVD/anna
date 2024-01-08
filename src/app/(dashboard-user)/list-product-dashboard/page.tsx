import { NEXT_AUTH_OPTIONS } from '@/configs/auth-option';
import ListProductDashboard from '@/sections/dashboard-user/list-product-dashboard';
import { getServerSession } from 'next-auth';

const ListProductDashboardPage = async () => {
  const session = await getServerSession(NEXT_AUTH_OPTIONS);
  console.log('session: ', session);

  return (
    <div className="h-full">
      <ListProductDashboard />
    </div>
  );
};

export default ListProductDashboardPage;
