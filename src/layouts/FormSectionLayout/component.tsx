import React from "react";
import { cn } from "@potidev/react-vulpix-pack";
import type { SimpleFormLayoutProps } from "./types";

export const FormSectionLayout = ({ className, children }: SimpleFormLayoutProps) => {
  return (
    <section className={cn("flex flex-col gap-4 md:gap-8", className)}>
      {children}
    </section>
  );
};