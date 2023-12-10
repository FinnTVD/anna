import { Input } from '@/components/ui/input';
import ICArrowTopLeft from '@/components/Icons/ICArrowTopLeft';
import './style.css';
import ICFacebookFooter from '@/components/Icons/ICFacebookFooter';
import ICInstagramFooter from '@/components/Icons/ICInstagramFooter';
import ICShopeeFooter from '@/components/Icons/ICShoppeeFooter';
import ICTiktokFooter from '@/components/Icons/ICTiktokFooter';
import Image from 'next/image';

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

  const listProduct = [
    {
      title: 'Gọng kính',
    },
    {
      title: 'Tròng kính',
    },
    {
      title: 'Kính râm',
    },
    {
      title: 'Phụ kiện',
    },
  ];

  const listContact = [
    {
      title: '1900 0359',
    },
    {
      title: 'kinhmatanna.com',
    },
    {
      title: 'marketing@kinhmatanna.com',
    },
  ];
  const listPolicy = [
    {
      title: 'Hình thức thanh toán',
    },
    {
      title: 'Chính sách giao hàng',
    },
    {
      title: 'Chính sách bảo hành',
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
          <Image src="data:image/jpeg;base64,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" />
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
        <div className="footer-right">
          <div className="footer-info-row">
            <div className="footer-info-row-left">
              <p className="title">SẢN PHẨM</p>
              <ul>
                {listProduct.map((item: any, index) => (
                  <li
                    key={index}
                    className="text-white font-extrabold not-italic leading-6"
                  >
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-info-row-right">
              <p className="title">THÔNG TIN LIÊN HỆ</p>
              <ul>
                {listProduct.map((item: any, index) => (
                  <li
                    key={index}
                    className="text-white font-extrabold not-italic leading-6"
                  >
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="footer-info-row">
            <div className="footer-info-row-left">
              <p className="title">CHÍNH SÁCH MUA HÀNG</p>
              <ul>
                {listProduct.map((item: any, index) => (
                  <li
                    key={index}
                    className="text-white font-extrabold not-italic leading-6"
                  >
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-info-row-right">
              <h2 className="font-extrabold text-xs not-italic leading-4 text-[#CAF2F1]">
                sssss
              </h2>
              <img src="/image/footer/logoSaleNoti.png" alt="" />
              <img src="/image/footer/protected.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
