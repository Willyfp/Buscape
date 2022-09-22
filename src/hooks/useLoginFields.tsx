import React, { useState } from 'react';
import { TextInput } from 'react-native-paper';
import { ControllerProps } from '../types/FieldValues';

const useLoginFields = (): ControllerProps[] => {
  const [viewPassword, setViewPassword] = useState(false);

  const inputs: ControllerProps[] = [
    {
      name: 'email',
      label: 'Email',
      placeholder: 'Digite seu email...',
      keyboardType: 'email-address',
    },
    {
      name: 'password',
      label: 'Senha',
      placeholder: 'Digite sua senha...',
      secureTextEntry: !viewPassword,
      right: (
        <TextInput.Icon
          icon={viewPassword ? 'eye-off' : 'eye'}
          onPress={() => setViewPassword(!viewPassword)}
        />
      ),
    },
  ];

  return inputs;
};

export default useLoginFields;
