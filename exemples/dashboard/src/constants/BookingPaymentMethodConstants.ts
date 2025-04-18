import { SelectItem } from "@potidev/utils-vulpix-pack";

export enum BookingPaymentMethodEnum {
  money = 'money',
  free = 'free',
}

export const BookingPaymentMethodLabel: Record<BookingPaymentMethodEnum, string> = {
  money: 'Dinheiro',
  free: 'Gratuito',
};

export const BookingPaymentMethodSelectItems: SelectItem<BookingPaymentMethodEnum>[] = Object.values(BookingPaymentMethodEnum).map(method => ({
  label: BookingPaymentMethodLabel[method] ? BookingPaymentMethodLabel[method] : method,
  value: method,
}));