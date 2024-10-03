"use client";

import { ArrowRight } from "lucide-react";

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

export function DashboardChart() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex py-2">
        <div className="flex-1">Борлуулалт</div>
        <div>
          <ArrowRight />
        </div>
      </div>
      <div className="">
        <div className="flex gap-3">
          <div className="flex flex-col gap-9">
            <div>400K</div>
            <div>300K</div>
            <div>200K</div>
            <div>100K</div>
            <div>0K</div>
          </div>
          <div className="py-1.5 flex-1">
            <div className="flex flex-col gap-[53px]">
              <div className="w-full border-[#D6D8DB] border-dashed border-[1px]"></div>
              <div className="w-full border-[#D6D8DB] border-dashed border-[1px]"></div>
              <div className="w-full border-[#D6D8DB] border-dashed border-[1px]"></div>
              <div className="w-full border-[#D6D8DB] border-dashed border-[1px]"></div>
              <div className="w-full border-[#D6D8DB] border-dashed border-[1px]"></div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
