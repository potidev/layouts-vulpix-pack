import React from "react";

import { Button, cn, DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuLabel, DropdownMenuTrigger, ScrollArea } from "@potidev/react-vulpix-pack";
import { ChevronDown } from "lucide-react";
import { TableColumnsControlProps } from "./types";
import { ColumnUtils } from "@potidev/utils-vulpix-pack";

export function TableColumnsControl<TData>({ className, table, columnsTitle, contentClassName, scrollAreaProps }: TableColumnsControlProps<TData>) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={cn(className)} asChild>
        <Button
          variant="outline"
          className="justify-between ml-auto md:w-fit md:justify-center"
          fullWidth
        >
          Campos
          <ChevronDown />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className={contentClassName}>
        <ScrollArea {...scrollAreaProps} className={cn("max-h-96", scrollAreaProps?.className)}>
          {table
            .getAllColumns()
            .filter(
              (column) => column.getCanHide() && column.id !== "actions"
            )
            .map((column, index) => {
              const columnTitleString = ColumnUtils.getColumnTitleByAccessorKeyString<TData>(columnsTitle, column.id);
              const columnTitle = columnsTitle.find((columnT) => columnT.accessorKey === column.id);
              return (
                <React.Fragment key={column.id}>
                  {columnTitle && columnTitle.upLabel ? <DropdownMenuLabel className={cn(index === 0 ? "" : "mt-2")}>{columnTitle.upLabel}</DropdownMenuLabel> : null}
                  <DropdownMenuCheckboxItem
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {columnsTitle
                      ? columnTitleString
                      : column.id}
                  </DropdownMenuCheckboxItem>
                  {columnTitle && columnTitle.downLabel ? <DropdownMenuLabel className="mt-2">{columnTitle.downLabel}</DropdownMenuLabel> : null}
                </React.Fragment>
              );
            })}
        </ScrollArea>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};