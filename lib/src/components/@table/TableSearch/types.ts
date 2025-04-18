import { Table } from "@tanstack/react-table";

export interface TableSearchProps<TData> {
  /**
   * Container className
   */
  className?: string;

  /**
   * Input className
   */
  inputClassName?: string;

  /**
   * Search place holder
   */
  placeholder?: string;

  /**
   * useState: Search value when searchType === "external"
   */
  value?: string;

  /**
   * useState: callback when input set value and searchType === "external"  
   */
  setValue?: (value?: string) => void;

  /**
   * Search type value
   */
  searchType?: "without" | "local" | "external";
  searchId?: (string & {}) | keyof TData;
  rightSearch?: React.ReactNode;
  table: Table<TData>;
};