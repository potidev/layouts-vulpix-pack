import React from "react";

import { cn } from "@potidev/react-vulpix-pack";

type LayoutsProps = {
  className?: string;
};

export const Layouts = ({ className }: LayoutsProps) => {
  return (
    <div className={cn('flex flex-col', className)}>
      Layouts
    </div>
  );
};