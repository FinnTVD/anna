import SectionHome from '@/sections/home/view/SectionHome';
import NewCollection from '@/sections/home/view/CollectNew';
import Feature from '@/sections/home/view/Feature';
import FlashSale from '@/sections/home/view/FlashSale';
import Image from 'next/image';
import './style.css';
import AboutHome from '@/sections/home/view/About';
import Social from '@/sections/home/view/Social';
import SliceSocial from '@/sections/home/view/Social/Slice';
import Blog from '@/sections/home/view/Blog';
import ActionHome from '@/sections/home/view/Action';
import { fetchDataAcf } from '@/lib/fetch-data-rest';
import BannerHome from '@/sections/home/view/Banner';

const Home = async () => {
  const dataHome = await fetchDataAcf('GET', 'posts/334');

  return (
    <div className="min-h-full flex flex-col">
      <div className="banner">
        <BannerHome dataBanner={dataHome?.acf?.banner} />
      </div>
      <FlashSale
        smallBanner1={dataHome?.acf?.small_banner_1}
        smallBanner2={dataHome?.acf?.small_banner_1}
      />
      <NewCollection />
      <SectionHome />
      <Feature dataFeature={dataHome?.acf?.for_you[0]} />
      <AboutHome dataAbout={dataHome?.acf?.about[0]} />
      <Social />
      <SliceSocial />
      <Blog />
      <ActionHome />
    </div>
  );
};

export default Home;
