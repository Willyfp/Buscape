import { TouchableOpacity } from 'react-native';
import { Avatar, Divider, List, Text } from 'react-native-paper';
import { ViewRowBetween } from '../../styles';
import { ItemProfile, ProfileView } from './styles';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import React from 'react';
import { themeStyledComponents } from '../../../App';

const Profile = () => {
  return (
    <ProfileView>
      <ViewRowBetween>
        <Avatar.Image
          size={75}
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLlNtB_qxrpCO_bpZLAH_KsYSNb_woC_FhlU1A46Q&s',
          }}
        />

        <TouchableOpacity>
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
        Olá, Willy Francisco Pereira!
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
          Configurações da conta
        </List.Subheader>
        <List.Item
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
          titleStyle={{
            color: themeStyledComponents.colors.text.primary,
          }}
          title="Notificações"
          left={() => (
            <List.Icon
              icon="bell"
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
          Hospedagem
        </List.Subheader>
        <List.Item
          titleStyle={{
            color: themeStyledComponents.colors.text.primary,
          }}
          title="Sou locador"
          left={() => (
            <List.Icon
              icon="home-account"
              color={themeStyledComponents.colors.text.primary}
            />
          )}
        />
        <List.Item
          titleStyle={{
            color: themeStyledComponents.colors.text.primary,
          }}
          title="Sou locatário"
          left={() => (
            <List.Icon
              icon="key-chain-variant"
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

export default Profile;
