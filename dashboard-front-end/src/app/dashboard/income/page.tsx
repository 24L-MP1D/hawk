"use client"; // usestate ashiglaj bolohgui bsn
import { Calendar, ChevronDown, Download } from "lucide-react";
import Dashboard from "../dashboard/page";
import { useRef, useState } from "react";
import { DatePickerWithRange } from "@/components/DatePickerWithRange.tsx";
import { PopoverContent } from "@radix-ui/react-popover";
import { DashboardAside } from "@/components/Dashboard";

const Income = () => {
  const [incomeToday, setIncomeToday] = useState("");
  const [incomeByWeek, setIncomeByWeek] = useState("");
  const [incomeMonthly, setIncomeMonthly] = useState("");

  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

  const handlePopOver = () => {
    setIsDatePickerOpen(!isDatePickerOpen);
  };
  return (
    <div className="flex ">
      <DashboardAside />
      <div className="flex flex-col ">
        <div className="w-[724px] h-[160px] bg-[#FFFFFF] rounded-2xl border-[1px] border-[#ECEDF0] ml-[186.5px] flex flex-col  mt-[16px]">
          <div className="flex justify-between p-[24px] ">
            <div className="font-bold text-[20px] ">Орлого</div>
            <div className="w-[144px] h-[28px] bg-[#1C20240A] rounded-md flex gap-2 px-[6px] py-[2px]">
              <div>
                <Download className="h-[20px] w-[20px]" />{" "}
              </div>
              <div className="text-[14px] "> Хуулга татах</div>
            </div>
          </div>
          <div className="border-[#ECEDF0] "></div>
          <div className="p-[24px] flex justify-between ">
            <div className="font-bold text-[28px]">235,000.00 MNT</div>
            <div className="flex gap-2">
              <div className="text-white bg-[#18BA51] w-[94px] h-[36px] py-1.5 px-3 rounded-md text-[14px] font-bold">
                Өнөөдөр
              </div>
              <div className=" w-[82px] h-[36px] py-1.5 px-3 rounded-md text-[14px]  border-[#ECEDF0] border-[1px]">
                7 хоног
              </div>
              <div className=" w-[132px] h-[36px] py-1.5 px-3 rounded-md   border-[#ECEDF0] border-[1px] flex gap-3">
                <div className="">
                  <Calendar />
                </div>
                <div className="text-[14px]">Сараар</div>
                <div>
                  <ChevronDown onClick={handlePopOver} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-white ml-[420px] ">
          {" "}
          <DatePickerWithRange isDatePickerOpen={isDatePickerOpen} />
        </div>
      </div>

      {/* <div className="w-[724px] h-[160px] bg-[#FFFFFF] rounded-2xl border-[1px] border-[#ECEDF0] ml-[186.5px] flex flex-col  mt-[16px]">
<div className="flex justify-between p-[24px] ">
<div className="font-bold text-[20px] ">Орлого</div>
<div className="w-[144px] h-[28px] bg-[#1C20240A] rounded-md flex gap-2 px-[6px] py-[2px]">
<div>
<Download className="h-[20px] w-[20px]" />{" "}
</div>
<div className="text-[14px] "> Хуулга татах</div>
</div>
</div>
<div className="border-[#ECEDF0] "></div>
<div className="p-[24px] flex justify-between ">
<div className="font-bold text-[28px]">235,000.00 MNT</div>
<div className="flex gap-2">
<div className="w-[82px] h-[36px] py-1.5 px-3 rounded-md text-[14px]  border-[#ECEDF0] border-[1px]">
              Өнөөдөр
</div>
<div className="text-white bg-[#18BA51] w-[94px] h-[36px] py-2 px-4 rounded-md text-[14px] font-bold">
              7 хоног
</div>
<div className=" w-[132px] h-[36px] py-1.5 px-3 rounded-md   border-[#ECEDF0] border-[1px] flex gap-3">
<Calendar />
<div className="text-[14px]">Сараар</div>
 
              <ChevronDown />
 
              <DatePickerWithRange isDatePickerOpen={isDatePickerOpen} />
</div>
</div>
</div>
</div> */}
    </div>
  );
};

export default Income;
