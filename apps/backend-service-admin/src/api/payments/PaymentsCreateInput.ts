import { AppointmentsWhereUniqueInput } from "../appointments/AppointmentsWhereUniqueInput";

export type PaymentsCreateInput = {
  amount?: number | null;
  appointment?: AppointmentsWhereUniqueInput | null;
  paymentDate?: Date | null;
  paymentMethod?: string | null;
};
