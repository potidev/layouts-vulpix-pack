"use client";

import React, { useState } from "react";

import { AppConstants } from "../../constants/AppConstants";
import { Button, SidebarMainContainer, SidebarToolbar } from "@potidev/react-vulpix-pack";
import { columnsTitle, getColumns, tableId } from "./columns";
import { BookingsMock } from "../../mocks/BookingsMock";

import { Booking } from "../../types/bookings";
import { ListPageLayout, TableDownloadReportOption, TableLayout } from "../../../src"
import { Eye, FileSpreadsheet, Save, Sheet } from "lucide-react";
import { delay } from "@potidev/utils-vulpix-pack";
import { SidebarContainer } from "../../components/SidebarContainer";

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

  return (
    <SidebarContainer>
      <SidebarToolbar className="z-10" breadcrumbs={[
        { label: AppConstants.SHORT_NAME, href: "/" },
        { label: "TableLayout" },
      ]} />
      <SidebarMainContainer>
        <ListPageLayout 
          title="Comprovantes"
          description="Veja todos os comprovantes de inscrição, venda ou reserva."
          createHref="/create"
          extraContent={(
             <>
              <Button variant="outline" className="gap-2">
                <Eye />
                Ver evento
              </Button>

              <Button className="gap-2" variant={"default"}>
                <Save />
                Salvar
              </Button>
            </>
          )}
        >
         <TableLayout
            search={{
              searchId: "customer.name",
              placeholder: "Pesquisar pelo nome"
            }}
            columnsTitle={columnsTitle}
            columns={getColumns({ refreshData: () => {} })}
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
          />
        </ListPageLayout>
      </SidebarMainContainer>
    </SidebarContainer>
  );
}
