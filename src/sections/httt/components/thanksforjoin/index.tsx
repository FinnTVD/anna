import ICArrowLeft from '@/components/Icons/ICArrowLeft';
import ICArrowRight from '@/components/Icons/ICArrowRight';
import { Button } from '@/components/ui/button';
import ListPeople from '@/sections/httt/components/thanksforjoin/Slide';

const ThanksForJoin = () => {
  return (
    <div className="w-[87.5rem] mx-auto pt-[6.56rem]">
      <div className="flex justify-between items-center">
        <h3
          className="text-[#7BD7D6] font-bold text-[7.46667rem] md:text-[3.5rem]"
          data-aos="fade-up"
        >
          Cảm ơn sự tham gia
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
      <div className="pt-2.94rem">
        <ListPeople />
      </div>
    </div>
  );
};

export default ThanksForJoin;
