import {StackNavigationProp} from '@react-navigation/stack';
import {CompositeNavigationProp, RouteProp} from '@react-navigation/native';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import { Result } from '../data/UserResponse';

export type MainStackParamList = {
  MainBottomNavigator: undefined;
  Details: {
    user : Result
  };
};

export type MainNavigationProp = StackNavigationProp<
  MainStackParamList,
  'MainBottomNavigator'
>;

export type MainRouteProp = RouteProp<
  MainStackParamList,
  'MainBottomNavigator'
>;

export type MainProps = {
  navigation: MainNavigationProp;
  route: MainRouteProp;
};

export type MainBottomNavParams = {
  Home: undefined;
  Favorite: undefined;
};

// ----------------------------------------------------------------

export type HomeTabNavigationProp = BottomTabNavigationProp<
  MainBottomNavParams,
  'Home'
>;

export type HomeRouteProp = RouteProp<MainBottomNavParams, 'Home'>;

export type HomeNavigationProp = CompositeNavigationProp<
  HomeTabNavigationProp,
  MainNavigationProp
>;

export type HomeProps = {
  navigation: HomeNavigationProp;
  route: HomeRouteProp;
};

// ----------------------------------------------------------------

export type FavoriteTabNavigationProp = BottomTabNavigationProp<
  MainBottomNavParams,
  'Favorite'
>;

export type FavoriteRouteProp = RouteProp<MainBottomNavParams, 'Favorite'>;

export type FavoriteNavigationProp = CompositeNavigationProp<
  FavoriteTabNavigationProp,
  MainNavigationProp
>;

export type FavoriteProps = {
  navigation: FavoriteNavigationProp;
  route: FavoriteRouteProp;
};

// ----------------------------------------------------------------

export type DetailsNavigationProp = StackNavigationProp<
  MainStackParamList,
  'Details'
>;

export type DetailsRouteProp = RouteProp<MainStackParamList, 'Details'>;

export type DetailsProps = {
  navigation: DetailsNavigationProp;
  route: DetailsRouteProp;
};
