"use client";

import { ArrowRight } from "lucide-react";

const data = {
  date: ["01/06", "01/07", "01/08", "01/09", "01/10", "01/11", "01/12"],
  sales: [400000, 300000, 200000, 100000, 0],
};

export function DashboardChart() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex py-2">
        <div className="flex-1">Борлуулалт</div>
        <div>
          <ArrowRight />
        </div>
      </div>
      <div className="flex flex-col gap-[14px] relative">
        <div className="flex flex-col gap-9">
          {data.sales.map((amount) => (
            <div className="flex gap-[14px] items-center">
              <div className="w-[38px]">{amount / 1000}K</div>
              <div className="flex-1 border-dashed border-[#D6D8DB] border-[1px] h-[1px]"></div>
            </div>
          ))}
        </div>
        <div className="absolute"></div>
      </div>
    </div>
  );
}
