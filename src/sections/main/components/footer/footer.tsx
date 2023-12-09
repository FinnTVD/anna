import { Input } from '@/components/ui/input';
import ICArrowTopLeft from '@/components/Icons/ICArrowTopLeft';
import './style.css';
import ICFacebookFooter from '@/components/Icons/ICFacebookFooter';
import ICInstagramFooter from '@/components/Icons/ICInstagramFooter';
import ICShopeeFooter from '@/components/Icons/ICShoppeeFooter';
import ICTiktokFooter from '@/components/Icons/ICTiktokFooter';

function Footer() {
  const listIcon = [
    {
      icon: <ICFacebookFooter />,
    },
    {
      icon: <ICInstagramFooter />,
    },
    {
      icon: <ICTiktokFooter />,
    },
    {
      icon: <ICShopeeFooter />,
    },
  ];
  return (
    <div className="footer-layout-main flex justify-between bg-[#55D5D2] py-[3.12rem] border-t px-[6.25rem]">
      <div className="flex justify-between w-full">
        <div className="">
          <h3 className="font-black text-[5.625rem] text-white leading-[6.1875rem]">
            ANNA
          </h3>
          <h4 className="font-black leading-[3.3rem]  text-[3rem] text-white">
            KÍNH MẮT CỦA SỰ TỬ TẾ
          </h4>
          <p className="mt-8 mb-3 font-bold leading-[1.5rem] text-[#FFF] text-[1rem] not-italic ">
            Đăng kí để nhận tin mới nhất
          </p>
          <div className="relative">
            <Input
              className="h-[3.4rem] input-email placeholder-[#fff] input-search border-0 rounded-[6.25rem]  bg-[#ffffff80]"
              _placeholder={{ fontWeight: 400 }}
              type="text"
              placeholder="Để lại email của bạn"
            />
            <div className="absolute right-2 top-[17%] bg-white w-[2.29981rem] h-[2.29981rem] rounded-full flex items-center justify-center">
              <ICArrowTopLeft />
            </div>
          </div>
          <div className="flex mt-[2.5rem]">
            {listIcon.map((item, index) => (
              <div key={index} className="mr-[2rem]">
                {item.icon}
              </div>
            ))}
          </div>
        </div>
        <div className="flex">
          <div>
            <p>ssss</p>
            <ul>
              <li>ss</li>
            </ul>
            <p>ssss</p>
            <ul>
              <li>ss</li>
            </ul>
          </div>
          <div>
            <p>ssss</p>
            <ul>
              <li>ss</li>
            </ul>
            <h2>sssss</h2>
            <img src="/image/footer/logoSaleNoti.png" alt="" />
            <img src="/image/footer/protected.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
