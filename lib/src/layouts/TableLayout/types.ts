import { PaginationControlProps, TableSearchProps } from "@/components";
import { TableActiveFiltersProps } from "@/components/@table/TableActiveFilters";
import { ColumnTitle } from "@potidev/utils-vulpix-pack";
import { ColumnDef } from "@tanstack/react-table";

export interface TableLayoutProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  columnsTitle?: ColumnTitle<TData>[];
  data: TData[];
  search?: Omit<TableSearchProps<TData>, "table">;
  tableId?: string;
  loadingReport?: boolean;
  pagination?: PaginationControlProps;
  onDownloadReport?: (format: "xlsx" | "csv") => void;
  emptyListMessage?: string;
  filters?: TableActiveFiltersProps;
}