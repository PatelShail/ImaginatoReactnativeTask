import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../Containers/Auth/Login/Login';
import {AuthStackParamList} from './AuthStackParams';

const AuthNavigator = ({props}: {props: any}) => {
  const Stack = createStackNavigator<AuthStackParamList>();

  return (
    <Stack.Navigator {...props} headerMode="none">
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
