import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  RegisterScreen: undefined;
  LoginScreen: undefined;
  HomeScreen: undefined;
  MapScreen: undefined;
  Perfil: undefined;
  PersonalInfoScreen: undefined;
  FavoritesScreen: undefined;
  HelpScreen: undefined;
  AboutScreen: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
