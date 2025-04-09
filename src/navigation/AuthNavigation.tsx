import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RouteName from './RouteName';
import Login from '../screens/Auth/Login';
import AppNavigator from './AppNavigator';
import {MainStackParamList} from './types/navigationType';
import Index from '../screens/Auth/Index';
import RegisterScreen from '../screens/Auth/RegisterScreen';
import Otp_Varification from '../screens/Auth/Otp_Varification';
import AboutDetails from '../screens/Auth/AboutDetails';

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
      <Stack.Screen name={RouteName.INDEX_SCREEN} component={Index} />
      <Stack.Screen
        name={RouteName.REGISTER_SCREEN}
        component={RegisterScreen}
      />
      <Stack.Screen
        name={RouteName.OTP_VERIFICATION_SCREEN}
        component={Otp_Varification}
      />
      <Stack.Screen
        name={RouteName.USERDETAILS_FILL_SCREEN}
        component={AboutDetails}
      />

      <Stack.Screen name={RouteName.APP_NAVIGATION} component={AppNavigator} />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
