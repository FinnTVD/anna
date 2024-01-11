import { Input } from '@/components/ui/input';
import ICArrowTopLeft from '@/components/Icons/ICArrowTopLeft';
import './style.css';
import ICFacebookFooter from '@/components/Icons/ICFacebookFooter';
import ICInstagramFooter from '@/components/Icons/ICInstagramFooter';
import ICShopeeFooter from '@/components/Icons/ICShoppeeFooter';
import ICTiktokFooter from '@/components/Icons/ICTiktokFooter';
import ICLogo from '@/components/Icons/ICLogo';
import ICEmail from '@/components/Icons/ICEmail';
import ICPhone from '@/components/Icons/ICPhone';
import Image from 'next/image';
import Notice from '@/assets/images/notice.png';

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
  const listIconMobile = [
    {
      icon: <ICFacebookFooter width="8.53333rem" height="8.53333rem" />,
    },
    {
      icon: <ICInstagramFooter width="8.53333rem" height="8.53333rem" />,
    },
    {
      icon: <ICTiktokFooter width="8.53333rem" height="8.53333rem" />,
    },
    {
      icon: <ICShopeeFooter width="8.53333rem" height="8.53333rem" />,
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
  const listContactMobile = [
    // {
    //   icon: <ICEmail />,
    //   title: 'marketing@kinhmatanna.com',
    //   toHref: 'mailto:marketing@kinhmatanna.com',
    // },
    {
      icon: <ICPhone />,
      title: '1900 0359',
      toHref: 'tel:19000359',
    },
    {
      icon: '',
      title: 'MST: 0108195925',
    },
  ];
  const listPolicyMobile = [
    {
      title: 'Thanh toán',
    },
    {
      title: 'Giao hàng',
    },
    {
      title: 'Bảo hành',
    },
    {
      title: 'Tìm cửa hàng',
    },
  ];
  return (
    <div className="footer-layout-main">
      <div className="footer-layout-container">
        <div className="footer-layout">
          <div className="footer-left">
            <h3 className="title-anna">ANNA</h3>
            <h4 className="description-anna lg:!w-[18.875rem]">
              THƯƠNG HIỆU KÍNH MẮT CỦA SỰ TỬ TẾ
            </h4>
            <p>Đăng kí để nhận tin mới nhất</p>
            <form className="relative input-search">
              <Input
                className="input-email outline-0 placeholder:!pl-0 lg:pl-[1.25rem] text-[1rem] font-bold leading-normal text-[#55D5D2]"
                type="text"
                placeholder="Để lại email của bạn"
              />
              <button className="icon-arrow-input">
                <ICArrowTopLeft height="2rem" width="1.99981rem" />
              </button>
              <button className="icon-arrow-input-mobile">
                <ICArrowTopLeft height="4.73333rem" width="4.73333rem" />
              </button>
            </form>
            <div className="list-icon-footer-left">
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
                <p className="title !font-bold">SẢN PHẨM</p>
                <ul>
                  {listProduct.map((item: any, index) => (
                    <li
                      key={index}
                      className="text-white text-[1.125rem] font-bold not-italic leading-6"
                    >
                      {item.title}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="footer-info-row-right">
                <p className="title !font-bold">THÔNG TIN LIÊN HỆ</p>
                <ul>
                  {listContact.map((item: any, index) => (
                    <li
                      key={index}
                      className="text-white text-[1.125rem] font-bold not-italic leading-6"
                    >
                      {item.title}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="footer-info-row mt-[2.62rem]">
              <div className="footer-info-row-left">
                <p className="title !font-bold">CHÍNH SÁCH MUA HÀNG</p>
                <ul>
                  {listPolicy.map((item: any, index) => (
                    <li
                      key={index}
                      className="text-white text-[1.125rem] font-bold not-italic leading-6"
                    >
                      {item.title}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="footer-info-row-right">
                <h2 className="font-extrabold not-italic leading-4 text-[#CAF2F1] text-[1.125rem]">
                  MST: 0108195925
                </h2>
                <Image
                  width={196}
                  height={74}
                  className="my-[0.75rem] w-[12.29306rem] h-[4.6505rem] max-md:w-[52.4504rem] max-md:h-[19.84213rem]"
                  src={Notice}
                  alt=""
                />
                <Image
                  width={132}
                  height={26}
                  className="w-[8.2715rem] h-[1.64063rem] max-md:w-[52.4504rem] max-md:h-[19.84213rem]"
                  src="/img/footer/protected.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="list-product-mobile">
            <h3>SẢN PHẨM</h3>
            <ul>
              {listProduct.map((item: any, index: number) => (
                <li key={index}>{item.title}</li>
              ))}
            </ul>
          </div>
          <div className="list-policy-mobile">
            <div className="item-left">
              <h3>CHÍNH SÁCH MUA HÀNG</h3>
              <ul>
                {listPolicyMobile.map((item: any, index: number) => (
                  <li key={index}>{item.title}</li>
                ))}
              </ul>
            </div>
            <div className="logo-mobile">
              <ICLogo width="23.46667rem" height="21.33333rem" />
            </div>
          </div>

          <div className="hidden max-md:flex text-white text-[1.125rem] font-bold not-italic leading-6 items-center mt-[2rem]">
            <div className="mr-[2rem]">
              <ICEmail />
            </div>
            <a
              href="mailto:marketing@kinhmatanna.com"
              className="text-[3.2rem] not-italic font-bold leading-[4.16rem] "
            >
              marketing@kinhmatanna.com
            </a>
          </div>
          <div className="last-row-mobile">
            <ul>
              {listContactMobile.map((item: any, index) => (
                <li
                  key={index}
                  className="text-white text-[1.125rem] font-bold not-italic leading-6"
                >
                  {item.icon && <div className="mr-[2rem]">{item.icon}</div>}

                  <a href={item.toHref}>{item.title}</a>
                </li>
              ))}
            </ul>
            <div>
              {listIconMobile.map((item, index) => (
                <div key={index} className="mr-[2rem]">
                  {item.icon}
                </div>
              ))}
            </div>
          </div>
        </div>
        <hr className="mt-[2.5rem]" />
        <div className="text-author !font-medium">
          <span>Anna © 2018 - 2023. Design by OKHUB Viet Nam</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
