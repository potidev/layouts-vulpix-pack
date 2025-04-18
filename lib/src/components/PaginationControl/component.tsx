"use client";

import React, { useMemo } from "react";
import { Pagination, PaginationButton, PaginationContent, PaginationItem, PaginationNextButton, PaginationPreviousButton } from "@potidev/react-vulpix-pack";
import { PaginationControlProps } from "./types";

export const PaginationControl = ({ limit, total, current = 0, onClickPage, onClickNext, onClickPrevious, key = "0", hiddenNextPrevWhenDisable = false, }: PaginationControlProps) => {
  const numberOfPages = useMemo(() => {
    return Math.ceil(total / limit);
  }, [total, limit])
  
  const showPrev = useMemo(() => {
    if(hiddenNextPrevWhenDisable) {
      return (current - 1 > 0); 
    }
    return true;
  }, [current, hiddenNextPrevWhenDisable]);

  const showNext = useMemo(() => {
    if(hiddenNextPrevWhenDisable) {
      return (current + 1 <= numberOfPages); 
    }
    return true;
  }, [current, numberOfPages, hiddenNextPrevWhenDisable])

  return (
    <Pagination>
      <PaginationContent className="flex-wrap">
        {showPrev === true && (
          <PaginationItem>
            <PaginationPreviousButton disabled={current === 1} onClick={() => onClickPrevious && onClickPrevious(current - 1)} />
          </PaginationItem>  
        )}
        {Array.from({ length: numberOfPages }).map((_, index) => (
          <PaginationItem key={`PAGINATION_ITEM_${key}_${index}`}>
            <PaginationButton 
              isActive={current === index + 1} 
              onClick={() => onClickPage && onClickPage(index + 1, current)}
            >
              {index + 1}
            </PaginationButton>
          </PaginationItem>
        ))}
        {showNext === true && (
          <PaginationItem>
            <PaginationNextButton disabled={current === numberOfPages} onClick={() => onClickNext && onClickNext(current + 1)}  />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  )
}