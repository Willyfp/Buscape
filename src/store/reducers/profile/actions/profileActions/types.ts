import { AnyAction } from 'redux';
import { User } from '../../../auth/types';

export type ProfileActionTypes = {
  EDIT_PROFILE_REQUEST: string;
  EDIT_PROFILE_SUCCESS: string;
  EDIT_PROFILE_FAILED: string;
};

export type ProfileActionsCreatorsType = {
  editProfileRequest: (data: User) => AnyAction;
  editProfileSuccess: () => AnyAction;
  editProfileFailed: () => AnyAction;
};
