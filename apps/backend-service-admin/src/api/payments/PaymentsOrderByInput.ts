import { SortOrder } from "../../util/SortOrder";

export type PaymentsOrderByInput = {
  amount?: SortOrder;
  appointmentId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  paymentDate?: SortOrder;
  paymentMethod?: SortOrder;
  updatedAt?: SortOrder;
};
