"use client";

import { Card } from "@/components/Card";
import datas from "@/app/datas.json";

export default function Home() {
  return (

    <div className="max-w-[1039px] mx-auto flex gap-[20px] pb-[100px] pt-[52px]">
      <div className="flex-1 grid grid-cols-4 gap-x-[21px] gap-y-12">
        {datas.map((cardItems, index) => (
          <Card cardItems={cardItems} key={index} />
        ))}
      </div>
    </div>
  )
}