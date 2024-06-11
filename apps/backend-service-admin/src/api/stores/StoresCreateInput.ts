import { EmployeesWhereUniqueInput } from "../employees/EmployeesWhereUniqueInput";
import { EmployeesCreateNestedManyWithoutStoresItemsInput } from "./EmployeesCreateNestedManyWithoutStoresItemsInput";
import { ServicesWhereUniqueInput } from "../services/ServicesWhereUniqueInput";
import { ServicesCreateNestedManyWithoutStoresItemsInput } from "./ServicesCreateNestedManyWithoutStoresItemsInput";

export type StoresCreateInput = {
  address?: string | null;
  email?: string | null;
  employees?: EmployeesWhereUniqueInput | null;
  employeesItems?: EmployeesCreateNestedManyWithoutStoresItemsInput;
  name?: string | null;
  phone?: string | null;
  services?: ServicesWhereUniqueInput | null;
  servicesItems?: ServicesCreateNestedManyWithoutStoresItemsInput;
};
