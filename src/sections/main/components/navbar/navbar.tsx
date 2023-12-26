import { cn } from '@/lib/utils';
import NavItems from './nav-items/nav-items';
import NavMobileDetail from './nav-mobile-detail';

function Navbar() {
  return (
    <div>
      {/* <Logo /> */}
      <div
        className={cn(
          'flex justify-between w-full py-6 fixed top-[0px] z-10 bg-[white] max-md:hidden'
        )}
      >
        <NavItems />
        <div className="mt-5 max-md:mt-1" />
      </div>
      <div className="hidden max-sm:block fixed top-[20px] right-[3.2rem] z-10">
        <NavMobileDetail />
      </div>
    </div>
  );
}

export default Navbar;
