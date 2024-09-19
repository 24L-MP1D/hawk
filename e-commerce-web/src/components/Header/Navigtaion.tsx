"use client";

import Image from "next/image";
import Link from "next/link";

import { Heart, Search, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "../ui/input";

export const Navigation = () => {
  return (
    <div className="bg-black">
      <div  className="max-w-[1440px] mx-auto py-4 px-6  bg-[#000000] text-white">
        <div className="flex justify-between items-center">
          <div className="flex gap-8">
            <a href="/" className="flex gap-2">
              <div className="w-8 h-[27px]">
                <Image
                  className="w-8 h-[27px]"
                  src={"/NavigationLogo.png"}
                  width={30}
                  height={30}
                  alt="logo"
                />
              </div>
              <p>ECOMMERCEE</p>
            </a>
            <div>
              <Link href={"/Category"}>Ангилал</Link>
            </div>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-[20px] bg-[#18181B]">
            <Search className="" />
            <Input
              className="w-[200px]  outline-none resize-none border-[#18181B]"
              type="input"
              placeholder="Бүтээгдэхүүн хайх"
            />
          </div>
          <div className="flex items-center gap-6">
            <div className="flex  gap-6">
              <a href="">
                <Heart />
              </a>
              <a href="/ProductDetail">
                <ShoppingCart />
              </a>
            </div>
            <div className="flex gap-2">
              <a href="/Login">
                <Button
                  className="bg-[#000000] rounded-[18px] hover:bg-[#2563EB] hover:text-white"
                  variant="outline"
                >
                  Бүртгүүлэх
                </Button>
              </a>
              <a href="/Login">
                <Button
                  className="bg-[#000000] rounded-[18px] hover:bg-[#2563EB] hover:text-white"
                  variant="outline"
                >
                  Нэвтрэх
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
