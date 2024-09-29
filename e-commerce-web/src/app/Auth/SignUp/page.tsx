"use client";
import { IoMdClose } from "react-icons/io";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Page() {
    return (
        <div className="flex flex-col">
            <div className="flex justify-between">
                <div>
                    <img src="/Group.png" alt="logo" className="width-[20px] height-[10px}"/>
                </div>
                <div className="border-2 rounded-md">
                    <div className="flex items-center border-b-2">
                        <Image src="/_CompanyLogo.png" alt="logo" width={20} height={20} className="m-[17px]"/>
                        <p>Sign In to Pinecone with Google</p>
                        <IoMdClose className="m-[17px]"/>
                    </div>
                    <div className="flex items-center border-b-2">
                        <img src="/Bagsh.png" alt="image" className="m-[17px]"/>
                        <div className="flex flex-col">
                            <p className="text-[14px]">Naraa Tsatsaa</p>
                            <p className="text-[12px] text-[#5F6368]">naraa.ts@gmail.com</p>
                        </div>
                    </div>
                    <div className="flex items-center border-b-2">
                        <img src="/Bagsh.png" alt="image" className="m-[17px]"/>
                        <div className="flex flex-col">
                            <p className="text-[14px]">Naraa Tsatsaa</p>
                            <p className="text-[12px] text-[#5F6368]">naraa.ts@gmail.com</p>
                        </div>
                    </div>
                        <div className="flex items-center justify-center">
                        <p className="m-[13px] text-[#5F6368]">4 more accounts</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col mx-auto w-[440px] items-center border-2">
                <p className="text-[#121316] text-[32px] font-bold my-10">Бүртгүүлэх</p>
                <div className="min-w-[360px] my-3">
                    <p className="mb-2">Таны имэйл</p>
                    <input placeholder="Имэйл" className="bg-[#F7F7F8] min-w-[360px] h-[56px] border-2 pl-2 rounded-md"></input>
                </div>
                <div className="min-w-[360px] my-3">
                    <p className="mb-2">Таны нэр</p>
                    <input placeholder="Нэр" className="bg-[#F7F7F8] min-w-[360px] h-[56px] border-2 pl-2 rounded-md"></input>
                </div>
                <button className="flex items-center bg-black text-white min-w-[360px] h-[60px] text-[18px] text-center rounded-md my-3">
                    Дараах 
                    <FaArrowRightLong className="text-white"/>
                </button>
                
            </div>

        </div>
    );
} 