import { cn } from '@/lib/utils';
import NavItems from './nav-items/nav-items';
import NavMobileDetail from './nav-mobile-detail';
import { IListProductMenuHeader } from '@/types/types-general';

interface IProps {
  dataListProductHeader?: IListProductMenuHeader[];
}
function Navbar(props: IProps) {
  const { dataListProductHeader } = props;
  return (
    <div>
      {/* <Logo /> */}
      <div
        className={cn(
          'flex justify-between w-full py-[0.63rem] fixed top-[0px] z-50 bg-[white] max-md:hidden'
        )}
      >
        <NavItems dataProps={dataListProductHeader ?? []} />
        <div className="mt-5 max-md:mt-1" />
      </div>
      <div className="hidden max-sm:block fixed top-[20px] right-[3.2rem] z-10">
        <NavMobileDetail dataListProductHeader={dataListProductHeader} />
      </div>
    </div>
  );
}

export default Navbar;
