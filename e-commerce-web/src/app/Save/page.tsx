"use client";

import Image from "next/image";
import { FaHeart } from "react-icons/fa";
import { useEffect, useState } from "react";
import Link from "next/link";
// import { HeartIcon } from "@radix-ui/react-icons";
import { HeartIconSvg } from "@/components/HeartIcon";

const save = [
  {
    title: "Chunky Glyph Tee",
    image: "/asian.png",
    price: "120.000₮",
  },
  {
    title: "Doodle Hoodie",
    image: "/black.png",
    price: "100.000₮",
  },
  {
    title: "Local Styles Crewneck",
    image: "/latino.png",
    price: "80.000₮",
  },
];

export default function Save() {
  // const [heart, setHeart] = useState([]);

  return (
    <div className="max-w-[622px] mx-auto">
      <div>
        <p className="text-xl font-bold p-3">Хадгалсан бараа (3)</p>

        <div className="flex flex-col gap-2 pb-4">
          {save.map((title) => (
            <div
              key={title.title}
              className="flex justify-between border-2 rounded-xl"
            >
              <div className="flex gap-6 p-4">
                <Link href="/ProductTetails">
                  <Image
                    src={title.image}
                    alt="image"
                    width={100}
                    height={100}
                    className="w-[100px] h-[100px] rounded-xl"
                  />
                </Link>

                <div className="flex flex-col gap-1">
                  <Link href="/ProductTetails">{title.title}</Link>
                  <p className="font-bold">{title.price}</p>
                  <button className="bg-[#2563EB] w-[81px] h-[28px] rounded-3xl text-sm text-white">
                    Сагслах
                  </button>
                </div>
              </div>
              <div className="flex p-4">
                <HeartIconSvg fill={true} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
