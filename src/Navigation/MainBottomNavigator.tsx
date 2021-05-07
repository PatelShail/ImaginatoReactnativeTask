import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../Containers/Main/Home/Home';
import Favorite from '../Containers/Main/Favorite/Favorite';
import {Image} from 'react-native';
import Images from '../Theme/Images';
import {normalize} from '../Utils/Utility';

const MainBottomNavigator = (props: {props: any}) => {
  const iconStyle = {width: normalize(28), height: normalize(28)};
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      {...props}
      tabBarOptions={{
        showLabel: true,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <Image source={Images.HomeSelected} style={iconStyle} />
            ) : (
              <Image source={Images.Home} style={iconStyle} />
            ),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={Favorite}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <Image source={Images.FavoriteSelected} style={iconStyle} />
            ) : (
              <Image source={Images.Favorite} style={iconStyle} />
            ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainBottomNavigator;
