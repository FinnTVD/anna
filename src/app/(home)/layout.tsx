import { fetchDataRest } from '@/lib/fetch-data-rest';
import Footer from '@/sections/main/components/footer/footer';
import NavbarHome from '@/sections/main/components/navbarHome/navbar';
import { getServerSession } from 'next-auth';
import { NEXT_AUTH_OPTIONS } from '@/configs/auth-option';
import { fetchDataAuthen } from '@/lib/post-data';

const MainLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getServerSession(NEXT_AUTH_OPTIONS);

  const bodyGetProductHeader: any = {
    url: `custom/v1/categories`,
    method: 'get',
  };
  const dataListProductHeader = await fetchDataRest(
    bodyGetProductHeader?.method,
    bodyGetProductHeader?.url
  );

  // GET API cart
  const bodyGetCart: any = {
    url: `/wp-json/woocart/v1/cart`,
    method: 'get',
    token: session?.user.token,
  };

  const dataListCart =
    session !== null ? await fetchDataAuthen(bodyGetCart) : undefined;

  return (
    <div>
      <NavbarHome
        dataListProductHeader={dataListProductHeader}
        dataListCart={dataListCart}
      />
      <main className=" max-md:mt-0">
        <div>{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
