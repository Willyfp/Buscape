import React, { useState } from 'react';
import { TextInput } from 'react-native-paper';
import { ControllerProps } from '../types/FieldValues';

const useRegisterFields = (): ControllerProps[] => {
  const [viewPassword, setViewPassword] = useState(false);
  const [viewConfirmPassword, setViewConfirmPassword] = useState(false);

  const inputs: ControllerProps[] = [
    {
      name: 'name',
      label: 'Nome completo',
      placeholder: 'Digite seu nome...',
    },
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
    {
      name: 'confirmPassword',
      label: 'Confirmar senha',
      placeholder: 'Repita sua senha...',
      secureTextEntry: !viewConfirmPassword,
      right: (
        <TextInput.Icon
          icon={viewConfirmPassword ? 'eye-off' : 'eye'}
          onPress={() => setViewConfirmPassword(!viewConfirmPassword)}
        />
      ),
    },
  ];

  return inputs;
};

export default useRegisterFields;
