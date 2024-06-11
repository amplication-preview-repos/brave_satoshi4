import { Appointments as TAppointments } from "../api/appointments/Appointments";

export const APPOINTMENTS_TITLE_FIELD = "status";

export const AppointmentsTitle = (record: TAppointments): string => {
  return record.status?.toString() || String(record.id);
};
