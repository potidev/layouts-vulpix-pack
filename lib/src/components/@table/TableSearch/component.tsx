"use client";

import React from "react";

import { cn, Input } from "@potidev/react-vulpix-pack";
import { TableSearchProps } from "./types";

export function TableSearch<TData>({ className, inputClassName, placeholder, value, setValue, rightSearch, searchId, searchType = "local", table }: TableSearchProps<TData>) {
  return (
    <div className={cn("w-full flex flex-row gap-2", className)}>
      {searchType === "local" && searchId && (
        <Input
          placeholder={placeholder}
          value={
            (table
              .getColumn(searchId as string)
              ?.getFilterValue() as string) ?? ""
          }
          onChange={(event) =>
            table
              .getColumn(searchId as string)
              ?.setFilterValue(event.target.value)
          }
          className={cn("md:max-w-sm w-full", inputClassName)}
        />
      )}
      {searchType === "external" && (
        <Input
          placeholder={placeholder}
          value={value}
          onChange={(event) => setValue && setValue(event.target.value)}
          className={cn("md:max-w-sm w-full", inputClassName)}
        />
      )}
      {rightSearch}
    </div>
  );
};