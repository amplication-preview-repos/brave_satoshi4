import { EmployeesWhereUniqueInput } from "../employees/EmployeesWhereUniqueInput";
import { EmployeesUpdateManyWithoutStoresItemsInput } from "./EmployeesUpdateManyWithoutStoresItemsInput";
import { ServicesWhereUniqueInput } from "../services/ServicesWhereUniqueInput";
import { ServicesUpdateManyWithoutStoresItemsInput } from "./ServicesUpdateManyWithoutStoresItemsInput";

export type StoresUpdateInput = {
  address?: string | null;
  email?: string | null;
  employees?: EmployeesWhereUniqueInput | null;
  employeesItems?: EmployeesUpdateManyWithoutStoresItemsInput;
  name?: string | null;
  phone?: string | null;
  services?: ServicesWhereUniqueInput | null;
  servicesItems?: ServicesUpdateManyWithoutStoresItemsInput;
};
