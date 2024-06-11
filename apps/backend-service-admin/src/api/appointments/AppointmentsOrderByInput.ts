import { SortOrder } from "../../util/SortOrder";

export type AppointmentsOrderByInput = {
  appointmentTime?: SortOrder;
  createdAt?: SortOrder;
  customerId?: SortOrder;
  employeeId?: SortOrder;
  id?: SortOrder;
  serviceId?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
