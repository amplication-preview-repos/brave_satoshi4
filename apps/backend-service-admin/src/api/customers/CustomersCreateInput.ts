import { AppointmentsCreateNestedManyWithoutCustomersItemsInput } from "./AppointmentsCreateNestedManyWithoutCustomersItemsInput";
import { ReviewsCreateNestedManyWithoutCustomersItemsInput } from "./ReviewsCreateNestedManyWithoutCustomersItemsInput";

export type CustomersCreateInput = {
  address?: string | null;
  appointmentsItems?: AppointmentsCreateNestedManyWithoutCustomersItemsInput;
  avatar?: string | null;
  email?: string | null;
  fullName?: string | null;
  loyaltyPoints?: number | null;
  password?: string | null;
  phone?: string | null;
  refreshToken?: string | null;
  reviewsItems?: ReviewsCreateNestedManyWithoutCustomersItemsInput;
  username?: string | null;
};
