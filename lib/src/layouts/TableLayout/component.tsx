"use client";

import * as React from "react";

import {
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  VisibilityState,
} from "@tanstack/react-table";

import {
  cn,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@potidev/react-vulpix-pack";

import { ColumnTitle, ColumnUtils, ColumnVisibilityStorage } from "@potidev/utils-vulpix-pack";

import { TableLimit, PaginationControl, TableSearch, TableColumnsControl, TableTotal, TableDownloadReport } from "@/components";

import { TableLayoutProps } from "./types";
import { TableActiveFilters } from "@/components/@table/TableActiveFilters";

export function TableLayout<TData, TValue>({
  columns,
  data,
  search,
  columnsTitle,
  tableId,
  filters,
  report,
  pagination,
  emptyListMessage = "Sem resultados",
  tableColumnsControlProps,
}: TableLayoutProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>();

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: (updater) => {
      const newVisibility = typeof updater === "function" ? updater(columnVisibility) : updater;
      tableId && ColumnVisibilityStorage.save(tableId, newVisibility);
      return setColumnVisibility(updater);
    },
    state: {
      sorting,
      columnFilters,
      columnVisibility,
    },
  });

  React.useEffect(() => {
    handleColumnVisibility(columnsTitle);
  }, [columnsTitle]);

  const handleColumnVisibility = (newColumns: ColumnTitle<TData>[]) => {
    if (tableId) {
      const columnVisibilityStorage = ColumnVisibilityStorage.read(tableId) || {};
      if (columnVisibilityStorage) {
        let newVisibilitiesToStorage: VisibilityState = {};

        for (let index = 0; index < newColumns.length; index++) {
          const item = newColumns[index];
          const key = item.accessorKey.toString();
          if (columnVisibilityStorage[key] === undefined) {
            newVisibilitiesToStorage[key] = item.defaultVisibility;
          } else {
            newVisibilitiesToStorage[key] = columnVisibilityStorage[key];
          }
        }

        const finalVisibility = { ...columnVisibilityStorage, ...newVisibilitiesToStorage };

        table.setColumnVisibility(finalVisibility);
        return;
      }
    }
  };

  return (
    <div className="flex flex-col w-full gap-6">
      <div className="flex flex-col gap-3 md:gap-3">
        <div className="flex w-full gap-2 flex-col md:flex-row">
          <TableSearch table={table} {...search} />

          {report && (
            <div className="flex flex-col gap-2 md:flex-row w-full md:w-fit">
              <TableDownloadReport {...report} />
            </div>
          )}

          <div className="flex flex-col gap-2 md:flex-row w-full md:w-fit">
            {columnsTitle ? <TableColumnsControl table={table} columnsTitle={columnsTitle} {...tableColumnsControlProps} /> : null}
            {pagination && pagination.total !== undefined && pagination.total !== 0 ? <TableTotal total={pagination.total} /> : null}
          </div>
        </div>

        {filters ? <TableActiveFilters {...filters} className={cn("ml-0.5", filters.className)} /> : null}
      </div>

      <TableLimit className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  const columnTitle = columnsTitle?.find((col) => col.accessorKey === header.id);
                  return (
                    <TableHead key={header.id} className={columnTitle?.className}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-[57px] text-center"
                >
                  {emptyListMessage}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableLimit>

      {pagination && <PaginationControl {...pagination} />}
    </div>
  );
}
