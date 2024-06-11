import { SortOrder } from "../../util/SortOrder";

export type ReviewsOrderByInput = {
  comments?: SortOrder;
  createdAt?: SortOrder;
  customerId?: SortOrder;
  employeeId?: SortOrder;
  id?: SortOrder;
  rating?: SortOrder;
  serviceId?: SortOrder;
  updatedAt?: SortOrder;
};
