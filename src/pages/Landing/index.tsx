import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
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
      <StyledButton
        mode="contained-tonal"
        buttonColor="white"
        onPress={() => navigate('RegisterScreen')}
      >
        Inscreva-se grátis
      </StyledButton>

      <StyledButton icon="google" mode="outlined" textColor="white">
        Continuar com Google
      </StyledButton>

      <StyledButton icon="facebook" mode="outlined" textColor="white">
        Continuar com Facebook
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
