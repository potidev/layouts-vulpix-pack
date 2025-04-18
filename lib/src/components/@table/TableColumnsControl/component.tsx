import React from "react";

import { Button, cn, DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuTrigger } from "@potidev/react-vulpix-pack";
import { ChevronDown } from "lucide-react";
import { TableColumnsControlProps } from "./types";
import { ColumnUtils } from "@potidev/utils-vulpix-pack";

export function TableColumnsControl<TData>({ className, table, columnsTitle }: TableColumnsControlProps<TData>) {
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
      <DropdownMenuContent align="end">
        {table
          .getAllColumns()
          .filter(
            (column) => column.getCanHide() && column.id !== "actions"
          )
          .map((column) => {
            return (
              <DropdownMenuCheckboxItem
                key={column.id}
                className="capitalize"
                checked={column.getIsVisible()}
                onCheckedChange={(value) =>
                  column.toggleVisibility(!!value)
                }
              >
                {columnsTitle
                  ? ColumnUtils.getColumnTitleByAccessorKeyString<TData>(columnsTitle, column.id)
                  : column.id}
              </DropdownMenuCheckboxItem>
            );
          })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};