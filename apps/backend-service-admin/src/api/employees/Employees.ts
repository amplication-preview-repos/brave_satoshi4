import { Appointments } from "../appointments/Appointments";
import { Reviews } from "../reviews/Reviews";
import { Stores } from "../stores/Stores";

export type Employees = {
  address: string | null;
  appointmentsItems?: Array<Appointments>;
  availability: string | null;
  avatar: string | null;
  createdAt: Date;
  email: string | null;
  fullName: string | null;
  id: string;
  password: string | null;
  phone: string | null;
  refreshToken: string | null;
  reviewsItems?: Array<Reviews>;
  role: string | null;
  store?: Stores | null;
  storesItems?: Array<Stores>;
  updatedAt: Date;
  username: string | null;
};
