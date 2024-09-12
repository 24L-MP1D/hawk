"use client";

import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/Card";
// import datas from "../datas.json";

import { Checkbox } from "@/components/ui/checkbox";

export type cardItems = {
  price: number;
  title: string;
};

  export default function Home() {
    return (
      <div>
        <div className="bg-blue-300"> image </div>
        <div className="grid grid-cols-4 gap-4 mt-4">
          <div className="bg-slate-300">card1</div>
          <div className="bg-slate-300">card1</div>
          <div className="bg-slate-300">card1</div>
          <div className="bg-slate-300">card1</div>
        </div>
        <div className="grid grid-cols-4 gap-4 mt-4">
          <div className="bg-slate-300">card1</div>
          <div className="bg-slate-300">card1</div>
          <div className="bg-pink-300 col-start-3 col-span-2 row-span-2">card1</div>
          <div className="bg-pink-300 col-start-1 col-span-2 row-span-2">card1</div>
          <div className="bg-slate-300">card1</div>
          <div className="bg-slate-300">card1</div>
        </div>
        <div className="grid grid-cols-4 gap-4 mt-4">
          <div className="bg-slate-300">card1</div>
          <div className="bg-slate-300">card1</div>
          <div className="bg-slate-300">card1</div>
          <div className="bg-slate-300">card1</div>
        </div>
        <div className="grid grid-cols-4 gap-4 mt-4">
          <div className="bg-slate-300">card1</div>
          <div className="bg-slate-300">card1</div>
          <div className="bg-slate-300">card1</div>
          <div className="bg-slate-300">card1</div>
        </div>
      </div>
    );
  }
