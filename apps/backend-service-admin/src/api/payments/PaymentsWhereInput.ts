import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { AppointmentsWhereUniqueInput } from "../appointments/AppointmentsWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type PaymentsWhereInput = {
  amount?: FloatNullableFilter;
  appointment?: AppointmentsWhereUniqueInput;
  id?: StringFilter;
  paymentDate?: DateTimeNullableFilter;
  paymentMethod?: StringNullableFilter;
};
