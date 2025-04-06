import {StatusBar} from 'react-native';

type ThemeColors = {
  text: string;
  subText: string;
  background: string;
  whiteBackground: string;
  black: string;
  blue: string;
  whiteText: string;
  grayDark: string;
  green: string;
  brightOrange: string;
  cursorColor: string;
  textLight: string;
  danger: string;
  secondaryBackground: string;
  steelTeal: string; //
  redBackground: string;
  blueGray: string;
  paleSkyBlue: string;
  tealBlue: string;
  darkBlue: string;
  oceanBlue: string;
};

type ThemeSpacing = {
  paddingTop: number | undefined;
  screenPaddingVertical: number;
  screenPaddingHorizontal: number;
  KeyboardHeight: number;
};

type AppThemeType = {
  color: ThemeColors;
  spacing: ThemeSpacing;
};

const Apptheme: AppThemeType = {
  color: {
    text: '#555555',
    subText: '#787878',
    background: '#fff',
    whiteBackground: '#ffffff',
    black: '#000',
    blue: '#0C1C5C',
    whiteText: '#ffffff',
    grayDark: '#ddd',
    green: '#458071',
    brightOrange: '#FF9818',
    cursorColor: '#878A9A',
    textLight: '#878A9A',
    danger: '#F05F4A',
    secondaryBackground: '#f0f0f0',
    steelTeal: '#00778b',
    redBackground: '#fcecec',
    blueGray: '#edf1f7',
    paleSkyBlue: '#dfe8f5',
    tealBlue: '#0097a8',
    darkBlue: '#1a4f8b',
    oceanBlue: '#4FB0C9',
  },
  spacing: {
    paddingTop: StatusBar.currentHeight,
    screenPaddingVertical: 10,
    screenPaddingHorizontal: 14,
    KeyboardHeight: 40,
  },
};

export default Apptheme;
