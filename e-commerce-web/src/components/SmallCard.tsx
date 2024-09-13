"use client";

import { cardItems } from "@/app/Category/page";
import { useState } from "react";
import { HeartIconSvg } from "./HeartIcon";
import Image from "next/image";
import { RiDeleteBinLine } from "react-icons/ri";
import { CircleMinus, CirclePlus, Trash2 } from "lucide-react";

export const SmallCard = ({ cardItems }: { cardItems: cardItems }) => {
  const [ready, setReady] = useState(false);

  const [number, setNumber] = useState(1);

  const filled = () => {
    if (ready) {
      setReady(false);
    } else {
      setReady(true);
    }
  };
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
            <div onClick={()=> number!=1 && setNumber(number-1)}><CircleMinus /></div>
            <div>{number}</div>
            <div onClick={()=> setNumber(number+1)}><CirclePlus /></div>
        </div>
        <div className="font-bold">{cardItems.price * number}</div>
      </div>
      <div className="left-[24px]">
        <Trash2 className="text-slate-600 h-[40px] w-[40px] p-[8px] border-0"/>
      </div>
    </div>
  );
};
