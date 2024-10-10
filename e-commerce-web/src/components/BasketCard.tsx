"use client";

import Image from "next/image";
import { CircleMinus, CirclePlus, Trash2 } from "lucide-react";

export type shoppingCart = {
  orderNumber: string;
  productCount: number;
  size: string;
  createAt: Date;
  updateAt: Date;
  productName: string;
  _id: string;
  price: number;
  images: [string];
  qty: number;
};

export const BasketCard = ({
  cardItems,
  getShoppingCart,
  quantity,
  setQuantity,
  uploadShoppingCart,
  setUploadShoppingCart,
  index,
}: {
  cardItems: shoppingCart;
  getShoppingCart: () => void;
  quantity: number;
  setQuantity: (value: number) => void;
  uploadShoppingCart: shoppingCart[];
  setUploadShoppingCart: (value: shoppingCart[]) => void;
  index: number;
}) => {
  const addQuintity = () => {
    const newUploadShoppingCart = [...uploadShoppingCart];
    newUploadShoppingCart[index].qty++;
    setUploadShoppingCart(newUploadShoppingCart);
  };
  const deleteShoppingCart = async () => {
    await fetch(`http://localhost:4000/deleteOneCart/${cardItems._id}`, {
      method: "DELETE",
    });
    getShoppingCart(); // dahin render hiij uldsen baraag harah
  };

  return (
    <div className="w-[574px] h-[132px] flex relative group border-[1px] rounded-2xl py-[16px] pl-[16] gap-[24px]">
      <div className="rounded-2xl aspect-auto bg-slate-300 overflow-hidden relative border-[1px] h-[100px] w-[100px] left-[16px]">
        <Image
          alt="zurag"
          src={cardItems?.images[0] || ""}
          width={100}
          height={100}
          className="bg-slate-50 absolute"
        />
      </div>
      <div className="flex flex-col gap-[8px] w-[354px]">
        <div></div>
        <div>{cardItems.productName}</div>
        <div className="flex gap-3">
          <div onClick={() => quantity != 1 && addQuintity()}>
            <CircleMinus />
          </div>
          <div>{cardItems.qty}</div>
          <div onClick={() => addQuintity()}>
            <CirclePlus />
          </div>
        </div>
        <div className="font-bold">
          {cardItems && cardItems.price * cardItems.qty}
        </div>
      </div>
      <div className="left-[24px]">
        <Trash2
          onClick={deleteShoppingCart}
          className="text-slate-600 h-[40px] w-[40px] p-[8px] border-0"
        />
      </div>
    </div>
  );
};
