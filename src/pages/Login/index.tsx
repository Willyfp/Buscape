import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Appbar, TextInput } from 'react-native-paper';
import { themeStyledComponents } from '../../../App';
import { StyledButton, StyledTextInput, ViewAlignedCenter } from '../../styles';
import { images } from '../../utils/constants';
import { ContainerLogin, ImageLogin } from './styles';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaValidation } from './schemaValidation';
import { LoginCreators } from '../../store/reducers/auth';
import { connect, ConnectedProps } from 'react-redux';
import { FieldValuesLogin } from '../../types/FieldValues';

const mapDispatchToProps = {
  loginRequest: LoginCreators.loginRequest,
};

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

const Login = ({ loginRequest }: PropsFromRedux) => {
  const { goBack } = useNavigation();

  const [viewPassword, setViewPassword] = useState(false);

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: yupResolver(schemaValidation) });

  const onSubmit = (data: FieldValuesLogin) => loginRequest(data);

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
          title="Login"
          titleStyle={{ color: themeStyledComponents.colors.secondary }}
        />
      </Appbar.Header>

      <ContainerLogin>
        <ViewAlignedCenter>
          <Controller
            name="email"
            control={control}
            render={({ field: { onChange, value } }) => (
              <StyledTextInput
                label="Email"
                mode="flat"
                error={!!errors.email}
                placeholder="Digite seu email..."
                placeholderTextColor="secondary"
                onChangeText={onChange}
                value={value}
              />
            )}
          />

          <Controller
            name="password"
            control={control}
            render={({ field: { onChange, value } }) => (
              <StyledTextInput
                label="Senha"
                mode="flat"
                placeholder="Digite sua senha..."
                secureTextEntry={!viewPassword}
                error={!!errors.password}
                right={
                  <TextInput.Icon
                    icon={viewPassword ? 'eye-off' : 'eye'}
                    onPress={() => setViewPassword(!viewPassword)}
                  />
                }
                onChangeText={onChange}
                value={value}
              />
            )}
          />

          <StyledButton
            mode="contained-tonal"
            buttonColor="white"
            style={{ width: '100%', marginTop: 25 }}
            onPress={handleSubmit(onSubmit)}
          >
            Entrar
          </StyledButton>
        </ViewAlignedCenter>

        <ImageLogin source={{ uri: images.login }} />
      </ContainerLogin>
    </>
  );
};

export default connector(Login);
