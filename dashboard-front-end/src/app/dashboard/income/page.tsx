"use client"; // usestate ashiglaj bolohgui bsn
import { Calendar, ChevronDown, Download } from "lucide-react";
import { useState } from "react";
import { DatePickerWithRange } from "@/components/DatePickerWithRange.tsx";
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

export type ProductType =
  | {
      productName: string;
      price: number;
      size: string[];
      productId: number;
      categoryId: string;
      qty: number;
      thumbnails: string;
      images: string;
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
  const [incomeToday, setIncomeToday] = useState("");
  const [incomeByWeek, setIncomeByWeek] = useState("");
  const [incomeMonthly, setIncomeMonthly] = useState("");
  const [date, setDate] = useState<DateRange | undefined>();
  const [takeIncome, setTakeIncome] = useState([]);
  const [incomeAmount, setIncomeAmount] = useState("");
  const [incomeList, setIncomeList] = useState([]);

  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

  const loadIncome = async () => {
    if (incomeToday) {
      const response = await fetch(
        `http://localhost:4000/order=${date?.from}&toDate=${date?.to}`
      );
      const data = await response.json();
      setTakeIncome(data);
    } else {
      const response = await fetch(`link `);
      const data = await response.json();
      setTakeIncome(data);
    }
  };

  const loadFiltIncome = async () => {
    if (incomeAmount === "Өнөөдөр" || incomeToday) {
      const response = await fetch(
        `http://localhost:4000/order?${date?.from}&toDate=${date?.to}`
      );
      const data = await response.json();
      setTakeIncome(data);
    }
  };

  const handlePopOver = () => {
    setIsDatePickerOpen(!isDatePickerOpen);
  };
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
                  setIncomeAmount("Өнөөдөр");
                  loadFiltIncome();
                }}
                className={` ${
                  incomeAmount === "Өнөөдөр" ? "bg-[#18BA51]" : ""
                }  w-[94px] border-[#ECEDF0] bg-white hover:bg-[#18BA51] hover:font-bold hover:text-white border-[1px] text-black h-[36px] py-1.5 px-3 rounded-md text-[14px] `}
              >
                Өнөөдөр
              </Button>
              <Button
                onClick={() => {
                  setIncomeAmount("7 хоног");
                  loadFiltIncome();
                }}
                className={` ${
                  incomeAmount === "Өнөөдөр" ? "bg-[#18BA51]" : ""
                }  w-[94px] border-[#ECEDF0] bg-white hover:bg-[#18BA51] hover:font-bold hover:text-white border-[1px] text-black h-[36px] py-1.5 px-3 rounded-md text-[14px] `}
              >
                7 хоног
              </Button>
              {/* <div className=" w-[132px] h-[36px] py-1.5 px-3 rounded-md  justify-center border-[#ECEDF0] border-[1px] flex gap-3"> */}
                <div className="">
                  {/* <Calendar onClick={handlePopOver}/> */}
                </div>
                <Button
                onClick={handlePopOver}
                  onChange={() => {
                    setIncomeAmount("Өнөөдөр");
                    loadFiltIncome();
                  }}
                  className={` ${
                    incomeAmount === "Өнөөдөр" ? "bg-[#18BA51]" : ""
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
          <DatePickerWithRange isDatePickerOpen={isDatePickerOpen} />
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
