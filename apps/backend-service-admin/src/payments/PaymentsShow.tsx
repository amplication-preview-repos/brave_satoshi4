import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  DateField,
} from "react-admin";
import { APPOINTMENTS_TITLE_FIELD } from "../appointments/AppointmentsTitle";

export const PaymentsShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
