import { SearchButtonProps } from "@/components/@atom";
import { Table } from "@tanstack/react-table";

export interface TableSearchProps<TData> {
  /**
   * Container className
   */
  className?: string;

  /**
   * Disable the input
   */
  disabled?: boolean;

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
  setValue?: (value: string) => void;

  /**
   * Search type value
   */
  searchType?: "without" | "local" | "external";

  /**
   * Define the column in table to be the key search if searchType === "local" (Set by default). If searchType !== "local", does nothing.
   */
  searchId?: (string & {}) | keyof TData;

  /**
   * Content show in right position to the search and after the search button if enable. On mobile, they remain side by side.
   */
  rightSearch?: React.ReactNode;

  /**
   * Right search container className. This container include the search button if enable
   */
  rightSearchClassName?: string;

  /**
   * Table data to search if searchType === "local" (Set by default).
   */
  table: Table<TData>;

  /**
   * Show the search button
   */
  searchButton?: boolean;

  /**
   * Setup the SearchButton props
   */
  searchButtonProps?: Omit<SearchButtonProps, "onClick">;

  /**
   * Run when search button or enter press in input
   */
  onSubmitSearch?: () => void;

  /**
   * If true, disable the input and show the loading in button.
   */
  isLoading?: boolean;
};