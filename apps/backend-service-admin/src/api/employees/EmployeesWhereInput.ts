import { StringNullableFilter } from "../../util/StringNullableFilter";
import { AppointmentsListRelationFilter } from "../appointments/AppointmentsListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { ReviewsListRelationFilter } from "../reviews/ReviewsListRelationFilter";
import { StoresWhereUniqueInput } from "../stores/StoresWhereUniqueInput";
import { StoresListRelationFilter } from "../stores/StoresListRelationFilter";

export type EmployeesWhereInput = {
  address?: StringNullableFilter;
  appointmentsItems?: AppointmentsListRelationFilter;
  availability?: StringNullableFilter;
  avatar?: StringNullableFilter;
  email?: StringNullableFilter;
  fullName?: StringNullableFilter;
  id?: StringFilter;
  password?: StringNullableFilter;
  phone?: StringNullableFilter;
  refreshToken?: StringNullableFilter;
  reviewsItems?: ReviewsListRelationFilter;
  role?: StringNullableFilter;
  store?: StoresWhereUniqueInput;
  storesItems?: StoresListRelationFilter;
  username?: StringNullableFilter;
};
