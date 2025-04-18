export type PaginationControlProps = {
  total: number;
  limit: number;
  current: number;
  onClickPage?: (page: number, active?: number) => void;
  onClickNext?: (nextPage: number) => void;
  onClickPrevious?: (previous: number) => void;
  key?: string;
  hiddenNextPrevWhenDisable?: boolean;
}