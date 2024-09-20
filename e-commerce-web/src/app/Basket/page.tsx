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
    <div className="max-w-[1040px] mx-auto pt-[52px] pb-[100px] bg-slate-50">
      <div className="">
        <div className="w-[256px] h-[32px] mx-auto flex items-center justify-center ">
          <div className="h-[32px] w-[32px] rounded-full bg-blue-500 text-center items-center text-white">
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
        <div className="w-[638px] h-[664px] rounded-2xl mx-auto p-[32px] bg-white mt-[58px]">
          <div className="text-xl font-bold mt-[24px]">1. Сагс </div>
          <div className="flex flex-col gap-[16px] mt-[16px]">
            {basketProducts.map(
              (cardItems, index) =>
                index < 3 && (
                  <div>
                    <BasketCard
                      cardItems={cardItems}
                      key={index + cardItems.price}
                    />
                  </div>
                )
            )}
          </div>
          <div className="flex justify-between mt-4">
            <div> Нийт төлөх дүн: </div>
            <div className="font-bold ">{sum}
            <div className="font-bold"></div></div>
          </div>
          <div className="justify-between flex ">
            <div className=""> .</div>
            <div className="w-[175px] h-[36px] rounded-2xl bg-[#2563EB] text-center px-[36px] py-[8px] text-[14px] text-white  mt-[24px] ">
              Худалдан авах
            </div>
          </div>
        </div>
      </div>

      {/* page 2 */}
      <div className="w-[256px] h-[32px] mx-auto flex items-center justify-center ">
        <div className="h-[32px] w-[32px] rounded-full bg-blue-500 text-center items-center text-white">
          ✓
        </div>
        <div className="w-[80px] h-[1px] bg-black top-7"></div>
        <div className="h-[32px] w-[32px] rounded-full  bg-blue-500 text-center items-center text-white">
          2
        </div>
        <div className="w-[80px] h-[1px] bg-black top-7"></div>
        <div className="h-[32px] w-[32px] rounded-full bg-slate-200 text-center items-center text-[#09090B]">
          3
        </div>
      </div>
      <div className="w-[1040px] h-[678px] flex gap-[20px] bg-blue-100  ">
        <div className="w-[333px] h-[448px] rounded-2xl bg-pink-100">Сагс</div>
        <div className="w-[687px] h-[678px] bg-slate-200 rounded-2xl gap-[24px] p-[32px]">
          <div className=" text-[#09090B]">2. Хүргэлтийн мэдээлэл оруулах</div>
          <div className="w-[623px] h-[478px] flex flex-col gap-[24px]">
            <div className="h-[50px]">
              <div>Овог:</div>
              <div>
                <Input
                  className="h-[28px] rounded-[18px]"
                  type="Овог:"
                  placeholder=""
                />
              </div>
            </div>
            <div className="h-[50px]">
              <div>Нэр:</div>
              <div>
                <Input
                  className="h-[28px] rounded-[18px]"
                  type="Овог:"
                  placeholder=""
                />
              </div>
            </div>
            <div className="h-[50px]">
              <div>Утасны дугаар:</div>
              <div>
                <Input
                  className="h-[28px] rounded-[18px]"
                  type="Овог:"
                  placeholder=""
                />
              </div>
            </div>
            <div className="h-[116px]">
              <div>Хаяг:</div>
              <div>
                <Input
                  className="h-[94px] rounded-[18px]"
                  type="Овог:"
                  placeholder=""
                />
              </div>
            </div>
            <div className="h-[50px]">
              <div>Нэмэлт мэдээлэл:</div>
              <div>
                <Input
                  className="h-[94px] rounded-[18px]"
                  type="Овог:"
                  placeholder=""
                />
                <div className="text-[#71717A]">
                  Хүргэлттэй холбоотой нэмэлт мэдээлэл үлдээгээрэй
                </div>
                <div className="flex justify-between mt-[36px]">
                  <Button className="bg-[#FFFFFF] w-[114px] h-[36px] rounded-[18px] text-black">
                    Буцах
                  </Button>
                  <Button className="bg-[#2563EB] rounded-[18px] w-[166px] h-[36px]">
                    Төлбөр төлөх
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
      <div className="w-[687px] h-[656.75px] mx-auto p-[32px] rounded-2xl flex flex-col gap-[24px] bg-green-100">
        <div>3. Төлбөр төлөлт </div>

        <Button className="bg-[#FFFFFF] w-[114px] h-[36px] rounded-[18px] text-black">
          Буцах
        </Button>
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
