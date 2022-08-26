import { createActions } from 'reduxsauce';
import { registerFailed, registerRequest, registerSuccess } from './handlers';
import { RegisterActionCreators, RegisterActionTypes } from './types';

export const { Types, Creators } = createActions<
  RegisterActionTypes,
  RegisterActionCreators
>({
  registerRequest: ['data'],
  registerSuccess: ['user'],
  registerFailed: null,
});

export const registerActions = {
  [Types.REGISTER_REQUEST]: registerRequest,
  [Types.REGISTER_SUCCESS]: registerSuccess,
  [Types.REGISTER_FAILED]: registerFailed,
};
