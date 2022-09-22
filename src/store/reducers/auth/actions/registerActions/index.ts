import { createActions } from 'reduxsauce';
import { registerFailed, registerRequest } from './handlers';
import { RegisterActionCreators, RegisterActionTypes } from './types';

export const { Types, Creators } = createActions<
  RegisterActionTypes,
  RegisterActionCreators
>({
  registerRequest: ['data'],
  registerFailed: null,
});

export const registerActions = {
  [Types.REGISTER_REQUEST]: registerRequest,
  [Types.REGISTER_FAILED]: registerFailed,
};
