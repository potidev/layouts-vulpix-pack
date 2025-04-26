"use client";

import { usePathname } from 'next/navigation';
import Link from "next/link";
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarLogo, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarSeparator } from "@potidev/react-vulpix-pack";
import { LayoutDashboard } from "lucide-react";

export const MySidebar = () => {
  const pathname = usePathname();
  
  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <SidebarHeader>
          <SidebarLogo title={"Dashboard Layouts"} src="/images/logo.png" />
        </SidebarHeader>
        <SidebarGroup>
          <SidebarGroupLabel>Table Layout</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={"/table-layout-local-search" === pathname}>
                  <Link href={"/table-layout-local-search"}>
                    <LayoutDashboard />
                    <span>Table Layout Local Search</span>
                  </Link>
                </SidebarMenuButton>
                <SidebarMenuButton asChild isActive={"/table-layout-external-search" === pathname}>
                  <Link href={"/table-layout-external-search"}>
                    <LayoutDashboard />
                    <span>Table Layout External Search</span>
                  </Link>
                </SidebarMenuButton>
                <SidebarMenuButton asChild isActive={"/table-layout-with-report" === pathname}>
                  <Link href={"/table-layout-with-report"}>
                    <LayoutDashboard />
                    <span>Table Layout With Report</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarSeparator />
        <SidebarGroup>
          <SidebarGroupLabel>Form Layout</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={"/form-page-layout" === pathname}>
                  <Link href={"/form-page-layout"}>
                    <LayoutDashboard />
                    <span>Form Page Layout</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}