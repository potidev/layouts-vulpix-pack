import { ColumnTitle } from "@potidev/utils-vulpix-pack";
import { Table } from "@tanstack/react-table";

export type TableColumnsControlProps<TData> = {
  className?: string;
  table: Table<TData>;
  columnsTitle?: ColumnTitle<TData>[];
  scrollAreaClassName?: string;
  contentClassName?: string;
};