"use client";

import { Card } from "@/components/Card";
import datas from "@/app/datas.json";
import Image from "next/image";
import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

import { BasketCard } from "@/components/BasketCard";

export default function Home() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  return (
    <div className="max-w-[1040px] mx-auto pt-[52px] pb-[100px]">
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
      <div className="mb-[20px] ">
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
      </div>
      <div className="flex">
        {datas.map(
          (cardItems, index) => 
            <div>
          <BasketCard cardItems={cardItems} key={index + cardItems.price}/>
          </div>
          )}
      </div>
    </div>
  );

}
