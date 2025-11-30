import React from "react";

import { cn } from "@potidev/react-vulpix-pack";
import { FormLayoutProps } from "./types";

export const FormLayout = ({ className, children }: FormLayoutProps) => {
  return (
    <div className={cn("flex flex-col gap-4", className)}>
      {children}
    </div>
  );
};