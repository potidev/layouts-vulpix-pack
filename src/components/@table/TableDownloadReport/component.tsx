import React from "react";

import { Button, cn, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@potidev/react-vulpix-pack";
import { TableDownloadReportProps } from "./types";
import { ChevronDown, LoaderCircle } from "lucide-react";

export const TableDownloadReport = ({ className, title = "Exportar relatório", isLoading = false, onClickDownloadReport, options }: TableDownloadReportProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="secondary"
          className={cn("justify-between ml-auto md:w-fit md:justify-center cursor-pointer", className)}
          fullWidth
          disabled={isLoading}
        >
          {title}
          {isLoading ? (
            <LoaderCircle className="animate-spin h-4 w-4" />
          ) : (
            <ChevronDown />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {
          options && options.length > 0 && options.map((option, index) => (
            <DropdownMenuItem
              onClick={() => onClickDownloadReport && onClickDownloadReport(option)}
              key={`REPORT_OPTION_${index}`}
              disabled={isLoading}
            >
              {option.icon}
              {option.label}
            </DropdownMenuItem>
          ))
        }
      </DropdownMenuContent>
    </DropdownMenu>
  );
};