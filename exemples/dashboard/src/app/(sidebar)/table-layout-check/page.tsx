"use client";

import { AppConstants } from "@/constants/AppConstants";
import { ListPageLayout, TableDownloadReportOption, TableLayout } from "@/@preview/@potidev/layouts-vulpix-pack";
import { SidebarMainContainer, SidebarToolbar } from "@potidev/react-vulpix-pack";
import { getColumnsTitle, getColumns, tableId } from "./columns";
import { BookingsMock } from "@/mocks/BookingsMock";
import { FileSpreadsheet, Sheet } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { ColumnTitle, delay } from "@potidev/utils-vulpix-pack";
import { Booking } from "@/types/bookings";

const OPTIONS: TableDownloadReportOption[] = [
  {
    id: "xlsx",
    type: "xlsx",
    label: "Baixar em Excel",
    icon: <FileSpreadsheet />
  },
  {
    id: "csv",
    type: "csv",
    label: "Baixar em CSV",
    icon: <Sheet />
  }
]

export default function TableLayoutPage() {
  const [loadingDownload, setLoadingDownload] = useState(false);
  const [rowsLimit, setRowsLimit] = useState<number>(10);
  const [bookings, setBookings] = useState<Booking[]>(BookingsMock);
  const [columnsTitle, setColumnsTitle] = useState<ColumnTitle<any>[]>([]);
  const [extraColumns, setExtraColumns] = useState<ColumnTitle<any>[]>([]);

  const onDownloadReport = async (option: TableDownloadReportOption) => {
    setLoadingDownload(true);
    console.log(option);
    await delay(2000);
    setLoadingDownload(false);
  }
  
  const onSelectLimit = (limit: number) => {
    setRowsLimit(limit);
    setBookings(BookingsMock.slice(0, limit));
  }

  useEffect(() => {
    requestColumnsTitle();
  }, []);


  const requestColumnsTitle = async () => {
    setColumnsTitle(getColumnsTitle());
    await delay(2000);
    const newExtraColumns: ColumnTitle<any>[] = [{
      upLabel: "Extra Columns",
      accessorKey: "teste-1",
      title: "Teste 1",
      defaultVisibility: false,
    },
    {
      accessorKey: "teste-2",
      title: "Teste 2",
      defaultVisibility: false,
    },
    {
      accessorKey: "teste-3",
      title: "Teste 3",
      defaultVisibility: false,
    },
    {
      accessorKey: "teste-4",
      title: "Teste 4",
      defaultVisibility: false,
    },
    {
      accessorKey: "teste-5",
      title: "Teste 5",
      defaultVisibility: false,
    },
    {
      accessorKey: "teste-6",
      title: "Teste 6",
      defaultVisibility: false,
    },
    {
      accessorKey: "teste-7",
      title: "Teste 7",
      defaultVisibility: false,
    },
    {
      accessorKey: "teste-8",
      title: "Teste 8",
      defaultVisibility: false,
    },
    {
      accessorKey: "teste-9",
      title: "Teste 9",
      defaultVisibility: false,
    },
    {
      accessorKey: "teste-10",
      title: "Teste 10",
      defaultVisibility: false,
    },]
    setExtraColumns(newExtraColumns)
    const teste = getColumnsTitle(newExtraColumns);
    setColumnsTitle(teste);
  }

  return (
    <>
      <SidebarToolbar className="z-10" breadcrumbs={[
        { label: AppConstants.SHORT_NAME, href: "/" },
        { label: "TableLayout" },
      ]} />
      <SidebarMainContainer>
        <ListPageLayout title="Comprovantes">
         <TableLayout
            search={{
              searchId: "customer.name",
              placeholder: "Pesquisar pelo nome"
            }}
            columnsTitle={columnsTitle}
            columns={getColumns({ refreshData: () => {}, columnsTitle, extraColumns })}
            data={bookings}
            tableId={tableId}
            pagination={{
              total: BookingsMock.length,
              current: 1,
              limit: rowsLimit,
              limitOptions: [2, 5, 10],
              onSelectLimit,
              disabled: false,
              variant: "minimalist",
              showStartEndButtons: true,
              showPageCounter: true,
            }}
            filters={{
              actives:[
                { value: "ok", key: "status", label: "Status: Ok" },
                { value: "money", key: "payment", label: "Pagamento: Dinheiro" },
              ],
              onRemoveFilter: () => {},
            }}
            report={{
              options: OPTIONS,
              isLoading: loadingDownload,
              onClickDownloadReport: onDownloadReport
            }}
            tableColumnsControlProps={{
              scrollAreaProps: {
                className: "h-96",
              }
            }}
          />
        </ListPageLayout>
      </SidebarMainContainer>
    </>
  );
}
