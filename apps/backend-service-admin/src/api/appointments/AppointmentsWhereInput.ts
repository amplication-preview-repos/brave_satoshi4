import { JsonFilter } from "../../util/JsonFilter";
import { CustomersWhereUniqueInput } from "../customers/CustomersWhereUniqueInput";
import { EmployeesWhereUniqueInput } from "../employees/EmployeesWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { PaymentsListRelationFilter } from "../payments/PaymentsListRelationFilter";
import { ServicesWhereUniqueInput } from "../services/ServicesWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type AppointmentsWhereInput = {
  appointmentTime?: JsonFilter;
  customer?: CustomersWhereUniqueInput;
  employee?: EmployeesWhereUniqueInput;
  id?: StringFilter;
  paymentsItems?: PaymentsListRelationFilter;
  service?: ServicesWhereUniqueInput;
  status?: StringNullableFilter;
};
