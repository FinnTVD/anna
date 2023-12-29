import { fetchDataRest } from '@/lib/fetch-data-rest';
import { postData } from '@/lib/post-data';
import Footer from '@/sections/main/components/footer/footer';
import NavbarHome from '@/sections/main/components/navbarHome/navbar';

const MainLayout = async ({ children }: { children: React.ReactNode }) => {
  const bodyGetProductHeader: any = {
    url: `custom/v1/categories`,
    method: 'get',
  };
  const dataListProductHeader = await fetchDataRest(
    bodyGetProductHeader?.method,
    bodyGetProductHeader?.url
  );
  return (
    <div>
      <NavbarHome dataListProductHeader={dataListProductHeader} />
      <main className=" max-md:mt-0">
        <div>{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
