"use client";

import { Card } from "@/components/Card";
import basketProducts from "@/app/datas.json";
import Image from "next/image";
import Link from "next/link";

import * as React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { BasketCard } from "@/components/BasketCard";
import { cardItems } from "@/app/Category/page";

export default function Home() {
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  const [counting, setCounting] = React.useState(0);

  return (
    <div className="max-w-[1040px] mx-auto pt-[52px] pb-[100px] bg-[#F7F7F8]">
      <div className="w-[256px] h-[32px] left-[635px] flex items-center justify-center mx-auto">
        <div className="h-[32px] w-[32px] rounded-full bg-blue-500 text-center items-center text-white">
          ✓
        </div>
        <div className="w-[80px] h-[1px] bg-black top-7"></div>
        <div className="h-[32px] w-[32px] rounded-full  bg-blue-500 text-center items-center text-white">
          2
        </div>
        <div className="w-[80px] h-[1px] bg-black top-7"></div>
        <div className="h-[32px] w-[32px] rounded-full text-center items-center text-[#09090B]">
          3
        </div>
      </div>
      <div className="max-w-full h-[678px] flex gap-[20px]  mx-auto ">
        <div className="w-[333px] h-[448px] rounded-2xl bg-white">Сагс</div>
        <div className="w-[687px] h-[678px] rounded-2xl gap-[24px] bg-white p-[32px]">
          <div className=" text-[#09090B]">2. Хүргэлтийн мэдээлэл оруулах</div>
          <div className="w-[623px] h-[478px] flex flex-col gap-[24px]">
            <div className="h-[50px]">
              <div>Овог:</div>
              <div>
                <Input
                  className="h-[28px] rounded-[18px]"
                  type="Овог:"
                  placeholder=""
                />
              </div>
            </div>
            <div className="h-[50px]">
              <div>Нэр:</div>
              <div>
                <Input
                  className="h-[28px] rounded-[18px]"
                  type="Овог:"
                  placeholder=""
                />
              </div>
            </div>
            <div className="h-[50px]">
              <div>Утасны дугаар:</div>
              <div>
                <Input
                  className="h-[28px] rounded-[18px]"
                  type="Овог:"
                  placeholder=""
                />
              </div>
            </div>
            <div className="h-[116px]">
              <div>Хаяг:</div>
              <div>
                <Input
                  className="h-[94px] rounded-[18px]"
                  type="Овог:"
                  placeholder=""
                />
              </div>
            </div>
            <div className="h-[50px]">
              <div>Нэмэлт мэдээлэл:</div>
              <div>
                <Input
                  className="h-[94px] rounded-[18px]"
                  type="Овог:"
                  placeholder=""
                />
                <div className="text-[#71717A]">
                  Хүргэлттэй холбоотой нэмэлт мэдээлэл үлдээгээрэй
                </div>
                <div className="flex justify-between mt-[36px]">
                  <Link
                    className="w-[114px] h-[36px] rounded-2xl border-[1px] border-[#E4E4E7] text-center px-[36px] py-[8px] text-[14px]  mt-[24px]"
                    rel="address"
                    href="/Basket/Cart"
                  >
                    Буцах
                  </Link>
                  <Button className="bg-[#2563EB] rounded-[18px] w-[166px] h-[36px]">
                    Төлбөр төлөх
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
