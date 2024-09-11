"use client";

import { cardItems } from "@/app/Category/page";

import { useState } from "react";
import { HeartIconSvg } from "./HeartIcon";

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
      <div className="rounded-2xl bg-slate-400 aspect-[3/4] overflow-hidden">
        <div className="group-hover:scale-150 bg-slate-50 transition-[10s]">
          fafsdfdsa
        </div>
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
