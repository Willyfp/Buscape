import { APType } from '../../../utils/fakeApts';
import { TStatus } from '../types';

export type InitialStateAuthType = {
  status: TStatus;
  list: APType[];
};
