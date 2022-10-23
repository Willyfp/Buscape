import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Appbar, Chip, RadioButton, Text } from 'react-native-paper';
import { DateTimePicker, TextField } from 'react-native-ui-lib';
import { useTheme } from 'styled-components';
import { ViewAlignedCenter } from '../../../../styles';
import { ViewGender, ViewRow } from './styles';
import { StyledButton } from '../../../../styles/';
import { useForm, Controller } from 'react-hook-form';
import { RootState } from '../../../../store/reducers';
import { connect, ConnectedProps } from 'react-redux';
import { User } from '../../../../store/reducers/auth/types';
import { ProfileCreators } from '../../../../store/reducers/profile';
import { characteristics } from './utils';
import { View } from 'react-native';

const mapStateToProps = ({ auth, profile }: RootState) => ({
  user: auth.getIn(['user']),
  status: profile.getIn(['status']),
});

const mapDispatchToProps = {
  editProfile: ProfileCreators.editProfileRequest,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

const PersonalInfo = ({ user, editProfile, status }: PropsFromRedux) => {
  const { colors } = useTheme();

  const { control, watch, setValue, handleSubmit } = useForm<User>();

  const { navigate } = useNavigation();

  const onSubmit = (data: User) => {
    editProfile({ ...user, ...data });
  };

  useEffect(() => {
    if (user) {
      Object.entries(user).forEach(([key, value]) => {
        if (key === 'birthDate') {
          setValue(key, new Date(value));
        } else {
          setValue(key, value);
        }
      });
    }
  }, []);

  return (
    <>
      <Appbar.Header
        mode="center-aligned"
        style={{ backgroundColor: 'transparent' }}
      >
        <Appbar.BackAction
          onPress={() => {
            navigate('Perfil');
          }}
          iconColor={colors.text.primary}
        />
        <Appbar.Content
          title="Editar informações pessoais"
          titleStyle={{ color: colors.text.primary }}
        />
      </Appbar.Header>

      <ViewAlignedCenter style={{ padding: 24, flex: 1 }}>
        <Controller
          name="name"
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextField
              style={{ width: '100%' }}
              floatingPlaceholder
              label="Nome completo"
              placeholder="Nome completo"
              onChangeText={onChange}
              value={value}
            />
          )}
        />

        <Controller
          name="phone"
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextField
              style={{ width: '100%' }}
              floatingPlaceholder
              label="Número de telefone"
              placeholder="Telefone"
              keyboardType="phone-pad"
              onChangeText={onChange}
              value={value}
            />
          )}
        />

        <Controller
          name="cpfCnpj"
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextField
              style={{ width: '100%' }}
              floatingPlaceholder
              label="CPF/CNPJ"
              placeholder="CPF/CNPJ"
              keyboardType="phone-pad"
              onChangeText={onChange}
              value={value}
            />
          )}
        />

        <Controller
          name="birthDate"
          control={control}
          render={({ field: { onChange, value } }) => (
            <DateTimePicker
              dateFormat={'DD/MM/YYYY'}
              title={'Data de nascimento'}
              placeholder={'DD/MM/AAAA'}
              mode={'date'}
              style={{ width: '100%' }}
              onChange={onChange}
              value={value}
            />
          )}
        />

        <Controller
          name="photo"
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextField
              style={{ width: '100%' }}
              floatingPlaceholder
              placeholder="Foto do perfil"
              onChangeText={onChange}
              value={value}
            />
          )}
        />

        <ViewGender>
          <Text
            style={{
              color: colors.text.primary,
              fontSize: 20,
              fontWeight: 'bold',
            }}
          >
            Gênero
          </Text>

          <ViewRow>
            <ViewRow style={{ marginRight: 16 }}>
              <RadioButton
                value="Masculino"
                status={
                  watch('gender') === 'Masculino' ? 'checked' : 'unchecked'
                }
                onPress={() => setValue('gender', 'Masculino')}
              />
              <Text style={{ color: colors.text.primary }}>Masculino</Text>
            </ViewRow>

            <ViewRow>
              <RadioButton
                value="Feminino"
                status={
                  watch('gender') === 'Feminino' ? 'checked' : 'unchecked'
                }
                onPress={() => setValue('gender', 'Feminino')}
              />
              <Text style={{ color: colors.text.primary }}>Feminino</Text>
            </ViewRow>
          </ViewRow>
        </ViewGender>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {characteristics.map(item => (
            <Chip
              onPress={() =>
                watch('myCaracteristics')?.find(subItem => subItem === item)
                  ? setValue(
                      'myCaracteristics',
                      watch('myCaracteristics')?.filter(
                        subItem => subItem !== item,
                      ),
                    )
                  : setValue(
                      'myCaracteristics',
                      watch('myCaracteristics')?.length > 0
                        ? [...watch('myCaracteristics'), item]
                        : [item],
                    )
              }
              selected={
                !!watch('myCaracteristics')?.find(subItem => subItem === item)
              }
              style={{ margin: 2, height: 45 }}
              key={item}
            >
              {item}
            </Chip>
          ))}
        </View>
      </ViewAlignedCenter>

      <ViewAlignedCenter style={{ padding: 24 }}>
        <StyledButton
          loading={status === 'loading'}
          mode="contained-tonal"
          buttonColor={colors.primary}
          onPress={handleSubmit(onSubmit)}
        >
          Salvar
        </StyledButton>
      </ViewAlignedCenter>
    </>
  );
};

export default connector(PersonalInfo);
