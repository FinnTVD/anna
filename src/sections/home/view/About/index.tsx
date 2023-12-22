'use client'
import { ArrowTopRightActive } from '@/app/icons'
import SliceAbout from '@/sections/home/view/About/Slide'
import React, { useEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

interface AboutHomeType {
  title: string;
  description: string;
  info: { image: string, title: string, location: string }[]
}
interface IpropAbout {
  dataAbout: AboutHomeType
}
const AboutHome = ({dataAbout}:IpropAbout) => {
  const phrase = "Được thành lập từ năm 2015, trải qua hơn 8 năm phát triển kính mắt Anna đã, đang và sẽ chiếm vị trí không thể thiếu đối với các bạn trẻ. Với quy mô trên toàn quốc, Anna sẽ tiếp tục mở rộng thêm chi nhánh để mang những sản phẩm chất lượng đến tay người dùng";
  let refs = useRef([]);
  const body = useRef(null);

  const container = useRef(null);

  useEffect( () => {
    gsap.registerPlugin(ScrollTrigger);
    createAnimation();
  }, [])

  const createAnimation = () => {
      gsap.to(refs.current, {
        scrollTrigger: {
            trigger: container.current,
            scrub: true,
            start: `-100% top`,
            pin: ".pin",
            end: `+=${window.innerHeight / 1.5}`,
            markers:true,
        },
        opacity: 1,
        ease: "none",
        stagger: 0.1
    })
  }

  const splitWords = (phrase: string) => {
    let content: any = [];
    phrase?.split(" ").forEach((word, i) => {
      const letters = splitLetters(word);
      content.push(<p key={word + "_" + i}>{letters}</p>)
    })
    return content
  }

  const splitLetters = (word: string) => {
    let letters: any = []
    word.split("").forEach((letter: any, i: string) => {
      letters.push(<span key={letter + "_" + i} ref={el => { refs.current.push(el) }}>{letter}</span>)
    })
    return letters;
  }
  return (
    <div className="about p-12 sm:p-24 flex justify-between flex-wrap">
      <div className="w-full md:w-1/2 px-4 pt-10">
        <h4 className="text-white text-[64px] font-black uppercase">{dataAbout?.title}</h4>
        {/* <div className="text-[45px] text-white">
          
        </div>
        <div className="text-[45px] text-white">
          Với quy mô trên toàn quốc, Anna sẽ tiếp tục mở rộng thêm chi nhánh để mang những sản phẩm chất lượng đến tay người dùng
        </div> */}
        <div ref={container} className="about-card-content">
          <div ref={body} className="about-content">
            {
              splitWords(dataAbout?.description)
            }
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 px-4 pt-10">
        <SliceAbout dataInfo={dataAbout?.info}/>
        <div className="search-about-slide flex justify-between items-center px-[1.25rem] py-[0.5rem] bg-orange-400 rounded-[3.125rem] max-sm:py-[0.38rem] max-sm:px-[0.75rem] max-sm:h-[1.875rem] max-sm:rounded-[2.5rem] border-[1px] border-[#55D5D2]">
          <p className="text-[1.5rem] font-[850] text-white max-sm:text-[0.875rem] max-sm:leading-[1.1375rem] max-sm:text-[#55D5D2]">
            TÌM KIẾM CỬA HÀNG GẦN BẠN
          </p>
          <div className="arrow-about-slide p-[0.5rem] bg-white rounded-[50px] justify-start items-center gap-2.5 inline-flex">
            <ArrowTopRightActive />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutHome