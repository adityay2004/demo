import {
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import Apptheme from '../theme/apptheme';
import {FontFamily} from '../theme/font';

interface CommonButtonProps {
  buttonText?: string;
  onPress: () => void;
  buttonStyle: any;
  secondary?: boolean;
  right?: any;
  left?: any;
  isLoading?: boolean;
}

const CommonButton: React.FC<CommonButtonProps> = ({
  buttonText,
  onPress,
  buttonStyle,
  secondary,
  right,
  left,
  isLoading,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={isLoading ? 1 : 0}
      onPress={() => !isLoading && onPress()}
      style={[
        styles.loginButton,
        secondary && styles.loginSecondaryButton,
        buttonStyle,
      ]}>
      {isLoading ? (
        <>
          {secondary ? (
            <ActivityIndicator size="large" color={Apptheme.color.tealGreen} />
          ) : (
            <ActivityIndicator size="large" color={Apptheme.color.whiteText} />
          )}
        </>
      ) : (
        <>
          {left}
          <Text
            style={[
              styles.loginButtonText,
              secondary && styles.loginSecondaryButtonText,
              ,
              {
                paddingLeft: left ? 8 : 0,
                paddingRight: right ? 6 : 0,
              },
            ]}>
            {buttonText}
          </Text>
          {right}
        </>
      )}
    </TouchableOpacity>
  );
};

export default CommonButton;

const styles = StyleSheet.create({
  loginButton: {
    height: Apptheme.spacing.buttonHeight,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginTop: 10,
    alignSelf: 'center',
    marginBottom: 16,
    backgroundColor: Apptheme.color.steelTeal,
    flexDirection: 'row',
  },
  loginSecondaryButton: {
    height: Apptheme.spacing.buttonHeight,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginTop: 10,
    alignSelf: 'center',
    marginBottom: 16,
    borderWidth: 2,
    borderColor: Apptheme.color.steelTeal,
    backgroundColor: Apptheme.color.whiteBackground,
  },
  loginButtonText: {
    fontFamily: FontFamily.INTER500,
    fontSize: 14,
    color: Apptheme.color.whiteText,
  },
  loginSecondaryButtonText: {
    fontFamily: FontFamily.INTER500,
    fontSize: 14,
    color: Apptheme.color.tealGreen,
  },
});
