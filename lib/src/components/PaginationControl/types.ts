export type PaginationControlProps = {
  total: number;
  limit: number;
  active: number;
  onClickPage?: (page: number, active?: number) => void;
  onClickNext?: (nextPage: number) => void;
  onClickPrevious?: (previous: number) => void;
  key?: string;
}