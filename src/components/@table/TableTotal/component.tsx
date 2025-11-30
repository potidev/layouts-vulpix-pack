import React, { ReactNode } from "react";

import { Card, cn } from "@potidev/react-vulpix-pack";

type TableTotalProps = {
  className?: string;
  total: ReactNode;
  label?: string;
};

export const TableTotal = ({ className, total, label = "Total:" }: TableTotalProps) => {
  return (
    <Card
      withoutDefaultPadding
      className={cn("flex items-center px-4 py-2 md:py-0 rounded-md text-sm", className)}
    >
      <span className="mr-1 font-medium">{label}</span> {total}
    </Card>
  );
};