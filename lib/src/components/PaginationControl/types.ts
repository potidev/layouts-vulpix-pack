import { ReactNode } from "react";

export type PaginationControlVariant = "labels" | "minimalist";

export type PaginationControlProps = {
  /**
   * Container className
   */
  className?: string;

  /**
   * Variant do pagination control
   * "labels" (padrão): Exibe a paginação classica com textos de "Próximo" e "Anterior".
   * "minimalist": Exibe uma paginação baseada em icones sem exibir os números
   */
  variant?: PaginationControlVariant;

  /**
   * Select trigger className
   */
  selectClassName?: string;

  /**
   * Total value of items in table
   */
  total: number;

  /**
   * Rows limit per page
   */
  limit: number;

  /**
   * Current page
   */
  current: number;

  /**
   * execute when click any navigation button
   * @param page clicked page number
   * @param activePage active page number
   * @returns 
   */
  onChangePage?: (page: number, activePage?: number) => void;
  
  key?: string;
  
  /**
   * If true: Not show next and previus button in pagination
   * By default: false
   */
  hiddenNextPrevWhenDisable?: boolean;

  /**
   * Options to select limit
   */
  limitOptions?: number[];

  /**
   * Limit options label
   * By default: "Linhas por página"
   */
  limitOptionsLabel?: string;

  /**
   * If true: Disable pagination
   * By default: false
   */
  disabled?: boolean;

  /**
   * Execute when some limit option is selected
   * @param selectedLimit selected limit
   * @returns 
   */
  onSelectLimit?: (selectedLimit: number) => void;

  showStartEndButtons?: boolean;

  showPageCounter?: boolean;

  renderPageCounter?: (current: number, numberOfPages: number) => ReactNode; 
}