import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { CustomersTitle } from "../customers/CustomersTitle";
import { EmployeesTitle } from "../employees/EmployeesTitle";
import { ServicesTitle } from "../services/ServicesTitle";

export const ReviewsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="comments" multiline source="comments" />
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
        <NumberInput step={1} label="rating" source="rating" />
        <ReferenceInput
          source="service.id"
          reference="Services"
          label="service"
        >
          <SelectInput optionText={ServicesTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
