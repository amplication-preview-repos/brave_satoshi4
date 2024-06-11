import { ServicesWhereInput } from "./ServicesWhereInput";
import { ServicesOrderByInput } from "./ServicesOrderByInput";

export type ServicesFindManyArgs = {
  where?: ServicesWhereInput;
  orderBy?: Array<ServicesOrderByInput>;
  skip?: number;
  take?: number;
};
