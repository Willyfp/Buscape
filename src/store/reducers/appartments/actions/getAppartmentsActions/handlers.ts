import { Action } from 'redux';
import { APType } from '../../../../../utils/fakeApts';
import { INITIAL_STATE_APPARTMENTS } from '../../reducer';

type GetAppartmentsActionType = Action & {
  data: APType[];
};

export const getAppartmentsRequest = (state = INITIAL_STATE_APPARTMENTS) =>
  state.set('status', 'loading');

export const getAppartmentsFailed = (state = INITIAL_STATE_APPARTMENTS) =>
  state.set('status', 'failed');

export const getAppartmentsSuccess = (
  state = INITIAL_STATE_APPARTMENTS,
  { data }: GetAppartmentsActionType,
) =>
  state.merge({
    status: 'success',
    list: data,
  });
