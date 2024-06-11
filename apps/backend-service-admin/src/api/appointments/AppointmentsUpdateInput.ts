import { InputJsonValue } from "../../types";
import { CustomersWhereUniqueInput } from "../customers/CustomersWhereUniqueInput";
import { EmployeesWhereUniqueInput } from "../employees/EmployeesWhereUniqueInput";
import { PaymentsUpdateManyWithoutAppointmentsItemsInput } from "./PaymentsUpdateManyWithoutAppointmentsItemsInput";
import { ServicesWhereUniqueInput } from "../services/ServicesWhereUniqueInput";

export type AppointmentsUpdateInput = {
  appointmentTime?: InputJsonValue;
  customer?: CustomersWhereUniqueInput | null;
  employee?: EmployeesWhereUniqueInput | null;
  paymentsItems?: PaymentsUpdateManyWithoutAppointmentsItemsInput;
  service?: ServicesWhereUniqueInput | null;
  status?: string | null;
};
