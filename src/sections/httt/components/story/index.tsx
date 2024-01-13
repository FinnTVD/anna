import ICArrowLeft from '@/components/Icons/ICArrowLeft';
import ICArrowRight from '@/components/Icons/ICArrowRight';
import { Button } from '@/components/ui/button';
import ListStory from '@/sections/httt/components/story/Slide';
import './style.css'
const Story = () => {
  return (
    <div className="pt-[75rem] md:pt-[6.56rem]">
      <div className="w-[87.5rem] mx-auto">
        <div className="flex justify-between items-center">
          <h3
            className="text-[#7BD7D6] font-bold text-[7.46667rem] md:text-[3.5rem]"
            data-aos="fade-up"
          >
            Những Câu Chuyện Tử Tế
          </h3>
          <div className="hidden md:flex items-center">
            <Button className="bg-white h-[53px] border border-[#414141] rounded-full mr-3">
              <ICArrowLeft />
            </Button>
            <Button className="bg-white h-[53px] border border-[#414141] rounded-full ml-3">
              <ICArrowRight />
            </Button>
          </div>
        </div>
      </div>
      <div className="pt-[3rem] card-slide ml-auto">
        <ListStory />
      </div>
    </div>
  );
};

export default Story;
