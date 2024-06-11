import { Appointments } from "../appointments/Appointments";
import { Reviews } from "../reviews/Reviews";

export type Customers = {
  address: string | null;
  appointmentsItems?: Array<Appointments>;
  avatar: string | null;
  createdAt: Date;
  email: string | null;
  fullName: string | null;
  id: string;
  loyaltyPoints: number | null;
  password: string | null;
  phone: string | null;
  refreshToken: string | null;
  reviewsItems?: Array<Reviews>;
  updatedAt: Date;
  username: string | null;
};
