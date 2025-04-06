import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RouteName from './RouteName';
import Login from '../screens/Auth/Login';
import AppNavigator from './AppNavigator';
import {MainStackParamList} from './types/navigationType';

const Stack = createNativeStackNavigator<MainStackParamList>();

const AuthNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
        animationTypeForReplace: 'push',
      }}
      initialRouteName={RouteName.INDEX_SCREEN}>
      <Stack.Screen name={RouteName.INDEX_SCREEN} component={Login} />
      <Stack.Screen name={RouteName.APP_NAVIGATION} component={AppNavigator} />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
