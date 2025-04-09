import {StatusBar} from 'react-native';

type ThemeColors = {
  text: string;
  subText: string;
  background: string; //
  whiteBackground: string; //
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
  orangepeel: string; //
  tealGreen: string; //
  borderColor: string; //
};

type ThemeSpacing = {
  paddingTop: number | undefined;
  screenPaddingVertical: number;
  screenPaddingHorizontal: number;
  textBoxHeight: number;
  buttonHeight: number;
};

type AppThemeType = {
  color: ThemeColors;
  spacing: ThemeSpacing;
};

const Apptheme: AppThemeType = {
  color: {
    text: '#555555',
    subText: '#787878',
    background: '#f5f5f3',
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
    orangepeel: '#f39104',
    tealGreen: '#21695D',
    borderColor: '#f0f0f0',
  },
  spacing: {
    paddingTop: StatusBar.currentHeight,
    screenPaddingVertical: 10,
    screenPaddingHorizontal: 14,
    textBoxHeight: 50,
    buttonHeight: 44,
  },
};

export default Apptheme;
