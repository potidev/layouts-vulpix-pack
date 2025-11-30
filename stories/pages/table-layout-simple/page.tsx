"use client";

import React, { useState } from "react";

import { AppConstants } from "../../constants/AppConstants";
import { SidebarMainContainer, SidebarToolbar } from "@potidev/react-vulpix-pack";
import { columnsTitle, getColumns, tableId } from "./columns";
import { BookingsMock } from "../../mocks/BookingsMock";
import { SidebarContainer } from "../../components/SidebarContainer";

import { Booking } from "../../types/bookings";
import { ListPageLayout, TableLayout } from "../../../src"

export const TableLayoutSimple = () => {
  const [bookings, setBookings] = useState<Booking[]>(BookingsMock);

  return (
      <SidebarContainer>
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
      </SidebarContainer>
  );
}
