import React from 'react';
import { Appbar, Avatar, Divider, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { ViewRowBetween } from '../../../../styles';
import { View } from 'react-native-ui-lib';

const AboutUs = () => {
  const { navigate } = useNavigation();

  return (
    <>
      <Appbar.Header
        mode="center-aligned"
        style={{ backgroundColor: 'transparent' }}
      >
        <Appbar.BackAction onPress={() => navigate('Perfil')} />
        <Appbar.Content title="Sobre nós" />
      </Appbar.Header>

      <ViewRowBetween style={{ padding: 16 }}>
        <View style={{ alignItems: 'center' }}>
          <Avatar.Image
            source={{
              uri: 'https://avatars.githubusercontent.com/u/65930566?v=4',
            }}
            size={75}
          />
          <Text style={{ fontWeight: 'bold' }}>Cristian F. Cavalheiro</Text>
          <Text>QA</Text>
        </View>

        <View style={{ alignItems: 'center' }}>
          <Avatar.Image
            source={{
              uri: 'https://avatars.githubusercontent.com/u/54161727?v=4',
            }}
            size={75}
          />
          <Text style={{ fontWeight: 'bold' }}>Willy F. Pereira</Text>
          <Text>Dev</Text>
        </View>

        <View style={{ alignItems: 'center' }}>
          <Avatar.Image
            source={{
              uri: 'https://avatars.githubusercontent.com/u/84148474?v=4',
            }}
            size={75}
          />
          <Text style={{ fontWeight: 'bold' }}>Pedro A. da Costa</Text>
          <Text>Dev</Text>
        </View>
      </ViewRowBetween>

      <Divider />
    </>
  );
};

export default AboutUs;
