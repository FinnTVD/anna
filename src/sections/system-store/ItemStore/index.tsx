import React, { Dispatch, SetStateAction } from 'react'

interface IPropsItem {
  index: number
  checkLocate: { index: number; link: string; };
  link: string;
  setCheckLocate: Dispatch<SetStateAction<{ index: number; link: string; }>>;
}
const ItemStore = ({index, setCheckLocate, checkLocate, link}: IPropsItem) => {
  const handleChangeMap = () => {
    setCheckLocate({
      index:index,
      link: link
    })
  }
  return (
    <div className={`${index === checkLocate?.index ? 'bg-[#f5f5f5]' : ''} p-12 md:p-4`} onClick={handleChangeMap}>
      <h4 className="text-black text-[3.5rem] md:text-xl font-semibold">VIẾT BÌNH LUẬN</h4>
      <ul>
        <li className="text-[2.75rem] md:text-base">224 Nam Kỳ Khởi Nghĩa, Tp Mỹ Tho, Tỉnh Tiền Giang</li>
        <li className="text-[2.75rem] md:text-base">0987654321</li>
        <li className="text-[2.75rem] md:text-base">09:00 - 21:00</li>
        <li className="text-[2.75rem] md:text-base">Gọi điện</li>
      </ul>
    </div>
  )
}

export default ItemStore