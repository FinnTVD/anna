import AddressInfo from '@/sections/dashboard-user/address-info';
import { getServerSession } from 'next-auth';
import { NEXT_AUTH_OPTIONS } from '@/configs/auth-option';
import { fetchDataAuthen } from '@/lib/post-data';

const AddessInfo = async () => {
  const session = await getServerSession(NEXT_AUTH_OPTIONS);

  const bodyGetListAddress: any = {
    url: `wp-json/shipping/v1/customer-shipping-addresses`,
    method: 'get',
    token: session?.user?.token,
  };

  const dataListAddress = session?.user?.token
    ? await fetchDataAuthen(bodyGetListAddress)
    : undefined;

  return (
    <div className="h-full">
      <AddressInfo dataListAddress={dataListAddress?.shipping_addresses} />
    </div>
  );
};

export default AddessInfo;
