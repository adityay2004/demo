import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './AppNavigator';
import { Platform, SafeAreaView, StatusBar, View } from 'react-native';
import AuthNavigation from './AuthNavigation';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const AppContainer: React.FC = () => {
  const loginUser = useSelector((state: RootState) => state.loginReducer.loginData?.phoneNumber);

  return (
    <View style={{ flex: 1 }}>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />

      <SafeAreaView style={{ flex: 1, paddingTop: Platform.OS === 'ios' ? 50 : 0 }}>
        <NavigationContainer>
          {loginUser ? <AppNavigator /> : <AuthNavigation />}
        </NavigationContainer>
      </SafeAreaView>
    </View>
  );
};

export default AppContainer;
