"use client";

import { Card, ProductType } from "@/components/Card";

import Image from "next/image";
import datas from "./datas.json";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

import { BasketCard } from "@/components/BasketCard";

import { SidebarCard } from "@/components/SidebarCard";
import { use, useEffect, useState } from "react";

export default function Home() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState<ProductType[]>([]);

  const [firstProduct, ...otherProducs] = products;

  const loadProduct = async () => {
    const response = await fetch(
      `http://localhost:4000/products`
    );
    const data = await response.json();
    setProducts(data);
  };

  useEffect(() => {
    loadProduct();
  }, []);

  return (
    <div className="max-w-[1040px] mx-auto pt-[52px] pb-[100px]">
      <div>
        <div>
          <div className="max-w-[1040px] mx-auto ">
            <div className="mb-[20px] relative ">
              <Image
                className=" rounded-lg object-cover w-[1040px] h-[446px] relative  "
                width={1040}
                height={446}
                src={"/Shirt.png"}
                alt="item"
              />
              <div className="flex flex-col gap-1 absolute bottom-[32px] left-[32px]">
                <div className="text-[18px]">{firstProduct?.productName} </div>
                <div className="font-bold text-[36px]">
                  {firstProduct?.price}{" "}
                </div>
                {/* <div>{datas[0].title}</div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid">
        <div className="flex-1 grid grid-cols-4 gap-x-[21px] gap-y-12">
          {otherProducs.map(
            (cardItems: ProductType, index) =>
              cardItems &&
              index < 18 && (
                <div
                  key={index + cardItems.price}
                  className={` ${
                    index == 6 ? " col-start-3 col-span-2 row-span-2" : ""
                  } ${index == 7 ? " col-start-1 col-span-2 row-span-2" : ""}`}
                >
                  <Card index={index} cardItems={cardItems} />
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
}
