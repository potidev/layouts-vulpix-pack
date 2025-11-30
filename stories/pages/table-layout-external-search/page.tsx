"use client";

import React, { useState } from "react";

import { AppConstants } from "../../constants/AppConstants";
import { Button, SidebarMainContainer, SidebarToolbar } from "@potidev/react-vulpix-pack";
import { columnsTitle, getColumns, tableId } from "./columns";
import { BookingsMock } from "../../mocks/BookingsMock";
import { SidebarContainer } from "../../components/SidebarContainer";

import { ListPageLayout, TableLayout } from "../../../src"
import { Booking } from "../../types/bookings";
import { delay } from "@potidev/utils-vulpix-pack";

export default function TableLayoutPage() {
  const [bookings, setBookings] = useState<Booking[]>(BookingsMock);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmitSearch = async (search: string) => {
    setIsLoading(true);
    const filterList = BookingsMock.filter(item => item.customer.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())) || [];
    await delay(2000);
    setIsLoading(false);
    setBookings(filterList);
  }

  return (
    <SidebarContainer>
      <SidebarToolbar className="z-10" breadcrumbs={[
        { label: AppConstants.SHORT_NAME, href: "/" },
        { label: "TableLayout" },
      ]} />
      <ListPageLayout title="Comprovantes">
        <TableLayout
          search={{
            searchType: "external",
            searchId: "customer.name",
            placeholder: "Pesquisar pelo nome",
            searchButton: true,
            isLoading,
            onSubmitSearch,
            rightSearch: <Button>Limpar</Button>,
          }}
          columnsTitle={columnsTitle}
          columns={getColumns({ refreshData: () => { } })}
          data={bookings}
          tableId={tableId}
          pagination={{
            total: 300,
            current: 2,
            limit: 100,
          }}
          filters={{
            actives: [
              { value: "ok", key: "status", label: "Status: Ok" },
              { value: "money", key: "payment", label: "Pagamento: Dinheiro" },
            ],
            onRemoveFilter: () => { },
          }}
        />
      </ListPageLayout>
    </SidebarContainer>
  );
}
