import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { APPOINTMENTS_TITLE_FIELD } from "./AppointmentsTitle";
import { CUSTOMERS_TITLE_FIELD } from "../customers/CustomersTitle";
import { EMPLOYEES_TITLE_FIELD } from "../employees/EmployeesTitle";
import { SERVICES_TITLE_FIELD } from "../services/ServicesTitle";

export const AppointmentsShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="appointmentTime" source="appointmentTime" />
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="customer"
          source="customers.id"
          reference="Customers"
        >
          <TextField source={CUSTOMERS_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="employee"
          source="employees.id"
          reference="Employees"
        >
          <TextField source={EMPLOYEES_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <ReferenceField
          label="service"
          source="services.id"
          reference="Services"
        >
          <TextField source={SERVICES_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="status" source="status" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Payments"
          target="appointmentId"
          label="paymentsItems"
        >
          <Datagrid rowClick="show">
            <TextField label="amount" source="amount" />
            <ReferenceField
              label="appointment"
              source="appointments.id"
              reference="Appointments"
            >
              <TextField source={APPOINTMENTS_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="paymentDate" source="paymentDate" />
            <TextField label="paymentMethod" source="paymentMethod" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
