import { ScrollAreaProps } from "@potidev/react-vulpix-pack";
import { ColumnTitle } from "@potidev/utils-vulpix-pack";
import { Table } from "@tanstack/react-table";
import { ReactNode } from "react";

export type TableColumnsControlProps<TData> = {
  className?: string;
  table: Table<TData>;
  columnsTitle?: ColumnTitle<TData>[];
  contentClassName?: string;
  scrollAreaProps?: Omit<ScrollAreaProps, "children">;
  label?: string;
  withoutRestoreReset?: boolean;
  resetColumnsLabel?: string;
  resetColumnsTooltip?: string;
  resetColumnsIcon?: (params: { className: string }) => ReactNode;
  onClickResetColumns?: () => void;
};