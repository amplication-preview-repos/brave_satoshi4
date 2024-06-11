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

import { CUSTOMERS_TITLE_FIELD } from "../customers/CustomersTitle";
import { EMPLOYEES_TITLE_FIELD } from "./EmployeesTitle";
import { SERVICES_TITLE_FIELD } from "../services/ServicesTitle";
import { STORES_TITLE_FIELD } from "../stores/StoresTitle";

export const EmployeesShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="address" source="address" />
        <TextField label="availability" source="availability" />
        <TextField label="avatar" source="avatar" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="email" source="email" />
        <TextField label="fullName" source="fullName" />
        <TextField label="ID" source="id" />
        <TextField label="password" source="password" />
        <TextField label="phone" source="phone" />
        <TextField label="refreshToken" source="refreshToken" />
        <TextField label="role" source="role" />
        <ReferenceField label="store" source="stores.id" reference="Stores">
          <TextField source={STORES_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="username" source="username" />
        <ReferenceManyField
          reference="Appointments"
          target="employeeId"
          label="appointmentsItems"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Reviews"
          target="employeeId"
          label="reviewsItems"
        >
          <Datagrid rowClick="show">
            <TextField label="comments" source="comments" />
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
            <TextField label="rating" source="rating" />
            <ReferenceField
              label="service"
              source="services.id"
              reference="Services"
            >
              <TextField source={SERVICES_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Stores"
          target="employeesId"
          label="storesItems"
        >
          <Datagrid rowClick="show">
            <TextField label="address" source="address" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="email" source="email" />
            <ReferenceField
              label="employees"
              source="employees.id"
              reference="Employees"
            >
              <TextField source={EMPLOYEES_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="name" source="name" />
            <TextField label="phone" source="phone" />
            <ReferenceField
              label="services"
              source="services.id"
              reference="Services"
            >
              <TextField source={SERVICES_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
