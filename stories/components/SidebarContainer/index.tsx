"use client";

import React from "react";

import { SidebarInset, SidebarProvider } from "@potidev/react-vulpix-pack";
import { MySidebar } from "../MySidebar";

type SidebarContainerProps = {
  children: React.ReactNode;
}

export const SidebarContainer = ({
  children,
}: SidebarContainerProps) => {
  return (
    <SidebarProvider>
      <MySidebar />
      <SidebarInset>
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}
