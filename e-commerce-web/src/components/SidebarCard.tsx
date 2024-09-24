"use client";

import { cardItems } from "@/app/Category/page";
import { useState } from "react";
import Image from "next/image";
import { CircleMinus, CirclePlus, Trash2 } from "lucide-react";

export const SidebarCard = ({ cardItems }: { cardItems: cardItems }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="w-[285px] h-[80px] flex relative group border-[1px] rounded-2xl gap-[24px]">
      <div className="rounded-2xl aspect-auto bg-slate-300 overflow-hidden relative h-[80px] w-[80px]">
        <Image
          alt="hat"
          src={"/Hat.png"}
          width={80}
          height={80}
          className="bg-slate-50 absolute h-20 w-20"
        />
      </div>
      <div className="flex flex-col">
        <div> {cardItems.title} </div>
        <div className="flex gap-3">
          {quantity} x {cardItems.price}
        </div>
        <div className="font-bold">{cardItems.price * quantity}</div>
      </div>
    </div>
  );
};
