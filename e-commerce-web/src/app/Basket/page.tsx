"use client";

import { Card } from "@/components/Card";
import basketProducts from "@/app/datas.json";
import Image from "next/image";
import Link from "next/link";

import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { BasketCard, shoppingCart } from "@/components/BasketCard";
import { useSearchParams } from "next/navigation";


export default function Home() {
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const [counting, setCounting] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const [uploadShoppingCart, setUploadShoppingCart] = useState<shoppingCart[]>(
    []
  );

  let sum = 0;
  uploadShoppingCart.forEach((product) => {
    sum = sum + product.price;
  });
  const getShoppingCart = async () => {
    const response = await fetch(`http://localhost:4000/ShoppingCart`);
    const data = await response.json();
    setUploadShoppingCart(data);
    console.log({data})
  };
  useEffect(() => {
    getShoppingCart();
  }, [sum]);

  return (
    <div className="bg-[#F7F7F8]">
      <div className="max-w-[1040px] mx-auto pt-[52px] pb-[100px] bg-[#F7F7F8]">
        <div className="">
          <div className="w-[256px] h-[32px] mx-auto flex items-center justify-center mb-[66px] ">
            <div className="h-[32px] w-[32px] rounded-full font-bold bg-blue-500 text-center p-[4px] text-white border-[1px]">
              1
            </div>
            <div className="w-[80px] h-[1px] bg-black top-7"></div>
            <div className="h-[32px] w-[32px] rounded-full bg-white border-[1px] p-[4px] border-black text-center items-center text-[#09090B]">
              2
            </div>
            <div className="w-[80px] h-[1px] bg-black top-7"></div>
            <div className="h-[32px] w-[32px] rounded-full bg-white border-[1px] p-[4px] border-black text-center items-center text-[#09090B]">
              3
            </div>
          </div>
          <div className="w-[638px] h-[] rounded-2xl mx-auto p-[32px]  bg-white">
            <div className="text-xl font-bold">1. Сагс </div>
            <div className="flex flex-col gap-[16px] mt-[16px]">
              {uploadShoppingCart.map((cardItems) => (
                <div key={cardItems._id}>
                  <BasketCard
                    getShoppingCart={getShoppingCart}
                    cardItems={cardItems}
                    quantity={quantity}
                    setQuantity={setQuantity}
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-4">
              <div> Нийт төлөх дүн: </div>
              <div className="font-bold ">
                {sum}
                <div className="font-bold"></div>
              </div>
            </div>
            <div className="justify-between flex ">
              <div className=""></div>
              <Link className="w-[175px] h-[36px] rounded-2xl bg-[#2563EB] text-center px-[36px] py-[8px] text-[14px] text-white  mt-[36px]"
                rel="address"
                href="/Basket/Address">
              
                Худалдан авах
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

