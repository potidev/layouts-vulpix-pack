import React from "react";

import { Button, ButtonProps, cn } from "@potidev/react-vulpix-pack";
import { Loader2, Search } from "lucide-react";

export type SearchButtonProps = Omit<ButtonProps, "children" | "size" | "asChild"> & {
  isLoading?: boolean;
};

export const SearchButton = ({ className, isLoading = false, disabled = false, ...props }: SearchButtonProps) => {
  return (
    <Button variant="outline" size="iconMd" className={cn("min-w-9", className)} {...props} disabled={disabled || isLoading}>
      {isLoading ? <Loader2 className="animate-spin" /> : <Search />}
    </Button>
  );
};