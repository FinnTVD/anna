import { Button } from '@/components/ui/button';
import PlaceItem from './place-item';
import { MoveRight } from 'lucide-react';

const spanCol = [1, 1, 3, 2, 1, 2];

const RecentPlaces = ({ products }: any) => {
  return (
    <section className="block-section">
      <div className="container">
        <div className="mt-[15px] mb-[50px]">
          <h2 className="text-primary text-center opacity-80 text-[36px] font-light ">
            Recent Places
          </h2>
          <h3 className="text-foreground text-center opacity-60 text-base mb-[15px] mt-[10px]">
            Fusce eu mollis dui, varius convallis mauris. Nam dictum id
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-[30px]">
          {products?.map((item: any, index: number) => {
            const product = item?.attributes
            console.log({product: product?.image?.data?.attributes});
            
            return (
            <div
              key={item?.id}
              className={`md:col-span-${spanCol[index % 6]}`}
            >
              <PlaceItem
                // priceText={`Average Price: $${
                //   (product?.price * product?.discountPercentage) / 100
                // } - $${product?.price}`}
                priceText={`Average Price: $${product?.displayPrice}`}
                category={product?.category?.data?.attributes?.name}
                name={product?.name}
                address={product?.address}
                src={product?.image?.data?.attributes?.formats?.medium?.url || product?.image?.data?.attributes?.url}
                verified
                top
                slug={product?.slug}
              />
            </div>
          )})}
        </div>

        {/* View All */}
        <div className="w-full flex justify-center items-center pt-[30px]">
          <a className="border-2 rounded-full font-bold px-3 py-[6px] hover:bg-transparent hover:border-[#0000004d] flex items-center cursor-pointer">
            <span className="text-xs uppercase mr-2 text-primary">
              View all listings
            </span>
            <MoveRight strokeWidth={0.5} className="text-primary" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default RecentPlaces;
