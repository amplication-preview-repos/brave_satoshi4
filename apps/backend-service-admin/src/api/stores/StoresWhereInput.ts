import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EmployeesWhereUniqueInput } from "../employees/EmployeesWhereUniqueInput";
import { EmployeesListRelationFilter } from "../employees/EmployeesListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { ServicesWhereUniqueInput } from "../services/ServicesWhereUniqueInput";
import { ServicesListRelationFilter } from "../services/ServicesListRelationFilter";

export type StoresWhereInput = {
  address?: StringNullableFilter;
  email?: StringNullableFilter;
  employees?: EmployeesWhereUniqueInput;
  employeesItems?: EmployeesListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  phone?: StringNullableFilter;
  services?: ServicesWhereUniqueInput;
  servicesItems?: ServicesListRelationFilter;
};
