import React from 'react';
import AppNavigator, {navigationRef} from '../../Navigation/AppNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {store} from '../../redux/store/store';

const Root = () => {
  return (
    <>
      <Provider store={store}>
        <SafeAreaProvider>
          <NavigationContainer ref={navigationRef}>
            <AppNavigator />
          </NavigationContainer>
        </SafeAreaProvider>
      </Provider>
    </>
  );
};

export default Root;
