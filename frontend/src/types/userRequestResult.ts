import { User } from "./user";

export type UserRequestResult = {
  readonly message: string;
  readonly success: boolean;
  readonly user: User | null;
};
