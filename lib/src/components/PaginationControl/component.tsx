"use client";

import React, { useMemo, useState } from "react";
import { cn, Label, Pagination, PaginationButton, PaginationContent, PaginationItem, PaginationNextButton, PaginationPreviousButton, Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@potidev/react-vulpix-pack";
import { PaginationControlProps } from "./types";

export const PaginationControl = ({
  className,
  selectClassName,
  limit,
  total,
  current = 0,
  onClickPage,
  onClickNext,
  onClickPrevious,
  key = "0",
  hiddenNextPrevWhenDisable = false,
  limitOptions = [],
  limitOptionsLabel = "Linhas por página",
  disabled = false,
  onSelectLimit,
}: PaginationControlProps) => {
  const [selectedLimit, setSelectedLimit] = useState<number>(limit);

  const numberOfPages = useMemo(() => {
    return Math.ceil(total / limit);
  }, [total, limit])

  const showPrev = useMemo(() => {
    if (hiddenNextPrevWhenDisable) {
      return (current - 1 > 0);
    }
    return true;
  }, [current, hiddenNextPrevWhenDisable]);

  const showNext = useMemo(() => {
    if (hiddenNextPrevWhenDisable) {
      return (current + 1 <= numberOfPages);
    }
    return true;
  }, [current, numberOfPages, hiddenNextPrevWhenDisable])

  const showLimitOptions = useMemo(() => limitOptions && limitOptions.length > 0, [limitOptions])

  return (
    <div className={cn("w-full flex flex-col lg:flex-row gap-2", showLimitOptions ? "justify-between" : "justify-center", className)}>
      {
        showLimitOptions && (
          <section className="flex flex-row gap-2 justify-center items-center">
            <Label className={disabled ? "opacity-50" : undefined}>{limitOptionsLabel}</Label>
            <Select
              disabled={disabled}
              value={`${selectedLimit}`}
              onValueChange={(value) => {
                setSelectedLimit(Number(value));
                onSelectLimit && onSelectLimit(Number(value));
              }}
            >
              <SelectTrigger className={cn("w-[96px] cursor-pointer", selectClassName)}>
                <SelectValue placeholder="Padrão" />
              </SelectTrigger>
              <SelectContent align="center">
                <SelectGroup>
                  {
                    limitOptions.map((value, index) => (
                      <SelectItem value={`${value}`} key={`PAGE_LIMIT_ITEM_${index}`}>{value}</SelectItem>
                    ))
                  }
                </SelectGroup>
              </SelectContent>
            </Select>
          </section>
        )
      }
      <Pagination className="lg:w-fit lg:mx-0">
        <PaginationContent className="flex-wrap">
          {showPrev === true && (
            <PaginationItem>
              <PaginationPreviousButton className="cursor-pointer" disabled={current === 1 || disabled} onClick={() => onClickPrevious && onClickPrevious(current - 1)} />
            </PaginationItem>
          )}
          <div className="flex flex-1 flex-row items-center gap-1 flex-wrap justify-center">
            {Array.from({ length: numberOfPages }).map((_, index) => (
              <PaginationItem key={`PAGINATION_ITEM_${key}_${index}`}>
                <PaginationButton
                  className="cursor-pointer"
                  disabled={disabled}
                  isActive={current === index + 1}
                  onClick={() => onClickPage && onClickPage(index + 1, current)}
                >
                  {index + 1}
                </PaginationButton>
              </PaginationItem>
            ))}
          </div>
          {showNext === true && (
            <PaginationItem>
              <PaginationNextButton className="cursor-pointer" disabled={current === numberOfPages || disabled} onClick={() => onClickNext && onClickNext(current + 1)} />
            </PaginationItem>
          )}
        </PaginationContent>
      </Pagination>
    </div>
  )
}