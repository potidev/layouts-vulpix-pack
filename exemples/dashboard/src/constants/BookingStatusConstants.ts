import { SelectItem } from "@potidev/utils-vulpix-pack";

export enum BookingStatusEnum {
  ok = 'ok',
  canceled = 'canceled',
}

export const BookingStatusLabel: Record<BookingStatusEnum, string> = {
  canceled: "Cancelado",
  ok: "Aprovado",
};

export const BookingStatusSelectItems: SelectItem<BookingStatusEnum>[] = Object.values(BookingStatusEnum).map(method => ({
  label: BookingStatusLabel[method] ? BookingStatusLabel[method] : method,
  value: method,
}));