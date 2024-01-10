import * as React from 'react';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import map from 'lodash.map';
import { IItemCart } from '@/types/types-general';

interface IProps {
  dataItemCart?: IItemCart;
  setListProductChangeAmount: Dispatch<SetStateAction<IItemCart[]>>;
  listProductChangeAmount: IItemCart[];
}
export function InputChangeAmount(props: IProps): React.JSX.Element {
  const { dataItemCart, setListProductChangeAmount, listProductChangeAmount } =
    props;

  const [quantityItem, setQuantityItem] = useState<any>(1);

  const handleChangeQuantityItem = (quantityChange: number): void => {
    const arrayTmp = map(listProductChangeAmount, (item) => {
      const newObject = {
        ...item,
        quantity:
          item.product_id === dataItemCart?.product_id
            ? quantityChange
            : item.quantity,
      };
      return newObject;
    });

    setListProductChangeAmount(arrayTmp);
  };

  const subQuantityProduct = (): void => {
    handleChangeQuantityItem(quantityItem - 1);
    setQuantityItem(quantityItem - 1);
  };

  const addQuantityProduct = (): void => {
    handleChangeQuantityItem(quantityItem + 1);
    setQuantityItem(quantityItem + 1);
  };

  const handleOnchangeQuantity = (value: any): void => {
    const valueConvert = parseInt(
      value.target.value.replace(/[^0-9]/g, ''),
      10
    );

    const check = valueConvert;

    setQuantityItem(Number.isNaN(check) ? 1 : check);
  };

  useEffect(() => {
    setQuantityItem(dataItemCart?.quantity);
  }, [dataItemCart]);
  return (
    <div className="w-[7.3125rem] h-[3rem] text-[#44AAA8] flex justify-between items-center rounded-[2.3125rem] bg-white border-[#4DC0BD] border-[1px] max-md:w-[29.3125rem] max-md:h-[8rem] max-md:rounded-[0rem] max-md:border-[#F2F2F2] max-md:border-[2px]">
      <div
        role="button"
        onClick={quantityItem > 1 ? subQuantityProduct : undefined}
        style={{
          cursor: quantityItem > 1 ? 'pointer' : 'not-allowed',
        }}
        className="pl-[1.2rem] h-full flex items-center justify-center select-none text-[1.25rem] font-bold leading-[1.875rem] max-md:text-[4.25rem] max-md:w-[11rem] max-md:pl-[0rem] max-md:border-r-[#F2F2F2] max-md:border-r-[2px]"
      >
        -
      </div>
      <div className="quantity-product flex grow">
        <input
          type="text"
          defaultValue={dataItemCart?.quantity}
          value={quantityItem}
          onChange={(value) => handleOnchangeQuantity(value)}
          // pattern="[0-9]/g*"
          className="w-full focus:outline-none text-center text-[1rem] not-italic font-bold leading-[1.5rem]"
        />
      </div>
      <div
        onClick={
          quantityItem < (dataItemCart?.stock_quantity ?? 0)
            ? addQuantityProduct
            : undefined
        }
        role="button"
        style={{ cursor: 'pointer' }}
        className="select-none pr-[1.2rem] py-[0.8rem] text-[1.25rem] h-full flex items-center justify-center font-bold leading-[1.875rem] max-md:text-[4.25rem] max-md:w-[11rem] max-md:pr-[0rem] max-md:border-l-[#F2F2F2] max-md:border-l-[2px]"
      >
        +
      </div>
    </div>
  );
}
