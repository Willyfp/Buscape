import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Appbar } from 'react-native-paper';
import { useTheme } from 'styled-components';

const Favorites = () => {
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
          title="Apartamentos favoritos"
          titleStyle={{ color: colors.text.primary }}
        />
      </Appbar.Header>
    </>
  );
};

export default Favorites;
