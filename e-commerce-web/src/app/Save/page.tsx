"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaHeart } from "react-icons/fa";
import { useEffect, useState } from "react";
import Link from "next/link";
// import { HeartIcon } from "@radix-ui/react-icons";
import { HeartIconSvg } from "@/components/HeartIcon";
import { del } from "framer-motion/client";

type card = {
  name: string;
  amount: number;
  _id: string;
};

export default function Save() {
  const [heart, setHeart] = useState(true);
  const [cards, setCards] = useState([]);

  const loadCard = async () => {
    const response = await fetch(`http://localhost:4000/Save`);
    const data = await response.json();
    setCards(data);
  };

  console.log(cards);
  const deleteOneCard = async (id: string) => {
    await fetch(`http://localhost:4000/Save/${id}`, {
      method: "DELETE",
    });
    loadCard();
  };

  useEffect(() => {
    loadCard();
  }, []);

  // const savedCount = cards.length;

  return (
    <div className="max-w-[622px] mx-auto">
      <div>
        <p className="text-xl font-bold p-3">Хадгалсан бараа (3)</p>

        <div className="flex flex-col gap-2 pb-4">
          {cards.map((card: card) => (
            <div
              key={card._id}
              className="flex justify-between border-2 rounded-xl"
            >
              <div className="flex gap-6 p-4">
                <Link href="/ProductTetails">
                  <Image
                    src={cards.image}
                    alt="image"
                    width={100}
                    height={100}
                    className="w-[100px] h-[100px] rounded-xl"
                  />
                </Link>

                <div className="flex flex-col gap-1">
                  <Link href="/ProductTetails">{card.name}</Link>
                  <p className="font-bold">{card.amount}</p>
                  <button className="bg-[#2563EB] w-[81px] h-[28px] rounded-3xl text-sm text-white">
                    Сагслах
                  </button>
                </div>
              </div>
              <div className="flex p-4">
                <FaHeart onClick={() => deleteOneCard(card._id)} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

{
  /* <HeartIconSvg fill={true} /> */
}
