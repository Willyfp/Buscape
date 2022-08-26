import { Action } from 'redux';
import { put, takeLatest } from 'redux-saga/effects';
import { Alert } from 'react-native';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { FieldValuesRegister } from '../../../types/FieldValues';
import { RegisterCreators, RegisterTypes } from '../../reducers/auth';

type RegisterActionType = Action & {
  data: FieldValuesRegister;
};

function* registerRequest({ data }: RegisterActionType) {
  try {
    const user: FirebaseAuthTypes.User =
      yield auth().createUserWithEmailAndPassword(data.email, data.password);

    firestore().collection('users').doc(user.uid).set({
      name: data.name,
    });

    const formattedUser = {
      id: user.uid,
      ...data,
    };

    yield put(RegisterCreators.registerSuccess(formattedUser));
  } catch (error) {
    if ((error as any).code === 'auth/email-already-in-use') {
      Alert.alert('Esse email já foi utilizado!');
    }

    if ((error as any).code === 'auth/invalid-email') {
      console.log('Email inválido!');
    }
    yield put(RegisterCreators.registerFailed());
  }
}

export default function* watch() {
  yield takeLatest(RegisterTypes.REGISTER_REQUEST, registerRequest);
}
