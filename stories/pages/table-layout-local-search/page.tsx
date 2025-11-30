"use client";

import React from "react";

import { AppConstants } from "../../constants/AppConstants";
import { SidebarMainContainer, SidebarToolbar } from "@potidev/react-vulpix-pack";
import { columnsTitle, getColumns, tableId } from "./columns";
import { BookingsMock } from "../../mocks/BookingsMock";
import { SidebarContainer } from "../../components/SidebarContainer";

import { ListPageLayout, TableLayout } from "../../../src"

export default function TableLayoutPage() {
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
            data={BookingsMock}
            tableId={tableId}
            pagination={{
              total: BookingsMock.length,
              current: 1,
              limit: 100,
            }}
            filters={{
              actives:[
                { value: "ok", key: "status", label: "Status: Ok" },
                { value: "money", key: "payment", label: "Pagamento: Dinheiro" },
              ],
              onRemoveFilter: () => {},
            }}
          />
        </ListPageLayout>
      </SidebarMainContainer>
    </SidebarContainer>
  );
}
