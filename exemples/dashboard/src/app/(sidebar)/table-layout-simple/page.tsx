"use client";

import { AppConstants } from "@/constants/AppConstants";
import { ListPageLayout, TableLayout } from "@/@preview/@potidev/layouts-vulpix-pack";
import { SidebarMainContainer, SidebarToolbar } from "@potidev/react-vulpix-pack";
import { columnsTitle, getColumns, tableId } from "./columns";
import { BookingsMock } from "@/mocks/BookingsMock";
import { useState } from "react";
import { Booking } from "@/types/bookings";

export default function TableLayoutPage() {
  const [bookings, setBookings] = useState<Booking[]>(BookingsMock);

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
            columns={getColumns({ refreshData: () => {} })}
            data={bookings}
            tableId={tableId}
          />
        </ListPageLayout>
      </SidebarMainContainer>
    </>
  );
}
