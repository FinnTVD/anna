// eslint-disable-next-line import/no-cycle
import Payment from '@/sections/payment';
import map from 'lodash.map';

export interface IItemProvinceConvert {
  value: string;
  label: string;
}
const PaymentPage = async () => {
  // GET API city in Vietnam
  const listProvince = await fetch('https://provinces.open-api.vn/api/p/').then(
    (res) => {
      return res.json();
    }
  );

  const listProvinceConvert: IItemProvinceConvert[] = [];

  map(listProvince, (item) => {
    listProvinceConvert.push({
      value: item.code.toString(),
      label: item.name,
    });
  });

  return <Payment listProvinceConvert={listProvinceConvert} />;
};

export default PaymentPage;
