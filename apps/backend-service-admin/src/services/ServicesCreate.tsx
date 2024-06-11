import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { AppointmentsTitle } from "../appointments/AppointmentsTitle";
import { ReviewsTitle } from "../reviews/ReviewsTitle";
import { StoresTitle } from "../stores/StoresTitle";

export const ServicesCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="appointmentsItems"
          reference="Appointments"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AppointmentsTitle} />
        </ReferenceArrayInput>
        <TextInput label="description" multiline source="description" />
        <NumberInput step={1} label="duration" source="duration" />
        <NumberInput label="price" source="price" />
        <ReferenceArrayInput
          source="reviewsItems"
          reference="Reviews"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ReviewsTitle} />
        </ReferenceArrayInput>
        <TextInput label="serviceName" source="serviceName" />
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
      </SimpleForm>
    </Create>
  );
};
