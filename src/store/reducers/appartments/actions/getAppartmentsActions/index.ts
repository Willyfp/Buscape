import { createActions } from 'reduxsauce';
import {
  getAppartmentsFailed,
  getAppartmentsRequest,
  getAppartmentsSuccess,
} from './handlers';
import { GetAppartmentsCreators, GetAppartmentsTypes } from './types';

export const { Types, Creators } = createActions<
  GetAppartmentsTypes,
  GetAppartmentsCreators
>({
  getAppartmentsRequest: null,
  getAppartmentsSuccess: ['data'],
  getAppartmentsFailed: null,
});

export const getAppartmentsActions = {
  [Types.GET_APPARTMENTS_REQUEST]: getAppartmentsRequest,
  [Types.GET_APPARTMENTS_SUCCESS]: getAppartmentsSuccess,
  [Types.GET_APPARTMENTS_FAILED]: getAppartmentsFailed,
};
