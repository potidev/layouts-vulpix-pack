import { BookingPaymentMethodEnum } from "@/constants/BookingPaymentMethodConstants";
import { BookingStatusEnum } from "@/constants/BookingStatusConstants";
import { Booking } from "@/types/bookings";

export const BookingsMock: Booking[] = [
  {
    customer: {
      name: "John Due",
      email: "johndue@email.com"
    },
    eventId: "1",
    id: "1",
    paymentMethod: BookingPaymentMethodEnum.free,
    status: BookingStatusEnum.ok,
  },
  {
    customer: {
      name: "Eduardo Costa",
      email: "eduardo@potidev.com"
    },
    eventId: "2",
    id: "2",
    paymentMethod: BookingPaymentMethodEnum.money,
    status: BookingStatusEnum.ok,
  },
  {
    customer: {
      name: "Clara G. M.",
      email: "clara@email.com"
    },
    eventId: "3",
    id: "3",
    paymentMethod: BookingPaymentMethodEnum.money,
    status: BookingStatusEnum.canceled,
  },
  {
    customer: {
      name: "Lucas Ferreira",
      email: "lucasf@email.com"
    },
    eventId: "4",
    id: "4",
    paymentMethod: BookingPaymentMethodEnum.money,
    status: BookingStatusEnum.ok,
  },
  {
    customer: {
      name: "Marina Lopes",
      email: "marina.lopes@email.com"
    },
    eventId: "5",
    id: "5",
    paymentMethod: BookingPaymentMethodEnum.free,
    status: BookingStatusEnum.canceled,
  },
  {
    customer: {
      name: "Tiago Silva",
      email: "tiagos@email.com"
    },
    eventId: "2",
    id: "6",
    paymentMethod: BookingPaymentMethodEnum.money,
    status: BookingStatusEnum.ok,
  },
  {
    customer: {
      name: "Amanda Oliveira",
      email: "amandaoliveira@email.com"
    },
    eventId: "1",
    id: "7",
    paymentMethod: BookingPaymentMethodEnum.money,
    status: BookingStatusEnum.canceled,
  },
  {
    customer: {
      name: "Rodrigo Mello",
      email: "rodrigom@email.com"
    },
    eventId: "6",
    id: "8",
    paymentMethod: BookingPaymentMethodEnum.free,
    status: BookingStatusEnum.ok,
  },
  {
    customer: {
      name: "Fernanda Costa",
      email: "fernanda.c@email.com"
    },
    eventId: "7",
    id: "9",
    paymentMethod: BookingPaymentMethodEnum.money,
    status: BookingStatusEnum.ok,
  },
  {
    customer: {
      name: "Diego Nascimento",
      email: "diegon@email.com"
    },
    eventId: "3",
    id: "10",
    paymentMethod: BookingPaymentMethodEnum.money,
    status: BookingStatusEnum.canceled,
  },
  {
    customer: {
      name: "Juliana Prado",
      email: "juliana@email.com"
    },
    eventId: "8",
    id: "11",
    paymentMethod: BookingPaymentMethodEnum.free,
    status: BookingStatusEnum.ok,
  },
  {
    customer: {
      name: "Matheus Andrade",
      email: "matheus.a@email.com"
    },
    eventId: "9",
    id: "12",
    paymentMethod: BookingPaymentMethodEnum.free,
    status: BookingStatusEnum.canceled,
  },
  {
    customer: {
      name: "Patrícia Gomes",
      email: "patricia@email.com"
    },
    eventId: "1",
    id: "13",
    paymentMethod: BookingPaymentMethodEnum.money,
    status: BookingStatusEnum.ok,
  },
  {
    customer: {
      name: "John Due",
      email: "johndue@email.com"
    },
    eventId: "1",
    id: "1",
    paymentMethod: BookingPaymentMethodEnum.free,
    status: BookingStatusEnum.ok,
  },
  {
    customer: {
      name: "Eduardo Costa",
      email: "eduardo@potidev.com"
    },
    eventId: "2",
    id: "2",
    paymentMethod: BookingPaymentMethodEnum.money,
    status: BookingStatusEnum.ok,
  },
  {
    customer: {
      name: "Clara G. M.",
      email: "clara@email.com"
    },
    eventId: "3",
    id: "3",
    paymentMethod: BookingPaymentMethodEnum.money,
    status: BookingStatusEnum.canceled,
  },
  {
    customer: {
      name: "Lucas Ferreira",
      email: "lucasf@email.com"
    },
    eventId: "4",
    id: "4",
    paymentMethod: BookingPaymentMethodEnum.money,
    status: BookingStatusEnum.ok,
  },
  {
    customer: {
      name: "Marina Lopes",
      email: "marina.lopes@email.com"
    },
    eventId: "5",
    id: "5",
    paymentMethod: BookingPaymentMethodEnum.free,
    status: BookingStatusEnum.canceled,
  },
  {
    customer: {
      name: "Tiago Silva",
      email: "tiagos@email.com"
    },
    eventId: "2",
    id: "6",
    paymentMethod: BookingPaymentMethodEnum.money,
    status: BookingStatusEnum.ok,
  },
  {
    customer: {
      name: "Amanda Oliveira",
      email: "amandaoliveira@email.com"
    },
    eventId: "1",
    id: "7",
    paymentMethod: BookingPaymentMethodEnum.money,
    status: BookingStatusEnum.canceled,
  },
  {
    customer: {
      name: "Rodrigo Mello",
      email: "rodrigom@email.com"
    },
    eventId: "6",
    id: "8",
    paymentMethod: BookingPaymentMethodEnum.free,
    status: BookingStatusEnum.ok,
  },
  {
    customer: {
      name: "Fernanda Costa",
      email: "fernanda.c@email.com"
    },
    eventId: "7",
    id: "9",
    paymentMethod: BookingPaymentMethodEnum.money,
    status: BookingStatusEnum.ok,
  },
  {
    customer: {
      name: "Diego Nascimento",
      email: "diegon@email.com"
    },
    eventId: "3",
    id: "10",
    paymentMethod: BookingPaymentMethodEnum.money,
    status: BookingStatusEnum.canceled,
  },
  {
    customer: {
      name: "Juliana Prado",
      email: "juliana@email.com"
    },
    eventId: "8",
    id: "11",
    paymentMethod: BookingPaymentMethodEnum.free,
    status: BookingStatusEnum.ok,
  },
  {
    customer: {
      name: "Matheus Andrade",
      email: "matheus.a@email.com"
    },
    eventId: "9",
    id: "12",
    paymentMethod: BookingPaymentMethodEnum.free,
    status: BookingStatusEnum.canceled,
  },
  {
    customer: {
      name: "Patrícia Gomes",
      email: "patricia@email.com"
    },
    eventId: "1",
    id: "13",
    paymentMethod: BookingPaymentMethodEnum.money,
    status: BookingStatusEnum.ok,
  },
  {
    customer: {
      name: "John Due",
      email: "johndue@email.com"
    },
    eventId: "1",
    id: "1",
    paymentMethod: BookingPaymentMethodEnum.free,
    status: BookingStatusEnum.ok,
  },
  {
    customer: {
      name: "Eduardo Costa",
      email: "eduardo@potidev.com"
    },
    eventId: "2",
    id: "2",
    paymentMethod: BookingPaymentMethodEnum.money,
    status: BookingStatusEnum.ok,
  },
  {
    customer: {
      name: "Clara G. M.",
      email: "clara@email.com"
    },
    eventId: "3",
    id: "3",
    paymentMethod: BookingPaymentMethodEnum.money,
    status: BookingStatusEnum.canceled,
  },
  {
    customer: {
      name: "Lucas Ferreira",
      email: "lucasf@email.com"
    },
    eventId: "4",
    id: "4",
    paymentMethod: BookingPaymentMethodEnum.money,
    status: BookingStatusEnum.ok,
  },
  {
    customer: {
      name: "Marina Lopes",
      email: "marina.lopes@email.com"
    },
    eventId: "5",
    id: "5",
    paymentMethod: BookingPaymentMethodEnum.free,
    status: BookingStatusEnum.canceled,
  },
  {
    customer: {
      name: "Tiago Silva",
      email: "tiagos@email.com"
    },
    eventId: "2",
    id: "6",
    paymentMethod: BookingPaymentMethodEnum.money,
    status: BookingStatusEnum.ok,
  },
  {
    customer: {
      name: "Amanda Oliveira",
      email: "amandaoliveira@email.com"
    },
    eventId: "1",
    id: "7",
    paymentMethod: BookingPaymentMethodEnum.money,
    status: BookingStatusEnum.canceled,
  },
  {
    customer: {
      name: "Rodrigo Mello",
      email: "rodrigom@email.com"
    },
    eventId: "6",
    id: "8",
    paymentMethod: BookingPaymentMethodEnum.free,
    status: BookingStatusEnum.ok,
  },
  {
    customer: {
      name: "Fernanda Costa",
      email: "fernanda.c@email.com"
    },
    eventId: "7",
    id: "9",
    paymentMethod: BookingPaymentMethodEnum.money,
    status: BookingStatusEnum.ok,
  },
  {
    customer: {
      name: "Diego Nascimento",
      email: "diegon@email.com"
    },
    eventId: "3",
    id: "10",
    paymentMethod: BookingPaymentMethodEnum.money,
    status: BookingStatusEnum.canceled,
  },
  {
    customer: {
      name: "Juliana Prado",
      email: "juliana@email.com"
    },
    eventId: "8",
    id: "11",
    paymentMethod: BookingPaymentMethodEnum.free,
    status: BookingStatusEnum.ok,
  },
  {
    customer: {
      name: "Matheus Andrade",
      email: "matheus.a@email.com"
    },
    eventId: "9",
    id: "12",
    paymentMethod: BookingPaymentMethodEnum.free,
    status: BookingStatusEnum.canceled,
  },
  {
    customer: {
      name: "Patrícia Gomes",
      email: "patricia@email.com"
    },
    eventId: "1",
    id: "13",
    paymentMethod: BookingPaymentMethodEnum.money,
    status: BookingStatusEnum.ok,
  }
];
