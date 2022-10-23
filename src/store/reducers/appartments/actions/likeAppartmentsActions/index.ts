import { createActions } from 'reduxsauce';
import {
  likeAppartmentFailed,
  likeAppartmentRequest,
  likeAppartmentSuccess,
} from './handlers';
import { LikeAppartmentCreators, LikeAppartmentActionTypes } from './types';

export const { Types, Creators } = createActions<
  LikeAppartmentActionTypes,
  LikeAppartmentCreators
>({
  likeAppartmentRequest: ['appartmentID'],
  likeAppartmentSuccess: null,
  likeAppartmentFailed: null,
});

export const likeAppartmentActions = {
  [Types.LIKE_APPARTMENT_REQUEST]: likeAppartmentRequest,
  [Types.LIKE_APPARTMENT_SUCCESS]: likeAppartmentSuccess,
  [Types.LIKE_APPARTMENT_FAILED]: likeAppartmentFailed,
};
