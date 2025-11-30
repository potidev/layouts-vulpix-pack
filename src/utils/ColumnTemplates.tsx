import React from "react";

import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import { Button } from "@potidev/react-vulpix-pack";
import { ArrowUpDown } from "lucide-react";
import { ColumnTitle, ColumnUtils, CreatedAt, UpdatedAt } from "@potidev/utils-vulpix-pack";

export class ColumnTemplates {
  static getCreatedAt = <T extends CreatedAt>(columnsTitle: ColumnTitle<T>[]): ColumnDef<T> => {
    return {
      accessorKey: "createdAt",
      id: "createdAt",
      header: ({ column }) => {
        return (
          <Button
            variant="ghostText"
            className="p-0"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            {ColumnUtils.getColumnTitleByAccessorKeyString(columnsTitle, column.id)}
            <ArrowUpDown className="w-4 h-4" />
          </Button>
        )
      },
      cell: ({ row }) => {
        const obj = row.original;
        return format(obj.createdAt, "dd/MM/yyyy 'às' HH:mm");
      },
      sortingFn: (rowA, rowB) => {
        const dateA = new Date(rowA.getValue("createdAt"));
        const dateB = new Date(rowB.getValue("createdAt"));
        return dateA.getTime() - dateB.getTime();
      },
    }
  }

  static getUpdatedAt = <T extends UpdatedAt>(columnsTitle: ColumnTitle<T>[]): ColumnDef<T> => {
    return {
      accessorKey: "updatedAt",
      id: "updatedAt",
      header: ({ column }) => {
        return (
          <Button
            variant="ghostText"
            className="p-0"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            {ColumnUtils.getColumnTitleByAccessorKeyString(columnsTitle, column.id)}
            <ArrowUpDown className="w-4 h-4" />
          </Button>
        )
      },
      cell: ({ row }) => {
        const user = row.original
        return user.updatedAt ? format(user.updatedAt, "dd/MM/yyyy 'às' HH:mm") : "-";
      },
      sortingFn: (rowA, rowB) => {
        const dateA = new Date(rowA.getValue("updatedAt"));
        const dateB = new Date(rowB.getValue("updatedAt"));
        return dateA.getTime() - dateB.getTime();
      },
    }
  }
}