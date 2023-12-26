import SectionHome from '@/sections/home/view/SectionHome';
import NewCollection from '@/sections/home/view/CollectNew';
import Feature from '@/sections/home/view/Feature';
import FlashSale from '@/sections/home/view/FlashSale';
import './style.css';
import AboutHome from '@/sections/home/view/About';
import Social from '@/sections/home/view/Social';
import SliceSocial from '@/sections/home/view/Social/Slice';
import Blog from '@/sections/home/view/Blog';
import ActionHome from '@/sections/home/view/Action';
import { fetchDataRest } from '@/lib/fetch-data-rest';
import BannerHome from '@/sections/home/view/Banner';

const Home = async () => {
  const dataHome = await fetchDataRest('GET', 'acf/v3/posts/334');
  const dataProduct = await fetchDataRest('GET', 'custom/v1/products');

  return (
    <div className="min-h-full flex flex-col">
      <div className="banner">
        <BannerHome dataBanner={dataHome?.acf?.banner} />
      </div>
      <FlashSale
        smallBanner1={dataHome?.acf?.small_banner_1}
        smallBanner2={dataHome?.acf?.small_banner_1}
        dataProduct={dataProduct}
      />
      <NewCollection />
      <SectionHome />
      <Feature dataFeature={dataHome?.acf?.for_you[0]} />
      <AboutHome dataAbout={dataHome?.acf?.about[0]} />
      <Social />
      <SliceSocial />
      <Blog />
      <ActionHome dataTrip={dataHome?.acf?.trip[0]} />
    </div>
  );
};

export default Home;
