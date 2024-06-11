import { Employees as TEmployees } from "../api/employees/Employees";

export const EMPLOYEES_TITLE_FIELD = "fullName";

export const EmployeesTitle = (record: TEmployees): string => {
  return record.fullName?.toString() || String(record.id);
};
