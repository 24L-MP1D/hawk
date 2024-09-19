"use client";

import { Card } from "@/components/Card";
import basketProducts from "@/app/datas.json";
import Image from "next/image";

import * as React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { BasketCard } from "@/components/BasketCard";
import { cardItems } from "@/app/Category/page";

export default function Home() {
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  const [counting, setCounting] = React.useState(0);

  let sum = 0;
  basketProducts.forEach(product => {
    sum = sum + product.price;
  })

  return (
    <div className="max-w-[1040px] mx-auto pt-[52px] pb-[100px] bg-[#F7F7F8]">
     

      {/* page 3 */}

      <div className="w-[256px] h-[32px] mx-auto flex items-center justify-center ">
        <div className="h-[32px] w-[32px] rounded-full bg-blue-500 text-center items-center text-white">
          ✓
        </div>
        <div className="w-[80px] h-[1px] bg-black top-7"></div>
        <div className="h-[32px] w-[32px] rounded-full  bg-blue-500 text-center items-center text-white">
          ✓
        </div>
        <div className="w-[80px] h-[1px] bg-black top-7"></div>
        <div className="h-[32px] w-[32px] rounded-full bg-blue-500 text-center items-center text-white">
          3
        </div>
      </div>
      <div className="w-[687px] h-[656.75px] mx-auto p-[32px] rounded-2xl flex flex-col gap-[24px] bg-white">
        <div>3. Төлбөр төлөлт </div>

        <Button className="bg-[#FFFFFF] w-[114px] h-[36px] rounded-[18px] text-black">
          Буцах
        </Button>
      </div>
      
    </div>
  );
}
