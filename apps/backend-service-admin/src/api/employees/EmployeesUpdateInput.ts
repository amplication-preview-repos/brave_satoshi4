import { AppointmentsUpdateManyWithoutEmployeesItemsInput } from "./AppointmentsUpdateManyWithoutEmployeesItemsInput";
import { ReviewsUpdateManyWithoutEmployeesItemsInput } from "./ReviewsUpdateManyWithoutEmployeesItemsInput";
import { StoresWhereUniqueInput } from "../stores/StoresWhereUniqueInput";
import { StoresUpdateManyWithoutEmployeesItemsInput } from "./StoresUpdateManyWithoutEmployeesItemsInput";

export type EmployeesUpdateInput = {
  address?: string | null;
  appointmentsItems?: AppointmentsUpdateManyWithoutEmployeesItemsInput;
  availability?: string | null;
  avatar?: string | null;
  email?: string | null;
  fullName?: string | null;
  password?: string | null;
  phone?: string | null;
  refreshToken?: string | null;
  reviewsItems?: ReviewsUpdateManyWithoutEmployeesItemsInput;
  role?: string | null;
  store?: StoresWhereUniqueInput | null;
  storesItems?: StoresUpdateManyWithoutEmployeesItemsInput;
  username?: string | null;
};
