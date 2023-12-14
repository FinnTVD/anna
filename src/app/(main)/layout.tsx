import Footer from '@/sections/main/components/footer/footer';
import Navbar from '@/sections/main/components/navbar/navbar';

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full">
      <Navbar />
      <main className="h-full">
        <div>{children}</div>
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
