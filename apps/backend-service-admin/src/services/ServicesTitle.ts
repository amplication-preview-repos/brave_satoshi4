import { Services as TServices } from "../api/services/Services";

export const SERVICES_TITLE_FIELD = "serviceName";

export const ServicesTitle = (record: TServices): string => {
  return record.serviceName?.toString() || String(record.id);
};
