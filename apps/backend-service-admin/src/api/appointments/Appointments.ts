import { JsonValue } from "type-fest";
import { Customers } from "../customers/Customers";
import { Employees } from "../employees/Employees";
import { Payments } from "../payments/Payments";
import { Services } from "../services/Services";

export type Appointments = {
  appointmentTime: JsonValue;
  createdAt: Date;
  customer?: Customers | null;
  employee?: Employees | null;
  id: string;
  paymentsItems?: Array<Payments>;
  service?: Services | null;
  status: string | null;
  updatedAt: Date;
};
