import { createActions } from 'reduxsauce';
import {
  editProfileFailed,
  editProfileRequest,
  editProfileSuccess,
} from './handlers';
import { ProfileActionsCreatorsType, ProfileActionTypes } from './types';

export const { Types, Creators } = createActions<
  ProfileActionTypes,
  ProfileActionsCreatorsType
>({
  editProfileRequest: ['data'],
  editProfileSuccess: null,
  editProfileFailed: null,
});

export const editProfileActions = {
  [Types.EDIT_PROFILE_REQUEST]: editProfileRequest,
  [Types.EDIT_PROFILE_SUCCESS]: editProfileSuccess,
  [Types.EDIT_PROFILE_FAILED]: editProfileFailed,
};
