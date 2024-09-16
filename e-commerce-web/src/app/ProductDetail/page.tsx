"use client";

import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { useState } from "react";

const price = 120000;

export const ProductDetail = () => {
  const price = 120000;

  const productPhotos = [
    { photo: "picture1" },
    { photo: "picture2" },
    { photo: "picture3" },
    { photo: "picture4" },
  ];

  const [selectPhoto, setSelectPhoto] = useState("picture1");

  return (
    <div className="max-w-[1040px] mx-auto flex justify-between gap-5 pt-[52px] pb-20">
      <div className="w-[509px] flex gap-5">
        <div className="mt-[100px] flex flex-col gap-3">
          {productPhotos.map((item) =>(
            <div className={`w-[67px] h-[67px] rounded-[4px] bg-slate-400 ${selectPhoto === item.photo ? "border border-black" : " "}`} onClick={() => setSelectPhoto(item.photo)} key={item.photo}>{item.photo}</div>
          ))}
        </div>
        <div className="w-[422px] h-[521px] bg-slate-400 rounded-[16px] flex flex-col">{selectPhoto}</div>
      </div>
      {/* 2th divition*/}

      <div className="w-[511px]">
        <div className="pt-[100px] mr-[93px] pb-[55px]">
          <div className="mb-6">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <div className="border-black border-[1px] w-[55px] text-center rounded-full py-1">
                  New
                </div>
                <div className="flex gap-2 items-center">
                  <p className="text-2xl font-bold">title</p>
                  <Heart />
                </div>
                <div className="text-base font-normal"></div>
              </div>
              <div>
                <div className="mb-2">Хэмжээний заавар</div>
                <div>size</div>
              </div>
              <div>+1</div>
            </div>
            <div>
              <div className="mb-2 font-bold text-xl">120’000₮</div>
              <Button className="py-4 px-9 bg-[#2563EB] rounded-[20px]">
                Сагсанд нэмэх
              </Button>
            </div>
          </div>

          <div></div>
        </div>

        <div></div>
      </div>

        
    </div>
  );
};

export default ProductDetail;
