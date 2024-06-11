import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { CustomersTitle } from "../customers/CustomersTitle";
import { EmployeesTitle } from "../employees/EmployeesTitle";
import { PaymentsTitle } from "../payments/PaymentsTitle";
import { ServicesTitle } from "../services/ServicesTitle";

export const AppointmentsCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <ReferenceInput
          source="customer.id"
          reference="Customers"
          label="customer"
        >
          <SelectInput optionText={CustomersTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="employee.id"
          reference="Employees"
          label="employee"
        >
          <SelectInput optionText={EmployeesTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="paymentsItems"
          reference="Payments"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PaymentsTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="service.id"
          reference="Services"
          label="service"
        >
          <SelectInput optionText={ServicesTitle} />
        </ReferenceInput>
        <TextInput label="status" source="status" />
      </SimpleForm>
    </Create>
  );
};
