import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Apptheme from '../../assets/theme/apptheme';
import {FontFamily} from '../../assets/theme/font';
import CommonButton from '../../assets/component/CommonButton';
import LinearGradient from 'react-native-linear-gradient';
import Fontisto from 'react-native-vector-icons/Fontisto';
import SmoothPinCodeInput from '../../assets/component/SmoothPinCodeInput';
import RouteName from '../../navigation/RouteName';
import {useNavigation} from '@react-navigation/native';
import {AppNavigationProp} from '../../navigation/types/navigationType';

const Otp_Varification: React.FC = () => {
  const [code, setCode] = useState('');
  const navigation = useNavigation<AppNavigationProp>();

  const otpCount: number = 10;

  const [otpCountdown, setOtpCountdown] = useState<number>(otpCount);
  const [resendEnabled, setResendEnabled] = useState<boolean>(false);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(true);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isTimerRunning) {
      timer = setInterval(() => {
        setOtpCountdown(prev => {
          if (prev <= 1) {
            clearInterval(timer);
            setResendEnabled(true);
            setIsTimerRunning(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isTimerRunning]);

  const resendOTP = (): void => {
    setOtpCountdown(otpCount);
    setResendEnabled(false);
    setIsTimerRunning(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <Text style={styles.headerRight}>Already a User?</Text>

        <Text style={styles.headerText}>Health App</Text>
      </View>
      <View style={styles.bodyView}>
        <ScrollView style={{flex: 1}} contentContainerStyle={{flexGrow: 1}}>
          <Text
            style={[
              styles.headerText,
              {
                color: Apptheme.color.text,
                fontSize: 13.5,
                marginBottom: 3,
                fontFamily: FontFamily.INTER500,
              },
            ]}>
            Enter the OTP received on
          </Text>
          <Text
            style={[
              styles.headerText,
              {color: Apptheme.color.text, fontSize: 16.5},
            ]}>
            +91 1234567890
          </Text>
          <View style={{alignItems: 'center', marginTop: 20}}>
            <SmoothPinCodeInput
              value={code}
              onTextChange={setCode}
              cellStyle={styles.cell}
              cellStyleFocused={styles.cellFocused}
              codeLength={4}
              textStyle={styles.pinStyle}
              cellSpacing={10}
              keyboardType="number-pad"
              placeholder={<View style={styles.placeholder}></View>}
            />

            <View style={styles.otpView}>
              {resendEnabled ? (
                <TouchableOpacity onPress={() => resendOTP()}>
                  <Text style={styles.resendText}>Resend OTP</Text>
                </TouchableOpacity>
              ) : (
                <Text
                  style={
                    styles.otpCountText
                  }>{`Resend OTP in ${otpCountdown} sec.`}</Text>
              )}
            </View>
          </View>

          <View style={styles.buttonView}>
            <CommonButton
              buttonText="Verify"
              onPress={() => {
                navigation.navigate(RouteName.USERDETAILS_FILL_SCREEN);
              }}
              buttonStyle={{
                width: '100%',
              }}
            />
          </View>

          <View style={styles.orView}>
            <LinearGradient
              start={{x: 1, y: 0.5}}
              end={{x: 0, y: 0.5}}
              colors={['#f6f6f6', '#9f9f9f']}
              style={styles.line}
            />
            <Text style={styles.orText}>or continue with</Text>
            <LinearGradient
              start={{x: 0, y: 0.5}}
              end={{x: 1, y: 0.5}}
              colors={['#f6f6f6', '#9f9f9f']}
              style={styles.line}
            />
          </View>

          <TouchableOpacity style={styles.emailButton}>
            <>
              <Fontisto name="email" size={16} color={Apptheme.color.text} />
              <Text style={styles.emailText}>Email</Text>
            </>
          </TouchableOpacity>
          <View style={styles.socialContainer}>
            <View style={styles.icon}>
              <FontAwesome name="apple" size={24} />
            </View>

            <View style={styles.icon}>
              <FontAwesome name="google" size={24} />
            </View>

            <View style={styles.icon}>
              <Ionicons name="logo-facebook" size={24} color={'#1577ef'} />
            </View>
          </View>
        </ScrollView>

        <Text style={styles.footer}>
          By signing up, I agree to the{' '}
          <Text style={styles.link}>Terms of Service</Text> and{' '}
          <Text style={styles.link}>Privacy Policy</Text>, including usage of
          Cookies
        </Text>
      </View>
    </View>
  );
};

export default Otp_Varification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Apptheme.color.tealGreen,
    paddingTop: Apptheme.spacing.paddingTop,
  },
  bodyView: {
    backgroundColor: Apptheme.color.background,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: 26,
    paddingHorizontal: Apptheme.spacing.screenPaddingHorizontal,
    flex: 1,
  },
  headerView: {
    paddingHorizontal: Apptheme.spacing.screenPaddingHorizontal,
    paddingVertical: 24,
  },
  headerText: {
    marginBottom: 20,
    fontFamily: FontFamily.INTER600,
    fontSize: 18.5,
    color: Apptheme.color.whiteText,
    textAlign: 'center',
  },
  headerRight: {
    marginBottom: 20,
    fontFamily: FontFamily.INTER500,
    fontSize: 11.5,
    color: Apptheme.color.whiteText,
    textAlign: 'right',
  },
  buttonView: {
    paddingTop: 0,
  },
  orView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 24,
  },
  orText: {
    marginHorizontal: 6,
    fontSize: 13.5,
    fontFamily: FontFamily.INTER500,
    color: Apptheme.color.subText,
  },
  line: {
    flex: 1,
    height: 1,
    marginHorizontal: 5,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
    gap: 20,
  },
  icon: {
    padding: 10,
    backgroundColor: Apptheme.color.whiteBackground,
    borderRadius: 6,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emailButton: {
    alignItems: 'center',
    paddingVertical: 12,
    backgroundColor: Apptheme.color.whiteBackground,
    borderRadius: 6,
    marginTop: 22,
    marginBottom: 14,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  emailText: {
    fontSize: 13.5,
    fontFamily: FontFamily.INTER500,
    color: Apptheme.color.text,
    marginLeft: 14,
  },
  footer: {
    textAlign: 'center',
    marginTop: 30,
    paddingHorizontal: 10,
    lineHeight: 18,
    fontSize: 11.5,
    fontFamily: FontFamily.INTER400,
    color: Apptheme.color.subText,
    paddingBlock: 16,
  },
  link: {
    textDecorationLine: 'underline',
  },
  otpCountText: {
    fontFamily: FontFamily.INTER400,
    fontSize: 12,
    color: Apptheme.color.subText,
  },
  resendText: {
    fontFamily: FontFamily.INTER600,
    fontSize: 12,
    color: Apptheme.color.tealGreen,
  },
  cell: {
    borderWidth: 2.5,
    borderColor: Apptheme.color.borderColor,
    borderRadius: 8,
    width: 60,
    height: 60,
    alignItems: 'center',
    paddingLeft: 2,
    backgroundColor: Apptheme.color.whiteBackground,
  },
  cellFocused: {
    borderColor: Apptheme.color.tealGreen,
  },
  placeholder: {
    height: 2,
    width: 6,
    backgroundColor: '#ccc',
    alignSelf: 'center',
  },
  pinStyle: {
    fontFamily: FontFamily.INTER500,
    fontSize: 20.5,
    color: Apptheme.color.subText,
  },
  otpView: {
    marginBottom: 30,
    marginLeft: 8,
    marginTop: 28,
  },
});
