import CreateAddress from '@/sections/dashboard-user/create-address';
import { getServerSession } from 'next-auth';
import { NEXT_AUTH_OPTIONS } from '@/configs/auth-option';

const CreateAddressPage = async () => {
  const session = await getServerSession(NEXT_AUTH_OPTIONS);

  return <CreateAddress accessToken={session?.user?.token} />;
};

export default CreateAddressPage;
