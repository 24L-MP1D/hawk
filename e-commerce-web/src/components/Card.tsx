"use client";

import { cardItems } from "@/app/Category/page";
import { useState } from "react";
import { HeartIconSvg } from "./HeartIcon";
import Image from "next/image";

export const Card = ({ cardItems }: { cardItems: cardItems }) => {
  const [ready, setReady] = useState(false);

  const filled = () => {
    if (ready) {
      setReady(false);
    } else {
      setReady(true);
    }
  };
  return (
    <div className="w-full flex flex-col gap-2 relative group">
      <div className="rounded-2xl bg-slate-400 aspect-[3/4] overflow-hidden relative hover:border-black border-[1px]">
        <Image
          alt="bunny"
          src={"/Tuulai.png"}
          width={500}
          height={500}
          className="bg-slate-50 absolute inset-0 h-full group-hover:scale-150"
        />
      </div>
      <div className="flex flex-col gap-1">
        <div>{cardItems.title}</div>
        <div className="font-bold">{cardItems.price}</div>
      </div>
      <div onClick={filled} className="absolute top-3 right-3 cursor-pointer">
        <HeartIconSvg fill={ready} />
      </div>
    </div>
  );
};
