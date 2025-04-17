"use client";

import { usePathname } from 'next/navigation';
import Link from "next/link";
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarLogo, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarSeparator } from "@potidev/react-vulpix-pack";
import { LayoutDashboard } from "lucide-react";;

export const MySidebar = () => {
  const pathname = usePathname();
  
  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <SidebarHeader>
          <SidebarLogo title={"Dashboard Layouts"} src="/images/logo.png" />
        </SidebarHeader>
        <SidebarGroup>
          <SidebarGroupLabel>Layouts</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={"/table-layout" === pathname}>
                  <Link href={"/table-layout"}>
                    <LayoutDashboard />
                    <span>Table Layout</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarSeparator />
      </SidebarContent>
    </Sidebar>
  )
}