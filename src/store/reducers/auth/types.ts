import { TStatus } from '../types';

export type User = {
  name: string;
  email: string;
  id: string;
};

export type InitialStateAuthType = {
  status: TStatus;
  user: User;
  isAuth: boolean;
};
