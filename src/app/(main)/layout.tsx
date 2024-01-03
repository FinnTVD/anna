import Footer from '@/sections/main/components/footer/footer';
import Navbar from '@/sections/main/components/navbar/navbar';
import { postData } from '@/lib/post-data';
import { Toaster } from '@/components/ui/sonner';

const MainLayout = async ({ children }: { children: React.ReactNode }) => {
  const bodyGetProductHeader: any = {
    url: `wp-json/custom/v1/categories`,
    method: 'get',
  };
  // const dataHome = await fetchDataRest('GET', 'custom/v1/categories');
  const dataListProductHeader = await postData(bodyGetProductHeader);
  return (
    <div>
      <main className="mt-[9rem] max-md:mt-0">
        <Navbar dataListProductHeader={dataListProductHeader} />
        <div>{children}</div>
        <Toaster />
        <Footer />
      </main>
    </div>
  );
};

export default MainLayout;
