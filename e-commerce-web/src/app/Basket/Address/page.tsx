"use client";

import { Card } from "@/components/Card";
import SidebarProducts from "@/app/datas.json";
import Image from "next/image";
import Link from "next/link";


import {useEffect, useState }from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { BasketCard } from "@/components/BasketCard";

import { SidebarCard } from "@/components/SidebarCard";
import { string } from "yup";

export default function Home() {
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [counting, setCounting] = useState(0);
  const [address, setAddress] = useState(0);
  

  const id = "66f144db08ecc2e63fbb86af"

  function submit() {
    fetch(`https://localhost:4000/updateUser/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        address,
      }),
      headers: {
        "Content-type": "application/json",
      },
    }).then((res) => {
      if (res.ok) {
        console.log("success");
      } else {
        console.log("error");
      }
    });
  }


  const [deleteAddress, setDeleteAddresses] = useState(0);
  const [updateAddress, setUpdateAddresses] = useState(0);
  // const [Addresses, setDeleteAddresses] = useState(0);

  //get huselt gantsaaraa browseroor damjij bolno busad ni ylgaatai 
  const getAddress = async () => {
    const response = await fetch(`http://localhost:4000/register`);
    const data = await response.json();
    setAddress(data);
  };

  useEffect(() => {
    getAddress();
    editAddress();
  }, []);

  //update

  const editAddress = async () => {
    const response = await fetch(`http://localhost:4000/updateUser/:id`, {
      method: "PUT",
      body: JSON.stringify({
        address: string,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const data = await response.json();
    setUpdateAddresses(data);
  };



  return (
    <div className="bg-[#F7F7F8]">
      <div className="max-w-[1040px] mx-auto pt-[52px] pb-[100px] bg-[#F7F7F8]">
        <div className="w-[256px] h-[32px] mx-auto flex items-center justify-center mb-[66px] ">
          <div className="h-[32px] w-[32px] rounded-full font-bold bg-blue-500  text-white text-center p-[4px] border-[1px]">
            ✓
          </div>
          <div className="w-[80px] h-[1px] bg-black top-7"></div>
          <div className="h-[32px] w-[32px] rounded-full font-bold bg-blue-500  text-white p-[4px] border-black text-center items-center">
            2
          </div>
          <div className="w-[80px] h-[1px] bg-black top-7"></div>
          <div className="h-[32px] w-[32px] rounded-full bg-white border-[1px] p-[4px] border-black text-center items-center text-[#09090B]">
            3
          </div>
        </div>
        <div className="max-w-full h-[678px] flex gap-[20px]  mx-auto ">
          <div className="w-[333px] h-[448px] rounded-2xl bg-white px-[24px] py-[32px] ">
            <div className="font-bold">Сагс</div>
            <div className="flex flex-col gap-[16px] mt-[16px] items-center">
              {SidebarProducts.map(
                (cardItems, index) =>
                  index < 3 && (
                    <div>
                      <SidebarCard
                        cardItems={cardItems}
                        key={index + cardItems.price}
                      />
                    </div>
                  )
              )}
            </div>
          </div>
          <div className="w-[687px] h-[678px] rounded-2xl gap-[24px] bg-white p-[32px]">
            <div className=" text-[#09090B] mb-[36px]">
              2. Хүргэлтийн мэдээлэл оруулах
            </div>
            <div className="w-[623px] h-[478px] flex flex-col gap-[24px]">
              <div className="h-[50px]">
                <div>Овог:</div>
                <div>
                  <Input
                    className="h-[28px] rounded-[18px]"
                    type="text"
                    placeholder=""
                  />
                </div>
              </div>
              <div className="h-[50px]">
                <div>Нэр:</div>
                <div>
                  <Input
                    className="h-[28px] rounded-[18px]"
                    type="text"
                    placeholder=""
                  />
                </div>
              </div>
              <div className="h-[50px]">
                <div>Утасны дугаар:</div>
                <div>
                  <Input
                    className="h-[28px] rounded-[18px]"
                    type="numbers"
                    placeholder=""
                  />
                </div>
              </div>
              <div className="h-[116px]">
                <div>Хаяг:</div>
                <div>
                  <Input
                    className="h-[94px] rounded-[18px]"
                    type="text"
                    placeholder=""
                  />
                </div>
              </div>
              <div className="h-[50px]">
                <div>Нэмэлт мэдээлэл:</div>
                <div>
                  <Input
                    className="h-[94px] rounded-[18px]"
                    type="text"
                    placeholder=""
                  />
                  <div className="text-[#71717A]">
                    Хүргэлттэй холбоотой нэмэлт мэдээлэл үлдээгээрэй
                  </div>
                  <div className="flex justify-between mt-[24px]">
                    <Link
                      className="w-[114px] h-[36px] rounded-2xl border-[1px] border-[#E4E4E7] text-center px-[36px] py-[8px] text-[14px]"
                      rel="address"
                      href="/Basket"
                    >
                      Буцах
                    </Link>


                    <Button>Хүргэлтийн мэдээллийг хадгалах</Button>

                    <Link
                      className="bg-[#2563EB] rounded-[18px] w-[166px] h-[36px] text-white px-[29px] py-[5px] text-[14px]"
                      rel="address"
                      href="/Basket/Pay"
                    >
                      Төлбөр төлөх
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
