import { PaginationControlProps, TableColumnsControlProps, TableDownloadReportProps, TableSearchProps } from "@/components";
import { TableActiveFiltersProps } from "@/components/@table/TableActiveFilters";
import { ColumnTitle } from "@potidev/utils-vulpix-pack";
import { ColumnDef } from "@tanstack/react-table";
import { ReactNode } from "react";

export interface TableLayoutProps<TData, TValue> {
  /**
   * Columns to render the table (Columns and rows view)
   */
  columns: ColumnDef<TData, TValue>[];

  /**
   * Columns titles is used by show and hidden columns in the Select component and storage. Also set the default shows columns and save in storage the changes.
   */
  columnsTitle?: ColumnTitle<TData>[];

  /**
   * Data to show in table
   */
  data: TData[];

  /**
   * Setup the search input props
   */
  search?: Omit<TableSearchProps<TData>, "table">;

  /**
   * Table id to save informations in client storage
   */
  tableId?: string;

  /**
   * Setup the pagination component props
   */
  pagination?: PaginationControlProps;
  
  /**
   * Message when table is empty. By default is "Sem resultados"
   */
  emptyListMessage?: ReactNode;


  /**
   * Setup the filter component props
   */ 
  filters?: TableActiveFiltersProps;

  /**
   * 
   */
  report?: TableDownloadReportProps;

  tableColumnsControlProps?: Omit<TableColumnsControlProps<TData>, "table" | "columnsTitle">;
}