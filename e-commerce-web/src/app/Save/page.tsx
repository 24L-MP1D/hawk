"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaHeart } from "react-icons/fa";
import { useEffect, useState } from "react";
import Link from "next/link";
// import { HeartIcon } from "@radix-ui/react-icons";
import { HeartIconSvg } from "@/components/HeartIcon";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const save = [
  {
    id: 1,
    title: "Chunky Glyph Tee",
    image: "/asian.png",
    price: "120.000₮",
  },
  {
    id: 2,
    title: "Doodle Hoodie",
    image: "/black.png",
    price: "100.000₮",
  },
  {
    id: 3,
    title: "Local Styles Crewneck",
    image: "/latino.png",
    price: "80.000₮",
  },
];

export default function Save() {
  const [heart, setHeart] = useState(true);
  // const savedCount = cards.length;

  function LoadList() {
    useEffect(() => {
      fetch("/http://save");
    });
  }
  function Run() {}

  return (
    <div className="max-w-[622px] mx-auto">
      <div>
        <p className="text-xl font-bold p-3">Хадгалсан бараа (3)</p>

        <div className="flex flex-col gap-2 pb-4">
          {save.map((title) => (
            <motion.div
              key={title.title}
              className="flex justify-between border-2 rounded-xl"
              animate={{
                y: heart ? 0 : 10,
                opacity: heart ? 0 : 1,
              }}
              initial={{
                opacity: 0.1,
              }}
              transition={{
                duration: 2,
              }}
            >
              <div className="flex gap-6 p-4">
                <Link href="/ProductDetails">
                  <Image
                    src={title.image}
                    alt="image"
                    width={100}
                    height={100}
                    className="w-[100px] h-[100px] rounded-xl"
                  />
                </Link>

                <div className="flex flex-col gap-1">
                  <Link href="/ProductDetails">{title.title}</Link>
                  <p className="font-bold">{title.price}</p>
                  <button
                    onClick={() => setHeart(false)}
                    className="bg-[#2563EB] w-[81px] h-[28px] rounded-3xl text-sm text-white"
                  >
                    Сагслах
                  </button>
                </div>
              </div>
              <div className="flex p-4">
                <FaHeart onClick={() => setHeart(!heart)} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <p>Backend</p>
      <Input placeholder="name" />
      <Input placeholder="amount" />
      <Button onClick={() => Run()} />
    </div>
  );
}

{
  /* <HeartIconSvg fill={true} /> */
}
