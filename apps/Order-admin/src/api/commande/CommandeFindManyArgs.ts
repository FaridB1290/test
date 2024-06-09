import { CommandeWhereInput } from "./CommandeWhereInput";
import { CommandeOrderByInput } from "./CommandeOrderByInput";

export type CommandeFindManyArgs = {
  where?: CommandeWhereInput;
  orderBy?: Array<CommandeOrderByInput>;
  skip?: number;
  take?: number;
};
