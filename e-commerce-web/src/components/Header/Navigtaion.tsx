"use client";

import Image from "next/image";
import Link from "next/link";

import { Heart, Search, ShoppingCart } from "lucide-react";

import { Input } from "../ui/input";
import { createContext, useContext, useEffect, useState } from "react";
import { Context } from "../Card";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

export const Navigation = () => {
  const [savedProduct, setSavedProduct] = useState([]);

  const router = useRouter();
  const value = useContext(Context);
  const loadSavedProduct = async () => {
    const response = await fetch("http://localhost:4000/Save");
    const data = await response.json();
    setSavedProduct(data);
  };

  useEffect(() => {
    loadSavedProduct();
  }, [value?.like, value?.cookie]);

  return (
    <div className="bg-black">
      <div className="max-w-[1440px] mx-auto py-4 px-6  bg-[#000000] text-white">
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
              <Link
                href={"/Category"}
                className="font-normal text-sm text-[#FFFFFF]"
              >
                Ангилал
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-[20px] bg-[#18181B]">
            <Search className="" />
            <Input
              className="w-[200px]  outline-none resize-none border-[#18181B] text-sm font-normal focus-visible:ring-0"
              type="input"
              placeholder="Бүтээгдэхүүн хайх"
            />
          </div>
          <div className="flex items-center gap-6">
            <div className="flex  gap-6">
              <Link className="relative" href={"/Save"}>
                <Heart />
                <div
                  className={`absolute ${
                    savedProduct.length ? "block" : "hidden"
                  } flex items-center justify-center text-sm right-[-7px] top-[-5px] rounded-full bg-[#2563EB] w-4 h-4`}
                >
                  {savedProduct.length}
                </div>
              </Link>

              <button
                onClick={() => {
                  Cookies.get("token")
                    ? router.push("/Basket")
                    : alert("худалдан авалт хийхээс өмнө нэвтэрнэ үү");
                }}
              >
                <ShoppingCart />
              </button>
            </div>
            {value?.cookie ? (
              <div>
                <Button
                  onClick={() => {
                    Cookies.remove("token");
                    value?.setCookie(false);
                    alert("амжилттай гарлаа");
                  }}
                >
                  logout
                </Button>
              </div>
            ) : (
              <div className="flex gap-2">
                <Link
                  href={"/Register"}
                  className="py-2 px-3 bg-[black] rounded-[20px] text-white cursor-pointer hover:bg-[#2563EB] hover:transition-all hover:border-white border text-sm font-medium"
                >
                  Бүртгүүлэх
                </Link>

                <Link
                  href={"/Login"}
                  className="py-2 px-3 bg-[#2563EB] rounded-[20px] text-white cursor-pointer hover:bg-black hover:transition-all hover:border-white hover:border border text-sm font-medium"
                >
                  Нэвтрэх
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
