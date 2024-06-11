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

import { STORES_TITLE_FIELD } from "./StoresTitle";
import { EMPLOYEES_TITLE_FIELD } from "../employees/EmployeesTitle";
import { SERVICES_TITLE_FIELD } from "../services/ServicesTitle";

export const StoresShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="Employees"
          target="storeId"
          label="employeesItems"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Services"
          target="storeId"
          label="servicesItems"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="description" source="description" />
            <TextField label="duration" source="duration" />
            <TextField label="ID" source="id" />
            <TextField label="price" source="price" />
            <TextField label="serviceName" source="serviceName" />
            <ReferenceField label="store" source="stores.id" reference="Stores">
              <TextField source={STORES_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
