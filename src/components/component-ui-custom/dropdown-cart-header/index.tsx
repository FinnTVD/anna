import { HoverCardContent } from '@/components/ui/hover-card';
import Image from 'next/image';
import { formatCurrencyVND } from '@/ultils/format-price';
import ICArrowRight2 from '@/components/Icons/ICArrowRight2';
import Link from 'next/link';
import './style.css';

interface IProps {
  onMouseLeaveTabMenu?: () => void;
}

function DropdownCartHeader(props: IProps) {
  const { onMouseLeaveTabMenu } = props;
  let listProductInCart;

  if (localStorage.getItem('listMyCart') !== null) {
    const storedData = localStorage.getItem('listMyCart') as string;
    listProductInCart = JSON.parse(storedData);
  }

  return (
    <HoverCardContent
      className="dropdown-cart-header border-none p-0 w-[25.875rem] rounded-[1.5rem] -mr-[1rem] -mt-[0.34rem]"
      side="bottom"
      align="end"
      sideOffset={6}
    >
      <div className="w-[25.875rem] bg-white px-[1.25rem] py-[1.75rem] rounded-[1.5rem] mt-[0rem]">
        <div className="flex justify-between mb-[1.5rem] pb-[1rem] border-b-2 border-[#ECECEC]">
          <div className="flex items-center">
            <span className="text-[1.25rem] not-italic font-extrabold leading-[1.5rem] mr-[0.5rem]">
              Giỏ hàng
            </span>
            <div className="h-[1.0625rem] w-[1.0625rem] rounded-full bg-[#F58F5D] flex justify-center items-center text-[0.75rem] not-italic leading-[1.125rem] font-bold">
              2
            </div>
          </div>
          <Link
            href="/cart"
            onClick={onMouseLeaveTabMenu}
            className="text-[0.75rem] not-italic font-bold leading-[1.125rem] text-[#55D5D2]"
          >
            Xem tất cả
          </Link>
        </div>
        <div>
          {listProductInCart.map((item: any, index: number) => (
            <div
              key={index}
              className="flex pb-[1.25rem] border-b-2 border-[#8258282] mb-[1.25rem]"
            >
              <Image
                height={80}
                width={80}
                className="w-[8.125rem] h-[8.125rem] rounded-[0.5rem] mr-[1rem]"
                src={item?.imageProduct ?? '/img/no_image.jpg'}
                alt=""
              />
              <div className="grow">
                <div className="h-fit w-fit py-[0.3rem] px-[0.625rem] rounded-[2.5rem] bg-[#CAF2F1] text-[0.75rem] not-italic font-bold">
                  {item.category}
                </div>
                <h3 className="mt-[0.5rem] text-[1rem] not-italic font-extrabold leading-[1.2rem]">
                  {item.nameProduct}
                </h3>
                <div className="flex items-center mt-[0.5rem]">
                  <div className="w-[0.375rem] h-[0.375rem] bg-[#55D5D2] rounded-full mr-[0.38rem]" />
                  <span className="text-[0.75rem] text-[#828282] not-italic font-bold leading-[0.9rem]">
                    Chất liệu: nhựa
                  </span>
                </div>
                <div className="flex items-center mt-[0.5rem] mb-[0.75rem]">
                  <div className="w-[0.375rem] h-[0.375rem] bg-[#55D5D2] rounded-full mr-[0.38rem]" />
                  <span className="text-[0.75rem] text-[#828282] not-italic font-bold leading-[0.9rem]">
                    Màu sắc: trắng
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="mr-[0.62rem] text-[1.125rem] text-[#55D5D2] not-italic font-extrabold leading-[1.35rem]">
                    {formatCurrencyVND(item.price.toString())}
                  </span>
                  <span className="text-[0.875rem] not-italic font-normal leading-[1.05rem] line-through">
                    {/* {formatCurrencyVND(item.salePrice.toString())} */}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Link
          href="/payment"
          onClick={onMouseLeaveTabMenu}
          className="button-link-payment w-fit rounded-[6.25rem] pl-[1.25rem] pt-[0.25rem] pr-[0.25rem] pb-[0.25rem]  flex justify-between items-center"
        >
          <p className="text-[0.8125rem] text-white not-italic font-extrabold leading-[0.975rem] mr-[0.75rem]">
            ĐI ĐẾN THANH TOÁN
          </p>
          <div className=" bg-white rounded-full p-[0.8125rem] h-fit w-fit flex justify-center items-center">
            <div className="icon-arrow-cart  ">
              <ICArrowRight2 fill="#55D5D2" width="1.1rem" height="1.1rem" />
            </div>
          </div>
        </Link>
      </div>
    </HoverCardContent>
  );
}

export default DropdownCartHeader;
