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
  <div className="bg-[#F7F7F8]"> 
  <div className="w-[374px] h-[185px] bg-white top-[168px] px-[32px] py-[56px]">
    Захиалга амжилттай баталгаажлаа.
  </div>

  </div>
  );
}
