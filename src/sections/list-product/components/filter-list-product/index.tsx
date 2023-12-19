"use client";

import { Checkbox } from "@/components/ui/checkbox";
import "./style.css";

export default function FilterListProduct() {
  const listMaterial = [
    {
      id: 1,
      value: "Acetate",
    },
    {
      id: 2,
      value: "Kim loại",
    },
    {
      id: 3,
      value: "Nhựa",
    },
    {
      id: 4,
      value: "Nhựa Dẻo",
    },
  ];
  const listShape = [
    {
      id: 1,
      label: "Browline",
    },
    {
      id: 1,
      label: "Hình vuông",
    },
    {
      id: 1,
      label: "Mắt mèo",
    },
    {
      id: 1,
      label: "Oval",
    },
  ];
  const listTrademark = [
    {
      id: 1,
      label: "Chemi",
    },
    {
      id: 1,
      label: "Elements",
    },
    {
      id: 1,
      label: "Essilor",
    },
    {
      id: 1,
      label: "Hoga",
    },
    {
      id: 1,
      label: "Thailand",
    },
  ];
  const listFeature = [
    {
      id: 1,
      label: "Đổi màu",
    },
    {
      id: 1,
      label: "Lọc ánh sáng xanh",
    },
    {
      id: 1,
      label: "Râm cận",
    },
    {
      id: 1,
      label: "Siêu mỏng",
    },
    {
      id: 1,
      label: "Tròng kính phổ thông",
    },
  ];
  const listPrice = [
    {
      id: 1,
      label: "100.000đ — 200.000đ",
    },
    {
      id: 1,
      label: "200.000đ — 300.000đ",
    },
    {
      id: 1,
      label: "300.000đ — 500.000đ",
    },
    {
      id: 1,
      label: "500.000đ — 10.000.000đ",
    },
  ];

  function ItemProduct() {
    return (
      <div>
        <div>
          <img
            src="https://kinhmatanna.com/wp-content/uploads/2022/07/kinhmatanna-20201215191522-300x300.jpg"
            alt=""
          />
          <div>color</div>
        </div>
        <h3>title</h3>
        <span>price</span>
      </div>
    );
  }

  const onChange = (checked: boolean, value: any): void => {
    console.log("check", checked);
    console.log("value", value);
  };
  return (
    <div className="filter-list-product-container">
      <div className="flex">
        <div className="w-[13.875rem]">
          <h3 className="title-filter">Chất liệu</h3>
          {listMaterial.map((item, index) => (
            <div key={index} className="flex items-center">
              <Checkbox
                onCheckedChange={(value: boolean) =>
                  onChange(value, item.value)
                }
                id="1"
                className="border-[#ccc] border-[1px]"
              />
              <span className="value-item-checkbox ">{item.value}</span>
            </div>
          ))}

          <h3 className="title-filter">Hình dáng</h3>
          {listShape.map((item, index) => (
            <div key={index} className="flex items-center">
              <Checkbox
                onCheckedChange={(value: boolean) =>
                  onChange(value, item.label)
                }
                id="1"
                className="border-[#ccc] border-[1px]"
              />
              <span className="value-item-checkbox">{item.label}</span>
            </div>
          ))}

          <h3 className="title-filter">Thương hiệu</h3>
          {listTrademark.map((item, index) => (
            <div key={index} className="flex items-center">
              <Checkbox
                onCheckedChange={(value: boolean) =>
                  onChange(value, item.label)
                }
                id="1"
                className="border-[#ccc] border-[1px]"
              />
              <span className="value-item-checkbox">{item.label}</span>
            </div>
          ))}

          <h3 className="title-filter">Tính năng</h3>
          {listFeature.map((item, index) => (
            <div key={index} className="flex items-center">
              <Checkbox
                onCheckedChange={(value: boolean) =>
                  onChange(value, item.label)
                }
                id="1"
                className="border-[#ccc] border-[1px]"
              />
              <span className="value-item-checkbox">{item.label}</span>
            </div>
          ))}

          <h3 className="title-filter">Khoảng giá</h3>
          {listPrice.map((item, index) => (
            <div key={index} className="flex items-center">
              <Checkbox
                onCheckedChange={(value: boolean) =>
                  onChange(value, item.label)
                }
                id="1"
                className="border-[#ccc] border-[1px]"
              />
              <span className="value-item-checkbox">{item.label}</span>
            </div>
          ))}
        </div>
        <div className="flex grow">
          <ItemProduct />
        </div>
      </div>
    </div>
  );
}
