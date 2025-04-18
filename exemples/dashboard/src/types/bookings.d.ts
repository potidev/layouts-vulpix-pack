import { BookingStatusEnum } from "@/constants/BookingStatusConstants";
import { Place } from "../LotService/types";
import { Ticket } from "../TicketService/types";
import { BookingPaymentMethodEnum } from "@/constants/BookingPaymentMethodConstants";

export type BookingCustomer = {
  email?: string,
  name: string,
}

export type Booking = {
  id: string,
  eventId: string,
  customer: BookingCustomer,
  paymentMethod: BookingPaymentMethodEnum,
  status: BookingStatusEnum,
};