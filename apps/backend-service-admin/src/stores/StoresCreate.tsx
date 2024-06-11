import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { EmployeesTitle } from "../employees/EmployeesTitle";
import { ServicesTitle } from "../services/ServicesTitle";

export const StoresCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="address" source="address" />
        <TextInput label="email" source="email" type="email" />
        <ReferenceInput
          source="employees.id"
          reference="Employees"
          label="employees"
        >
          <SelectInput optionText={EmployeesTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="employeesItems"
          reference="Employees"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EmployeesTitle} />
        </ReferenceArrayInput>
        <TextInput label="name" source="name" />
        <TextInput label="phone" source="phone" />
        <ReferenceInput
          source="services.id"
          reference="Services"
          label="services"
        >
          <SelectInput optionText={ServicesTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="servicesItems"
          reference="Services"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ServicesTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
