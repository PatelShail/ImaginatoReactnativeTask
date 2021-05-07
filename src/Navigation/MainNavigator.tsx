import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {MainStackParamList} from './MainStackParams';
import MainBottomNavigator from './MainBottomNavigator';
import Details from '../Containers/Main/Details/Details';

const MainNavigator = (props: {props: any}) => {
  const Stack = createStackNavigator<MainStackParamList>();
  return (
    <Stack.Navigator {...props}>
      <Stack.Screen
        name="MainBottomNavigator"
        component={MainBottomNavigator}
      />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
