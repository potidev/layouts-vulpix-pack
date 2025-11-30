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
    <div className={cn(state === "expanded" ? "md:max-w-[calc(100vw-var(--sidebar-width)-32px)]" : "md:max-w-[calc(100vw-47px-32px)]", "max-w-[calc(100vw-24px)]", className)}>
      {children}
    </div>
  );
};