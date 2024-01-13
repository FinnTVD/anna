'use client';

import 'swiper/css';
import ItemSocial from '@/sections/home/view/Social/List/Item';
import ICFacebookFooter from '@/components/Icons/ICFacebookFooter';
import ICYoutube from '@/components/Icons/ICYoutube';
import ICInstagramFooter from '@/components/Icons/ICInstagramFooter';
import IMGYoutube from '@/assets/images/youtube.png';
import IMGFacebook from '@/assets/images/facebook.png';
import IMGIg from '@/assets/images/ig.png';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ItemV2 from './ItemV2';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

function ListSocial() {
  const boxRef = useRef<any>(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.to(boxRef.current, {
        scrollTrigger: {
          trigger: boxRef.current,
          scrub: true,
          start: `bottom bottom`,
          end: `top top`,
        },
        translateX: `-${Math.abs(
          Number(boxRef.current.offsetWidth) - window.innerWidth
        )}px`,
      });
    }, boxRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div className="relative overflow-hidden h-[31.9rem]">
      <div ref={boxRef} className="flex flex-nowrap absolute top-0 left-0">
        <div className="text-[#CAF2F1] text-[8rem] md:text-[4.25rem] font-black w-[23.8rem] h-[31.9rem]">
          <ItemSocial
            img={IMGFacebook}
            icon={<ICFacebookFooter width={100} height={100} />}
            social="Facebook"
            infor="@kinhmatanna"
          />
        </div>
        <div className="text-[#CAF2F1] text-[8rem] md:text-[4.25rem] font-black w-[23.8rem] h-[31.9rem]">
          <ItemV2
            title="HÀNH TRÌNH TỬ TẾ"
            description="Chúng mình là kính mắt Anna kính mắt của sự tử tế"
          />
        </div>
        <div className="text-[#CAF2F1] text-[8rem] md:text-[4.25rem] font-black w-[23.8rem] h-[31.9rem]">
          <ItemSocial
            img={IMGIg}
            icon={<ICInstagramFooter width={100} height={100} />}
            social="Instagram"
            infor="@kinhmatanna"
          />
        </div>
        <div className="text-[#CAF2F1] text-[8rem] md:text-[4.25rem] font-black w-[23.8rem] h-[31.9rem]">
          <ItemV2
            title="HÀNH TRÌNH TỬ TẾ"
            description="Chúng mình là kính mắt Anna kính mắt của sự tử tế"
          />
        </div>
        <div className="text-[#CAF2F1] text-[8rem] md:text-[4.25rem] font-black w-[23.8rem] h-[31.9rem]">
          <ItemSocial
            img={IMGYoutube}
            icon={<ICYoutube />}
            social="Youtube"
            infor="@kinhmatanna"
          />
        </div>
        <div className="text-[#CAF2F1] text-[8rem] md:text-[4.25rem] font-black w-[23.8rem] h-[31.9rem]">
          <ItemV2
            title="HÀNH TRÌNH TỬ TẾ"
            description="Chúng mình là kính mắt Anna kính mắt của sự tử tế"
          />
        </div>
      </div>
    </div>
  );
}

export default ListSocial;
