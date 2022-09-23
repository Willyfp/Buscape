import { AnyAction } from 'redux';
import { APType } from '../../../../../utils/fakeApts';

export type GetAppartmentsTypes = {
  GET_APPARTMENTS_REQUEST: string;
  GET_APPARTMENTS_SUCCESS: string;
  GET_APPARTMENTS_FAILED: string;
};

export type GetAppartmentsCreators = {
  getAppartmentsRequest(): AnyAction;
  getAppartmentsSuccess(data: APType[]): AnyAction;
  getAppartmentsFailed(): AnyAction;
};
