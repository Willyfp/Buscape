import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Appbar, IconButton, TextInput } from 'react-native-paper';
import { connect, ConnectedProps } from 'react-redux';
import { themeStyledComponents } from '../../../App';
import useRegisterFields from '../../hooks/useRegisterFields';
import { RegisterCreators } from '../../store/reducers/auth';
import { StyledButton, StyledTextInput, ViewAlignedCenter } from '../../styles';
import { FieldValuesRegister } from '../../types/FieldValues';
import { schemaValidation } from './schemaValidation';
import { ContainerRegister } from './styles';

const mapDispatchToProps = {
  registerRequest: RegisterCreators.registerRequest,
};

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

const Register = ({ registerRequest }: PropsFromRedux) => {
  const { goBack } = useNavigation();

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: yupResolver(schemaValidation) });

  const onSubmit = (data: FieldValuesRegister) => registerRequest(data);

  const registerFields = useRegisterFields();

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
        {registerFields.map(input => (
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
          mode="contained-tonal"
          buttonColor="white"
          style={{ marginTop: 25 }}
          onPress={handleSubmit(onSubmit)}
        >
          Registrar
        </StyledButton>
      </ContainerRegister>
    </>
  );
};

export default connector(Register);
