import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  RegisterScreen: undefined;
  LoginScreen: undefined;
  HomeScreen: undefined;
  MapScreen: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
