import React, { useState } from "react";

import { cn, Select, SelectContent, SelectItem as SelectItemComponent, SelectTrigger, SelectValue } from "@potidev/react-vulpix-pack";
import { SelectItem } from "@potidev/utils-vulpix-pack";

type SelectStatusProps = {
  className?: string;
  items: SelectItem[];
  placeholder: string;
  id?: string;
  onValueChange?: (value: string, setValue: (value: string) => void) => void;
  defaultValue?: string;
};

export const TableSelect = ({ className, placeholder, items, id = "KEY", defaultValue, onValueChange }: SelectStatusProps) => {
  const [value, setValue] = useState(defaultValue);
  
  return (
    <Select value={value} onValueChange={(value) => onValueChange ? onValueChange(value, setValue) : setValue(value)}>
      <SelectTrigger className={className}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {
          items.map(({ label, value }) => (
            <SelectItemComponent value={value} key={`${id}-${value}`}>{label}</SelectItemComponent>
          ))
        }
        {
          !items.some(item => item.value === defaultValue) && <SelectItemComponent value={defaultValue || ""}>{defaultValue || "-"}</SelectItemComponent>
        }
      </SelectContent>
    </Select>
  );
};