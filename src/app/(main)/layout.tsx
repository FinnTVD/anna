'use client';

import Footer from '@/sections/main/components/footer/footer';
import Navbar from '@/sections/main/components/navbar/navbar';

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <main className="mt-[9rem] max-md:mt-0">
        <Navbar />
        <div>{children}</div>
        <Footer />
      </main>
    </div>
  );
}

export default MainLayout;
