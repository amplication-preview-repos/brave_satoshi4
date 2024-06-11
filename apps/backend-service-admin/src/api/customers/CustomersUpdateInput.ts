import { AppointmentsUpdateManyWithoutCustomersItemsInput } from "./AppointmentsUpdateManyWithoutCustomersItemsInput";
import { ReviewsUpdateManyWithoutCustomersItemsInput } from "./ReviewsUpdateManyWithoutCustomersItemsInput";

export type CustomersUpdateInput = {
  address?: string | null;
  appointmentsItems?: AppointmentsUpdateManyWithoutCustomersItemsInput;
  avatar?: string | null;
  email?: string | null;
  fullName?: string | null;
  loyaltyPoints?: number | null;
  password?: string | null;
  phone?: string | null;
  refreshToken?: string | null;
  reviewsItems?: ReviewsUpdateManyWithoutCustomersItemsInput;
  username?: string | null;
};
