import { SortOrder } from "../../util/SortOrder";

export type ServicesOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  duration?: SortOrder;
  id?: SortOrder;
  price?: SortOrder;
  serviceName?: SortOrder;
  storeId?: SortOrder;
  updatedAt?: SortOrder;
};
