"use client";


import { useState } from "react";
import Image from "next/image";
import { shoppingCart } from "./BasketCard";

export const SidebarCard = ({ cardItems }: { cardItems: shoppingCart }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="w-[285px] h-[80px] flex relative group border-[1px] rounded-2xl gap-[24px]">
      <div className="rounded-2xl aspect-auto bg-slate-300 overflow-hidden relative h-[80px] w-[80px]">
        <Image
          alt="image"
          src={cardItems.images[0] || ""}
          width={80}
          height={80}
          className="bg-slate-50 absolute"
        />
      </div>
      <div className="flex flex-col">
        <div> {cardItems.productName} </div>
        <div className="flex gap-3">
          {quantity} x {cardItems.price}
        </div>
        <div className="font-bold">{cardItems.price * quantity}</div>
      </div>
    </div>
  );
};

