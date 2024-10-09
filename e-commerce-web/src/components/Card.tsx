"use client";

import { useEffect, useState } from "react";
import { HeartIconSvg } from "./HeartIcon";
import Image from "next/image";

import Link from "next/link";

export type ProductType =
  | {
      productName: string;
      price: number;
      size: string[];
      productId: number;
      categoryId: string;
      qty: number;
      thumbnails: string;
      images: string[];
      coupon: string;
      salePercent: number;
      description: string;
      viewCount: number;
      createAt: Date;
      updateAt: Date;
      categoryType: string;
      productTag: string;
      _id: string;
      color: string[];
    }
  | undefined;
export const Card = ({
  cardItems,
  index,
}: {
  cardItems: ProductType;
  index: number;
}) => {
  const [ready, setReady] = useState(false);

  const SaveProduct = async () => {
    await fetch("http://localhost:4000/Save", {
      method: "POST",
      body: JSON.stringify({
        ProductId: cardItems?._id,
        amount: cardItems?.price,
        name: cardItems?.productName,
        image: cardItems?.images[0],
      }),
      headers: {
        "Content-type": "application/json",
      },
    });
  };

  const filled = () => {
    if (ready) {
      setReady(false);
    } else {
      setReady(true);
    }
  };
  return (
    <div className="relative">
      <Link
        href={`/ProductDetail?id=${cardItems?._id}`}
        className="w-full flex flex-col gap-2 group"
      >
        <div className="rounded-2xl bg-slate-400 aspect-[3/4] overflow-hidden relative hover:border-black border-[1px]">
          <Image
            alt="product_image"
            src={cardItems?.images[0] || ""}
            width={500}
            height={500}
            className="bg-slate-50 absolute w-full transition-[6s] object-cover h-full inset-0 group-hover:scale-150"
          />
        </div>
        <div className="flex flex-col gap-1">
          <div>{cardItems?.productName}</div>
          <div className="font-bold">{cardItems?.price}</div>
        </div>
      </Link>
      <div
        onClick={() => {
          filled();
          SaveProduct();
        }}
        className="absolute top-3 right-3 cursor-pointer"
      >
        {index != 6 && index != 7 && <HeartIconSvg fill={ready} />}
      </div>
    </div>
  );
};

export default Card;
