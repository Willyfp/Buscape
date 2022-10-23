import { AnyAction } from 'redux';
import { User } from '../../../auth/types';

export type LikeAppartmentActionTypes = {
  LIKE_APPARTMENT_REQUEST: string;
  LIKE_APPARTMENT_SUCCESS: string;
  LIKE_APPARTMENT_FAILED: string;
};

export type LikeAppartmentCreators = {
  likeAppartmentRequest(appartmentID: string): AnyAction;
  likeAppartmentSuccess(): AnyAction;
  likeAppartmentFailed(): AnyAction;
};
