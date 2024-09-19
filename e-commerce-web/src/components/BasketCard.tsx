"use client";

import { cardItems } from "@/app/Category/page";
import { useState } from "react";
import Image from "next/image";
import { CircleMinus, CirclePlus, Trash2 } from "lucide-react";

export const BasketCard = ({ cardItems }: { cardItems: cardItems }) => {

  const [quantity, setQuantity] = useState(1);

  return (
    <div className="w-[574px] h-[132px] flex relative group border-[1px] rounded-2xl py-[16px] pl-[16] gap-[24px]">
      <div className="rounded-2xl aspect-auto bg-slate-300 overflow-hidden relative border-[1px] h-[100px] w-[100px] left-[16px]">
        <Image
          alt="hat"
          src={"/Hat.png"}
          width={100}
          height={100}
          className="bg-slate-50 absolute "
        />
      </div>
      <div className="flex flex-col gap-[8px] w-[354px]">
        <div>{cardItems.title}</div>
        <div className="flex gap-3" >
            <div onClick={()=> quantity!=1 && setQuantity(quantity-1)}><CircleMinus /></div>
            <div>{quantity}</div>
            <div onClick={()=> setQuantity(quantity+1)}><CirclePlus /></div>
        </div>
        <div className="font-bold">{cardItems.price * quantity}</div>
      </div>
      <div className="left-[24px]">
        <Trash2 className="text-slate-600 h-[40px] w-[40px] p-[8px] border-0"/>
      </div>
    </div>
  );
};
