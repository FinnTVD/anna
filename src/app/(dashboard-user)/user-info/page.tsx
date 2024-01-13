import UserInfo from '@/sections/dashboard-user/user-info';
import { fetchDataAuthen } from "@/lib/post-data";
import { getServerSession } from "next-auth";
import { NEXT_AUTH_OPTIONS } from "@/configs/auth-option";

const UserInfoPage = async () => {
  const session = await getServerSession(NEXT_AUTH_OPTIONS);
  // GET INFOR USER
  const bodyGetInfoUser: any = {
    url: `wp-json/custom-woo-api/v1/customer`,
    method: 'get',
    token: session?.user.token,
  };

  const dataGetInforUser =
    session !== null ? await fetchDataAuthen(bodyGetInfoUser) : undefined;
  return <UserInfo dataGetInforUser={dataGetInforUser} />;
};

export default UserInfoPage;
