import { APType } from '../../../utils/fakeApts';
import { TStatus } from '../types';

export type User = {
  name: string;
  email: string;
  favorites?: string[];
  phone?: string;
  cpfCnpj?: string;
  birthDate?: string;
  gender?: string;
  id: string;
  photo?: string;
  myCaracteristics?: string[];
};

export type InitialStateAuthType = {
  status: TStatus;
  user: User;
  isAuth: boolean;
};
