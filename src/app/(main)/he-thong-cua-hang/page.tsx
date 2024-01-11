import SystemStore from '@/sections/system-store';
import React from 'react';

const SystemStorePage = async () => {
  const listCity = await fetch('https://provinces.open-api.vn/api/p/').then(
    (res) => {
      return res.json();
    }
  );
  const listDistrict = await fetch('https://provinces.open-api.vn/api/d/').then(
    (res) => {
      return res.json();
    }
  );
  return <SystemStore listCity={listCity} listDistrict={listDistrict} />;
};

export default SystemStorePage;
