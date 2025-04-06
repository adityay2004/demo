import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import RouteName from '../RouteName';
import { DrawerNavigationProp } from '@react-navigation/drawer';

export type MainStackParamList = {
  [key in keyof typeof RouteName]: undefined;
};

export type AppNavigationProp = NativeStackNavigationProp<MainStackParamList>;

export type AppDrawerNavigationProp = DrawerNavigationProp<MainStackParamList>;
