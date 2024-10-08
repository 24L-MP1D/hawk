"use client"; // usestate ashiglaj bolohgui bsn
import { Calendar, ChevronDown, Download, Slice } from "lucide-react";
import { useState } from "react";

import { DashboardAside } from "@/components/Dashboard";
import { DateRange } from "react-day-picker";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { DatePickerWithRange } from "@/components/DatePickerWithRange";

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



const Income = () => {
  const [incomeFilter, setIncomeFilter] = useState("");

  const [takeIncome, setTakeIncome] = useState([]);
  const [incomeAmount, setIncomeAmount] = useState("");
  const [incomeList, setIncomeList] = useState([]);
  const [date, setDate] = useState<DateRange | undefined>()

  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);


  const loadFiltIncome = async () => {
    if (incomeFilter === "Өнөөдөр") {
      const endTime = new Date()
      const startTime = new Date()
        startTime.setDate(endTime.getDate() - 1)
      const response = await fetch(
        `http://localhost:4000/order?startTime=${startTime}&endTime=${endTime}`
      );
      const data = await response.json();
      setTakeIncome(data);
    }
  
   if (incomeFilter === "7хоног") {
      const endTime = new Date()
      const startTime = new Date()
        startTime.setDate(endTime.getDate() - 7)
      const response = await fetch(
        `http://localhost:4000/order?startTime=${startTime}&endTime=${endTime}`
      );
      const data = await response.json();
      setTakeIncome(data);
    }
    if (incomeFilter === "1сар") {
      const endTime = new Date()
      const startTime = new Date()
        startTime.setDate(endTime.getDate() - 30)
      const response = await fetch(
        `http://localhost:4000/order?startTime=${startTime}&endTime=${endTime}`
      );
      const data = await response.json();
      setTakeIncome(data);
    }
  } 

  const handlePopOver = () => {
    setIsDatePickerOpen(!isDatePickerOpen);
  };
  console.log(date?.from,date?.to)
  return (
    <div className="flex ">
      <DashboardAside />
      <div className="flex flex-col">
      <div className="flex flex-col ">
        <div className="w-[724px] h-[160px] bg-[#FFFFFF] rounded-xl border-[1px] border-[#ECEDF0] ml-[186.5px] flex flex-col  mt-[16px]">
          <div className="flex justify-between p-[24px] ">
            <div className="font-bold text-[20px] ">Орлого</div>
            <Button className="w-[144px] h-[28px] bg-[#1C20240A] rounded-md flex gap-2 px-[6px] py-[2px] text-black hover:bg-slate-400">
              <div>
                <Download className="h-[20px] w-[20px]" />
              </div>
              <div className="text-[14px] "> Хуулга татах</div>
            </Button>
          </div>
          <div className="border-[#ECEDF0] "></div>
          <div className="p-[24px] flex justify-between ">
            <div className="font-bold text-[28px]">235,000.00 MNT</div>
            <div className="flex gap-2">
              <Button
                onClick={() => {
                  setIncomeFilter("Өнөөдөр");
                  loadFiltIncome();
                }}
                className={` ${
                  incomeFilter === "Өнөөдөр" ? "bg-[#18BA51] text-white" : "bg-white text-black"
                }  w-[94px] border-[#ECEDF0] hover:bg-[#18BA51] hover:font-bold hover:text-white border-[1px]  h-[36px] py-1.5 px-3 rounded-md text-[14px] `}
              >
                Өнөөдөр
              </Button>
              <Button
                onClick={() => {
                  setIncomeFilter("7хоног");
                  loadFiltIncome();
                }}
                className={` ${
                  incomeAmount === "7 хоног" ? "bg-[#18BA51] text-white" : "bg-white text-black"
                }  w-[94px] border-[#ECEDF0] hover:bg-[#18BA51] hover:font-bold hover:text-white border-[1px] h-[36px] py-1.5 px-3 rounded-md text-[14px] `}
              >
                7 хоног
              </Button>
             
                <Button
                onClick={handlePopOver}
                  onChange={() => {
                    setIncomeFilter("1сар");
                    loadFiltIncome();
                  }}
                  className={` ${
                    incomeAmount === "Өнөөдөр" ? "bg-[#18BA51]" : "bg-white"
                  }  w-[94px] border-[#ECEDF0] bg-white hover:bg-[#18BA51] hover:font-bold hover:text-white border-[1px] text-black h-[36px] py-1.5 px-3 rounded-md text-[14px] `}
                >
                  1 сар
                </Button>
                <div>
                  {/* <ChevronDown onClick={handlePopOver} /> */}
                </div>
          
            </div>
          </div>
        </div>
        <div className="text-white ml-[420px] ">
          {" "}
          <DatePickerWithRange date={date} setDate={setDate} isDatePickerOpen={isDatePickerOpen} />
        </div>
      </div>
      <div>
        <Table className="w-724px">
      <TableCaption>Орлогын жагсаалт </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="">Захиалгын ID дугаар</TableHead>
          <TableHead>Захиалагч</TableHead>
          <TableHead>Төлбөр</TableHead>
          <TableHead className="text-right">Огноо</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
       
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
      </div>
      </div>
     
    </div>
  );
};

export default Income;
