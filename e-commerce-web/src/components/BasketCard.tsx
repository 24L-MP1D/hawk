"use client";


import { useEffect, useState } from "react";
import Image from "next/image";
import { CircleMinus, CirclePlus, Trash2 } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { ProductType } from "@/app/dashboard/product/page";


type test = {
  orderNumber: string,
  productCount: number,
  size: string,
  createAt: Date,
  updateAt: Date,
  productName: string
}

export const BasketCard = ( ) => {

  
  const [uploadShoppingCart , setUploadShoppingCart] = useState<test>()
  
  const getShoppingCart = async () => {
    const response = await fetch(`http://localhost:4000/ShoppingCart`);
    const data = await response.json();
    setUploadShoppingCart(data);
  }
  useEffect(() => {
    getShoppingCart();
  }, [])
  

  const [quantity, setQuantity] = useState(1);
  console.log({uploadShoppingCart})
  return (
    <div className="w-[574px] h-[132px] flex relative group border-[1px] rounded-2xl py-[16px] pl-[16] gap-[24px]">
      <div className="rounded-2xl aspect-auto bg-slate-300 overflow-hidden relative border-[1px] h-[100px] w-[100px] left-[16px]">
        <Image
          alt="hat"
          src={"/Hat.png"}
          width={100}
          height={100}
          className="bg-slate-50 absolute "
        />
      </div>
      <div className="flex flex-col gap-[8px] w-[354px]">
        <div>{uploadShoppingCart?.productName}</div>
        {/* {
          uploadShoppingCart.map(card=>(
            <div key={card.orderNumber}>
              {card.orderNumber}
              </div>
          ))
        } */}
        <div className="flex gap-3" >
            <div onClick={()=> quantity!=1 && setQuantity(quantity-1)}><CircleMinus /></div>
            <div>{quantity}</div>
            <div onClick={()=> setQuantity(quantity+1)}><CirclePlus /></div>
        </div>
        {/* <div className="font-bold">{uploadShoppingCart && uploadShoppingCart * quantity}</div> */}
      </div>
      <div className="left-[24px]">
        <Trash2 className="text-slate-600 h-[40px] w-[40px] p-[8px] border-0"/>
      </div>
    </div>
  );
};
