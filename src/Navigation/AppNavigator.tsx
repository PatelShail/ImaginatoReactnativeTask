import React, {createRef} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AuthNavigator from '../Navigation/AuthNavigator';
import MainNavigator from './MainNavigator';
import {NavigationContainerRef} from '@react-navigation/native';

export const navigationRef = createRef<NavigationContainerRef>();

export const navigateToMain = () => {
  if (!navigationRef.current) {
    return;
  }
  navigationRef.current.reset({
    index: 0,
    routes: [{name: 'Main'}],
  });
};

const AppNavigator = (props: any) => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator {...props} headerMode="none">
      <Stack.Screen name={'Auth'} component={AuthNavigator} />
      <Stack.Screen name={'Main'} component={MainNavigator} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
