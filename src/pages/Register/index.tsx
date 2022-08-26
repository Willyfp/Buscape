import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Appbar, IconButton, TextInput } from 'react-native-paper';
import { themeStyledComponents } from '../../../App';
import { StyledButton, StyledTextInput, ViewAlignedCenter } from '../../styles';
import { ContainerRegister } from './styles';

const Register = () => {
  const { goBack } = useNavigation();

  const [viewPassword, setViewPassword] = useState(false);

  return (
    <>
      <Appbar.Header
        mode="center-aligned"
        style={{ backgroundColor: themeStyledComponents.colors.primary }}
      >
        <Appbar.BackAction
          onPress={goBack}
          iconColor={themeStyledComponents.colors.secondary}
        />
        <Appbar.Content
          title="Registro"
          titleStyle={{ color: themeStyledComponents.colors.secondary }}
        />
      </Appbar.Header>

      <ContainerRegister>
        <StyledTextInput
          label="Nome"
          mode="flat"
          placeholder="Digite seu nome..."
          placeholderTextColor="secondary"
        />

        <StyledTextInput
          label="Sobrenome"
          mode="flat"
          placeholder="Digite seu nome..."
          placeholderTextColor="secondary"
        />

        <StyledTextInput
          label="Email"
          mode="flat"
          placeholder="Digite seu email..."
          placeholderTextColor="secondary"
        />

        <StyledTextInput
          label="Senha"
          mode="flat"
          placeholder="Digite sua senha..."
          secureTextEntry={!viewPassword}
          right={
            <TextInput.Icon
              icon={viewPassword ? 'eye-off' : 'eye'}
              onPress={() => setViewPassword(!viewPassword)}
            />
          }
        />

        <StyledTextInput
          label="Confirmar senha"
          mode="flat"
          placeholder="Repita sua senha..."
          secureTextEntry={!viewPassword}
          right={
            <TextInput.Icon
              icon={viewPassword ? 'eye-off' : 'eye'}
              onPress={() => setViewPassword(!viewPassword)}
            />
          }
        />

        <StyledButton
          mode="contained-tonal"
          buttonColor="white"
          style={{ marginTop: 25 }}
        >
          Registrar
        </StyledButton>
      </ContainerRegister>
    </>
  );
};

export default Register;
