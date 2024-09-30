"use client";

import { Card } from "@/components/Card";
import datas from "../datas.json";

import { Checkbox } from "@/components/ui/checkbox";
import { useEffect, useState } from "react";

export type filtType = {
  filt: string;
  value: string;
};
export const filters: filtType[] = [
  { filt: "Малгай", value: "Малгай" },
  { filt: "Усны сав", value: "Усны сав" },
  { filt: "T-shirt", value: "T-shirt" },
  { filt: "Hoodie", value: "Hoodie" },
  { filt: "Тее", value: "Тее" },
  { filt: "Цүнх", value: "Цүнх" },
];
export const sizes: string[] = ["Free", "S", "M", "L", "XL", "2XL", "3Xl"];
const Category = () => {
  const [cardList, setCardList] = useState([]);
  const productList = async () => {
    const response = await fetch("http://localhost:4000/products?fromDate=undefined&toDate=undefined");
    const data = await response.json();
    setCardList(data);
  };
  useEffect(() => {
    productList();
  }, []);
  return (
    <div className="max-w-[1039px] mx-auto flex gap-[20px] pb-[100px] pt-[52px]">
      <div className="max-w-[245px] w-full flex flex-col gap-12">
        <div className="flex flex-col gap-4">
          <div className="font-bold">Ангилал</div>
          {filters.map((filter) => (
            <div key={filter.filt} className="flex gap-2 items-center">
              <Checkbox />
              <div>{filter.filt}</div>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          <div className="font-bold">Хэмжээ</div>
          {sizes.map((size) => (
            <div key={size} className="flex gap-2 items-center">
              <Checkbox />
              <div>{size}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1 grid grid-cols-3 gap-x-[21px] gap-y-12">
        {cardList.map((cardItems, index) => (
          <Card cardItems={cardItems} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Category;
