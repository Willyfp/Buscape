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
import useLoginFields from '../../hooks/useLoginFields';
import { RootState } from '../../store/reducers';

const mapStateToProps = ({ auth }: RootState) => ({
  status: auth.getIn(['status']),
});

const mapDispatchToProps = {
  loginRequest: LoginCreators.loginRequest,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

const Login = ({ loginRequest, status }: PropsFromRedux) => {
  const { goBack } = useNavigation();

  const loginFields = useLoginFields();

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
          {loginFields.map(input => (
            <Controller
              key={input.name}
              name={input.name}
              control={control}
              render={({ field: { onChange, value } }) => (
                <StyledTextInput
                  mode="flat"
                  error={!!errors[input.name]}
                  placeholderTextColor="secondary"
                  onChangeText={onChange}
                  value={value}
                  {...input}
                />
              )}
            />
          ))}

          <StyledButton
            loading={status === 'loading'}
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
