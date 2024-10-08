"use client";


import { useEffect, useState } from "react";
import Image from "next/image";
import { CircleMinus, CirclePlus, Trash2 } from "lucide-react";

type ShoppingCartType = {
  orderNumber: number,
  productCount: number,
  size: string,
  createAt: Date,
  updateAt: Date,
  price: number, 
  productName: string,
  images: string[],
}

const [loadShoppingCart, setLoadShoppingCart] = useState <ShoppingCartType[]>();

const getShoppingCart = async() => {
  const response = await fetch (`http://localhost:4000/getBasketCarts`);
  const data = await response.json();
  setLoadShoppingCart (data);
  console.log (setLoadShoppingCart)
 }
 useEffect(()=> {
  getShoppingCart();
 },[])

export const SidebarCard = ({
  cardItems,
  index,
}: {
  cardItems: ShoppingCartType;
  index: number;
}) => {
  const [quantity, setQuantity] = useState(cardItems?.productCount || "");

  return (
    <div className="w-[285px] h-[80px] flex relative group border-[1px] rounded-2xl gap-[24px]">
      <div className="rounded-2xl aspect-auto bg-slate-300 overflow-hidden relative h-[80px] w-[80px]">
        <Image
          alt="product-image"
          src={cardItems?.images[0] || ""}
          width={80}
          height={80}
          className="bg-slate-50 absolute"
        />
      </div>
      <div className="flex flex-col">
        <div> {cardItems?.productName} </div>
        <div className="flex gap-3">
          {quantity} x {cardItems?.price}
        </div>
        <div className="font-bold">{cardItems?.price * cardItems.productCount}</div>
      </div>
    </div>
  );
};
