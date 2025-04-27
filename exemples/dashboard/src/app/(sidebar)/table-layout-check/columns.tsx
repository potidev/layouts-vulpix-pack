"use client";

import React from "react";

import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"

import { Button, Checkbox, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@potidev/react-vulpix-pack";
import { ColumnTitle, ColumnUtils } from "@potidev/utils-vulpix-pack";
import { Booking } from "@/types/bookings";
import { BookingPaymentMethodLabel } from "@/constants/BookingPaymentMethodConstants";
import { BookingStatusLabel } from "@/constants/BookingStatusConstants";

export const tableId = "list-bookings";

export const columnsTitle: ColumnTitle<Booking>[] = [
  {
    accessorKey: "check",
    title: "Check",
    defaultVisibility: true,
    className: "max-w-[80px]"
  },
  {
    accessorKey: "id",
    title: "ID",
    defaultVisibility: false,
  },
  {
    accessorKey: "customer.name",
    title: "Cliente",
    defaultVisibility: true,
  },
  {
    accessorKey: "paymentMethod",
    title: "Método de Pagamento",
    defaultVisibility: true,
  },
  {
    accessorKey: "status",
    title: "Status",
    defaultVisibility: true,
  },
]

type GetColumnsParams = {
  refreshData: () => void;
}

export const getColumns = ({ refreshData }: GetColumnsParams): ColumnDef<Booking>[] => {
  return [
    {
      accessorKey: "check",
      id: "check",
      header: ({ column }) => ColumnUtils.getColumnTitleByAccessorKey<Booking>(columnsTitle, "check"),
      cell: ({ row }) => {
        const data = row.original;
        return (
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
          </div>
        )
      }
    },
    {
      accessorKey: "id",
      id: "id",
      header: ({ column }) => ColumnUtils.getColumnTitleByAccessorKey<Booking>(columnsTitle, "id"),
      cell: ({ row }) => {
        const data = row.original;
        return data.id;
      }
    },
    {
      accessorKey: "customer.name",
      id: "customer.name",
      header: ({ column }) => {
        return (
          <Button
            variant="ghostText"
            className="p-0"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            {ColumnUtils.getColumnTitleByAccessorKey<Booking>(columnsTitle, "customer.name")}
            <ArrowUpDown className="w-4 h-4" />
          </Button>
        )
      },
      cell: ({ row }) => {
        const data = row.original;
        const name = data.customer.name;
        return name;
      }
    },
    {
      accessorKey: "paymentMethod",
      id: "paymentMethod",
      header: ColumnUtils.getColumnTitleByAccessorKey<Booking>(columnsTitle, "paymentMethod"),
      cell: ({ row }) => {
        const data = row.original;
        const { paymentMethod } = data;
        return BookingPaymentMethodLabel[paymentMethod] || paymentMethod;
      }
    },
    {
      accessorKey: "status",
      id: "status",
      header: ColumnUtils.getColumnTitleByAccessorKey<Booking>(columnsTitle, "status"),
      cell: ({ row }) => {
        const data = row.original;
        return BookingStatusLabel[data.status] || data.status;
      }
    },
    {
      id: "actions",
      header: "Ações",
      cell: ({ row }) => {
        const data = row.original

        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" style={{ padding: 0, width: 32, height: 32 }}>
                <span className="sr-only">Abrir Ações</span>
                <MoreHorizontal style={{ padding: 0, width: 16, height: 16 }} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem
                onClick={() => navigator.clipboard.writeText(data.id)}
              >
                Copiar ID
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => navigator.clipboard.writeText(data.eventId)}
              >
                Copiar ID do Evento
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )
      },
    },
  ]
};