import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { AppointmentsTitle } from "../appointments/AppointmentsTitle";
import { ReviewsTitle } from "../reviews/ReviewsTitle";
import { StoresTitle } from "../stores/StoresTitle";

export const EmployeesEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="address" source="address" />
        <ReferenceArrayInput
          source="appointmentsItems"
          reference="Appointments"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AppointmentsTitle} />
        </ReferenceArrayInput>
        <TextInput label="availability" source="availability" />
        <TextInput label="avatar" source="avatar" />
        <TextInput label="email" source="email" type="email" />
        <TextInput label="fullName" source="fullName" />
        <TextInput label="password" source="password" />
        <TextInput label="phone" source="phone" />
        <TextInput label="refreshToken" source="refreshToken" />
        <ReferenceArrayInput
          source="reviewsItems"
          reference="Reviews"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ReviewsTitle} />
        </ReferenceArrayInput>
        <TextInput label="role" source="role" />
        <ReferenceInput source="store.id" reference="Stores" label="store">
          <SelectInput optionText={StoresTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="storesItems"
          reference="Stores"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={StoresTitle} />
        </ReferenceArrayInput>
        <TextInput label="username" source="username" />
      </SimpleForm>
    </Edit>
  );
};
