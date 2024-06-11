import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

import { AppointmentsTitle } from "../appointments/AppointmentsTitle";

export const PaymentsCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="amount" source="amount" />
        <ReferenceInput
          source="appointment.id"
          reference="Appointments"
          label="appointment"
        >
          <SelectInput optionText={AppointmentsTitle} />
        </ReferenceInput>
        <DateTimeInput label="paymentDate" source="paymentDate" />
        <TextInput label="paymentMethod" source="paymentMethod" />
      </SimpleForm>
    </Create>
  );
};
