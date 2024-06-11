import { StoresWhereInput } from "./StoresWhereInput";
import { StoresOrderByInput } from "./StoresOrderByInput";

export type StoresFindManyArgs = {
  where?: StoresWhereInput;
  orderBy?: Array<StoresOrderByInput>;
  skip?: number;
  take?: number;
};
