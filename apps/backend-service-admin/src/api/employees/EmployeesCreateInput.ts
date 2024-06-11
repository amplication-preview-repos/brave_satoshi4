import { AppointmentsCreateNestedManyWithoutEmployeesItemsInput } from "./AppointmentsCreateNestedManyWithoutEmployeesItemsInput";
import { ReviewsCreateNestedManyWithoutEmployeesItemsInput } from "./ReviewsCreateNestedManyWithoutEmployeesItemsInput";
import { StoresWhereUniqueInput } from "../stores/StoresWhereUniqueInput";
import { StoresCreateNestedManyWithoutEmployeesItemsInput } from "./StoresCreateNestedManyWithoutEmployeesItemsInput";

export type EmployeesCreateInput = {
  address?: string | null;
  appointmentsItems?: AppointmentsCreateNestedManyWithoutEmployeesItemsInput;
  availability?: string | null;
  avatar?: string | null;
  email?: string | null;
  fullName?: string | null;
  password?: string | null;
  phone?: string | null;
  refreshToken?: string | null;
  reviewsItems?: ReviewsCreateNestedManyWithoutEmployeesItemsInput;
  role?: string | null;
  store?: StoresWhereUniqueInput | null;
  storesItems?: StoresCreateNestedManyWithoutEmployeesItemsInput;
  username?: string | null;
};
