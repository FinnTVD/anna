import Footer from '@/sections/main/components/footer/footer';
import NavbarHome from '@/sections/main/components/navbarHome/navbar';

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <NavbarHome />
      <main className=" max-md:mt-0">
        <div>{children}</div>
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
