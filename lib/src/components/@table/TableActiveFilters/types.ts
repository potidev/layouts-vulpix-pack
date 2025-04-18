export type ActiveFilterItem = {
  label: string;
  value: string;
  key: string;
}

export type TableActiveFiltersProps = {
  className?: string;
  actives?: ActiveFilterItem[];
  onRemoveFilter?: (key: string) => void;
}