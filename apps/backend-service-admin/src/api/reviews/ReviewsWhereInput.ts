import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CustomersWhereUniqueInput } from "../customers/CustomersWhereUniqueInput";
import { EmployeesWhereUniqueInput } from "../employees/EmployeesWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { ServicesWhereUniqueInput } from "../services/ServicesWhereUniqueInput";

export type ReviewsWhereInput = {
  comments?: StringNullableFilter;
  customer?: CustomersWhereUniqueInput;
  employee?: EmployeesWhereUniqueInput;
  id?: StringFilter;
  rating?: IntNullableFilter;
  service?: ServicesWhereUniqueInput;
};
