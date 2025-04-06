import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RouteName from './RouteName';

const AppNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
        animationTypeForReplace: 'push',
      }}
      initialRouteName={RouteName.DASHBOARD_SCREEN}>
      {/* <Stack.Screen name={RouteName.MY_REPORTS_DETAILS_SCREEN} component={ReportsDetails} /> */}
    </Stack.Navigator>
  );
};

export default AppNavigator;
