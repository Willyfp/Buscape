import { createActions } from 'reduxsauce';
import {
  getAppartmentsFailed,
  getAppartmentsRequest,
  getAppartmentsSuccess,
  selectAppartment,
} from './handlers';
import { GetAppartmentsCreators, GetAppartmentsTypes } from './types';

export const { Types, Creators } = createActions<
  GetAppartmentsTypes,
  GetAppartmentsCreators
>({
  getAppartmentsRequest: null,
  selectAppartment: ['data'],
  getAppartmentsSuccess: ['data'],
  getAppartmentsFailed: null,
});

export const getAppartmentsActions = {
  [Types.GET_APPARTMENTS_REQUEST]: getAppartmentsRequest,
  [Types.GET_APPARTMENTS_SUCCESS]: getAppartmentsSuccess,
  [Types.GET_APPARTMENTS_FAILED]: getAppartmentsFailed,
  [Types.SELECT_APPARTMENT]: selectAppartment,
};
