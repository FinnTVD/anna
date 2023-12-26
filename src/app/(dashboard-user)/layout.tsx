import Navbar from '@/sections/main/components/navbar/navbar';
import SidebarDashboardUser from '../../sections/dashboard-user/components/sidebar-dashboard-user';

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <main className="bg-[#FAFAFA] mt-[9rem] max-md:mt-0 max-h-[calc(100vh-9rem)]">
        <Navbar />
        <div className="h-[calc(100vh-4.5rem-9rem)]">
          <div className="w-[87.5rem] mx-auto flex py-[2rem] max-h-full h-fit max-md:flex-col max-md:h-fit max-md:max-h-auto max-md:w-full max-md:px-[3rem]">
            <SidebarDashboardUser />
            <div className="grow bg-white rounded-[1rem] ml-[1rem] py-[1.5rem] px-[2rem]">
              {children}
            </div>
          </div>
        </div>
        <div className="h-[4.5rem] flex flex-col justify-center w-[87.5rem] mx-auto border-t-[1px] border-t-[#DADADA]">
          <div className="flex justify-between">
            <span className="text-[1rem] font-Nexa-Normal leading-[1.7rem] text-[#444] opacity-70">
              Anna © 2023 - 2024. Design by OkHub VietNam
            </span>
            <div>
              <span className="px-[2rem] text-[1rem] font-Nexa-Normal leading-[1.7rem] text-[#444] opacity-70">
                Hệ Thống Cửa Hàng
              </span>
              <span className="px-[2rem] text-[1rem] font-Nexa-Normal leading-[1.7rem] text-[#444] opacity-70">
                Danh sách sản phẩm
              </span>
              <span className="px-[2rem] text-[1rem] font-Nexa-Normal leading-[1.7rem] text-[#444] opacity-70">
                Bài viết
              </span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainLayout;
