"use client";

import { Card } from "@/components/Card";
import datas from "@/app/datas.json";
import Image from "next/image";

import * as React from "react";
import { Input } from "postcss";

export default function Home() {
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  const [counting, setCounting] = React.useState(0);

  return (
    <div className="max-w-[1040px] mx-auto pt-[52px] pb-[100px]">
      <div className="w-[256px] h-[32px] left-[635px] flex items-center justify-center">
        <div className="h-[32px] w-[32px] rounded-full bg-blue-500 text-center items-center text-[#09090B]">
          1
        </div>
        <div className="w-[80px] h-[1px] bg-black top-7"></div>
        <div className="h-[32px] w-[32px] rounded-full bg-slate-200 text-center items-center text-[#09090B]">
          2
        </div>
        <div className="w-[80px] h-[1px] bg-black top-7"></div>
        <div className="h-[32px] w-[32px] rounded-full bg-slate-200 text-center items-center text-[#09090B]">
          3
        </div>
      </div>
      <div className="w-[638px] h-[664px] rounded-2xl bg-pink-200 p-[32px]">
        <div className="text-xl font-bold">1. Сагс (setCounting)</div>
        <div className="flex justify-between">
          <div> Нийт төлөх дүн: </div>
          <div className="font-bold">price*quantity</div>
        </div>
        <div className="w-[175px] h-[36px] rounded-2xl bg-[#2563EB] text-center px-[36px] py-[8px] text-[14px] text-white  ">
          {" "}
          Худалдан авах
        </div>
      </div>

      <div className="w-[1040px] h-[678px] flex gap-[20px] bg-blue-100  ">
        <div className="w-[333px] h-[448px] rounded-2xl bg-pink-100">Сагс</div>
        <div className="w-[687px] h-[678px] bg-slate-200 rounded-2xl gap-[24px] p-[32px]">
          <div className=" text-[#09090B]">2. Хүргэлтийн мэдээлэл оруулах</div>
          <div className="w-[623px] h-[478px] gap-[24px]">
            <div className="h-[50px]">
              <div>Овог</div>
              <div>
                <Input type="email" placeholder="Email" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="mx-auto max-w-xs">
        <Carousel setApi={setApi} className="w-full max-w-xs">
          <CarouselContent>
            <div>  
              {datas.({ length: 5 }).map((cardItems, index) => (
                <Card cardItems={cardItems} key={index + cardItems.price} />
              ))}
            </div>
          </CarouselContent>
        </Carousel>
      </div> */}
      {/* <div className="mb-[20px] ">
        <Image
          className=" rounded-lg object-cover w-[1040px] h-[446px] "
          width={1040}
          height={446}
          src={"/Shirt.png"}
          alt="item"
        />
        <div>{datas[0].title}</div>
      </div>
      <div className="grid">
        <div className="flex-1 grid grid-cols-4 gap-x-[21px] gap-y-12">
          {datas.map(
            (cardItems, index) =>
              index < 18 && (
                <div
                  className={`${
                    index == 6 ? " col-start-3 col-span-2 row-span-2" : ""
                  } ${index == 7 ? " col-start-1 col-span-2 row-span-2" : ""}`}
                >
                  <Card cardItems={cardItems} key={index + cardItems.price} />
                </div>
              )
          )}
        </div>
      </div> */}
    </div>
  );
}
