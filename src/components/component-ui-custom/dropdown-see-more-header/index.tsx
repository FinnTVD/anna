import { HoverCardContent } from '@/components/ui/hover-card';
import Image from 'next/image';
import ICArrowRight2 from '@/components/Icons/ICArrowRight2';
import Link from 'next/link';
import './style.css';

interface IProps {
  onMouseLeaveTabMenu?: () => void;
}

function DropdownSeeMoreHeader(props: IProps) {
  const { onMouseLeaveTabMenu } = props;
  const listSeemore = [
    {
      id: 1,
      title: 'Giúp bạn chọn kính',
      router: '',
    },
    {
      id: 1,
      title: 'Về chúng tôi',
      router: '/about-us',
    },
    {
      id: 1,
      title: 'blog',
      router: '/blog',
    },
  ];

  return (
    <HoverCardContent
      className="dropdown-see-more-header-container border-none p-0 w-[87.5rem] -mr-[20.5rem] rounded-[1.5rem] -mt-[0.34rem]"
      side="bottom"
      align="end"
      sideOffset={6}
    >
      <div className="w-full flex justify-between bg-white rounded-[1.5rem]">
        <div className="py-[2rem] px-[2.88rem] w-[24.5rem] border-r-2 border-[#55D5D2] ">
          <ul className="w-full">
            {listSeemore.map((item, index) => (
              <li key={index} className="mb-[3rem]">
                <Link
                  href={item.router}
                  onClick={onMouseLeaveTabMenu ?? undefined}
                  className="cursor-pointer text-[#C5C5C5] hover:text-[#55D5D2] text-[1.125rem] not-italic font-extrabold leading-[1.6875rem] uppercase"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex grow items-center justify-between p-[2rem]">
          <div className="item-cart-seemore w-[18.66669rem] h-[19.3125rem] relative flex justify-center">
            <div className="w-[18.66669rem] h-[19.3125rem] rounded-[0.75rem] overflow-hidden">
              <Image
                height={200}
                width={200}
                className="w-full h-full"
                src="/img/header/image1.png"
                alt=""
              />
            </div>
            <button
              type="button"
              className="absolute bottom-2 rounded-[6.25rem] pl-[1.25rem] pt-[0.25rem] pr-[0.25rem] pb-[0.25rem] bg-[#F58F5D] flex justify-between items-center"
            >
              <span className="text-[0.8125rem] text-white not-italic font-extrabold leading-[0.975rem] mr-[0.75rem]">
                CHỌN KÍNH THEO KHUÔN MẶT
              </span>
              <div className="bg-white rounded-full p-[0.8125rem] h-fit w-fit flex justify-center items-center">
                <div className="rotate-[321deg] ">
                  <ICArrowRight2
                    fill="#F58F5D"
                    width="1.1rem"
                    height="1.1rem"
                  />
                </div>
              </div>
            </button>
          </div>
          <div className="item-cart-seemore w-[18.66669rem] h-[19.3125rem] relative flex justify-center">
            <div className="w-[18.66669rem] h-[19.3125rem] rounded-[0.75rem] overflow-hidden">
              <Image
                height={200}
                width={200}
                className="w-full h-full"
                src="/img/header/image2.png"
                alt=""
              />
            </div>
            <button
              type="button"
              className="absolute bottom-2 rounded-[6.25rem] pl-[1.25rem] pt-[0.25rem] pr-[0.25rem] pb-[0.25rem] bg-[#F58F5D] flex justify-between items-center"
            >
              <span className="text-[0.8125rem] text-white not-italic font-extrabold leading-[0.975rem] mr-[0.75rem]">
                CHỌN KÍNH THEO KHUÔN MẶT
              </span>
              <div className="bg-white rounded-full p-[0.8125rem] h-fit w-fit flex justify-center items-center">
                <div className="rotate-[321deg] ">
                  <ICArrowRight2
                    fill="#F58F5D"
                    width="1.1rem"
                    height="1.1rem"
                  />
                </div>
              </div>
            </button>
          </div>
          <div className="item-cart-seemore w-[18.66669rem] h-[19.3125rem] relative flex justify-center">
            <div className="w-[18.66669rem] h-[19.3125rem] rounded-[0.75rem] overflow-hidden">
              <Image
                height={200}
                width={200}
                className="w-full h-full"
                src="/img/header/image3.png"
                alt=""
              />
            </div>
            <button
              type="button"
              className="absolute bottom-2 rounded-[6.25rem] pl-[1.25rem] pt-[0.25rem] pr-[0.25rem] pb-[0.25rem] bg-[#F58F5D] flex justify-between items-center"
            >
              <span className="text-[0.8125rem] text-white not-italic font-extrabold leading-[0.975rem] mr-[0.75rem]">
                CHỌN KÍNH THEO KHUÔN MẶT
              </span>
              <div className="bg-white rounded-full p-[0.8125rem] h-fit w-fit flex justify-center items-center">
                <div className="rotate-[321deg] ">
                  <ICArrowRight2
                    fill="#F58F5D"
                    width="1.1rem"
                    height="1.1rem"
                  />
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </HoverCardContent>
  );
}

export default DropdownSeeMoreHeader;
