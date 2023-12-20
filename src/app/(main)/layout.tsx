import Footer from '@/sections/main/components/footer/footer';
import Navbar from '@/sections/main/components/navbar/navbar';

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      <main className="mt-[8rem] max-md:mt-0">
        <div>{children}</div>
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
