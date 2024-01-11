import Navbar from '@/sections/main/components/navbar/navbar';
import SidebarDashboardUser from '../../sections/dashboard-user/components/sidebar-dashboard-user';
import { fetchDataAuthen, postData } from '@/lib/post-data';
import { getServerSession } from 'next-auth';
import { NEXT_AUTH_OPTIONS } from '@/configs/auth-option';

const MainLayout = async ({
  children,
  request,
}: {
  children: React.ReactNode;
  request: Request;
}) => {
  const session = await getServerSession(NEXT_AUTH_OPTIONS);

  const bodyGetProductHeader: any = {
    url: `wp-json/custom/v1/categories`,
    method: 'get',
  };

  const dataListProductHeader = await postData(bodyGetProductHeader);

  // GET API cart
  const bodyGetCart: any = {
    url: `/wp-json/woocart/v1/cart`,
    method: 'get',
    token: session?.user.token,
  };

  const dataListCart =
    session !== null ? await fetchDataAuthen(bodyGetCart) : undefined;

  // GET INFOR USER
  const bodyGetInfoUser: any = {
    url: `/wp-json/wp/v2/users/me`,
    method: 'get',
    token: session?.user.token,
  };

  const dataGetInforUser =
    session !== null ? await fetchDataAuthen(bodyGetInfoUser) : undefined;

  return (
    <div>
      <main className="bg-[#FAFAFA] mt-[9rem] max-md:mt-0 max-md:h-fit max-md:max-h-fit">
        <Navbar
          avatarUser={dataGetInforUser?.m_avatar}
          dataListCart={dataListCart}
          dataListProductHeader={dataListProductHeader}
        />
        <div className="h-[calc(100vh-4.5rem-9rem)] w-[87.5rem] mx-auto flex py-[2rem] max-h-full max-md:flex-col max-md:h-fit max-md:max-h-auto max-md:w-full max-md:px-[3rem]">
          <div className="w-1/3 h-full max-md:w-full">
            <SidebarDashboardUser
              avatarUser={dataGetInforUser?.m_avatar}
              userSession={session}
            />
          </div>
          <div className="w-2/3 py-[1.5rem] bg-white rounded-[1rem] ml-[1rem] max-md:w-full max-md:px-[2.5rem] max-md:py-[4.5rem]">
            <div className="overflow-y-auto h-full px-[2rem]">{children}</div>
          </div>
        </div>
        <div className="h-[4.5rem] flex flex-col justify-center w-[87.5rem] mx-auto border-t-[1px] border-t-[#DADADA] max-md:h-fit max-md:mt-[4rem] max-md:py-[4rem]">
          <div className="flex justify-between max-md:flex-col-reverse">
            <div className="text-[1rem] font-medium leading-[1.7rem] text-[#444] opacity-70 max-md:text-[3.6rem] max-md:leading-[5rem] flex max-md:flex-col-reverse">
              <h3> Anna © 2023 - 2024. </h3>
              <h3 className="ml-[0.5rem] font-medium max-md:ml-[0rem]">
                Design by OkHub VietNam
              </h3>
            </div>
            <div className="flex max-md:flex-col max-md:mb-[2rem]">
              <h3 className="px-[2rem] font-medium text-[1rem] leading-[1.7rem] text-[#444] opacity-70 max-md:text-[3.6rem] max-md:leading-[5rem] max-md:pl-[0rem]">
                Hệ Thống Cửa Hàng
              </h3>
              <h3 className="px-[2rem] font-medium text-[1rem] leading-[1.7rem] text-[#444] opacity-70 max-md:text-[3.6rem] max-md:leading-[5rem] max-md:pl-[0rem]">
                Danh sách sản phẩm
              </h3>
              <h3 className="px-[2rem] font-medium text-[1rem] leading-[1.7rem] text-[#444] opacity-70 max-md:text-[3.6rem] max-md:leading-[5rem] max-md:pl-[0rem]">
                Bài viết
              </h3>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MainLayout;
