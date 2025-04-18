"use client";

import React, { useState } from "react";

import { cn, Input } from "@potidev/react-vulpix-pack";
import { TableSearchProps } from "./types";
import { SearchButton } from "@/components/@atom";

export function TableSearch<TData>({ 
  className, 
  inputClassName, 
  placeholder, 
  value: searchValue, 
  setValue: setSearchValue, 
  rightSearch, 
  rightSearchClassName,
  searchId, 
  searchType = "local", 
  table,
  searchButton, 
  searchButtonProps,
  onSubmitSearch,
  disabled = false,
  isLoading,
}: TableSearchProps<TData>) {
  const [value, setValue] = useState("");

  return (
    <div className={cn("w-full flex flex-row gap-2", className)}>
      {searchType === "local" && searchId && (
        <Input
          disabled={disabled}
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
          disabled={disabled || isLoading}
          placeholder={placeholder}
          value={searchValue || value}
          onChange={(event) => setSearchValue ? setSearchValue(event.target.value) : setValue(event.target.value)}
          className={cn("md:max-w-sm w-full", inputClassName)}
          onKeyDown={(e) => { if(e.key === 'Enter' && onSubmitSearch) onSubmitSearch(searchValue || value)}}
        />
      )}
      <div className={cn("flex flex-row gap-2", rightSearchClassName)}>
        {searchButton && <SearchButton onClick={() => onSubmitSearch(searchValue || value)} {...searchButtonProps} isLoading={isLoading} />}
        {rightSearch}
      </div>
    </div>
  );
};