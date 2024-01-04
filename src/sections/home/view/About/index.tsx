'use client';

import { ICArrowTopRightActive } from '@/components/Icons/ICArrowTopRightActive';
import ICLocation from '@/components/Icons/ICLocation2';
import SliceAbout from '@/sections/home/view/About/Slide';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

interface AboutHomeType {
  title: string;
  description: string;
  info: { image: string; title: string; location: string }[];
}
interface IPropAbout {
  dataAbout: AboutHomeType;
}
function AboutHome({ dataAbout }: IPropAbout) {
  const refs = useRef([]);
  const body = useRef(null);

  const container = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    createAnimation();
  }, []);

  const createAnimation = () => {
    gsap.to(refs.current, {
      scrollTrigger: {
        trigger: container.current,
        scrub: true,
        start: `-100% top`,
        pin: '.pin',
        end: `+=${window.innerHeight / 1.5}`,
      },
      opacity: 1,
      ease: 'none',
      stagger: 0.1,
    });
    if (window.innerWidth > 1024) {
      gsap.to('.pin-content', {
        scrollTrigger: {
          trigger: '.pin-card',
          start: '-15% top',
          end: `+=${window.innerHeight / 1.55}`,
          pin: '.pin-card',
          scrub: 2,
        },
        opacity: 1,
        y: 50,
      });
    }
  };

  const splitWords = (phrase: string) => {
    const content: any = [];
    phrase?.split(' ').forEach((word, i) => {
      const letters = splitLetters(word);
      content.push(<p key={word + '_' + i}>{letters}</p>);
    });
    return content;
  };

  const splitLetters = (word: string) => {
    const letters: any = [];
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    word.split('').forEach((letter: any, i: string) => {
      letters.push(
        <span
          key={letter + '_' + i}
          ref={(el) => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            refs.current.push(el);
          }}
        >
          {letter}
        </span>
      );
    });
    return letters;
  };
  return (
    <div className="about rounded-t-[2.25rem] -mt-[2rem]">
      <div className="pin-card !top-0 !translate-y-9 container">
        <div className="pin-content py-[6.67rem] sm:py-24 flex justify-between flex-wrap">
          <div className="w-full md:w-1/2 px-4 md:px-0 pt-10">
            <h4 className="text-white text-[12rem] md:text-[4rem] font-black uppercase">
              {dataAbout?.title}
            </h4>
            <div ref={container} className="about-card-content">
              <div ref={body} className="about-content">
                {splitWords(dataAbout?.description)}
              </div>
            </div>
          </div>
          <div className="hidden md:block w-full md:w-1/2 px-4 pt-10">
            <SliceAbout dataInfo={dataAbout?.info} />
            <div className="search-about-slide flex justify-between items-center pl-[10rem] md:pl-[2.75rem] pr-1 py-[1.25rem] md:py-[0.25rem] bg-orange-400 rounded-[26rem] md:rounded-[3.125rem] border-[1px] border-[#55D5D2]">
              <p className="text-[4rem] md:text-[1.5rem] font-[850] text-white">
                TÌM KIẾM CỬA HÀNG GẦN BẠN
              </p>
              <div className="arrow-about-slide p-[0.5rem] bg-white rounded-full justify-start items-center gap-2.5 inline-flex">
                <ICArrowTopRightActive
                  width={30}
                  height={30}
                  stroke="#F58F5D"
                  fill="#F58F5D"
                />
              </div>
            </div>
          </div>

          <div className="w-full block md:hidden pt-10 relative max-sm:pt-[16rem]">
            <div className="absolute w-full top-[4rem] pt-[2rem] pb-[6rem] search-about-slide flex justify-between items-center pl-16 md:pl-[2.75rem] pr-16 py-[1.25rem] md:py-[0.25rem] bg-orange-400 rounded-t-[4rem] border-[1px] border-[#55D5D2]">
              <p className="text-[4rem] md:text-[1.5rem] font-[850] text-white flex items-center">
                <div className="mr-12 p-[0.5rem] bg-white rounded-full">
                  <ICLocation stroke="#F58F5D" />
                </div>
                <span>Tìm cửa hàng</span>
              </p>
              <div className="rotate-45">
                <ICArrowTopRightActive
                  width={30}
                  height={30}
                  stroke="#fff"
                  fill="#fff"
                />
              </div>
            </div>
            <SliceAbout dataInfo={dataAbout?.info} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutHome;
