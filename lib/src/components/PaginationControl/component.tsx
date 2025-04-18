"use client";

import React, { useMemo } from "react";
import { Pagination, PaginationButton, PaginationContent, PaginationItem, PaginationNextButton, PaginationPreviousButton } from "@potidev/react-vulpix-pack";
import { PaginationControlProps } from "./types";

export const PaginationControl = ({ limit, total, active = 0, onClickPage, onClickNext, onClickPrevious, key = "0" }: PaginationControlProps) => {
  const numberOfPages = useMemo(() => {
    return Math.ceil(total / limit);
  }, [])

  return (
    <Pagination>
      <PaginationContent className="flex-wrap">
        <PaginationItem>
          <PaginationPreviousButton disabled={active === 1} onClick={() => onClickPrevious && onClickPrevious(active - 1)} />
        </PaginationItem>
        {Array.from({ length: numberOfPages }).map((_, index) => (
          <PaginationItem key={`PAGINATION_ITEM_${key}_${index}`}>
            <PaginationButton 
              isActive={active === index + 1} 
              onClick={() => onClickPage && onClickPage(index + 1, active)}
            >
              {index + 1}
            </PaginationButton>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNextButton disabled={active === numberOfPages} onClick={() => onClickPrevious && onClickPrevious(active + 1)}  />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}