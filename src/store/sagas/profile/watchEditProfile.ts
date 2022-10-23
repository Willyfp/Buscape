import firestore, {
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';
import { put, takeLatest } from 'redux-saga/effects';
import { User } from '../../reducers/auth/types';
import { ProfileCreators, ProfileTypes } from '../../reducers/profile';
import { Action } from '@reduxjs/toolkit';
import { LoginCreators } from '../../reducers/auth';
import { Alert } from 'react-native';

type Props = Action & {
  data: User;
};

function* editProfileRequest({ data }: Props) {
  try {
    Object.keys(data).forEach(key => {
      if (data[key] === undefined) {
        data[key] = '';
      }
    });

    const doc: FirebaseFirestoreTypes.DocumentReference = yield firestore()
      .collection('users')
      .doc(data.id);

    const res = doc.update({ ...data, birthDate: String(data.birthDate) });

    yield put(ProfileCreators.editProfileSuccess());
    yield put(LoginCreators.loginSuccess(data));

    Alert.alert('Perfil atualizado com sucesso!');
  } catch (error) {
    yield put(ProfileCreators.editProfileFailed());

    Alert.alert(error.message);
  }
}

export default function* watch() {
  yield takeLatest(ProfileTypes.EDIT_PROFILE_REQUEST, editProfileRequest);
}
