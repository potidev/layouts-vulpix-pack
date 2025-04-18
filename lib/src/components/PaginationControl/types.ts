export type PaginationControlProps = {
  /**
   * Container className
   */
  className?: string;

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
   * execute when click in a number of pagination
   * @param page clicked page number
   * @param active active page number
   * @returns 
   */
  onClickPage?: (page: number, active?: number) => void;

  /**
   * execute when click in next button of pagination
   * @param nextPage next page number
   * @returns 
   */
  onClickNext?: (nextPage: number) => void;

  /**
   * execute when click in previous button of pagination
   * @param nextPage previous page number
   * @returns 
   */
  onClickPrevious?: (previous: number) => void;
  
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
}