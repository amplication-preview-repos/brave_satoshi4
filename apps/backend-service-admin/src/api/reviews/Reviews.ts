import { Customers } from "../customers/Customers";
import { Employees } from "../employees/Employees";
import { Services } from "../services/Services";

export type Reviews = {
  comments: string | null;
  createdAt: Date;
  customer?: Customers | null;
  employee?: Employees | null;
  id: string;
  rating: number | null;
  service?: Services | null;
  updatedAt: Date;
};
