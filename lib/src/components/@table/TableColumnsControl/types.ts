import { ScrollAreaProps } from "@potidev/react-vulpix-pack";
import { ColumnTitle } from "@potidev/utils-vulpix-pack";
import { Table } from "@tanstack/react-table";

export type TableColumnsControlProps<TData> = {
  className?: string;
  table: Table<TData>;
  columnsTitle?: ColumnTitle<TData>[];
  contentClassName?: string;
  scrollAreaProps?: Omit<ScrollAreaProps, "children">;
  label?: string;
};