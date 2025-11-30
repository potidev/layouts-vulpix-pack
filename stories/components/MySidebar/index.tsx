"use client";

import React from "react";
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarLogo, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@potidev/react-vulpix-pack";
import { Calendar, ReceiptText, Ticket } from "lucide-react";

export const MySidebar = () => {  
  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <SidebarHeader>
          <SidebarLogo title={"Layouts Vulpix Pack"} src="/images/logo.png" />
        </SidebarHeader>
        <SidebarGroup>
          <SidebarGroupLabel>Navegação</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <ReceiptText />
                  <span>Comprovantes</span>
                </SidebarMenuButton>
                <SidebarMenuButton>
                  <Calendar />
                  <span>Eventos</span>
                </SidebarMenuButton>
                <SidebarMenuButton>
                  <Ticket />
                  <span>Ingressos</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}