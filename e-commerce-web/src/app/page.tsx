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
      `http://localhost:4000/products?fromDate=undefined&toDate=undefined`
    );
    const data = await response.json();
    setProducts(data);
  };

  // useEffect(() => {
  //   if (!api) {
  //     return;
  //   }
  useEffect(() => {
    loadProduct();
    console.log(products);
  }, []);

  //   setCount(api.scrollSnapList().length);
  //   setCurrent(api.selectedScrollSnap() + 1);

  //   api.on("select", () => {
  //     setCurrent(api.selectedScrollSnap() + 1);
  //   });
  // }, [api]);
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
      <div>
        {/* {product.map(
          (product: ProductType, index) =>
            product &&
            product.images.length && (
              <div>
                <Image
                  src={product.images[0]}
                  width={100}
                  height={100}
                  alt="a"
                  className="w-full max-h-[446px] rounded-2xl object-cover"
                />
              </div>
            )
        )} */}
      </div>
      <div className="grid">
        <Card cardItems={firstProduct} />

        <div className="flex-1 grid grid-cols-4 gap-x-[21px] gap-y-12">
          {otherProducs.map(
            (cardItems: ProductType, index) =>
              cardItems &&
              index < 18 && (
                <div
                  key={index + cardItems.price}
                  className={`object-cover ${
                    index == 6 ? " col-start-3 col-span-2 row-span-2" : ""
                  } ${index == 7 ? " col-start-1 col-span-2 row-span-2" : ""}`}
                >
                  <Card cardItems={cardItems} />
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
}
