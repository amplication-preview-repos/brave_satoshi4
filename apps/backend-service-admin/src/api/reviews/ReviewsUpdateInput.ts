import { CustomersWhereUniqueInput } from "../customers/CustomersWhereUniqueInput";
import { EmployeesWhereUniqueInput } from "../employees/EmployeesWhereUniqueInput";
import { ServicesWhereUniqueInput } from "../services/ServicesWhereUniqueInput";

export type ReviewsUpdateInput = {
  comments?: string | null;
  customer?: CustomersWhereUniqueInput | null;
  employee?: EmployeesWhereUniqueInput | null;
  rating?: number | null;
  service?: ServicesWhereUniqueInput | null;
};
