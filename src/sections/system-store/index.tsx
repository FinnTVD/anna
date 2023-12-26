"use client"
import { Select, SelectContent, SelectGroup, SelectItem } from '@/components/ui/select'
import ItemStore from '@/sections/system-store/ItemStore'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import './style.css'
import SectionHome from '@/sections/home/view/SectionHome'

const mockData = {
  link1: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.0122915661586!2d105.38401327584212!3d21.072171286285084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313460be67e9d923%3A0x931c62b2c0387494!2zVGhpw6puIFPGoW4gU3Xhu5FpIE5nw6AsIFbDom4gSMOyYSwgQmEgVsOsLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1703481018095!5m2!1svi!2s",
  link2: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.804718437435!2d105.73897487584011!3d20.96035599012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3134533c20016423%3A0x9973b003daef8451!2sHH2A%20xu%C3%A2n%20mai%20complex!5e0!3m2!1svi!2s!4v1703481268016!5m2!1svi!2s"
}

const SystemStore = () => {
  const [checkLocate, setCheckLocate] = useState({
    index: 0,
    link: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14896.247782127793!2d105.67005571128749!3d21.030207268424306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313456ae90ef0e6f%3A0x60aff99e0dc25bd8!2zxJDhuq9jIFPhu58sIEhvw6BpIMSQ4bupYywgSMOgIE7hu5lpLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1703473136093!5m2!1svi!2s'
  });

  return (
    <div>
      <div className="md:max-w-[83.75rem] py-24 md:py-12 px-[5rem] md:px-0 m-auto">
        <h4 className="text-black pt-8 md:pt-4 text-[4.5rem] md:text-[2.25rem] font-semibold">DANH SÁCH ĐẠI LÝ KÍNH MẮT ANNA</h4>
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/3">

            <div className="flex justify-between md:flex-nowrap gap-12 md:gap-3 p-8 md:p-4 bg-[#fdcc0c] h-[13.375rem] md:h-[4.375rem]">
              <div className='w-full select-system'>
                <Select
                  // onValueChange={field.onChange}
                  defaultValue={'blueberry'}
                >
                  <SelectContent className=" w-full bg-blue">
                    <SelectGroup defaultValue={"blueberry"}>
                      <SelectItem value="apple">Apple</SelectItem>
                      <SelectItem value="banana">Banana</SelectItem>
                      <SelectItem value="blueberry">Blueberry</SelectItem>
                      <SelectItem value="grapes">Grapes</SelectItem>
                      <SelectItem value="pineapple">Pineapple</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className='w-full select-system'>
                <Select
                  // onValueChange={field.onChange}
                  defaultValue={'blueberry'}
                >
                  <SelectContent className=" w-full bg-blue">
                    <SelectGroup defaultValue={"blueberry"}>
                      <SelectItem value="apple">Apple</SelectItem>
                      <SelectItem value="banana">Banana</SelectItem>
                      <SelectItem value="blueberry">Blueberry</SelectItem>
                      <SelectItem value="grapes">Grapes</SelectItem>
                      <SelectItem value="pineapple">Pineapple</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="max-h-[80rem] md:max-h-[35rem] overflow-x-auto	style-scroll">
              <ItemStore setCheckLocate={setCheckLocate} checkLocate={checkLocate} index={1} link={mockData.link1} />
              <ItemStore setCheckLocate={setCheckLocate} checkLocate={checkLocate} index={2} link={mockData.link2} />
              <ItemStore setCheckLocate={setCheckLocate} checkLocate={checkLocate} index={3} link={mockData.link1} />
              <ItemStore setCheckLocate={setCheckLocate} checkLocate={checkLocate} index={4} link={mockData.link1} />
              <ItemStore setCheckLocate={setCheckLocate} checkLocate={checkLocate} index={5} link={mockData.link2} />
              <ItemStore setCheckLocate={setCheckLocate} checkLocate={checkLocate} index={6} link={mockData.link1} />
            </div>

          </div>
          <div className="w-full md:w-2/3">
            <iframe className="w-full" src={checkLocate?.link} width="600" height="600" loading="lazy"></iframe>
          </div>
        </div>
      </div>
      <SectionHome />
    </div>
  )
}

export default SystemStore