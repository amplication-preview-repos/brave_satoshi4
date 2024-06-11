import { Appointments } from "../appointments/Appointments";
import { Reviews } from "../reviews/Reviews";
import { Stores } from "../stores/Stores";

export type Services = {
  appointmentsItems?: Array<Appointments>;
  createdAt: Date;
  description: string | null;
  duration: number | null;
  id: string;
  price: number | null;
  reviewsItems?: Array<Reviews>;
  serviceName: string | null;
  store?: Stores | null;
  storesItems?: Array<Stores>;
  updatedAt: Date;
};
