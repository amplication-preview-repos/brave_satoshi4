import { Stores as TStores } from "../api/stores/Stores";

export const STORES_TITLE_FIELD = "name";

export const StoresTitle = (record: TStores): string => {
  return record.name?.toString() || String(record.id);
};
