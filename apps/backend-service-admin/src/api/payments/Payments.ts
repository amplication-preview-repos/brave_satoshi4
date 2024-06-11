import { Appointments } from "../appointments/Appointments";

export type Payments = {
  amount: number | null;
  appointment?: Appointments | null;
  createdAt: Date;
  id: string;
  paymentDate: Date | null;
  paymentMethod: string | null;
  updatedAt: Date;
};
