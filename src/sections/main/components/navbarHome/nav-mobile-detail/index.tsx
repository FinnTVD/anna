import ICCart from '@/components/Icons/ICCart';
import ICSearch from '@/components/Icons/ICSearch';
import ICTabMenu from '@/components/Icons/ICTabMenu';

function NavMobileDetail() {
  return (
    <div className="py-[1rem] px-[1rem] bg-[#CAC9C7] rounded-[4rem]">
      <div className="pb-[1rem]">
        <ICTabMenu />
      </div>
      <div className="pb-[1rem]">
        <ICTabMenu />
      </div>
      <div className="mb-[1rem] relative w-[2rem] h-[2rem]">
        <ICCart fill="white" width="2rem" height="2rem" />
        <div className="flex items-center justify-center absolute bottom-1 -right-2.5 bg-[#F58F5D] rounded-full w-[2rem] h-[2rem] font-bold not-italic text-[1rem]">
          3
        </div>
      </div>
      <div>
        <ICSearch fill="white" width="2rem" height="2rem" />
      </div>
    </div>
  );
}

export default NavMobileDetail;
