import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { APPOINTMENTS_TITLE_FIELD } from "../appointments/AppointmentsTitle";

export const PaymentsList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"paymentsItems"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
