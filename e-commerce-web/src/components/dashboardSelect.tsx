import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { filters } from "@/app/Category/page";
import { savedValue } from "./selectValue";

export function DashboardSelect() {
  return (
    <Select>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Сонгох" />
      </SelectTrigger>
      <SelectContent>
        {filters.map((select) => (
          <SelectItem
            onClick={() => savedValue(select.value)}
            value={select.filt}
            className="cursor-pointer"
            key={select.value}
          >
            {select.filt}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
