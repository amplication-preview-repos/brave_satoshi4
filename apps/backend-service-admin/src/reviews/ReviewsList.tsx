import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { CUSTOMERS_TITLE_FIELD } from "../customers/CustomersTitle";
import { EMPLOYEES_TITLE_FIELD } from "../employees/EmployeesTitle";
import { SERVICES_TITLE_FIELD } from "../services/ServicesTitle";

export const ReviewsList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"reviewsItems"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
