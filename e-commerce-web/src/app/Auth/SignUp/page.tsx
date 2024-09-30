"use client";
import { IoMdClose } from "react-icons/io";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Page() {
  return (
    <div className="flex flex-col vh-100%">
      <div className="flex justify-between mb-[100px] relative z-10">
        {/* <div>
          <img
            src="/Group.png"
            alt="logo"
            className="width-[20px] height-[10px}"
          />
        </div> */}
        {/* <div className="border-2 rounded-md">
          <div className="flex items-center border-b-2">
            <Image
              src="/_CompanyLogo.png"
              alt="logo"
              width={20}
              height={20}
              className="m-[17px]"
            />
            <p>Sign In to Pinecone with Google</p>
            <IoMdClose className="m-[17px]" />
          </div>
          <div className="flex items-center border-b-2">
            <img src="/Bagsh.png" alt="image" className="m-[17px]" />
            <div className="flex flex-col">
              <p className="text-[14px]">Naraa Tsatsaa</p>
              <p className="text-[12px] text-[#5F6368]">naraa.ts@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center border-b-2">
            <img src="/Bagsh.png" alt="image" className="m-[17px]" />
            <div className="flex flex-col">
              <p className="text-[14px]">Naraa Tsatsaa</p>
              <p className="text-[12px] text-[#5F6368]">naraa.ts@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <p className="m-[13px] text-[#5F6368]">4 more accounts</p>
          </div>
        </div> */}
      </div>

      <div className="flex flex-col mx-auto w-[440px] items-center border-2 rounded-lg mb-[100px]">
        <p className="text-[#121316] text-[32px] font-extrabold my-8">
          Бүртгүүлэх
        </p>
        <div className="min-w-[360px] my-3">
          <p className="mb-2">Таны имэйл</p>
          <input
            placeholder="Имэйл"
            className="bg-[#F7F7F8] min-w-[360px] h-[56px] border-2 pl-2 rounded-md"
          ></input>
        </div>
        <div className="min-w-[360px] my-3">
          <p className="mb-2">Таны нэр</p>
          <input
            placeholder="Нэр"
            className="bg-[#F7F7F8] min-w-[360px] h-[56px] border-2 pl-2 rounded-md"
          ></input>
        </div>
        <button className="flex items-center bg-black text-white min-w-[360px] h-[60px] text-[18px] text-center rounded-md my-3 pr-3">
          <div className="flex-1 text-center">Дараах</div>
          <FaArrowRightLong className="text-white" />
        </button>
        <div className="min-w-[360px] border-b-2 my-4"></div>

        <button className="flex items-center bg-[#F7F7F8] border-2 rounded-lg min-w-[360px] h-[56px] my-3 justify-center">
          <img
            src="/_CompanyLogo.png"
            alt="logo"
            className="w-[20px] h-[20px] m-[17px]"
          />
          <p>Google-ээр нэвтрэх</p>
        </button>
        <button className="flex items-center bg-[#F7F7F8] border-2 rounded-lg min-w-[360px] h-[56px] my-3 justify-center">
          <img
            src="/windows.png"
            alt="logo"
            className="w-[20px] h-[20px] m-[17px]"
          />
          <p>Microsoft-оор нэвтрэх</p>
        </button>
        <button className="flex items-center bg-[#F7F7F8] border-2 rounded-lg min-w-[360px] h-[56px] my-3 justify-center">
          <img
            src="/apple.png"
            alt="logo"
            className="w-[20px] h-[20px] m-[17px]"
          />
          <p>Apple-ээр нэвтрэх</p>
        </button>
        <div className="min-w-[360px] border-b-2 my-4"></div>
        <div className="flex items-center min-w-[360px] h-[56px] mt-6 mb-10 justify-center">
          <p className="text-[#525252]">Бүртгэлтэй юү?</p>
          <p className="underline ml-2">Нэвтрэх</p>
        </div>
      </div>

      <div className="text-[#a2a2b2] flex mx-auto my-[14px]">
        © 2023 Pinecone
      </div>
    </div>
  );
}
