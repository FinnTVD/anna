'use client';

import { ICArrowTopRightActive } from '@/components/Icons/ICArrowTopRightActive';
import ICLocation3 from '@/components/Icons/ICLocation3';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import SliceAbout from '@/sections/home/view/About/Slide';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

interface AboutHomeType {
  title: string;
  description: string;
  info: { image: string; title: string; location: string }[];
}
interface IPropAbout {
  dataAbout: AboutHomeType;
}
gsap.registerPlugin(ScrollTrigger);

function AboutHome({ dataAbout }: IPropAbout) {
  const refs = useRef([]);
  const box = useRef(null);

  const container = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(container.current, {
        scrollTrigger: {
          trigger: refs.current,
          scrub: true,
          start: `-=500 top`,
          end: `+=500`,
        },
        y: '-30%',
      });
      gsap.to(refs.current, {
        scrollTrigger: {
          trigger: box.current,
          scrub: true,
          start: `top top`,
          end: `+=600`,
        },
        opacity: 1,
        ease: 'none',
        stagger: 0.1,
      });
      gsap.to(box.current, {
        scrollTrigger: {
          trigger: box.current,
          scrub: true,
          start: `top top`,
          end: `+=600`,
          pin: true,
          pinSpacing: true,
        },
      });
    }, box);
    return () => {
      ctx.revert();
    };
  }, []);

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
    // @ts-ignore
    word.split('').forEach((letter: any, i: string) => {
      letters.push(
        <span
          key={letter + '_' + i}
          ref={(el) => {
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
    <div
      ref={box}
      className="rounded-t-[2.25rem] -mt-[2rem] relative h-screen "
    >
      <Image
        src="/img/home/about_bg.jpg"
        width={1600}
        height={1000}
        alt="background"
        className="w-full z-[1] object-fill top-0 left-0 rounded-t-[2.25rem] h-full absolute"
      />
      <div className="container relative z-10">
        <div className="py-[6.67rem] md:py-24 flex md:pb-[9rem] justify-between flex-wrap">
          <div
            ref={container}
            className="w-full lg:w-1/2 px-4 md:px-[2rem] pt-10 about_paragraph"
          >
            <h4 className="text-white text-[8.53333rem] md:text-[4rem] font-black uppercase">
              {dataAbout?.title}
            </h4>
            <div className="about-card-content">
              <div className="about-content hidden md:block">
                {splitWords(dataAbout?.description)}
              </div>
            </div>
          </div>

          <div className="hidden md:block w-full lg:w-1/2 px-4 pt-10 relative lg:pb-[7rem]">
            <div
              id="box_q12"
              className=" md:absolute md:top-[2.5rem] w-full h-full"
            >
              <AspectRatio ratio={5 / 4}>
                <SliceAbout dataInfo={dataAbout?.info} />
                <div className="search-about-slide flex justify-between items-center pl-[10rem] md:pl-[2.75rem] pr-1 py-[1.25rem] md:py-[0.25rem] bg-orange-400 rounded-[26rem] md:rounded-[3.125rem] border-[1px] border-[#55D5D2]">
                  <p className="text-[4.48179rem] md:text-[1rem] font-extrabold text-white">
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
              </AspectRatio>
            </div>
          </div>

          <div className="w-full block md:hidden pt-10 relative max-sm:pt-[16rem]">
            <div className="absolute w-full top-[4rem] pt-[2rem] pb-[6rem] search-about-slide flex justify-between items-center pl-16 md:pl-[2.75rem] pr-16 py-[1.25rem] md:py-[0.25rem] bg-orange-400 rounded-t-[4rem] border-[1px] border-[#55D5D2]">
              <p className="text-[4rem] md:text-[1.5rem] font-extrabold text-white flex items-center">
                <div className="mr-12 p-[0.5rem] bg-white rounded-full">
                  {/* <ICLocation stroke="#F58F5D" /> */}
                  <ICLocation3 height={26} width={26} />
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
