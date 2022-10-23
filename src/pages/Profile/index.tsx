import { TouchableOpacity } from 'react-native';
import { Avatar, Divider, List, Text } from 'react-native-paper';
import { ViewRowBetween } from '../../styles';
import { ProfileView } from './styles';
import React from 'react';
import { themeStyledComponents } from '../../../App';
import { RootState } from '../../store/reducers';
import { connect, ConnectedProps } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { LoginCreators } from '../../store/reducers/auth';

const mapStateToProps = ({ auth }: RootState) => ({
  user: auth.getIn(['user']),
});

const mapDispatchToProps = {
  logout: LoginCreators.logout,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

const Profile = ({ user, logout }: PropsFromRedux) => {
  const { navigate } = useNavigation();

  return (
    <ProfileView>
      <ViewRowBetween>
        <Avatar.Image
          size={75}
          source={{
            uri:
              user.photo ||
              'https://th.bing.com/th/id/OIP.o7G8MHM0THDO9Npw9_69cAAAAA?pid=ImgDet&rs=1',
          }}
        />

        <TouchableOpacity onPress={logout}>
          <Text
            variant="titleLarge"
            style={{ color: themeStyledComponents.colors.error }}
          >
            Sair
          </Text>
        </TouchableOpacity>
      </ViewRowBetween>
      <Text
        style={{
          color: themeStyledComponents.colors.text.primary,
          marginTop: 20,
        }}
        variant="displaySmall"
      >
        Olá, {user.name}!
      </Text>

      <List.Section>
        <List.Subheader
          style={{
            color: themeStyledComponents.colors.text.primary,
            fontWeight: 'bold',
            fontSize: 18,
            marginTop: 15,
          }}
        >
          Minha conta
        </List.Subheader>
        <List.Item
          onPress={() => navigate('PersonalInfoScreen')}
          titleStyle={{
            color: themeStyledComponents.colors.text.primary,
          }}
          title="Informações pessoais"
          left={() => (
            <List.Icon
              icon="badge-account-horizontal"
              color={themeStyledComponents.colors.text.primary}
            />
          )}
        />
        <List.Item
          onPress={() => navigate('FavoritesScreen')}
          titleStyle={{
            color: themeStyledComponents.colors.text.primary,
          }}
          title="Favoritos"
          left={() => (
            <List.Icon
              icon="heart"
              color={themeStyledComponents.colors.text.primary}
            />
          )}
        />
      </List.Section>

      <Divider />

      <List.Section>
        <List.Subheader
          style={{
            color: themeStyledComponents.colors.text.primary,
            fontWeight: 'bold',
            fontSize: 18,
            marginTop: 15,
          }}
        >
          Atendimento
        </List.Subheader>
        <List.Item
          onPress={() => navigate('HelpScreen')}
          titleStyle={{
            color: themeStyledComponents.colors.text.primary,
          }}
          title="Ajuda"
          left={() => (
            <List.Icon
              icon="headset"
              color={themeStyledComponents.colors.text.primary}
            />
          )}
        />
        <List.Item
          onPress={() => navigate('AboutScreen')}
          titleStyle={{
            color: themeStyledComponents.colors.text.primary,
          }}
          title="Sobre nós"
          left={() => (
            <List.Icon
              icon="account-group"
              color={themeStyledComponents.colors.text.primary}
            />
          )}
        />
      </List.Section>
    </ProfileView>
  );
};

export default connector(Profile);
