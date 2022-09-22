import { TextInputProps } from 'react-native-paper';

export type FieldValuesLogin = {
  email: string;
  password: string;
};

export type FieldValuesRegister = {
  name: string;
  surname: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export type ControllerProps = Partial<TextInputProps> & {
  name: string;
};
