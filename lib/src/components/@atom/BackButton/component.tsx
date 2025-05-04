import React from "react";

import { Button, cn } from "@potidev/react-vulpix-pack";
import { ArrowLeft } from "lucide-react";
import { BackButtonProps } from "./types";

export const BackButton = ({ variant = "ghost", size = "iconMd", iconClassName, ...props }: BackButtonProps) => {
  return (
    <Button size={size} variant={variant} {...props}>
      <ArrowLeft className={cn('h-4 w-4 sm:h-5 sm:w-5', iconClassName)} />
    </Button>
  );
};