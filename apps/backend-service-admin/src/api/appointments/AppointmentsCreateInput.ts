import { InputJsonValue } from "../../types";
import { CustomersWhereUniqueInput } from "../customers/CustomersWhereUniqueInput";
import { EmployeesWhereUniqueInput } from "../employees/EmployeesWhereUniqueInput";
import { PaymentsCreateNestedManyWithoutAppointmentsItemsInput } from "./PaymentsCreateNestedManyWithoutAppointmentsItemsInput";
import { ServicesWhereUniqueInput } from "../services/ServicesWhereUniqueInput";

export type AppointmentsCreateInput = {
  appointmentTime?: InputJsonValue;
  customer?: CustomersWhereUniqueInput | null;
  employee?: EmployeesWhereUniqueInput | null;
  paymentsItems?: PaymentsCreateNestedManyWithoutAppointmentsItemsInput;
  service?: ServicesWhereUniqueInput | null;
  status?: string | null;
};
