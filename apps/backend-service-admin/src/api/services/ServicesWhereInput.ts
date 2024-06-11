import { AppointmentsListRelationFilter } from "../appointments/AppointmentsListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { ReviewsListRelationFilter } from "../reviews/ReviewsListRelationFilter";
import { StoresWhereUniqueInput } from "../stores/StoresWhereUniqueInput";
import { StoresListRelationFilter } from "../stores/StoresListRelationFilter";

export type ServicesWhereInput = {
  appointmentsItems?: AppointmentsListRelationFilter;
  description?: StringNullableFilter;
  duration?: IntNullableFilter;
  id?: StringFilter;
  price?: FloatNullableFilter;
  reviewsItems?: ReviewsListRelationFilter;
  serviceName?: StringNullableFilter;
  store?: StoresWhereUniqueInput;
  storesItems?: StoresListRelationFilter;
};
