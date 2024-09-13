"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const UserInfo = () => {
  const [user, setUser] = useState(true);
  return (
    <div className="max-w-[884px] mt-[104px] mb-[156px] flex gap-5 text-sm text-[#09090B] mx-auto">
      <div className="flex flex-col gap-3 w-[25%]">
        <button
          onClick={() => setUser(true)}
          className={`px-4 py-2 ${user ? "bg-red-400 rounded-2xl" : ""}`}
        >
          Хэрэглэгчийн хэсэг
        </button>
        <button
          onClick={() => setUser(false)}
          className={`px-4 py-2 ${user ? "" : "bg-red-500 rounded-2xl"}`}
        >
          Захиалгын түүх
        </button>
      </div>
      <div className="w-[75%]">
        <div className="text-lg">
          {user ? "Хэрэглэгчийн хэсэг" : "Захиалгын түүх"}
        </div>
        <div className="bg-[#E4E4E7] my-6 w-full h-[2px]"></div>
        {user && (
          <div className="flex flex-col gap-4 text-[14px] leading-[14px]">
            <div className="flex flex-col gap-2">
              <div>Овог:</div>
              <Input className="bg-[#FFFFFF] w-full rounded-[18px]" />
            </div>
            <div className="flex flex-col gap-2">
              <div>Нэр:</div>
              <Input className="bg-[#FFFFFF] w-full rounded-[18px]" />
            </div>
            <div className="flex flex-col gap-2">
              <div>Утасны дугаар:</div>
              <Input className="bg-[#FFFFFF] w-full rounded-[18px]" />
            </div>
            <div className="flex flex-col gap-2">
              <div>Имэйл хаяг:</div>
              <Input className="bg-[#FFFFFF] w-full rounded-[18px]" />
            </div>
            <div className="flex flex-col gap-2">
              <div>Хаяг</div>
              <Textarea placeholder="Type your message here." />
            </div>
            <div className="flex justify-end">
              <Button className="text-sm bg-[#2563EB] hover:bg-blue-500 rounded-[18px]">
                Мэдээлэл шинэчлэх
              </Button>
            </div>
          </div>
        )}
        {!user && (
          <div className="flex flex-col gap-4 bg-red-300">
            <div className="py-8 p-6 flex flex-col gap-4">
              <div>on sar</div>
              <div className="flex flex-col gap-3"></div>
              <div className="flex justify-between">
                <div>uniin dun</div>
                <div>une</div>
              </div>
            </div>
            <div className="py-8 p-6"></div>
            <div className="py-8 p-6"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserInfo;
