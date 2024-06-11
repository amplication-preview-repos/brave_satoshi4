import { Customers as TCustomers } from "../api/customers/Customers";

export const CUSTOMERS_TITLE_FIELD = "fullName";

export const CustomersTitle = (record: TCustomers): string => {
  return record.fullName?.toString() || String(record.id);
};
