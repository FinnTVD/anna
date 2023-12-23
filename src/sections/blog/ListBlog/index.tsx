import Image from 'next/image'
import React from 'react'
import serviceImg from '@/assets/blogImg/Rectangle719.png'
import ICUser from '@/components/Icons/ICUser'
import ICComment from '@/components/Icons/ICComment'
import ICSchedule from '@/components/Icons/ICSchedule'

const ListBlog = () => {
  return (
    <div className="py-[6.25rem] px-[5rem] md:px-[9rem] md:py-0 flex flex-wrap md:pb-12">
      <div className="w-full md:w-1/4 px-8 md:px-4 mt-[6rem] md:mt-4">
        <div className="relative">
          <Image
            src={serviceImg}
            alt=""
            quality={80}
            width={304}
            height={302}
            className="w-full object-cover h-[80.5rem] md:h-[18.75rem]"
          />
          <div className="w-[45rem] md:w-[6rem] h-[10rem] md:h-10 flex bg-[#81C8C2] items-center p-6 md:p-2 absolute top-12 md:top-4 left-12 md:left-4">
            <ICSchedule />
            <div className=" text-white text-[3rem] md:text-sm font-normal pl-6 md:pl-2">2/3/2022</div>
          </div>
        </div>
        <div className="text-black text-[4.25rem] md:text-base font-bold py-8 md:py-4">
          Đừng bỏ lỡ địa điểm check in Giáng sinh siêu hot 2022
        </div>
        <div className="border-t border-t-neutral-700 border-opacity-20 py-[4rem] md:py-4 flex justify-between md:block">
          <div className="flex">
            <ICUser />
            <p className="pl-4 md:pl-2 text-[4.25rem] md:text-base text-black text-opacity-40">KinhMatAnna</p>
          </div>
          <div className="flex">
            <ICComment />
            <p className="pl-4 md:pl-2 text-[4.25rem] md:text-base text-black text-opacity-40">KinhMatAnna</p>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/4 px-8 md:px-4 mt-[6rem] md:mt-4">
        <div className="relative">
          <Image
            src={serviceImg}
            alt=""
            quality={80}
            width={304}
            height={302}
            className="w-full object-cover h-[80.5rem] md:h-[18.75rem]"
          />
          <div className="w-[45rem] md:w-[6rem] h-[10rem] md:h-10 flex bg-[#81C8C2] items-center p-6 md:p-2 absolute top-12 md:top-4 left-12 md:left-4">
            <ICSchedule />
            <div className=" text-white text-[3rem] md:text-sm font-normal pl-6 md:pl-2">2/3/2022</div>
          </div>
        </div>
        <div className="text-black text-[4.25rem] md:text-base font-bold py-8 md:py-4">
          Đừng bỏ lỡ địa điểm check in Giáng sinh siêu hot 2022
        </div>
        <div className="border-t border-t-neutral-700 border-opacity-20 py-[4rem] md:py-4 flex justify-between md:block">
          <div className="flex">
            <ICUser />
            <p className="pl-4 md:pl-2 text-[4.25rem] md:text-base text-black text-opacity-40">KinhMatAnna</p>
          </div>
          <div className="flex">
            <ICComment />
            <p className="pl-4 md:pl-2 text-[4.25rem] md:text-base text-black text-opacity-40">KinhMatAnna</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ListBlog