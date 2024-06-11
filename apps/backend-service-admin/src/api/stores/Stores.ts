import { Employees } from "../employees/Employees";
import { Services } from "../services/Services";

export type Stores = {
  address: string | null;
  createdAt: Date;
  email: string | null;
  employees?: Employees | null;
  employeesItems?: Array<Employees>;
  id: string;
  name: string | null;
  phone: string | null;
  services?: Services | null;
  servicesItems?: Array<Services>;
  updatedAt: Date;
};
