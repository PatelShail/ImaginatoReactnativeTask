import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export type AuthStackParamList = {
  Login: undefined;
};

export type LoginNavigationProp = StackNavigationProp<
  AuthStackParamList,
  'Login'
>;

export type LoginRouteProp = RouteProp<AuthStackParamList, 'Login'>;

export type LoginProps = {
  navigation: LoginNavigationProp;
  route: LoginRouteProp;
};

