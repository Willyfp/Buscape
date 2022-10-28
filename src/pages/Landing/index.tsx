import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Text } from 'react-native-paper';
import { connect, ConnectedProps } from 'react-redux';
import { LoginCreators } from '../../store/reducers/auth';
import { GetLocationCreators } from '../../store/reducers/location';
import { StyledButton } from '../../styles';
import { images } from '../../utils/constants';
import { ContainerLanding, ImageLanding, Logo } from './styles';

const mapDispatchToProps = {
  loadUser: LoginCreators.loadUser,
  getLocation: GetLocationCreators.getCurrentLocationRequest,
};

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

const Landing = ({ loadUser, getLocation }: PropsFromRedux) => {
  const { navigate } = useNavigation();

  useEffect(() => {
    loadUser();
  }, []);

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <ContainerLanding>
      <Logo source={{ uri: images.logo }} />

      <Text
        style={{
          color: 'white',
          fontSize: 42,
          fontWeight: 'bold',
          marginBottom: 70,
        }}
      >
        Buscapê
      </Text>

      <StyledButton
        mode="contained-tonal"
        buttonColor="white"
        onPress={() => navigate('RegisterScreen')}
      >
        Inscreva-se grátis
      </StyledButton>

      <StyledButton
        mode="text"
        textColor="white"
        onPress={() => navigate('LoginScreen')}
      >
        Entrar
      </StyledButton>

      <ImageLanding source={{ uri: images.landing }} />
    </ContainerLanding>
  );
};

export default connector(Landing);
