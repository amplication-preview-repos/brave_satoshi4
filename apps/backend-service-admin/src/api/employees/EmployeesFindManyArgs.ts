import { EmployeesWhereInput } from "./EmployeesWhereInput";
import { EmployeesOrderByInput } from "./EmployeesOrderByInput";

export type EmployeesFindManyArgs = {
  where?: EmployeesWhereInput;
  orderBy?: Array<EmployeesOrderByInput>;
  skip?: number;
  take?: number;
};
