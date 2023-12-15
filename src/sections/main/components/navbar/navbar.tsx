import { NEXT_AUTH_OPTIONS } from '@/configs/auth-option';
import { cn } from '@/lib/utils';
import { getServerSession } from 'next-auth/next';
import NavItems from './nav-items/nav-items';
import NavMobileDetail from './nav-mobile-detail';

const Navbar = async () => {
  const session = await getServerSession(NEXT_AUTH_OPTIONS);
  return (
    <div>
      {/* <Logo /> */}
      <div
        className={cn(
          'flex justify-between w-full py-[6px] px-20 py-6 fixed top-[0px] z-10 bg-[white] max-sm:hidden'
        )}
      >
        <NavItems session={session} />
        <div className="mt-5 max-md:mt-1" />
      </div>
      <div className="hidden max-sm:block fixed top-[20px] right-[3.2rem] z-10">
        <NavMobileDetail session={session} />
      </div>
    </div>
  );
};

export default Navbar;
