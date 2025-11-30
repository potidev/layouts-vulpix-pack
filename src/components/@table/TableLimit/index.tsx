"use client";

import React, { ReactNode } from "react";

import { cn, useSidebar } from "@potidev/react-vulpix-pack";

type TableLimitProps = {
  className?: string;
  children: ReactNode;
};

export const TableLimit = ({ className, children }: TableLimitProps) => {
  const { state } = useSidebar();

  return (
    <div className={cn(state === "expanded" ? "md:max-w-[calc(100vw-var(--sidebar-width)-calc(var(--page-horizontal-padding-md)*2))]" : "md:max-w-[calc(100vw-47px-calc(var(--page-horizontal-padding)*2))]", "max-w-[calc(100dvw-calc(var(--page-horizontal-padding)*2))]", className)}>
      {children}
    </div>
  );
};