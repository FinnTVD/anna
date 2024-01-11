import Link from 'next/link';
import React, { Dispatch, SetStateAction } from 'react';

interface IPropsItem {
  dataSystem: any;
  index: number;
  checkLocate: { index: number; link: string };
  setCheckLocate: Dispatch<SetStateAction<{ index: number; link: string }>>;
}
function ItemStore({
  dataSystem,
  index,
  setCheckLocate,
  checkLocate,
}: IPropsItem) {
  const handleChangeMap = () => {
    setCheckLocate({
      index: index,
      link: dataSystem?.emble[0],
    });
  };
  return (
    <div
      role="button"
      className={`${
        index === checkLocate?.index ? 'bg-[#f5f5f5]' : ''
      } p-12 md:p-4`}
      onClick={handleChangeMap}
    >
      <h4 className="text-black text-[3.5rem] md:text-xl font-semibold">
        {dataSystem?.title}
      </h4>
      <ul>
        <li className="text-[2.75rem] md:text-base">
          {dataSystem?.address[0]}
        </li>
        <li className="text-[2.75rem] md:text-base">{dataSystem?.phone}</li>
        <li className="text-[2.75rem] md:text-base">09:00 - 21:00</li>
        <li className="text-[2.75rem] md:text-base">
          <Link href={`tel:${dataSystem?.phone}`} className="text-[#007bff]">
            Gọi điện
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default ItemStore;
