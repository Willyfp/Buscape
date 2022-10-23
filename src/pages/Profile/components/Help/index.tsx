import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Linking, TouchableOpacity } from 'react-native';
import { Appbar, Avatar, Divider, List, Text } from 'react-native-paper';
import { useTheme } from 'styled-components';
import { themeStyledComponents } from '../../../../../App';
import { ViewRowBetween } from '../../../../styles';

const Help = () => {
  const { colors } = useTheme();
  const { navigate } = useNavigation();

  return (
    <>
      <Appbar.Header
        mode="center-aligned"
        style={{ backgroundColor: 'transparent' }}
      >
        <Appbar.BackAction
          onPress={() => navigate('Perfil')}
          iconColor={colors.text.primary}
        />
        <Appbar.Content
          title="Ajuda"
          titleStyle={{ color: colors.text.primary }}
        />
      </Appbar.Header>

      <List.Section>
        <List.Subheader
          style={{
            color: themeStyledComponents.colors.text.primary,
            fontWeight: 'bold',
            fontSize: 18,
            marginTop: 15,
          }}
        >
          Contato
        </List.Subheader>
        <List.Item
          onPress={() =>
            Linking.openURL(
              `whatsapp://send?text=${'Olá, preciso de atendimento!'}&phone=+5545984211768`,
            )
          }
          titleStyle={{
            color: themeStyledComponents.colors.text.primary,
          }}
          title="Whatsapp"
          description="(45) 98421-1768"
          left={() => (
            <List.Icon
              icon="whatsapp"
              color={themeStyledComponents.colors.text.primary}
            />
          )}
        />
        <List.Item
          onPress={() => Linking.openURL('mailto:willypereira41@gmail.com')}
          titleStyle={{
            color: themeStyledComponents.colors.text.primary,
          }}
          title="E-mail"
          description="willypereira41@gmail.com"
          left={() => (
            <List.Icon
              icon="at"
              color={themeStyledComponents.colors.text.primary}
            />
          )}
        />
      </List.Section>

      <Divider />

      <ViewRowBetween style={{ padding: 24, justifyContent: 'space-around' }}>
        <TouchableOpacity
          onPress={() =>
            Linking.openURL('https://www.facebook.com/willy.pereira.94')
          }
        >
          <Avatar.Icon style={{ backgroundColor: 'blue' }} icon="facebook" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            Linking.openURL('https://www.instagram.com/willyfp41/')
          }
        >
          <Avatar.Icon style={{ backgroundColor: 'brown' }} icon="instagram" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            Linking.openURL(
              'https://www.youtube.com/channel/UCbsPdUqeh5sZrvj3hxIwnfA',
            )
          }
        >
          <Avatar.Icon style={{ backgroundColor: 'red' }} icon="youtube" />
        </TouchableOpacity>
      </ViewRowBetween>
    </>
  );
};

export default Help;
