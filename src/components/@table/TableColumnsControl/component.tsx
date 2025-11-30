import React from "react";

import { Button, cn, DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger, ScrollArea, Separator } from "@potidev/react-vulpix-pack";
import { ChevronDown, ListRestart } from "lucide-react";
import { TableColumnsControlProps } from "./types";
import { ColumnUtils } from "@potidev/utils-vulpix-pack";

export function TableColumnsControl<TData>({
  className,
  table,
  columnsTitle,
  contentClassName,
  scrollAreaProps,
  label = "Colunas",
  resetColumnsIcon = ({ className }) => <ListRestart className={className} />,
  resetColumnsLabel = "Restaurar colunas",
  resetColumnsTooltip = "Retaurar colunas para a visualização padrão",
  withoutRestoreReset = false,
  onClickResetColumns,
}: TableColumnsControlProps<TData>) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={cn(className)} asChild>
        <Button
          variant="outline"
          className="justify-between ml-auto md:w-fit md:justify-center"
          fullWidth
        >
          {label}
          <ChevronDown />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className={cn("p-0", contentClassName)}>
        <ScrollArea {...scrollAreaProps} className={cn("p-1", scrollAreaProps && scrollAreaProps.className ? scrollAreaProps.className : undefined)}>
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
        {
          withoutRestoreReset === false ? (
            <>
              <Separator />
              <div className="p-1">
                <DropdownMenuItem onClick={onClickResetColumns} title={resetColumnsTooltip}>
                  {resetColumnsIcon({ className: "" })}
                  {resetColumnsLabel}
                </DropdownMenuItem>
              </div>
            </>
          ) : null
        }
      </DropdownMenuContent>
    </DropdownMenu>
  );
};