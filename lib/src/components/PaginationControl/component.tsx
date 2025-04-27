"use client";

import React, { useMemo, useState } from "react";
import { cn, Label, Pagination, PaginationButton, PaginationContent, PaginationItem, PaginationNextButton, PaginationPreviousButton, Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@potidev/react-vulpix-pack";
import { PaginationControlProps } from "./types";
import { ChevronsLeft, ChevronsRight } from "lucide-react";

export const PaginationControl = ({
  className,
  selectClassName,
  limit,
  total,
  current = 0,
  onChangePage,
  key = "0",
  hiddenNextPrevWhenDisable = false,
  limitOptions = [],
  limitOptionsLabel = "Linhas por página",
  disabled = false,
  onSelectLimit,
  variant = "labels",
  showStartEndButtons = false,
  renderPageCounter = (localCurrent, localNumberOfPages) => (<p className="text-sm">Página {localCurrent} de {localNumberOfPages}</p>),
  showPageCounter = false,
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
      <div className="flex flex-col md:flex-row gap-4 items-center">
        {showPageCounter === true && numberOfPages !== 0 ? renderPageCounter(current, numberOfPages) : null}
        <Pagination className="lg:w-fit lg:mx-0">
          <PaginationContent className="flex-wrap">
            {showPrev === true && (
              <>
                {showStartEndButtons ? (
                  <PaginationItem>
                    <PaginationPreviousButton
                      size={"icon"}
                      variant={variant === "minimalist" ? "outline" : undefined}
                      disabled={current === 1 || disabled}
                      onClick={() => onChangePage && onChangePage(1, current)}
                      icon={() => <ChevronsLeft />}
                    />
                  </PaginationItem>
                ) : null}
                <PaginationItem>
                  <PaginationPreviousButton
                    size={variant === "minimalist" ? "icon" : "default"}
                    variant={variant === "minimalist" ? "outline" : undefined}
                    disabled={current === 1 || disabled}
                    onClick={() => onChangePage && onChangePage(current - 1, current)}
                    label={variant === "minimalist" ? undefined : "Anterior"}
                  />
                </PaginationItem>
              </>
            )}
            {
              variant === "minimalist" ? (
                null
              ) : (
                <div className="flex flex-1 flex-row items-center gap-1 flex-wrap justify-center">
                  {Array.from({ length: numberOfPages }).map((_, index) => (
                    <PaginationItem key={`PAGINATION_ITEM_${key}_${index}`}>
                      <PaginationButton
                        className="cursor-pointer"
                        disabled={disabled}
                        isActive={current === index + 1}
                        onClick={() => onChangePage && onChangePage(index + 1, current)}
                      >
                        {index + 1}
                      </PaginationButton>
                    </PaginationItem>
                  ))}
                </div>
              )
            }
            {showNext === true && (
              <>
                <PaginationItem>
                  <PaginationNextButton
                    size={variant === "minimalist" ? "icon" : "default"}
                    variant={variant === "minimalist" ? "outline" : undefined}
                    disabled={current === numberOfPages || disabled}
                    onClick={() => onChangePage && onChangePage(current + 1, current)}
                    label={variant === "minimalist" ? undefined : "Próximo"}
                  />
                </PaginationItem>
                {showStartEndButtons ? (
                  <PaginationItem>
                    <PaginationNextButton
                      size={"icon"}
                      variant={variant === "minimalist" ? "outline" : undefined}
                      disabled={current === numberOfPages || disabled}
                      onClick={() => onChangePage && onChangePage(numberOfPages, current)}
                      icon={() => <ChevronsRight />}
                    />
                  </PaginationItem>
                ) : null}
              </>
            )}
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  )
}