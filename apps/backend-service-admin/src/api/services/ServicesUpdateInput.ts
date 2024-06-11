import { AppointmentsUpdateManyWithoutServicesItemsInput } from "./AppointmentsUpdateManyWithoutServicesItemsInput";
import { ReviewsUpdateManyWithoutServicesItemsInput } from "./ReviewsUpdateManyWithoutServicesItemsInput";
import { StoresWhereUniqueInput } from "../stores/StoresWhereUniqueInput";
import { StoresUpdateManyWithoutServicesItemsInput } from "./StoresUpdateManyWithoutServicesItemsInput";

export type ServicesUpdateInput = {
  appointmentsItems?: AppointmentsUpdateManyWithoutServicesItemsInput;
  description?: string | null;
  duration?: number | null;
  price?: number | null;
  reviewsItems?: ReviewsUpdateManyWithoutServicesItemsInput;
  serviceName?: string | null;
  store?: StoresWhereUniqueInput | null;
  storesItems?: StoresUpdateManyWithoutServicesItemsInput;
};
