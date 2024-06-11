import { StringNullableFilter } from "../../util/StringNullableFilter";
import { AppointmentsListRelationFilter } from "../appointments/AppointmentsListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { ReviewsListRelationFilter } from "../reviews/ReviewsListRelationFilter";

export type CustomersWhereInput = {
  address?: StringNullableFilter;
  appointmentsItems?: AppointmentsListRelationFilter;
  avatar?: StringNullableFilter;
  email?: StringNullableFilter;
  fullName?: StringNullableFilter;
  id?: StringFilter;
  loyaltyPoints?: IntNullableFilter;
  password?: StringNullableFilter;
  phone?: StringNullableFilter;
  refreshToken?: StringNullableFilter;
  reviewsItems?: ReviewsListRelationFilter;
  username?: StringNullableFilter;
};
