import { AppointmentsCreateNestedManyWithoutServicesItemsInput } from "./AppointmentsCreateNestedManyWithoutServicesItemsInput";
import { ReviewsCreateNestedManyWithoutServicesItemsInput } from "./ReviewsCreateNestedManyWithoutServicesItemsInput";
import { StoresWhereUniqueInput } from "../stores/StoresWhereUniqueInput";
import { StoresCreateNestedManyWithoutServicesItemsInput } from "./StoresCreateNestedManyWithoutServicesItemsInput";

export type ServicesCreateInput = {
  appointmentsItems?: AppointmentsCreateNestedManyWithoutServicesItemsInput;
  description?: string | null;
  duration?: number | null;
  price?: number | null;
  reviewsItems?: ReviewsCreateNestedManyWithoutServicesItemsInput;
  serviceName?: string | null;
  store?: StoresWhereUniqueInput | null;
  storesItems?: StoresCreateNestedManyWithoutServicesItemsInput;
};
