import React, { ReactNode } from "react";

import { cn } from "@potidev/react-vulpix-pack";

export type PageMaxContentProps = {
  className?: string;
  contentClassName?: string;
  disabled?: boolean;
  children?: ReactNode;
};

export const PageMaxContent = ({ className, contentClassName, disabled = false, children }: PageMaxContentProps) => {
  if(disabled === true) {
    return (
      <div className={cn("page-horizontal-padding", className, contentClassName)}>
        {children}
      </div>
    );
  }

  return (
    <div className={cn('flex flex-col items-center w-full page-horizontal-padding', className)}>
      <div className={cn("flex flex-col w-full max-w-page-max-content", contentClassName)}>
        {children}
      </div>
    </div>
  );
};